"use client"
import { createCache , CacheProvider, ThemeProvider , CssBaseline, createTheme  } from '@/app/lib/MuiSsr';
import { Cairo } from 'next/font/google';
import rtlPlugin from 'stylis-plugin-rtl';
import dynamic from 'next/dynamic';
import LazyLoad from 'react-lazyload';

const DrawerAppBar = dynamic(() => import('@/app/components/NavBar'),{
  ssr : false
});

const SocialFooter = dynamic(() => import('./footer/SocialFooter'),{
  ssr : false
});
const cache = createCache({
  key: 'css',
  prepend: true,
  stylisPlugins: [rtlPlugin],
});

const theme = createTheme({
  typography : {
    fontFamily : cairo.style.fontFamily
  },
  palette: {
    primary : {
        main : '#fff',
    },
    text:{
      primary: "#333",
    }
  },
  direction: 'rtl',
  
})

 const cairo = Cairo({ 
    subsets: ['latin'] ,
    display : 'swap',
    preload : true
  })

export default function LayoutContainer({ children }) {
  return (
      <div
       className={cairo.className}
       >
      <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
      <CssBaseline/>
         <>
             <DrawerAppBar/>
            {children}
           <LazyLoad height={"100%"} once offset={1000}>
                <SocialFooter/>
           </LazyLoad>
         </>
      </ThemeProvider>
    </CacheProvider>
      </div>
  )
}
