export type PageType = 'home' | 'about' | 'products' | 'contact' | '404';

export type ProductCategory = 
  | 'All'
  | 'Water Level Controller'
  | 'Butterfly Valve'
  | 'Sewage Pump'
  | 'Pressure Pump'
  | 'Submersible Pump';

export interface TechnicalSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  slug?: string;
  category: ProductCategory;
  subtitle: string;
  description: string;
  longDescription?: string;
  image: string;
  galleryImages?: string[];
  videoEmbedUrl?: string;
  wiringDiagramUrl?: string;
  featured?: boolean;
  modelNumber: string;
  material?: string;
  rating?: string;
  keyFeatures: string[];
  benefits?: string[];
  specs: TechnicalSpec[];
  applications: string[];
  industries?: string[];
  seoKeywords?: string[];
  faqs?: { question: string; answer: string; }[];
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  iconName: string;
  image: string;
  popularProducts: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  comment: string;
  rating: number;
  avatar?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Controllers' | 'Valves' | 'Pumps' | 'Delivery & Support';
}

export interface QuoteRequest {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  location: string;
  productCategory: string;
  productName: string;
  quantity: string;
  message: string;
}

// ==========================================
// FIRESTORE COLLECTIONS SCHEMAS
// ==========================================

export interface FirestoreProduct {
  id: string;
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  description: string;
  features: string[];
  benefits: string[];
  applications: string[];
  specifications: TechnicalSpec[];
  keywords: string[];
  metaTitle: string;
  metaDescription: string;
  featured: boolean;
  status: 'active' | 'draft' | 'archived';
  price?: number;
  images: string[];
  createdAt: string;
  updatedAt: string;
}

export interface FirestoreCategory {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  image: string;
  status: 'active' | 'inactive';
  createdAt: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface CounterItem {
  id: string;
  value: string;
  label: string;
  sublabel: string;
}

export interface FirestoreHomepage {
  id?: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  aboutPreview: string;
  whyChooseUs: WhyChooseUsItem[];
  counterSection: CounterItem[];
  industries: string[];
  ctaSection: {
    title: string;
    subtitle: string;
    buttonText: string;
    phone: string;
  };
}

export interface FirestoreAbout {
  id?: string;
  companyDescription: string;
  mission: string;
  vision: string;
  values: string[];
}

export interface FirestoreTestimonial {
  id: string;
  customerName: string;
  company: string;
  photo: string;
  rating: number;
  review: string;
}

export interface FirestoreFAQ {
  id: string;
  question: string;
  answer: string;
}

export interface FirestoreContact {
  id?: string;
  phone: string;
  email: string;
  address: string;
  googleMapLink: string;
  businessHours: string;
  whatsAppNumber: string;
}

export interface FirestoreSettings {
  id?: string;
  websiteName: string;
  logo: string;
  favicon: string;
  primaryColor: string;
  secondaryColor: string;
  googleAnalyticsId: string;
  googleTagManager: string;
  searchConsoleVerification: string;
  socialLinks: {
    facebook?: string;
    linkedin?: string;
    youtube?: string;
    whatsapp?: string;
  };
}

export interface FirestoreGalleryItem {
  id: string;
  image: string;
  title: string;
  category: string;
}

export interface FirestoreEnquiry {
  id: string;
  customerName: string;
  company: string;
  phone: string;
  email: string;
  product: string;
  message: string;
  createdDate: string;
  status: 'new' | 'contacted' | 'quoted' | 'closed';
}

export interface FirestoreUser {
  uid: string;
  email: string;
  role: 'admin' | 'staff' | 'visitor';
  name: string;
  createdAt?: string;
}

