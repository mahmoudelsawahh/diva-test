import dynamic from 'next/dynamic'
import { Container, Grid } from '../../lib/MuiSsr' 
import {getBlogData } from '@/app/lib/DataFetching'
import { Suspense } from 'react';
const Loading = dynamic(() => import('@/app/loading'),{
  ssr : false
});const InstagramBanner = dynamic(() => import('@/app/components/InstagramBanner/InstagramBanner'));
const SimilarBlog = dynamic(() => import('@/app/components/blog-Page/sub-blog/SimilarBlog'), {
})
const SubBlogContent = dynamic(() => import('@/app/components/blog-Page/sub-blog/SubBlogContent'), {
})
const SubBlogTitle = dynamic(() => import('@/app/components/blog-Page/sub-blog/SubBlogTitle'), {
})
const Footer = dynamic(() => import('@/app/components/footer/Footer'),{
  ssr : false
});


export const metadata = {
  title: "اتيليه فساتين زفاف وافراح",
}

export default async function  BlogId ({params}) {

  const data = await getBlogData(Number(params.id[0]))
  metadata.title = data.name
 
  return (
    <>
    <main>
    <section className='sub-blog'>  
    <Container maxWidth="lg" fixed >
        <Grid container sx={{marginTop : '140px', display : 'flex', flexDirection : {xs : 'column-reverse', lg : 'row'}}}>
           <Grid item xs={12} lg={5}>
               <SimilarBlog data={data}/>
            </Grid>
         <Grid item xs={12} lg={7} sx={{display : 'flex', alignItems : 'center', flexDirection : 'column'}}>
                <SubBlogTitle/>
                <section style={{width : '100%'}}>
                     <Suspense fallback={<Loading/>}>
                        <SubBlogContent data={data}/>
                     </Suspense>
                </section>
          </Grid>
        </Grid>
      <InstagramBanner/>
    </Container>
  </section>
    </main>
  <footer>
         <Footer/>
      </footer>
      </>
  )
}


