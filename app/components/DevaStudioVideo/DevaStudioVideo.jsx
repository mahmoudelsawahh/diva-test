"use client"
import { Typography, Box } from '@/app/lib/MuiSsr'
import Image from 'next/image';
import bgDiva from "/public/divanice.com_imgs_video-background.webp"
import dynamic from 'next/dynamic';
import LazyLoad from 'react-lazyload';
const DevaIframe = dynamic(() => import('./DevaIframe'),{
  ssr : false,
});

const DevaStudioVideo = () => {
  return (
    <div style={{position : 'relative', clipPath: 'inset(0 0 0 0)',}}>
          <LazyLoad height={'100%'} once >
              <Image src={bgDiva} alt='bgDiva' layout='responsive' objectFit='cover' className='iframe-responsive'/>
           </LazyLoad>
         <Box sx={{position : 'absolute', width : '100%', height : '100%', backgroundColor : 'rgb(229, 2, 99, .85)',  top : 0 , left : 0  }}></Box>
         <Box sx={{position : 'relative', padding : '40px 0px'}}>
                     <Typography variant='h1' sx={{marginBottom : '40px', textAlign : 'center', color : '#fff', fontSize : '2rem', fontWeight : 'bold'}}>ديفا أتيليه وميك أب أستوديو</Typography>
                   <DevaIframe/>
        </Box>
   </div>
  )
}

export default DevaStudioVideo