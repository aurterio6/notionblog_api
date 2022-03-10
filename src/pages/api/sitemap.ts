import { IncomingMessage, ServerResponse } from 'http'
import { NEXT_PUBLIC_URL } from '../../lib/notion/server-constants'

import { getPosts, getPostBySlug } from '../../lib/notion/client'
import { getBlogLink } from '../../lib/blog-helpers'

function mapToURL(slug) {
  return `
    <url>
      <loc>${NEXT_PUBLIC_URL + getBlogLink(slug)}</loc>
      <changefreq>weekly</changefreq>
    </url>`
}

function concat(total, item) {
  return total + item
}

function createSitemap(slugs = []) {
  const tagsString = slugs.map(mapToURL).reduce(concat, '')

  return `<?xml version="1.0" encoding="utf-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${NEXT_PUBLIC_URL}</loc>
    </url>
    <url>
      <loc>${NEXT_PUBLIC_URL}/blog</loc>
      <changefreq>weekly</changefreq>
    </url>${tagsString}
  </urlset>`
}

export default async function(req: IncomingMessage, res: ServerResponse) {
  res.setHeader('Content-Type', 'text/xml')
  try {
    const posts = await getPosts()

    const slug = posts
      .map(post => {
        if (getPostBySlug(post)) return post.Slug
      })
      .filter(Boolean)

    ///console.log(slug)
    res.write(createSitemap(slug))
    res.end()
  } catch (e) {
    console.log(e)
    res.statusCode = 500
    res.end()
  }
}
