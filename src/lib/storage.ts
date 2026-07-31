import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from './firebase';

export type StorageFolder = 'products' | 'gallery' | 'logo' | 'banners';

/**
 * Uploads a file to Firebase Storage under the designated folder path.
 * Returns the public download URL string.
 */
export async function uploadImage(
  file: File,
  folder: StorageFolder = 'products',
  onProgress?: (progress: number) => void
): Promise<string> {
  const timestamp = Date.now();
  const cleanFileName = file.name.replace(/[^a-zA-Z0-9.]/g, '_');
  const storageRef = ref(storage, `${folder}/${timestamp}_${cleanFileName}`);

  const uploadTask = uploadBytesResumable(storageRef, file);

  return new Promise((resolve, reject) => {
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        if (onProgress) {
          onProgress(Math.round(progress));
        }
      },
      (error) => {
        console.error(`Firebase Storage upload error [${folder}]:`, error);
        reject(error);
      },
      async () => {
        try {
          const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
          resolve(downloadUrl);
        } catch (err) {
          reject(err);
        }
      }
    );
  });
}
