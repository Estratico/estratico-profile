import Link from "next/link"
import Avatar from "./avatar"
import Date from "./date"
import CoverImage from "./cover-image"
import { IBlogPost } from "@/utils/types/db"

export function PostPreview({
  post
}: {post:IBlogPost}) {

  return (
    <div>
      <div className="mb-5">
        <CoverImage
          title={post.title}
          slug={post.slug}
          url={post.coverImage}
          width={700}
          height={700}
          className="aspect-video"
        />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/blog/${post.slug}`} className="hover:underline">
          {post.title}
        </Link>
      </h3>
      <div className="text-base dark:text-white/60 text-black/60 mb-4">
        <Date dateString={post.updatedAt} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{post.description}</p>
      {post.author && <Avatar title={post.author} url={"https://i0.wp.com/www.shutterstock.com/blog/wp-content/uploads/sites/5/2024/06/profile_photo_sample_1.jpg?ssl=1"} />}
    </div>
  )
}
