
import dynamic from 'next/dynamic';
const ContactTitle = dynamic(() => import('../components/ContactPage/ContactTitle'),{
  ssr : false
});
const FormWrapper = dynamic(() => import('../components/ContactPage/FormWrapper'),{
  ssr : false
});
const InstagramBanner = dynamic(() => import('../components/InstagramBanner/InstagramBanner'),{
  ssr : false
});

const Footer = dynamic(() => import('@/app/components/footer/Footer'),{
  ssr : false
});

export const metadata = {
  title: "اتيليه فساتين زفاف وافراح",
}

const Contact = () => {
  return (
      <>
         <main>
         <section className='contact'>
            <ContactTitle/>
          </section>
          <section className='email-form'>
            <FormWrapper/>
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

export default Contact