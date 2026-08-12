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
    } catch (error: any) {
      // Gracefully capture offline / unreachable connection notices
      console.warn('Firestore connection check:', error?.message || 'Operating in offline/cached mode');
    }
  };

  const initData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // Run connection test non-blockingly
      testConnection().catch(() => {});
      
      // Auto-seed if database is currently unpopulated (fails gracefully if offline)
      seedFirestoreIfEmpty().catch((err) => {
        console.warn('Firestore seeding skipped or offline:', err);
      });

      // Subscribe to real-time Firestore listeners for all collections
      const unsubProducts = subscribeProducts((list) => {
        if (list && list.length > 0) setProducts(list);
      });
      const unsubCategories = subscribeCategories((list) => {
        if (list && list.length > 0) setCategories(list);
      });
      const unsubHomepage = subscribeHomepage((data) => {
        if (data) setHomepage(data);
      });
      const unsubAbout = subscribeAbout((data) => {
        if (data) setAbout(data);
      });
      const unsubTestimonials = subscribeTestimonials((list) => {
        if (list && list.length > 0) setTestimonials(list);
      });
      const unsubFaqs = subscribeFAQs((list) => {
        if (list && list.length > 0) setFaqs(list);
      });
      const unsubContact = subscribeContact((data) => {
        if (data) setContact(data);
      });
      const unsubSettings = subscribeSettings((data) => {
        if (data) setSettings(data);
      });
      const unsubGallery = subscribeGallery((list) => {
        if (list && list.length > 0) setGallery(list);
      });
      const unsubEnquiries = subscribeEnquiries((list) => {
        if (list) setEnquiries(list);
      });

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
      console.warn('Firestore live sync notice:', err);
      setError(null); // Keep error null so UI seamlessly falls back to static company data without intrusive warning banners
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
