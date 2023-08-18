"use client"
import dynamic from 'next/dynamic';
import Image from 'next/image'
import Link from 'next/link'
import { baseUrl } from '@/app/lib/baseUrl'
import { Slide , Box, Typography } from '@/app/lib/MuiSsr';
import { useRouter } from 'next/navigation';
import { Suspense } from 'react';
import LazyLoad from 'react-lazyload';
const Loading = dynamic(() => import('@/app/loading'),{
  ssr : false,
});
const SimilarBlog = ({data}) => {
  const router = useRouter()
   const dataItems = data ? data.articles : null
  return (
      <Box>
    <Slide bottom>
         <Typography variant='h5' sx={{fontSize : '25px', fontWeight : 'bold', marginBottom : '20px', textAlign : 'center'}}>مقالات مشابهه</Typography>
    </Slide>
      <Suspense fallback={<Loading/>}>
          { dataItems.map((item)=>{
      return (
      <Slide key={item.id} right>
        <LazyLoad height={"100%"} once>
        <Box sx={{display : 'flex',justifyContent : 'center', alignItems : 'center', flexDirection : 'column', margin : '50px 0px'}}>
        <Image onClick={()=> router.push(`/blog/${item.id}/${item.name.replace(/\s+/g, '-')}`)} src={`${baseUrl}/images?id=${item.imageId}`} width={600} height={600} loading='lazy' alt={item.name} style={{maxWidth : '40%', height : 'auto', border : '1px solid #dee2e6', borderRadius : '0.25rem', padding : '0.25rem', cursor : 'pointer'}}/>
        <Link aria-label={`${item.names}`} href={`/blog/${item.id}/${item.name.replace(/\s+/g, '-')}`} style={{fontSize : '20px', margin : '10px 0px'}}> {item.name}</Link>
      </Box>
        </LazyLoad>
      </Slide>
      )
      })}
      </Suspense>
</Box>
  )
}

export default SimilarBlog
