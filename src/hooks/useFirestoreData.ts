import { useState, useEffect, useCallback } from 'react';
import { doc, getDocFromServer } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { subscribeProducts } from '../lib/firestore/products';
import { subscribeCategories } from '../lib/firestore/categories';
import { subscribeHomepage } from '../lib/firestore/homepage';
import { subscribeAbout } from '../lib/firestore/about';
import { subscribeTestimonials } from '../lib/firestore/testimonials';
import { subscribeFAQs } from '../lib/firestore/faq';
import { subscribeContact } from '../lib/firestore/contact';
import { subscribeSettings } from '../lib/firestore/settings';
import { subscribeGallery } from '../lib/firestore/gallery';
import { subscribeEnquiries } from '../lib/firestore/enquiries';
import { seedFirestoreIfEmpty } from '../services/seedService';
import {
  FirestoreProduct,
  FirestoreCategory,
  FirestoreHomepage,
  FirestoreAbout,
  FirestoreTestimonial,
  FirestoreFAQ,
  FirestoreContact,
  FirestoreSettings,
  FirestoreGalleryItem,
  FirestoreEnquiry,
} from '../types';

export function useFirestoreData() {
  const [products, setProducts] = useState<FirestoreProduct[]>([]);
  const [categories, setCategories] = useState<FirestoreCategory[]>([]);
  const [homepage, setHomepage] = useState<FirestoreHomepage | null>(null);
  const [about, setAbout] = useState<FirestoreAbout | null>(null);
  const [testimonials, setTestimonials] = useState<FirestoreTestimonial[]>([]);
  const [faqs, setFaqs] = useState<FirestoreFAQ[]>([]);
  const [contact, setContact] = useState<FirestoreContact | null>(null);
  const [settings, setSettings] = useState<FirestoreSettings | null>(null);
  const [gallery, setGallery] = useState<FirestoreGalleryItem[]>([]);
  const [enquiries, setEnquiries] = useState<FirestoreEnquiry[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  const testConnection = async () => {
    try {
      await getDocFromServer(doc(db, 'test', 'connection'));
    } catch (error) {
      if (error instanceof Error && error.message.includes('the client is offline')) {
        console.error('Please check your Firebase configuration.');
      }
    }
  };

  const initData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      await testConnection();
      
      // Auto-seed if database is currently unpopulated
      await seedFirestoreIfEmpty();

      // Subscribe to real-time Firestore listeners for all collections
      const unsubProducts = subscribeProducts((list) => setProducts(list));
      const unsubCategories = subscribeCategories((list) => setCategories(list));
      const unsubHomepage = subscribeHomepage((data) => setHomepage(data));
      const unsubAbout = subscribeAbout((data) => setAbout(data));
      const unsubTestimonials = subscribeTestimonials((list) => setTestimonials(list));
      const unsubFaqs = subscribeFAQs((list) => setFaqs(list));
      const unsubContact = subscribeContact((data) => setContact(data));
      const unsubSettings = subscribeSettings((data) => setSettings(data));
      const unsubGallery = subscribeGallery((list) => setGallery(list));
      const unsubEnquiries = subscribeEnquiries((list) => setEnquiries(list));

      setLoading(false);

      return () => {
        unsubProducts();
        unsubCategories();
        unsubHomepage();
        unsubAbout();
        unsubTestimonials();
        unsubFaqs();
        unsubContact();
        unsubSettings();
        unsubGallery();
        unsubEnquiries();
      };
    } catch (err: any) {
      console.error('Error connecting to Firestore database:', err);
      setError(err?.message || 'Failed to sync with Firestore database');
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let cleanupPromise: any;
    initData().then((cleanup) => {
      cleanupPromise = cleanup;
    });

    return () => {
      if (cleanupPromise && typeof cleanupPromise === 'function') {
        cleanupPromise();
      }
    };
  }, [initData, retryCount]);

  const handleRetry = () => {
    setRetryCount((prev) => prev + 1);
  };

  return {
    products,
    categories,
    homepage,
    about,
    testimonials,
    faqs,
    contact,
    settings,
    gallery,
    enquiries,
    loading,
    error,
    retry: handleRetry,
  };
}
