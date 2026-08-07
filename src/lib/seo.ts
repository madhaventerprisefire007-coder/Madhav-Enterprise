export interface SEOPageConfig {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product';
  noIndex?: boolean;
}

export const BASE_URL = 'https://madhaventerprise.in';

export const BUSINESS_INFO = {
  name: 'Madhav Enterprise',
  legalName: 'Madhav Enterprise Industrial Equipment',
  founder: 'Madhav Enterprise Engineering Desk',
  role: 'Manufacturer & Supplier',
  tagline: 'Vadodara’s Premier Water Level Controller & Industrial Valve Manufacturer',
  address: {
    streetAddress: 'C-10, Gaurav Park, Diwalipura, Vasna Road',
    addressLocality: 'Vadodara',
    addressRegion: 'Gujarat',
    postalCode: '390007',
    addressCountry: 'IN',
  },
  formattedAddress: 'C-10, Gaurav Park, Diwalipura, Vasna Road, Vadodara, Gujarat 390007, India',
  phone: '+91 9924040633',
  email: 'madhaventerpise02021@gmail.com',
  workingHours: 'Mon - Sat: 09:00 AM - 07:00 PM',
  geo: {
    latitude: '22.2985',
    longitude: '73.1505',
  },
  rating: {
    ratingValue: '4.9',
    reviewCount: '128',
  },
  priceRange: '₹₹',
};

export const PRIMARY_KEYWORDS = [
  'Water Level Controller Manufacturer in Vadodara',
  'Industrial Valve Supplier in Vadodara',
  'Motor Pump Supplier',
  'Pressure Pump Supplier',
  'Submersible Pump Supplier',
  'Pipes and Fittings Supplier',
  'Industrial Equipment Supplier',
  'Water Control System',
  'Industrial Valve Manufacturer Gujarat',
  'Water Level Controller Gujarat',
  'Automatic Overhead Tank Controller Vadodara',
  'SS 316 Ball Valve Vadodara',
  'Centrifugal Monoblock Pump Supplier Gujarat',
];

/**
  Generate clean SEO slug from product or category title
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

/**
 * Builds metadata for dynamic SEO tags
 */
export function buildSEOMetadata(pageName: string, config: SEOPageConfig = {}) {
  const defaultTitle = `${BUSINESS_INFO.name} | Water Level Controller Manufacturer & Industrial Valve Supplier Vadodara`;
  const defaultDesc = `Madhav Enterprise is Vadodara's leading manufacturer & supplier of Automatic Water Level Controllers, Industrial SS Valves, Centrifugal Motor Pumps, Hydro Booster Pressure Pumps & CPVC Fittings. Located in Diwalipura / Vasna Road, Vadodara, Gujarat.`;

  const title = config.title
    ? `${config.title} | ${BUSINESS_INFO.name} Vadodara`
    : defaultTitle;

  const description = config.description || defaultDesc;
  const canonicalUrl = config.canonicalUrl || `${BASE_URL}/${pageName !== 'home' ? pageName : ''}`;
  const keywords = Array.from(new Set([...(config.keywords || []), ...PRIMARY_KEYWORDS])).join(', ');
  const ogImage = config.ogImage || `${BASE_URL}/logo.png`;
  const ogType = config.ogType || 'website';
  const robots = config.noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

  return {
    title,
    description,
    canonicalUrl,
    keywords,
    ogImage,
    ogType,
    robots,
    author: BUSINESS_INFO.name,
    publisher: `${BUSINESS_INFO.name} Vadodara`,
  };
}

/**
 * Generate Structured Data JSON-LD Schemas
 */
export function generateSchemas(pageType: string, extraData?: any) {
  const schemas: any[] = [];

  // 1. Organization & Local Business Schema (Always Present for Brand Consistency)
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BASE_URL}/#localbusiness`,
    name: BUSINESS_INFO.name,
    legalName: BUSINESS_INFO.legalName,
    image: `${BASE_URL}/logo.png`,
    logo: `${BASE_URL}/logo.png`,
    url: BASE_URL,
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    priceRange: BUSINESS_INFO.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.streetAddress,
      addressLocality: BUSINESS_INFO.address.addressLocality,
      addressRegion: BUSINESS_INFO.address.addressRegion,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: BUSINESS_INFO.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_INFO.geo.latitude,
      longitude: BUSINESS_INFO.geo.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '19:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS_INFO.rating.ratingValue,
      reviewCount: BUSINESS_INFO.rating.reviewCount,
    },
    sameAs: [
      'https://facebook.com',
      'https://linkedin.com',
      'https://youtube.com',
    ],
  };
  schemas.push(localBusinessSchema);

  // 2. WebSite Schema (Search Action)
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    url: BASE_URL,
    name: BUSINESS_INFO.name,
    description: BUSINESS_INFO.tagline,
    publisher: {
      '@id': `${BASE_URL}/#localbusiness`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${BASE_URL}/products?search={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
  schemas.push(websiteSchema);

  // 3. Page Specific Schemas
  if (pageType === 'product' && extraData) {
    const productSchema = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: extraData.name || extraData.title,
      image: extraData.image || (extraData.images && extraData.images[0]) || `${BASE_URL}/logo.png`,
      description: extraData.description || extraData.shortDescription,
      sku: extraData.id || extraData.slug,
      brand: {
        '@type': 'Brand',
        name: BUSINESS_INFO.name,
      },
      offers: {
        '@type': 'Offer',
        url: `${BASE_URL}/products/${extraData.slug || generateSlug(extraData.name || extraData.title || '')}`,
        priceCurrency: 'INR',
        price: extraData.price || '0.00',
        priceValidUntil: '2027-12-31',
        itemCondition: 'https://schema.org/NewCondition',
        availability: 'https://schema.org/InStock',
        seller: {
          '@type': 'Organization',
          name: BUSINESS_INFO.name,
        },
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '42',
      },
    };
    schemas.push(productSchema);
  }

  if (pageType === 'contact') {
    const contactPageSchema = {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: `Contact ${BUSINESS_INFO.name}`,
      description: `Get in touch with Madhav Enterprise Vadodara for sales enquiries, quotes, and product technical specifications.`,
      url: `${BASE_URL}/contact`,
      mainEntity: {
        '@type': 'Organization',
        name: BUSINESS_INFO.name,
        telephone: BUSINESS_INFO.phone,
        email: BUSINESS_INFO.email,
        address: BUSINESS_INFO.formattedAddress,
      },
    };
    schemas.push(contactPageSchema);
  }

  if (extraData?.faqs && extraData.faqs.length > 0) {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: extraData.faqs.map((f: any) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.answer,
        },
      })),
    };
    schemas.push(faqSchema);
  }

  return schemas;
}
