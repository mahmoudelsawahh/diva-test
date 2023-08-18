"use client"
import dynamic from 'next/dynamic';
import Image from 'next/image'
import { baseUrl } from '@/app/lib/baseUrl'
import { Box, Typography } from '@/app/lib/MuiSsr';
import { Suspense } from 'react';
import LazyLoad from 'react-lazyload';
const Loading = dynamic(() => import('@/app/loading'),{
   ssr : false,
 });
const SubBlogContent = ({data}) => {
  return (
         <Suspense fallback={<Loading/>}>
            {
               data ? 
            <Box>
               <LazyLoad height={"100%"} once>
               <Box sx={{display : 'flex', justifyContent : 'center'}}>      
                 <Box sx={{height : '400px', width : '100%',position : 'relative'}}>
              <Image src={`${baseUrl}/images?id=${data.imageId}`} layout='fill' alt={data.name} style={{height : '100%'}} className='imageSize'/>
               <Typography variant='h6' className='sub-blog-Image-title'>{data.name}</Typography>
              </Box>
               </Box>
                   <Typography sx={{padding : '40px 0px', fontWeight : 'bold'}} variant='h4'>{data.name}</Typography>
                  <div className='api-blog-data' dangerouslySetInnerHTML={{__html: data.description}}/>
               </LazyLoad>
               </Box>
               : <Loading/>
            }
         </Suspense>
  )
}

export default SubBlogContent