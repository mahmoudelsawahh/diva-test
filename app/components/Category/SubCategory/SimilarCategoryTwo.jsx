import dynamic from 'next/dynamic';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import LazyLoad from 'react-lazyload';
import { Box, Container, Typography , Slide} from '@/app/lib/MuiSsr';
import Link from 'next/link';
const Loading = dynamic(() => import('@/app/loading'),{
  ssr : false
});
import { baseUrl } from '@/app/lib/baseUrl';
import { useRouter } from 'next/navigation';
import { Suspense } from 'react';
const SimilarCategoryTwo = ({data}) => {
  const router = useRouter()
  const [emblaRef] = useEmblaCarousel({direction : 'rtl', loop : true },
  [Autoplay({delay : 5000 })])
  return (
      <Container maxWidth="xl" fixed sx={{border : '2px solid #eee', padding : '15px'}}>
         <Box>
             <Typography variant='h1' sx={{fontSize : '25px', margin : '50px 0px', position : 'relative', fontWeight : 'bold'}}>البومات اخري</Typography>
          </Box>
          <Slide right>
             <div className="embla-iframe-video">
         <div className="embla-iframe-video__viewport" ref={emblaRef}>
         <div className="embla-iframe-video__container">
          <Suspense fallback={<Loading/>}>
            {data.map((item)=>{
               return (
                            <Box className="embla-iframe-video__slide" key={item.id} sx={{flex : {xs :  '0 0 100%' , md :  '0 0 50%' , lg :  '0 0 33.3%'} }}>
                                <div className='embla-iframe-video__slide__img'>
                                   <LazyLoad height={'100%'} once>
                                      <Box sx={{ textAlign : 'center', margin : '0px 40px'}} >
                                          <Image onClick={()=> router.push(`/gallery/${item.id}/${item.name.replace(/\s+/g, '-')}`)} className='category-slider-photo' 
                                            src={`${baseUrl}/images?id=${item.imageId}`} alt={item.name} layout='fill'/>
                                            <Link style={{ fontSize : '20px', textAlign : 'center'}} href={`/gallery/${item.id}/${item.name.replace(/\s+/g, '-')}`}> {item.name} </Link>
                              </Box>
                                   </LazyLoad>
                                 </div>
                              </Box>
                    )
             })}
          </Suspense>



        </div>
        </div>
      </div>
          </Slide>
      </Container>
  )
}

export default SimilarCategoryTwo














