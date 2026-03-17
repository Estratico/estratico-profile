export interface IBlogPost{
    id:string,
    slug:string,
    title:string,
    description:string,
    content:string //markdown,
    author:string,
    status: "published"|"draft",
    coverImage: string,
    createdAt:string,
    updatedAt:string,
}