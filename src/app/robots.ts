import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'Claude-Web', 'ClaudeBot', 'Google-Extended'],
        allow: '/',
      }
    ],
    sitemap: 'https://www.jacquesgiraudeau.com/sitemap.xml',
  }
}
