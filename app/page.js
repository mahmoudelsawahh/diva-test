import dynamic from 'next/dynamic';
import generateRssFeed from '@/utils/generateRSSFeed';
import generateGallerySitemap from '@/utils/generateGallerySitemap';
const MainSlider = dynamic(() => import('./components/MainSlider'),{
  ssr : false,
});

const Footer = dynamic(() => import('./components/footer/Footer'),{
  ssr : false,
});


export const metadata = {
  title: "اتيليه فساتين زفاف وافراح",
}  
const MainPage = dynamic(() => import('./components/MainPage'),{
  ssr : false,
});

export default async function Home () {
  // await generateRssFeed();
  // await generateGallerySitemap()
  return (
    <>
          <MainSlider/>
          <MainPage/>
      <footer>
         <Footer/>
      </footer>
    </>
  )
}