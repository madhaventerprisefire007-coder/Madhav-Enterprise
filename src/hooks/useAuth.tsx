import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  User, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signInWithPopup, 
  signOut 
} from 'firebase/auth';
import { auth, googleAuthProvider } from '../lib/firebase';
import { fetchUserProfile, createOrUpdateUserProfile } from '../lib/firestore/users';
import { FirestoreUser } from '../types';

interface AuthContextType {
  user: User | null;
  userProfile: FirestoreUser | null;
  isAdmin: boolean;
  loading: boolean;
  signInWithEmail: (email: string, pass: string) => Promise<void>;
  signUpWithEmail: (email: string, pass: string, name?: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOutUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  userProfile: null,
  isAdmin: false,
  loading: true,
  signInWithEmail: async () => {},
  signUpWithEmail: async () => {},
  signInWithGoogle: async () => {},
  signOutUser: async () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<FirestoreUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
      if (firebaseUser) {
        try {
          let profile = await fetchUserProfile(firebaseUser.uid);
          if (!profile) {
            // Default first user as admin or visitor based on email domain/settings
            profile = {
              uid: firebaseUser.uid,
              email: firebaseUser.email || '',
              name: firebaseUser.displayName || firebaseUser.email?.split('@')[0] || 'Admin',
              role: 'admin', // Future admin users
              createdAt: new Date().toISOString(),
            };
            await createOrUpdateUserProfile(profile);
          }
          setUserProfile(profile);
        } catch (err) {
          console.error('Error fetching user profile:', err);
        }
      } else {
        setUserProfile(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signInWithEmail = async (email: string, pass: string) => {
    await signInWithEmailAndPassword(auth, email, pass);
  };

  const signUpWithEmail = async (email: string, pass: string, name?: string) => {
    const res = await createUserWithEmailAndPassword(auth, email, pass);
    const profile: FirestoreUser = {
      uid: res.user.uid,
      email,
      name: name || email.split('@')[0],
      role: 'admin',
      createdAt: new Date().toISOString(),
    };
    await createOrUpdateUserProfile(profile);
    setUserProfile(profile);
  };

  const signInWithGoogle = async () => {
    const res = await signInWithPopup(auth, googleAuthProvider);
    let profile = await fetchUserProfile(res.user.uid);
    if (!profile) {
      profile = {
        uid: res.user.uid,
        email: res.user.email || '',
        name: res.user.displayName || 'Admin',
        role: 'admin',
        createdAt: new Date().toISOString(),
      };
      await createOrUpdateUserProfile(profile);
    }
    setUserProfile(profile);
  };

  const signOutUser = async () => {
    await signOut(auth);
    setUser(null);
    setUserProfile(null);
  };

  const isAdmin = !!user && userProfile?.role === 'admin';

  return (
    <AuthContext.Provider
      value={{
        user,
        userProfile,
        isAdmin,
        loading,
        signInWithEmail,
        signUpWithEmail,
        signInWithGoogle,
        signOutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
