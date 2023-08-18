import dynamic from 'next/dynamic'
 
const Service = dynamic(() => import('../components/Service/Service'),{
  ssr : false
})
const InstagramBanner = dynamic(() => import('../components/InstagramBanner/InstagramBanner'),{
  ssr : false
})

const Footer = dynamic(() => import('@/app/components/footer/Footer'),{
  ssr : false
});

export const metadata = {
  title: "اتيليه فساتين زفاف وافراح",
}
const About = () => {
  return (
    <>
       <main>
       <section>
            <Service/>
        </section>
        <section>
          <InstagramBanner/>
        </section>
       </main>
       <footer>
          <Footer/>
       </footer>
    </>
  )
}

export default About