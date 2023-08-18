import { getCategoryDetail } from '@/app/lib/DataFetching'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const SubCategory = dynamic(() => import('@/app/components/Category/SubCategory/SubCategory'), {
    ssr: false,
  })
  const Loading = dynamic(() => import('@/app/loading'),{
    ssr : false
  });
  const Footer = dynamic(() => import('@/app/components/footer/Footer'),{
    ssr : false
  });

  export const metadata = {
    title: "اتيليه فساتين زفاف وافراح",
  }  
  export default async function SubCategoryPage ({params}) {
    const data = await getCategoryDetail(Number(params.id[0]))
    metadata.title = data.name

  return (
    <>
      <main>
      <section style={{marginTop : '120px'}}>
      <Suspense fallback={<Loading/>}>
          <SubCategory data={data}/>
      </Suspense>
    </section>
      </main>
    <footer>
         <Footer/>
      </footer>
    </>
  )
}
