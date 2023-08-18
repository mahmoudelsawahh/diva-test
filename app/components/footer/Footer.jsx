"use client"
import { Box, Container, Grid, IconButton, Typography , PhoneIcon , EmailIcon , LocationOnIcon } from '@/app/lib/MuiSsr'
import Logo from '/public/diva-logo.png'
import Image from 'next/image'
import Link from 'next/link'
import DeltawyLogo from '/public/deltawy-logo.webp'
import { useRouter } from 'next/navigation'
import LazyLoad from 'react-lazyload'
const mainPage = [
  {
    id : 1,
    title : 'الرئيسية',
    slug : '/',
  },
  {
    id : 2,
    title : 'من نحن',
    slug : '/about' 
  },
  {
    id : 3,
    title : 'خدماتنا',
    slug : '/gallery' 
  },
  {
    id : 4,
    title : 'المقالات',
    slug : '/blog' 
  },
  {
    id : 5,
    title : 'اتصل بنا',
    slug : '/contact' 
  },
]

const Footer = () => {
  const router = useRouter()
  return (
    <>
      <Box sx={{padding : '0px 20px'}}>
      <Grid container sx={{alignItems : 'center'}}>
        <Grid item xs={12} xl={3} sx={{display : 'flex', flexDirection : 'column', justifyContent : 'center', alignItems : 'center'}}>
             <LazyLoad height={"100%"} once>
                 <Image src={Logo} onClick={()=> router.push(`${mainUrl}`)} alt='ديفا' width={140} style={{marginBottom : '20px'}} priority={true} />
             </LazyLoad>
          <Typography variant='h1' sx={{lineHeight : '30px', fontSize : '18px', fontWeight : 500 ,textAlign : 'center'}}>
              بإدارة مدام ديفا يسمح لك ديفا بإظهار جمالك الخاص وإطلاق العنان لشخصيتك الفريدة بغض النظر عن عمرك عن طريق إستخدام فن المكياج المحترف. وهو أكثر من مجرد إستخدام منتجات ذات جودة عالية. تتميز منتجات &quot; ديفا &quot; بألوانها الثابتة والأجمل أنها مموجة أي تعطيكي ألوان جديدة ومميزة ولها لمعة مميزة جداً وناعمة جداً على البشرة . مهمتنا هي تشجيعك على إستكشاف جوانب في شخصيتك وجمالك بطرق مختلفة لم تكتشفيها من قبل. لدينا مجموعة كبيرة من الألوان والإستايلات لخلق تأثيرات فريدة من نوعها تبرز جمالك وتعكس شخصيتك.
        </Typography>
          
        </Grid>
        <Grid item xs={12} xl={3} sx={{padding : '0px 40px'}}>
            <Typography className='footer-titles' variant='h1' sx={{fontSize : '20px', marginBottom : '40px',fontWeight : 'bold', textAlign : 'center', position : 'relative', marginTop : {xs : '30px', lg : '0'}}}>الصفحات  الرئيسية</Typography>
            {mainPage.map((item)=>{
              return (
                
                   <Box key={item.id}>
                        <ul>
                          <li>
                          <Typography variant='h1' sx={{margin : '25px 0px', fontSize : '25px', fontWeight : 70 , textAlign : 'center'}}>
                             <Link aria-label={`${item.title}`} href={item.slug} style={{ fontWeight : 500}} >{item.title}</Link>
                          </Typography>
                          </li>
                        </ul>
                      
                   </Box>
              
              )
            })}
        </Grid>
        <Grid item xs={12} xl={3} sx={{padding : '0px 40px'}}>
              
                 <Typography className='footer-titles' variant='h1' sx={{fontSize : '20px', fontWeight : 'bold', textAlign : 'center', position : 'relative',  marginBottom : '40px', marginTop : {xs : '10px', lg : '0'}}}>الصفحات  الداخلية</Typography>
                   {mainPage.map((item)=>{
                return (
                <Box key={item.id}>
                        <ul>
                          <li>
                          <Typography variant='h1' sx={{margin : '25px 0px', fontSize : '25px', fontWeight : 70 , textAlign : 'center'}}>
                             <Link aria-label={`${item.title}`} href={item.slug} style={{ fontWeight : 500}} >{item.title}</Link>
                          </Typography>
                          </li>
                        </ul>
                   </Box>
              
              )
            })}
              
        </Grid>
        <Grid item xs={12} xl={3} >
        
        <Typography className='footer-titles' variant='h1' sx={{fontSize : '20px', fontWeight : 'bold', textAlign : 'center', position : 'relative',  marginTop : {xs : '10px', lg : '0'}}}>الصفحات  الداخلية</Typography>
            <Box sx={{display : 'flex', alignItems : 'center', margin : '25px 0px', borderBottom : '1px solid #ddd', padding : '10px 0px'}}>
            <IconButton aria-label="أتيليه وميك أب أستوديو ديفا" sx={{ color : '#E60263', borderRadius : 0}} size='large'>
                    <PhoneIcon/>
                </IconButton>
                        <Link href={'tel:01200001315'} style={{fontSize : '20px'}} >01200001315</Link>
            </Box>
            <Box sx={{display : 'flex', alignItems : 'center', margin : '25px 0px', borderBottom : '1px solid #ddd', padding : '10px 0px'}}>
            <IconButton aria-label="أتيليه وميك أب أستوديو ديفا" sx={{ color : '#E60263', borderRadius : 0}} size='large'>
                    <EmailIcon/>
                </IconButton>
                        <Link href={'https://divaniceatelier@gmail.com'} style={{ fontSize : '20px'}} >divaniceatelier@gmail.com</Link>
            </Box>  
            <Box sx={{display : 'flex', alignItems : 'center', margin : '25px 0px', borderBottom : '1px solid #ddd', padding : '10px 0px'}}>
                <IconButton aria-label="أتيليه وميك أب أستوديو ديفا" sx={{ color : '#E60263', borderRadius : 0}} size='large'>
                    <LocationOnIcon/>
                </IconButton>
                        <Link aria-label='المحلة الكبرى شكري القوتلي اعلى فودافون' href={'اتيليه فساتين زفاف وافراح'} style={{ fontSize : '20px'}} >
                        المحلة الكبرى شكري القوتلي اعلى فودافون
                        </Link>
            </Box>
        
        </Grid>
      </Grid>
      </Box>
       
        <Box sx={{backgroundColor : '#1B1B1B', textAlign : 'center', height : '120px', overflow : 'hidden',
                margin : {xs : '25px 0px', md: '50px 0px 0px 0px'},
      display : 'flex', justifyContent : 'center', alignItems : 'center'
      }}>
            <Container maxWidth="xxl" fixed>
              <Box sx={{display : 'flex', justifyContent : 'center', alignItems : 'center', margin : '30px 0px'}}>
              <Typography variant='h1' style={{color : '#fff', fontSize : '20px', marginLeft : '10px'}}>
                <Link aria-label='جميع الحقوق محفوظة , دلتاوي نت'  style={{color : '#fff'}} href={'https://deltawy.com/'}> جميع الحقوق محفوظة , دلتاوي نت </Link>
              </Typography>
              <Image onClick={()=> router.push('https://deltawy.com/')} src={DeltawyLogo} alt='شركة برمجيات دلتاوي' width={130} height={130} loading='lazy'/>
              </Box>
            </Container>
      </Box>
      
    </>
  )
}

export default Footer