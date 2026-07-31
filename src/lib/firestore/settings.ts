import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { FirestoreSettings } from '../../types';
import { handleFirestoreError, OperationType } from './errorHandler';

const COLLECTION_NAME = 'settings';
const MAIN_DOC_ID = 'main';

export async function fetchSettingsData(): Promise<FirestoreSettings | null> {
  try {
    const docRef = doc(db, COLLECTION_NAME, MAIN_DOC_ID);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data() as FirestoreSettings;
    }
    return null;
  } catch (err) {
    throw handleFirestoreError(err, OperationType.GET, `${COLLECTION_NAME}/${MAIN_DOC_ID}`);
  }
}

export async function saveSettingsData(data: FirestoreSettings): Promise<void> {
  try {
    const docRef = doc(db, COLLECTION_NAME, MAIN_DOC_ID);
    await setDoc(docRef, data, { merge: true });
  } catch (err) {
    throw handleFirestoreError(err, OperationType.WRITE, `${COLLECTION_NAME}/${MAIN_DOC_ID}`);
  }
}

export function subscribeSettings(callback: (data: FirestoreSettings | null) => void) {
  const docRef = doc(db, COLLECTION_NAME, MAIN_DOC_ID);
  return onSnapshot(
    docRef,
    (docSnap) => {
      if (docSnap.exists()) {
        callback(docSnap.data() as FirestoreSettings);
      } else {
        callback(null);
      }
    },
    (error) => {
      handleFirestoreError(error, OperationType.GET, `${COLLECTION_NAME}/${MAIN_DOC_ID}`);
    }
  );
}
