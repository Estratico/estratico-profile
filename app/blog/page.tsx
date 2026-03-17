import { HeroPost } from '@/components/pages/blog/HeroPost'
import { MoreStories } from '@/components/pages/blog/more-stories'
import { STATIC_BLOG_POSTS } from '@/utils/constants'
import { IBlogPost } from '@/utils/types/db'
import {basehub} from "basehub"
import { Metadata } from 'next'
import React from 'react'
import '@/basehub.config'
import { getAllBlogPosts } from '@/lib/basehub-blog'
import { siteConfig } from '@/config/site'

type Props = {}

export const metadata: Metadata = {
  title: "Blog & Insights",
  description: `Stay ahead with the latest trends, deep dives, and expert insights from ${siteConfig.name}. Explore articles on fintech, healthcare, e-commerce, and the future of digital transformation.`,
  openGraph: {
    title: `Blog & Insights | ${siteConfig.name}`,
    description: `Expert insights and industry trends from the ${siteConfig.name} team. Explore our latest thoughts on technology and digital innovation.`,
  },
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
}

export default async function BlogsPage({}: Props) {
  const data = await getAllBlogPosts()
    const heroPost = data[0]
  const morePosts = data.slice(1)
  console.log(data)
  return (
    <main>
      <section className="container mx-auto px-5 pt-32">
        {heroPost && <HeroPost post={{...heroPost,status:heroPost.status as IBlogPost["status"]}} />}
        <MoreStories title={
            "More Posts"
        } morePosts={morePosts} />
      </section>
    </main>
  )
}