"use client"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import firstBg from '/public/divanice.com_imgs_diva2.webp'
import secondBg from '/public/divanice.com_imgs_diva3.webp'
import { Typography } from '@/app/lib/MuiSsr'
import dynamic from 'next/dynamic'
const MainSlider = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [emblaRef] = useEmblaCarousel({direction : 'rtl', loop : true }, [Autoplay({
    delay : 5000
  })])

  return (
     <>
       <div className="embla">
    <div className="embla__viewport" ref={emblaRef}>
      <div className="embla__container">
          <div className="embla__slide">
          <div className="slide-content">
                    {/* <Typography variant='h1' sx={{fontSize : '15px', fontWeight : 'bold', textAlign : 'center'}}>أتيليه وميك أب أستوديو ديفا</Typography>
			        <Typography sx={{fontSize : "2.3rem" , fontWeight : 'bold', marginBottom : '12px', textAlign : 'center'}}>أكبر أتيليه وميك أب ستوديو في المحلة الكبرى</Typography>
			        <Typography variant='body1' sx={{fontSize : {xs : '20ox', md : '25px'}, textAlign : 'center'}}>مرحباً بكم في &quot; ديفا &quot; أتيليه وميك أب أستوديو</Typography> */}
		      	</div>
            <Image
              className="embla__slide__img"
              src={firstBg}
              layout='responsive'
              alt="أتيليه وميك أب أستوديو ديفا"
              loading='lazy'
            />
          </div>
          <div className="embla__slide">
          <div className="slide-content">  
			         {/* <Typography sx={{fontSize : "2.5rem" , fontWeight : 'bold', margin : '12px', textAlign : 'center'}}>نحن فخورون بتقديم خدماتنا للنساء في المحلة الكبرى بشكل خاص وجمهورية مصر العربية بشكل عام</Typography> */}
	    		</div>
            <Image
              className="embla__slide__img"
              src={secondBg}
              alt="أتيليه وميك أب أستوديو ديفا"
              layout='responsive'
              loading='lazy'
            />
          </div>
      </div>
    </div>
  </div>

     </>
    )
}

export default MainSlider