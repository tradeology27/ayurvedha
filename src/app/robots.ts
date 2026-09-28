import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.kumarnaturecure.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/api/'],
      },
      // Google Search & Google Gemini AI Overview Crawler
      {
        userAgent: ['Googlebot', 'Google-Extended'],
        allow: '/',
      },
      // OpenAI / ChatGPT Search Bot
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      // Perplexity AI Search Crawler
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      // Anthropic Claude Web Search Crawler
      {
        userAgent: 'ClaudeBot',
        allow: '/',
      },
      // Microsoft Bing / Copilot Crawler
      {
        userAgent: 'bingbot',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
