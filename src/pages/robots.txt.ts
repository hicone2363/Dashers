import type { APIRoute } from 'astro';
import { SITE_CONFIG } from '../data/config';

export const GET: APIRoute = async () => {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemaps
Sitemap: ${SITE_CONFIG.siteUrl}/sitemap-index.xml
`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
