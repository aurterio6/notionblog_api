import { GetServerSidePropsContext } from 'next'
import RSS from 'rss'
import { getPosts, getAllPosts } from '../lib/notion/client'
import { NEXT_PUBLIC_URL } from '../lib/notion/server-constants'

export const getServerSideProps = async ({
  res,
}: GetServerSidePropsContext) => {
  const xml = await generateFeedXml() // フィードのXMLを生成する（後述）

  res.statusCode = 200
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate') // 24時間キャッシュする
  res.setHeader('Content-Type', 'text/xml')
  res.end(xml)

  return {
    props: {},
  }
}

const Page = () => null
export default Page

async function generateFeedXml() {
  const feed = new RSS({
    title: 'MyLifelog',
    description: 'ゆったりしてね',
    site_url: 'https://www.pappardelle-nono.tk',
    feed_url: '/feed',
    language: 'ja',
  })

  // 例としてpostsを含めるイメージ
  // このあたりの書き方はライブラリのドキュメントを参考にしてください
  const posts = await getAllPosts()
  posts?.forEach(post => {
    feed.item({
      title: post.Title,
      description: post.Excerpt,
      date: new Date(post.CreatedTime),
      url: NEXT_PUBLIC_URL + '/' + post.Slug,
    })
  })

  // XML形式の文字列にする
  return feed.xml()
}
