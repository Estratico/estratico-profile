import { RichText } from "basehub/react-rich-text"
import { CodeBlock } from "basehub/react-code-block"
import CoverImage from "./cover-image"
import Avatar from "./avatar"
import Date from "./date"
import { BodyImage } from "./body-image"
import { IBlogPost } from "@/utils/types/db"
import MarkdownPreviewer from "@/components/layout/MDPreview"

export function Post({post }:{post:IBlogPost}) {
  return (
    <article>
      <h1 className="mb-12 text-center text-6xl font-bold leading-tight tracking-tighter md:text-left md:text-7xl md:leading-none lg:text-8xl">
        {post.title}
      </h1>

      <div className="hidden md:block md:mb-6">
        {post.author && <Avatar title={post.author} url={"https://lh3.googleusercontent.com/a/ACg8ocKEQTH4sEhynUcvFsz5MsWwr6bzvb5xXIbDRfK236-a-Eb1uI6Q=s360-c-no"}/>}
      </div>
      <div className="hidden md:block md:mb-12 text-base dark:text-white/60 text-black/60">
        <Date dateString={post.updatedAt} />
      </div>

      <div className="mb-8 sm:mx-0 md:mb-16">
        <CoverImage
          title={post.title}
          url={post.coverImage}
          width={1500}
          height={1000}
          priority
        />
      </div>

      <div className="mx-auto max-w-2xl">
        <div className="mb-6 block md:hidden">
        {post.author && <Avatar title={post.author} url={"https://i0.wp.com/www.shutterstock.com/blog/wp-content/uploads/sites/5/2024/06/profile_photo_sample_1.jpg?ssl=1"}/>}
        </div>
        <div className="mb-12 text-base dark:text-white/60 text-black/60 block md:hidden">
          <Date dateString={post.updatedAt} />
        </div>
      </div>

      <div className="mx-auto max-w-2xl">
        <div className="prose-content">
           <MarkdownPreviewer content={post.content} /> 
        </div>
      </div>
    </article>
  )
}
