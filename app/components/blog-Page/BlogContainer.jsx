import dynamic from 'next/dynamic';
import { getArticleData } from '/app/lib/DataFetching.js'
const SubBlog = dynamic(() => import('./SubBlog'),{
  ssr : false
})
const BlogContainer = async() => {
  const data = await getArticleData();
  return (
    <>
          <SubBlog data={data.data}/>
     </>
  )
}

export default BlogContainer