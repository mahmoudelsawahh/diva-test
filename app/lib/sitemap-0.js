import { getCategoryData } from "./DataFetching";

export default async function sitemap(){
    const baseUrl = "http://divanice.com";
    const posts = await getCategoryData();
    const postsUrl = posts? posts.data.map((post)=>{
        return {
            url : `${baseUrl}/${post.name}`,
            lastModified : new Date()
        }
    }) : []
    return [
        {
            url : baseUrl,
            lastModified : new Date()
        },
        ...postsUrl
    ]
}