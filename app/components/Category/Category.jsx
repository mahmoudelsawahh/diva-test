"use client"
import dynamic from 'next/dynamic';
import { Box, Button, Container, Grid, Typography, Slide } from '@/app/lib/MuiSsr'
import React, {useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { baseUrl } from '@/app/lib/baseUrl';
import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import LazyLoad from 'react-lazyload';
import divaBg from '/public/divanice.com_imgs_section-bg.webp'
import waveBg from '/public/divanice.com_imgs_waves.png'
const Loading = dynamic(() => import('@/app/loading'),{
  ssr : false
});

const data = [
  {
      id : 3,
      name : "خطوبة"
  },

  {
      id : 2,
      name : 'مشاهير'
  },
  {
      id : 1,
      name : "زفاف"
  },
]

const Category = () => {
  const [categoryData, setCategoryData] = useState(null)
  const [getId , setGetId] = useState(3);
  const router = useRouter();
  const slug = usePathname();


  useEffect(() => {
    fetch(`${baseUrl}/rest/tables.article/getPosts`,{
      method : 'POST',
      headers : {
        'Content-Type': 'application/json',
      },
      body : JSON.stringify({"id" : getId}),
    })
      .then((res) => res.json())
      .then((data) => {
        setCategoryData(data.data)
      })
  }, [getId])

  return (
    <Box sx={{position : 'relative', height : '100%'}}>
    <LazyLoad height={"100%"} once>
    <Image loading='lazy' src={waveBg} alt='ما الذي نقدمه من خدمات ؟' layout='full' height={75} style={{position : 'absolute' , top : 0, left : 0, transform: "rotate(180deg)", zIndex : 255, width : '100%'}}/> 
    </LazyLoad>
           <LazyLoad height={'100%'} once>
           <Image loading='lazy' src={divaBg} alt='ما الذي نقدمه من خدمات ؟' layout='responsive' objectFit='cover' className='image-responsive'/>
           </LazyLoad>
       <Box sx={{position : 'absolute', width : '100%', height : '100%', backgroundColor : 'rgba(254, 245, 246, .85)',  top : 0 , left : 0  }}></Box>
       <Container maxWidth="lg" sx={{textAlign : 'center', padding : '40px'}}>
        <Slide bottom>
              <Typography variant='body1' sx={{fontSize : '14px', fontWeight : 'bold' , color : '#E60263', marginTop : '50px'}}>المعرض </Typography>
              <Typography variant='h1' sx={{fontWeight : 'bold', position : 'relative', fontSize : '2rem', marginBottom : '60px'}} className='underline-service-title' >من اهم مايميزنا هو معرضنا </Typography>
        </Slide>
        <Slide right>
  <Box sx={{display : "flex",flexWrap : 'wrap', justifyContent : 'center', alignItems : 'center', margin : '50px 0px'}} className="category-content">
     {data.map((item)=>{
         return (
             <Button 
             onClick={()=> setGetId(item.id)}
              key={item.id} variant='contained' 
             sx={{width : '180px', fontSize : '20px', fontWeight : 'bold', ":hover" : {backgroundColor : '#E60263', color : '#fff'}, margin : '10px'}} 
              className={getId === item.id ? "active" : "no-active"}
             >
                 {item.name}
             </Button>
         )
     })}
  </Box>
  </Slide>
  <Grid container spacing={3}>
         {categoryData ? 
          categoryData.map((item)=>{
            return (
              <Grid item xs={12} lg={4} key={item.id}>
           <LazyLoad height={"100%"} once>
           <Slide bottom>
          <Box sx={{display : 'flex', justifyContent : 'space-between', alignItems : 'baseline', flexDirection : 'column', position : 'relative', height : '380px'}}>
          <Image onClick={()=> router.push(`/gallery/${item.id}/${item.name.replace(/\s+/g, '-')}`)} className='category-list' src={`${baseUrl}/images?id=${item.imageId}`} fill alt={item.name} style={{ border : '10px solid #fff', minHeight : '350px'}} loading='lazy' />
          </Box>
              <Link aria-label='هدفنا الأول والأخير هو جعلك تبرزين جمالك بوضع المكياج الذي يليق بكِ.' style={{ textAlign : 'center', width : '100%' , fontSize : '18px', fontWeight : 'bold', padding : '20px'}} className='category-link' href={`/gallery/${item.id}/${item.name.replace(/\s+/g, '-')}`}>{item.name}</Link>
              </Slide>
           </LazyLoad>
            </Grid>
            )
          })
         : <Loading/>}
      </Grid>
               <Box sx={{display : slug === "/" ? "flex": "none", flexDirection : 'column', alignItems : 'center', margin : '50px 0px'}}>
                 <Button 
                 onClick={()=> router.push(`/gallery`)} variant='contained' 
                    sx={{width : '180px', fontSize : '20px', fontWeight : 'bold',backgroundColor : '#E60263', ":hover" : {backgroundColor : '#E60263'},color : '#fff', margin : '0px 10px',
                    }} 
                      >
                 المزيد
             </Button>
               </Box>
    </Container>
   <LazyLoad height={'100%'} once>
   <Image loading='lazy' src={waveBg} layout='full' alt='ما الذي نقدمه من خدمات ؟' height={75} style={{position : 'absolute' , bottom : 0, left : 0, zIndex : 255, width : '100%'}}/> 
   </LazyLoad>
   </Box>
  )
}

export default Category