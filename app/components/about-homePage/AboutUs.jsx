"use client"
import {Container, Grid } from '@/app/lib/MuiSsr';
import dynamic from 'next/dynamic';
import WhyUs from './whyUs';
const AboutIframe = dynamic(() => import('./AboutIframe'),{
  ssr : false,
  loading: () => <div>Loading...</div>
});

const AboutUs = () => {

  return (
     <Container maxWidth="xl" fixed>
        <Grid container rowSpacing={0} sx={{flexDirection : {xs : 'column-reverse', md : 'row'}}}>
            <Grid item xs={12} md={6} >
                    <WhyUs/>
            </Grid>
            <Grid item xs={12} md={6}>
                <AboutIframe/>
            </Grid> 
        </Grid>
    </Container>
  )
}

export default AboutUs