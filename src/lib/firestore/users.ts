import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { FirestoreUser } from '../../types';
import { handleFirestoreError, OperationType } from './errorHandler';

const COLLECTION_NAME = 'users';

export async function fetchUserProfile(uid: string): Promise<FirestoreUser | null> {
  try {
    const docRef = doc(db, COLLECTION_NAME, uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { uid, ...docSnap.data() } as FirestoreUser;
    }
    return null;
  } catch (err) {
    throw handleFirestoreError(err, OperationType.GET, `${COLLECTION_NAME}/${uid}`);
  }
}

export async function createOrUpdateUserProfile(user: FirestoreUser): Promise<void> {
  try {
    const docRef = doc(db, COLLECTION_NAME, user.uid);
    await setDoc(docRef, user, { merge: true });
  } catch (err) {
    throw handleFirestoreError(err, OperationType.WRITE, `${COLLECTION_NAME}/${user.uid}`);
  }
}

export function subscribeUserProfile(uid: string, callback: (user: FirestoreUser | null) => void) {
  const docRef = doc(db, COLLECTION_NAME, uid);
  return onSnapshot(
    docRef,
    (docSnap) => {
      if (docSnap.exists()) {
        callback({ uid, ...docSnap.data() } as FirestoreUser);
      } else {
        callback(null);
      }
    },
    (error) => {
      handleFirestoreError(error, OperationType.GET, `${COLLECTION_NAME}/${uid}`);
    }
  );
}
