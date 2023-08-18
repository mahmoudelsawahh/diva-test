"use client"
import { Box, Container, Grid, Typography} from '@/app/lib/MuiSsr';
import dynamic from 'next/dynamic';
const ContactForm = dynamic(() => import('./ContactForm'),{
  ssr : false
});
const FormWrapper = () => {
  return (
    <>
      <Container maxWidth="lg" fixed>
        <Grid container rowSpacing={3}>
          <Grid item xs={12} lg={6}>
              <ContactForm />
          </Grid>
          <Grid item xs={12} lg={6} >
              <Box sx={{ borderBottom: '1px solid #ddd', paddingBottom: '25px' }}>
                <Typography variant='h3' sx={{ color: '#E60263', fontSize: '25px', fontWeight: 'bold' }}>العنوان</Typography>
                <Typography variant='body1' sx={{ fontSize: '25px', color: '#808080', margin: '15px 0px' }}> شارع البحر - بجوار مستشفى 6 أكتوبر - أسفل مطعم كزا روزا </Typography>
              </Box>
              <Box sx={{ borderBottom: '1px solid #ddd', paddingBottom: '25px', margin: '30px 0px' }}>
                <Typography variant='h3' sx={{ color: '#E60263', fontSize: '25px', fontWeight: 'bold' }}>معلومات التواصل</Typography>
                <Typography variant='body1' sx={{ fontSize: '25px', color: '#808080', margin: '15px 0px' }}>info@deltawy.com</Typography>
                <Typography variant='body1' sx={{ fontSize: '25px', color: '#808080', margin: '15px 0px', direction: 'rtl', textAlign: 'end' }}>+20111 165 0556</Typography>

              </Box>
              <Box sx={{ borderBottom: '1px solid #ddd', paddingBottom: '25px', margin: '30px 0px' }}>
                <Typography variant='h3' sx={{ color: '#E60263', fontSize: '25px', fontWeight: 'bold' }}>ساعات العمل</Typography>
                <Typography variant='body1' sx={{ fontSize: '25px', color: '#808080', margin: '15px 0px' }}> يوميا من 12:00 م الي 01:00 ص </Typography>
                <Typography variant='body1' sx={{ fontSize: '25px', color: '#808080', margin: '15px 0px' }}>  يوم الجمعة من 03:00 م الي 01:00 ص </Typography>
              </Box>
          </Grid>

        </Grid>
      </Container>
    </>
  )
}

export default FormWrapper