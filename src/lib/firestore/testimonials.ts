import { collection, doc, getDocs, addDoc, updateDoc, deleteDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { FirestoreTestimonial } from '../../types';
import { handleFirestoreError, OperationType } from './errorHandler';

const COLLECTION_NAME = 'testimonials';

export async function fetchAllTestimonials(): Promise<FirestoreTestimonial[]> {
  try {
    const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
    return querySnapshot.docs.map((docSnap) => ({
      id: docSnap.id,
      ...docSnap.data(),
    })) as FirestoreTestimonial[];
  } catch (err) {
    throw handleFirestoreError(err, OperationType.GET, COLLECTION_NAME);
  }
}

export async function createTestimonial(data: Omit<FirestoreTestimonial, 'id'>): Promise<string> {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), data);
    return docRef.id;
  } catch (err) {
    throw handleFirestoreError(err, OperationType.CREATE, COLLECTION_NAME);
  }
}

export async function updateTestimonial(id: string, data: Partial<FirestoreTestimonial>): Promise<void> {
  try {
    await updateDoc(doc(db, COLLECTION_NAME, id), data);
  } catch (err) {
    throw handleFirestoreError(err, OperationType.UPDATE, `${COLLECTION_NAME}/${id}`);
  }
}

export async function deleteTestimonial(id: string): Promise<void> {
  try {
    await deleteDoc(doc(db, COLLECTION_NAME, id));
  } catch (err) {
    throw handleFirestoreError(err, OperationType.DELETE, `${COLLECTION_NAME}/${id}`);
  }
}

export function subscribeTestimonials(callback: (list: FirestoreTestimonial[]) => void) {
  return onSnapshot(
    collection(db, COLLECTION_NAME),
    (snapshot) => {
      const list = snapshot.docs.map((d) => ({
        id: d.id,
        ...d.data(),
      })) as FirestoreTestimonial[];
      callback(list);
    },
    (error) => {
      handleFirestoreError(error, OperationType.GET, COLLECTION_NAME);
    }
  );
}
