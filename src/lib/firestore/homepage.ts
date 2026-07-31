import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { FirestoreHomepage } from '../../types';
import { handleFirestoreError, OperationType } from './errorHandler';

const COLLECTION_NAME = 'homepage';
const MAIN_DOC_ID = 'main';

export async function fetchHomepageData(): Promise<FirestoreHomepage | null> {
  try {
    const docRef = doc(db, COLLECTION_NAME, MAIN_DOC_ID);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data() as FirestoreHomepage;
    }
    return null;
  } catch (err) {
    throw handleFirestoreError(err, OperationType.GET, `${COLLECTION_NAME}/${MAIN_DOC_ID}`);
  }
}

export async function saveHomepageData(data: FirestoreHomepage): Promise<void> {
  try {
    const docRef = doc(db, COLLECTION_NAME, MAIN_DOC_ID);
    await setDoc(docRef, data, { merge: true });
  } catch (err) {
    throw handleFirestoreError(err, OperationType.WRITE, `${COLLECTION_NAME}/${MAIN_DOC_ID}`);
  }
}

export function subscribeHomepage(callback: (data: FirestoreHomepage | null) => void) {
  const docRef = doc(db, COLLECTION_NAME, MAIN_DOC_ID);
  return onSnapshot(
    docRef,
    (docSnap) => {
      if (docSnap.exists()) {
        callback(docSnap.data() as FirestoreHomepage);
      } else {
        callback(null);
      }
    },
    (error) => {
      handleFirestoreError(error, OperationType.GET, `${COLLECTION_NAME}/${MAIN_DOC_ID}`);
    }
  );
}
