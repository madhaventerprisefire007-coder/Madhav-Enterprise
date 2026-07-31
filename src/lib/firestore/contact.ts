import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { FirestoreContact } from '../../types';
import { handleFirestoreError, OperationType } from './errorHandler';

const COLLECTION_NAME = 'contact';
const MAIN_DOC_ID = 'main';

export async function fetchContactData(): Promise<FirestoreContact | null> {
  try {
    const docRef = doc(db, COLLECTION_NAME, MAIN_DOC_ID);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data() as FirestoreContact;
    }
    return null;
  } catch (err) {
    throw handleFirestoreError(err, OperationType.GET, `${COLLECTION_NAME}/${MAIN_DOC_ID}`);
  }
}

export async function saveContactData(data: FirestoreContact): Promise<void> {
  try {
    const docRef = doc(db, COLLECTION_NAME, MAIN_DOC_ID);
    await setDoc(docRef, data, { merge: true });
  } catch (err) {
    throw handleFirestoreError(err, OperationType.WRITE, `${COLLECTION_NAME}/${MAIN_DOC_ID}`);
  }
}

export function subscribeContact(callback: (data: FirestoreContact | null) => void) {
  const docRef = doc(db, COLLECTION_NAME, MAIN_DOC_ID);
  return onSnapshot(
    docRef,
    (docSnap) => {
      if (docSnap.exists()) {
        callback(docSnap.data() as FirestoreContact);
      } else {
        callback(null);
      }
    },
    (error) => {
      handleFirestoreError(error, OperationType.GET, `${COLLECTION_NAME}/${MAIN_DOC_ID}`);
    }
  );
}
