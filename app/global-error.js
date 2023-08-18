'use client'

import dynamic from 'next/dynamic';

const Loading = dynamic(() => import('@/app/loading'),{
  ssr : false,
});

export const metadata = {
  title: "اتيليه فساتين زفاف وافراح",
}

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <h1 style={{textAlign : 'center', fontSize : '40px'}}>Something went wrong!</h1>
        <Loading/>
      </body>
    </html>
  )
}