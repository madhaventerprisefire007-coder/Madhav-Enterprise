import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import configJson from '../../firebase-applet-config.json';

const env = (import.meta as any).env || {};

// Support Next.js NEXT_PUBLIC_ / Vite import.meta.env / firebase-applet-config.json fallback
const firebaseConfig = {
  apiKey:
    (env.NEXT_PUBLIC_FIREBASE_API_KEY as string) ||
    (env.VITE_FIREBASE_API_KEY as string) ||
    configJson.apiKey,
  authDomain:
    (env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN as string) ||
    (env.VITE_FIREBASE_AUTH_DOMAIN as string) ||
    configJson.authDomain,
  projectId:
    (env.NEXT_PUBLIC_FIREBASE_PROJECT_ID as string) ||
    (env.VITE_FIREBASE_PROJECT_ID as string) ||
    configJson.projectId,
  storageBucket:
    (env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET as string) ||
    (env.VITE_FIREBASE_STORAGE_BUCKET as string) ||
    configJson.storageBucket,
  messagingSenderId:
    (env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID as string) ||
    (env.VITE_FIREBASE_MESSAGING_SENDER_ID as string) ||
    configJson.messagingSenderId,
  appId:
    (env.NEXT_PUBLIC_FIREBASE_APP_ID as string) ||
    (env.VITE_FIREBASE_APP_ID as string) ||
    configJson.appId,
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();

// Initialize Firestore (with custom database ID support if configured)
const dbId = configJson.firestoreDatabaseId && configJson.firestoreDatabaseId !== '(default)'
  ? configJson.firestoreDatabaseId
  : undefined;

export const db = dbId ? getFirestore(app, dbId) : getFirestore(app);
export const storage = getStorage(app);

export default app;
