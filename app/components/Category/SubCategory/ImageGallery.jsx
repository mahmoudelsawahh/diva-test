import dynamic from 'next/dynamic'
/* eslint-disable @next/next/no-img-element */
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import LightGallery from 'lightgallery/react';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import { baseUrl } from '@/app/lib/baseUrl';
import { Suspense } from 'react';
const Loading = dynamic(() => import('@/app/loading'),{
  ssr : false
});
const ImageGallery = ({data}) => {
const dataItems = data.images
  return (
         <LightGallery
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
              <Suspense fallback={<Loading/>}>
               {dataItems.map((item, id)=>{
                return (
                  <>
                  <a key={id}
          data-lg-size="1406-1390"
          className="gallery-item"
          data-src={`${baseUrl}/images?id=${item.large}`}
          data-sub-html={data.name}
            >
          <img
            className="img-responsive"
            src={`${baseUrl}/images?id=${item.small}`}
            style={{width : '100px', height : '100px', margin : '15px', border : '3px solid #001', cursor : 'pointer'}} loading='lazy'
            alt={data.name}
          />
        </a>
                  </>
                )
               })
               }
            </Suspense>
            </LightGallery>
  )
}

export default ImageGallery