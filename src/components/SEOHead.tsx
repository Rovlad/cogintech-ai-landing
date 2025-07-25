
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
}

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  ogTitle, 
  ogDescription, 
  ogImage,
  canonical 
}: SEOHeadProps) => {
  const location = useLocation();

  useEffect(() => {
    // Update title
    if (title) {
      document.title = title;
    }

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && description) {
      metaDescription.setAttribute('content', description);
    }

    // Update keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords && keywords) {
      metaKeywords.setAttribute('content', keywords);
    }

    // Update Open Graph tags
    const ogTitleTag = document.querySelector('meta[property="og:title"]');
    if (ogTitleTag && ogTitle) {
      ogTitleTag.setAttribute('content', ogTitle);
    }

    const ogDescTag = document.querySelector('meta[property="og:description"]');
    if (ogDescTag && ogDescription) {
      ogDescTag.setAttribute('content', ogDescription);
    }

    const ogImageTag = document.querySelector('meta[property="og:image"]');
    if (ogImageTag && ogImage) {
      ogImageTag.setAttribute('content', ogImage);
    }

    // Update canonical URL
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    
    const canonicalUrl = canonical || `https://cogintech.com${location.pathname}`;
    canonicalTag.setAttribute('href', canonicalUrl);

    // Update Open Graph URL
    const ogUrlTag = document.querySelector('meta[property="og:url"]');
    if (ogUrlTag) {
      ogUrlTag.setAttribute('content', canonicalUrl);
    }

    // Update Twitter URL
    const twitterUrlTag = document.querySelector('meta[property="twitter:url"]');
    if (twitterUrlTag) {
      twitterUrlTag.setAttribute('content', canonicalUrl);
    }

  }, [title, description, keywords, ogTitle, ogDescription, ogImage, canonical, location.pathname]);

  return null;
};

export default SEOHead;
