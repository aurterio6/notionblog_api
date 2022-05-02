import { IncomingMessage, ServerResponse } from 'http'
import { NEXT_PUBLIC_URL } from '../../lib/notion/server-constants'

import { getPosts, getPostBySlug } from '../../lib/notion/client'
import { getBlogLink } from '../../lib/blog-helpers'

function mapToURL(slug) {
  return NEXT_PUBLIC_URL + getBlogLink(slug) + '\n'
}

function concat(total, item) {
  return total + item
}

function createSitemap(slugs = []) {
  const tagsString = slugs.map(mapToURL).reduce(concat, '')

  return `
${NEXT_PUBLIC_URL}
${NEXT_PUBLIC_URL}/blog
${tagsString}`
}

export default async function(req: IncomingMessage, res: ServerResponse) {
  res.setHeader('Content-Type', 'text/txt')
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
