import Link from "next/link"
import Date from "./date"
import CoverImage from "./cover-image"
import Avatar from "./avatar"
import { IBlogPost } from "@/utils/types/db"

export function HeroPost({post}:{post:IBlogPost}) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage
          title={post.title}
          slug={post.slug}
          url={post.coverImage}
          width={1500}
          height={1000}
          className="max-h-[50vh] min-h-75"
          priority
        />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link href={`/blog/${post.slug}`} className="hover:underline">
              {post.title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-base dark:text-white/60 text-black/60">
            <Date dateString={post.updatedAt} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{post.description}</p>
          {post.author && <Avatar title={post.author} url={"https://i0.wp.com/www.shutterstock.com/blog/wp-content/uploads/sites/5/2024/06/profile_photo_sample_1.jpg?ssl=1"} />}
        </div>
      </div>
    </section>
  )
}
