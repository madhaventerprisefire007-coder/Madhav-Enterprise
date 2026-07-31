import { collection, doc, getDocs, addDoc, updateDoc, deleteDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { FirestoreFAQ } from '../../types';
import { handleFirestoreError, OperationType } from './errorHandler';

const COLLECTION_NAME = 'faq';

export async function fetchAllFAQs(): Promise<FirestoreFAQ[]> {
  try {
    const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
    return querySnapshot.docs.map((docSnap) => ({
      id: docSnap.id,
      ...docSnap.data(),
    })) as FirestoreFAQ[];
  } catch (err) {
    throw handleFirestoreError(err, OperationType.GET, COLLECTION_NAME);
  }
}

export async function createFAQ(data: Omit<FirestoreFAQ, 'id'>): Promise<string> {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), data);
    return docRef.id;
  } catch (err) {
    throw handleFirestoreError(err, OperationType.CREATE, COLLECTION_NAME);
  }
}

export async function updateFAQ(id: string, data: Partial<FirestoreFAQ>): Promise<void> {
  try {
    await updateDoc(doc(db, COLLECTION_NAME, id), data);
  } catch (err) {
    throw handleFirestoreError(err, OperationType.UPDATE, `${COLLECTION_NAME}/${id}`);
  }
}

export async function deleteFAQ(id: string): Promise<void> {
  try {
    await deleteDoc(doc(db, COLLECTION_NAME, id));
  } catch (err) {
    throw handleFirestoreError(err, OperationType.DELETE, `${COLLECTION_NAME}/${id}`);
  }
}

export function subscribeFAQs(callback: (list: FirestoreFAQ[]) => void) {
  return onSnapshot(
    collection(db, COLLECTION_NAME),
    (snapshot) => {
      const list = snapshot.docs.map((d) => ({
        id: d.id,
        ...d.data(),
      })) as FirestoreFAQ[];
      callback(list);
    },
    (error) => {
      handleFirestoreError(error, OperationType.GET, COLLECTION_NAME);
    }
  );
}
