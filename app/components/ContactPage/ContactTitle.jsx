"use client"
import {  Container, Typography, Box} from '@/app/lib/MuiSsr';
const ContactTitle = () => {
  return (
    <>
     <Container maxWidth="lg" fixed sx={{textAlign : 'center'}}>
        <Box sx={{paddingBottom: '40px', borderBottom: '1px solid #ddd' ,  textAlign: "center",marginBottom: '70px' , position: 'relative'}} className='contact-head'>
               <Typography variant='h4' sx={{fontWeight : 700, fontSize : '2rem', marginTop : '100px'}}>تواصل معنا</Typography>
                 <Typography variant='subtitle1' sx={{marginTop : '10px', color : '#808080', fontSize : '25px'}}>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ</Typography>
        </Box>
    </Container>
    </>
  )
}

export default ContactTitle