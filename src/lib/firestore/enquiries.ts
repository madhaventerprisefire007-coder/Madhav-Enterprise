import { collection, doc, getDocs, addDoc, updateDoc, deleteDoc, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import { FirestoreEnquiry } from '../../types';
import { handleFirestoreError, OperationType } from './errorHandler';

const COLLECTION_NAME = 'enquiries';

export async function submitEnquiry(data: Omit<FirestoreEnquiry, 'id' | 'createdDate' | 'status'>): Promise<string> {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...data,
      createdDate: new Date().toISOString(),
      status: 'new',
    });
    return docRef.id;
  } catch (err) {
    throw handleFirestoreError(err, OperationType.CREATE, COLLECTION_NAME);
  }
}

export async function fetchAllEnquiries(): Promise<FirestoreEnquiry[]> {
  try {
    const q = query(collection(db, COLLECTION_NAME), orderBy('createdDate', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((docSnap) => ({
      id: docSnap.id,
      ...docSnap.data(),
    })) as FirestoreEnquiry[];
  } catch (err) {
    throw handleFirestoreError(err, OperationType.GET, COLLECTION_NAME);
  }
}

export async function updateEnquiryStatus(id: string, status: FirestoreEnquiry['status']): Promise<void> {
  try {
    await updateDoc(doc(db, COLLECTION_NAME, id), { status });
  } catch (err) {
    throw handleFirestoreError(err, OperationType.UPDATE, `${COLLECTION_NAME}/${id}`);
  }
}

export async function deleteEnquiry(id: string): Promise<void> {
  try {
    await deleteDoc(doc(db, COLLECTION_NAME, id));
  } catch (err) {
    throw handleFirestoreError(err, OperationType.DELETE, `${COLLECTION_NAME}/${id}`);
  }
}

export function subscribeEnquiries(callback: (list: FirestoreEnquiry[]) => void) {
  const q = query(collection(db, COLLECTION_NAME), orderBy('createdDate', 'desc'));
  return onSnapshot(
    q,
    (snapshot) => {
      const list = snapshot.docs.map((d) => ({
        id: d.id,
        ...d.data(),
      })) as FirestoreEnquiry[];
      callback(list);
    },
    (error) => {
      handleFirestoreError(error, OperationType.GET, COLLECTION_NAME);
    }
  );
}
