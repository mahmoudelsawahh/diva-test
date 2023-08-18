import { getArticleData, getCategoryData } from "./lib/DataFetching";

export default async function sitemap(){
    const baseUrl = "http://divanice.com";
    const posts = await getArticleData();
    const category = await getCategoryData();
    const postsUrl = posts? posts.data.map((post)=>{
        return {
            url : `${baseUrl}/${post.name}`,
            lastModified : new Date()
        }
    }) : []

    const categoryUrl = category? category.data.map((item)=>{
        return {
            url : `${baseUrl}/${item.name}`,
            lastModified : new Date()
        }
    }) : []
    return [
        {
            url: 'http://divanice.com',
            lastModified: new Date(),
          },
          {
            url: 'http://divanice.com/about',
            lastModified: new Date(),
          },
          {
            url: 'http://divanice.com/blog',
            lastModified: new Date(),
          },
          {
            url: 'http://divanice.com/gallery',
            lastModified: new Date(),
          },
          {
            url: 'http://divanice.com/contact',
            lastModified: new Date(),
          },
          {
            url: 'http://divanice.com/sitemap.xml',
            lastModified: new Date(),
          },
          {
            url: 'http://divanice.com/sitemap-category.xml',
            lastModified: new Date(),
          },
          {
            url: 'http://divanice.com/sitemap-blog.xml',
            lastModified: new Date(),
          },
        ...postsUrl,
        categoryUrl,

    ]
}