import Link from "next/link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Post} from "@/components/pages/blog/post"
import { MoreStories } from "@/components/pages/blog/more-stories"
import { STATIC_BLOG_POSTS } from "@/utils/constants"
import { basehub } from "basehub"
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/basehub-blog"
import { siteConfig } from "@/config/site"

export const dynamic = "force-static"
export const revalidate = 30

export async function generateStaticParams() {
  const data = await basehub().query({
     posts: { items: { _slug: true } },
  })

  return data.posts.items.map((post) => ({ slug: post._slug }))
}

type PageProps = { params: Promise<{ slug: string }> }

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) notFound()

  const postTitle = post.title
  const postDescription = post.description
  const postOgImage = post.coverImage
  const siteTitle = siteConfig.name

  return {
    title: `${postTitle} | ${siteTitle}`,
    description: postDescription,
    openGraph: {
      title: postTitle,
      description: postDescription,
      images: postOgImage
        ? [
            {
              url: postOgImage,
              width: 1200,
              height: 630,
              alt: postTitle,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: postTitle,
      description: postDescription,
      images: postOgImage ? [postOgImage] : [],
    },
  }
}
export default async function PostPage({ params }: PageProps) {
  const { slug } = await params

  const post = await getBlogPostBySlug(slug)

  const morePosts = (await getAllBlogPosts()).filter(p=>p.slug!==slug).slice(0,4)

  if (!post) notFound()

  return (
    <main>
      <section className="container mx-auto px-5 pt-32">
        <Post post={post} />
        <hr className="mt-28 mb-24" />
        <MoreStories
          morePosts={morePosts}
          title={"Explore More Posts"}
        />
      </section>
    </main>
  )
}
