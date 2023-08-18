"use client"
import dynamic from 'next/dynamic';
import LazyLoad from 'react-lazyload';
const Distinguishes = dynamic(() => import('./Distinguishes/Distinguishes'),{
  ssr : false,
});
const AboutUs = dynamic(() => import('./about-homePage/AboutUs'),{
  ssr : false,
});
const Service = dynamic(() => import('./Service/Service'),{
  ssr : false,
});
const Goals = dynamic(() => import('./Goals/Goals'),{
  ssr : false,
});
const DevaStudioVideo = dynamic(() => import('./DevaStudioVideo/DevaStudioVideo'),{
  ssr : false,
});
const LatestNews = dynamic(() => import('./latestNews/LatestNews'),{
  ssr : false,
});
const InstagramBanner = dynamic(() => import('./InstagramBanner/InstagramBanner'),{
  ssr : false,
});
const Category = dynamic(() => import('./Category/Category'),{
  ssr : false,
});
const MainPage = () => {
  return (
    <>
      <section>
        <AboutUs/>
      </section>
     <section>
        <Service/>
      </section>
      <section>
        <Goals/>
      </section>
      <section>
        <DevaStudioVideo/>
      </section>
      <LazyLoad height={"500px"} once>
      <section>
       <Category/>
      </section>
      </LazyLoad>
      <section>
        <Distinguishes/>
      </section>
       <LazyLoad height={"500px"} once>
       <section>
       <LatestNews/>
      </section>
       </LazyLoad>
      <section>
        <InstagramBanner/>
      </section>
      
    </>
  )
}

export default MainPage