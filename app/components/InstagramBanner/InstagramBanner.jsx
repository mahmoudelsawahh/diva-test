import { Button, Container, Typography } from '@/app/lib/MuiSsr'
import Link from 'next/link'
const InstagramBanner = () => {
  return (
     <Container maxWidth="xl" fixed>
             <Typography variant='h1' sx={{fontSize : '2.5rem', fontWeight : 'bold', margin : '40px 0px', lineHeight : '90px'}}>تابع احدث الصور والعروض علي صفحتنا علي <br/> Instagram </Typography>
           <Link href={'https://www.instagram.com/diva_atelier100'}>
           <Button aria-label="الانتقال الي الصفحة" title='الانتقال الي الصفحة' name="link" role="link"
           variant='contained' sx={{backgroundColor : "#E60263", color : '#fff', fontWeight : 'bold', fontSize : '25px', ":hover" : {backgroundColor : '#E60263'}}}>الانتقال الي الصفحة</Button>
           </Link>
    </Container>

  )
}

export default InstagramBanner