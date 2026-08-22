import { doc, getDoc, setDoc, getDocs, collection } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { PRODUCTS_DATA, COMPANY_INFO, TESTIMONIALS_DATA, FAQ_DATA } from '../data/companyData';
import { FirestoreHomepage, FirestoreAbout, FirestoreContact, FirestoreSettings } from '../types';

export async function seedFirestoreIfEmpty(): Promise<boolean> {
  try {
    // Check if products collection exists and has data
    const productsSnap = await getDocs(collection(db, 'products'));
    if (!productsSnap.empty) {
      // Sync/update product images in Firestore if existing
      for (const p of PRODUCTS_DATA) {
        const pRef = doc(db, 'products', p.id);
        const pSnap = await getDoc(pRef);
        if (pSnap.exists()) {
          await setDoc(pRef, {
            name: p.name,
            modelNumber: p.modelNumber,
            images: [p.image, ...(p.galleryImages || [])],
            specs: p.specs,
            material: p.material,
            keyFeatures: p.keyFeatures || [],
            benefits: p.benefits || [],
            applications: p.applications || [],
            industries: p.industries || [],
            updatedAt: new Date().toISOString(),
          }, { merge: true });
        }
      }
      return false;
    }

    console.log('Seeding initial dataset into Firestore...');

    // 1. Seed Products
    for (const p of PRODUCTS_DATA) {
      await setDoc(doc(db, 'products', p.id), {
        title: p.name,
        slug: p.id,
        category: p.category,
        shortDescription: p.subtitle,
        description: p.description,
        features: p.keyFeatures || [],
        benefits: p.benefits || [],
        applications: p.applications || [],
        specifications: p.specs || [],
        keywords: [p.name, p.category, p.modelNumber],
        metaTitle: `${p.name} - Madhav Enterprise and Automation Vadodara`,
        metaDescription: p.description.slice(0, 150),
        featured: !!p.featured,
        status: 'active',
        images: [p.image, ...(p.galleryImages || [])],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
    }

    // 2. Seed Categories
    const categoriesList = [
      { id: 'cat-wlc', title: 'Water Level Controller', slug: 'water-level-controller', description: 'Automated digital overhead tank and sump water level logic controllers', icon: 'Cpu', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80', status: 'active', createdAt: new Date().toISOString() },
      { id: 'cat-valves', title: 'Butterfly Valve', slug: 'butterfly-valve', description: 'Cast Iron and Stainless Steel wafer butterfly valves with EPDM/Nitrile seats', icon: 'CircleDot', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80', status: 'active', createdAt: new Date().toISOString() },
      { id: 'cat-sewage', title: 'Sewage Pump', slug: 'sewage-pump', description: 'Heavy duty non-clog sewage & dewatering pumps (1HP to 5HP)', icon: 'Zap', image: 'https://lh3.googleusercontent.com/d/1nCTshHXYHThd-nwSPdrKnjc2Irotp6SV', status: 'active', createdAt: new Date().toISOString() },
      { id: 'cat-pressure', title: 'Pressure Pump', slug: 'pressure-pump', description: 'Hydro-pneumatic pressure booster pumps for multi-story buildings', icon: 'Gauge', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80', status: 'active', createdAt: new Date().toISOString() },
      { id: 'cat-submersible', title: 'Submersible Pump', slug: 'submersible-pump', description: 'Borewell submersibles & heavy-duty industrial dewatering pumps', icon: 'Droplets', image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80', status: 'active', createdAt: new Date().toISOString() },
    ];

    for (const cat of categoriesList) {
      await setDoc(doc(db, 'categories', cat.id), cat);
    }

    // 3. Seed Homepage Doc
    const homepageData: FirestoreHomepage = {
      heroTitle: 'Industrial Water Level Controllers & Butterfly Valves',
      heroSubtitle: 'Vadodara’s Leading Manufacturer & Supplier of Precision Flow Controls, Sewage Dewatering Pumps, and Hydro-Pneumatic Pressure Boosters.',
      heroImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      aboutPreview: 'Madhav Enterprise and Automation has been delivering premium industrial automation, water level logic controllers, and high-pressure fluid valves in Vadodara, Gujarat since 2008.',
      whyChooseUs: [
        { id: '1', title: '100% Quality Tested', description: 'Strict quality control & pressure test verification before delivery.', icon: 'ShieldCheck' },
        { id: '2', title: '16+ Years Industry Expertise', description: 'Trusted by over 1,500+ chemical, pharmaceutical, and textile plants in Gujarat.', icon: 'Award' },
        { id: '3', title: '24/7 Express Delivery', description: 'Same day dispatch for Vadodara, Nandesari, Ankleshwar & Panoli industrial estates.', icon: 'Truck' },
        { id: '4', title: 'Factory Direct Warranties', description: '12 to 24 months full replacement warranty on controllers & pumps.', icon: 'CheckCircle' },
      ],
      counterSection: [
        { id: '1', value: '16+', label: 'Years Experience', sublabel: 'Since 2008 in Vadodara' },
        { id: '2', value: '1,500+', label: 'GIDC Clients', sublabel: 'Across Gujarat & India' },
        { id: '3', value: '50,000+', label: 'Units Delivered', sublabel: 'Zero Defect Benchmark' },
        { id: '4', value: '100%', label: 'Quality Assured', sublabel: 'Strict Quality Control Verification' },
      ],
      industries: ['ETP & STP Water Treatment', 'Commercial Real Estate', 'Agriculture & Farms'],
      ctaSection: {
        title: 'Need Custom Industrial Sizing or Bulk RFQ Quotation?',
        subtitle: 'Get direct tax invoice quotes and engineering specifications from our Vadodara technical desk.',
        buttonText: 'Request Express Quote',
        phone: COMPANY_INFO.phonePrimary,
      },
    };
    await setDoc(doc(db, 'homepage', 'main'), homepageData);

    // 4. Seed About Doc
    const aboutData: FirestoreAbout = {
      companyDescription: 'Madhav Enterprise and Automation is a premier manufacturer and technical distributor of industrial water level controllers, stainless steel valves, monoblock pumps, and CPVC piping systems based in Vadodara, Gujarat.',
      mission: 'To empower industries and commercial buildings with zero-water-loss automation, superior fluid handling equipment, and uncompromised industrial safety.',
      vision: 'To be India’s most reliable single-source brand for water level logic automation and heavy-duty butterfly valve engineering.',
      values: [
        'Precision Engineering & Quality Rigor',
        'Customer First Sales & Service Support',
        'Ethical Business Practices & Transparent Pricing',
        'Continuous Innovation in Water Conservation'
      ],
    };
    await setDoc(doc(db, 'about', 'main'), aboutData);

    // 5. Seed Testimonials
    for (const t of TESTIMONIALS_DATA) {
      await setDoc(doc(db, 'testimonials', t.id), {
        customerName: t.name,
        company: t.company,
        photo: t.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
        rating: t.rating,
        review: t.comment,
      });
    }

    // 6. Seed FAQs
    for (const f of FAQ_DATA) {
      await setDoc(doc(db, 'faq', f.id), {
        question: f.question,
        answer: f.answer,
      });
    }

    // 7. Seed Contact Doc
    const contactData: FirestoreContact = {
      phone: COMPANY_INFO.phonePrimary,
      email: COMPANY_INFO.emailSales,
      address: COMPANY_INFO.fullAddress,
      googleMapLink: 'https://maps.google.com/?q=C-10+Gaurav+Park+Diwalipura+Vasna+Road+Vadodara+390007',
      businessHours: COMPANY_INFO.workingHours,
      whatsAppNumber: COMPANY_INFO.whatsappNumber,
    };
    await setDoc(doc(db, 'contact', 'main'), contactData);

    // 8. Seed Settings Doc
    const settingsData: FirestoreSettings = {
      websiteName: 'Madhav Enterprise and Automation',
      logo: '/logo.png',
      favicon: '/favicon.ico',
      primaryColor: '#E86A2D',
      secondaryColor: '#111111',
      googleAnalyticsId: 'G-XXXXXXXXXX',
      googleTagManager: 'GTM-XXXXXXX',
      searchConsoleVerification: 'verification-code',
      socialLinks: {
        facebook: 'https://facebook.com',
        linkedin: 'https://linkedin.com',
        youtube: 'https://youtube.com',
        whatsapp: `https://wa.me/${COMPANY_INFO.whatsappNumber}`,
      },
    };
    await setDoc(doc(db, 'settings', 'main'), settingsData);

    // 9. Seed Gallery
    const galleryItems = [
      { id: 'g1', title: 'Automatic Water Level Controller Testing Desk', category: 'Controllers', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80' },
      { id: 'g2', title: 'SS 316 Industrial Flanged Ball Valves', category: 'Valves', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80' },
      { id: 'g3', title: 'High Head Centrifugal Motor Pump Assembly', category: 'Pumps', image: 'https://images.unsplash.com/photo-1581092281633-53e4ded1b58e?auto=format&fit=crop&w=800&q=80' },
      { id: 'g4', title: 'Vadodara Factory Dispatch Center', category: 'Facility', image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80' },
    ];
    for (const g of galleryItems) {
      await setDoc(doc(db, 'gallery', g.id), g);
    }

    console.log('Firestore seed completed successfully!');
    return true;
  } catch (error) {
    console.error('Error seeding Firestore:', error);
    return false;
  }
}
