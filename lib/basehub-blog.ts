import { basehub } from "basehub";
import { IBlogPost } from "@/utils/types/db";

/**
 * Query structure for fetching blog posts from BaseHub
 * This structure matches the IBlogPost interface
 */
const blogPostQuery = {
  posts: {
    items: {
      _id: true,
      _slug: true,
      _title: true,
      description: true,
      content: {
        json: {
          content: true,
        },
      },
      author: true,
      status: true,
      coverImage: {
        url: true,
        alt: true,
        aspectRatio: true,
      },
      createdAt: true,
      updatedAt: true,
    },
  },
};

/**
 * Fetch all blog posts from BaseHub
 * Filters for published posts only
 */
export async function getAllBlogPosts(): Promise<IBlogPost[]> {
  try {
    const data = await basehub().query(blogPostQuery);

    // Transform BaseHub response to IBlogPost structure
    if (!data.posts.items || !Array.isArray(data.posts.items)) {
      return [];
    }

    const formatted_data =  data.posts.items
      .map((post: any) => ({
        id: post._id || "",
        slug: post._slug || "",
        title: post._title || "",
        description: post.description || "",
        content: post.content.json.content || "",
        author: post.author || "",
        status: post.status || "draft",
        coverImage: post.coverImage.url || "",
        createdAt: post.createdAt || new Date().toISOString(),
        updatedAt: post.updatedAt || new Date().toISOString(),
      }))
      .filter((post: IBlogPost) => post.status === "published")
      .sort(
        (a: IBlogPost, b: IBlogPost) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
      return formatted_data
  } catch (error) {
    console.error("Error fetching blog posts from BaseHub:", error);
    return [];
  }
}

/**
 * Fetch a single blog post by ID from BaseHub
 */
export async function getBlogPostById(id: string): Promise<IBlogPost | null> {
  try {
    const posts = await getAllBlogPosts();
    return posts.find((post) => post.id === id) || null;
  } catch (error) {
    console.error(`Error fetching blog post with ID ${id}:`, error);
    return null;
  }
}
/**
 * Fetch a single blog post by ID from BaseHub
 */
export async function getBlogPostBySlug(slug: string): Promise<IBlogPost | null> {
  try {
    const posts = await getAllBlogPosts();
    return posts.find((post) => post.slug === slug) || null;
  } catch (error) {
    console.error(`Error fetching blog post with Slug ${slug}:`, error);
    return null;
  }
}

/**
 * Fetch blog posts for pagination
 */
export async function getBlogPostsPaginated(
  page: number = 1,
  limit: number = 10,
): Promise<{ posts: IBlogPost[]; total: number; pages: number }> {
  try {
    const posts = await getAllBlogPosts();
    const total = posts.length;
    const pages = Math.ceil(total / limit);
    const start = (page - 1) * limit;
    const paginatedPosts = posts.slice(start, start + limit);

    return {
      posts: paginatedPosts,
      total,
      pages,
    };
  } catch (error) {
    console.error("Error fetching paginated blog posts:", error);
    return {
      posts: [],
      total: 0,
      pages: 0,
    };
  }
}

/**
 * Get blog post slugs for static generation
 */
export async function getBlogPostSlugs(): Promise<string[]> {
  try {
    const posts = await getAllBlogPosts();
    return posts.map((post) => post.slug);
  } catch (error) {
    console.error("Error fetching blog post slugs:", error);
    return [];
  }
}
