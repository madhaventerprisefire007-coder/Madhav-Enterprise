import React, { useEffect } from 'react';
import { buildSEOMetadata, generateSchemas, SEOPageConfig } from '../../lib/seo';

interface SEOHeadProps extends SEOPageConfig {
  pageName: string;
  extraSchemaData?: any;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  pageName,
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  ogType,
  noIndex,
  extraSchemaData,
}) => {
  const seo = buildSEOMetadata(pageName, {
    title,
    description,
    keywords: keywords as any,
    canonicalUrl,
    ogImage,
    ogType,
    noIndex,
  });

  useEffect(() => {
    // Update Title
    document.title = seo.title;

    // Helper to update or create meta tags
    const setMeta = (attrName: string, attrVal: string, contentVal: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', contentVal);
    };

    // Helper for canonical link tag
    const setCanonical = (url: string) => {
      let element = document.querySelector('link[rel="canonical"]');
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', 'canonical');
        document.head.appendChild(element);
      }
      element.setAttribute('href', url);
    };

    // Update Primary Meta Tags
    setMeta('name', 'description', seo.description);
    setMeta('name', 'keywords', seo.keywords);
    setMeta('name', 'robots', seo.robots);
    setMeta('name', 'author', seo.author);
    setMeta('name', 'publisher', seo.publisher);
    setCanonical(seo.canonicalUrl);

    // Update OpenGraph Meta Tags
    setMeta('property', 'og:title', seo.title);
    setMeta('property', 'og:description', seo.description);
    setMeta('property', 'og:url', seo.canonicalUrl);
    setMeta('property', 'og:type', seo.ogType);
    setMeta('property', 'og:image', seo.ogImage);
    setMeta('property', 'og:site_name', 'Madhav Enterprise and Automation Vadodara');

    // Update Twitter Card Meta Tags
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', seo.title);
    setMeta('name', 'twitter:description', seo.description);
    setMeta('name', 'twitter:image', seo.ogImage);

    // Dynamic JSON-LD Schema Injection
    const existingSchemas = document.querySelectorAll('script[data-seo-schema="true"]');
    existingSchemas.forEach((node) => node.remove());

    const schemas = generateSchemas(pageName, extraSchemaData);
    schemas.forEach((schemaObj, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-schema', 'true');
      script.setAttribute('data-schema-idx', String(index));
      script.innerHTML = JSON.stringify(schemaObj);
      document.head.appendChild(script);
    });

  }, [seo, pageName, extraSchemaData]);

  return null;
};
