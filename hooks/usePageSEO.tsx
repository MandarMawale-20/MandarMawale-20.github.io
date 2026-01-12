import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { seoConfig, type SectionKey } from '../utils/seoConfig';

export const usePageSEO = (section: SectionKey) => {
  const config = seoConfig[section];

  useEffect(() => {
    // Update window title as fallback
    document.title = config.title;
  }, [config]);

  return <Helmet>
    <title>{config.title}</title>
    <meta name="description" content={config.description} />
    <meta property="og:title" content={config.title} />
    <meta property="og:description" content={config.description} />
  </Helmet>;
};
