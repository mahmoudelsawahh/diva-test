"use client"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Box } from '@/app/lib/MuiSsr'
import LazyLoad from 'react-lazyload'

const iframeSrc = [
    {
       src : "https://www.youtube.com/embed/RySyL5xKN7A"
    },
    {
      src : "https://www.youtube.com/embed/IaLkcwBOmOk"
   },
   {
    src : "https://www.youtube.com/embed/f5eQ9yZk3Vc"
 },
 {
  src : "https://www.youtube.com/embed/98YGdA4LVjU"
},
 {
    src : "https://www.youtube.com/embed/MTnVhxme6hM"
 }

  ]

const DevaIframe = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [emblaRef] = useEmblaCarousel({direction : 'rtl', loop : true },
   [Autoplay({delay : 5000 })]
  )

  return (
    <div className="embla-iframe-video">
    <div className="embla-iframe-video__viewport" ref={emblaRef}>
      <div className="embla-iframe-video__container">
          {iframeSrc.map((item , id)=>{
            return (
                <Box className="embla-iframe-video__slide" key={id} sx={{flex : {xs :  '0 0 100%' , md :  '0 0 50%' , lg :  '0 0 33.3%'} }}>
                    <div className='embla-iframe-video__slide__img'>
                       <LazyLoad height={'100%'} once>
                       <iframe style={{border : '10px solid #fff', borderRadius : '10px'}} key={id} loading='lazy' src={item.src} 
                        title='ديفا أتيليه وميك أب أستوديو'
                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen width={'100%'} height={400}>                       
                         </iframe>
                       </LazyLoad>
                    </div>
                </Box>
            )
          })}
      </div>
    </div>
  </div>

    )
}

export default DevaIframe