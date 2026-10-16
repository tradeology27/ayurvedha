import { MetadataRoute } from 'next';
import { seoPagesData, getAllSEOSlugs } from '@/data/seoPages';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.knchkarur.com';
  const currentDate = new Date();

  // Core base pages (NO /locations)
  const baseRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/treatments`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/doctors`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.9,
    },
  ];

  // Dynamic SEO landing pages at root level (e.g. knchkarur.com/best-naturopathy-hospital-in-karur, knchkarur.com/naturopathy-hospital-mallur-salem, etc.)
  const allSlugs = getAllSEOSlugs();
  const seenUrls = new Set<string>();

  const dynamicSEORoutes: MetadataRoute.Sitemap = allSlugs
    .map((slug) => {
      const page = seoPagesData.find((p) => p.slug === slug);
      let priority = 0.85;
      if (page?.category === 'karur') priority = 0.95;
      else if (page?.category === 'tamil-nadu' || page?.category === 'dental') priority = 0.9;

      const pageUrl = `${baseUrl}/${slug}`;
      if (seenUrls.has(pageUrl)) return null;
      seenUrls.add(pageUrl);

      return {
        url: pageUrl,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority,
      };
    })
    .filter((entry): entry is NonNullable<typeof entry> => entry !== null);

  return [...baseRoutes, ...dynamicSEORoutes];
}
