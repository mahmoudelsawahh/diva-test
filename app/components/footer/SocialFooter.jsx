"use client"
import { Box, IconButton , PhoneIcon , WhatsAppIcon } from '@/app/lib/MuiSsr'
import Image from 'next/image';
import massengerLogo from '/public/messenger.png.png'
import { useRouter } from 'next/navigation';
import LazyLoad from 'react-lazyload';
const SocialFooter = () => {
  const router = useRouter()
  return (
    <>
      <Box sx={{display : {xs : 'none', md : 'block'}}}>
         <ul style={{position : 'fixed', right : '20px', bottom : 0, paddingBottom : '20px', zIndex : 454545454545, marginBottom : '1rem'}}>
            <li style={{listStyle : 'none', marginBottom : '10px'}}>                
                <IconButton size='large' type='button' title='btn-phoneNumber' onClick={()=> router.push('tel:01200001315')}>
                  <LazyLoad height={"100%"} once>
                    <PhoneIcon 
                     sx={{fontSize : '50px', color : '#fff', borderRadius : '50%',
                      textAlign : 'center', height : '50px',
                       width : '50px', lineHeight : '50px', backgroundColor : '#379d00' ,border : '1px solid #379d00', padding : '10px', 
                       }}

                       />
                  </LazyLoad>
                </IconButton>
            </li>
            <li style={{listStyle : 'none', marginBottom : '10px'}}>
                <IconButton size='large' type='button' title='btn-whatsapp' onClick={()=> router.push('https://wa.me/+201200001315')} >
                  <LazyLoad height={"100%"} once>
                    <WhatsAppIcon 
                     sx={{fontSize : '50px', color : '#fff', borderRadius : '50%',
                      textAlign : 'center', height : '50px',
                       width : '50px', lineHeight : '50px', backgroundColor : '#379d00' ,border : '1px solid #379d00', padding : '10px'
                       }}
                       />
                   </LazyLoad>
                </IconButton>
            </li>
            <li style={{listStyle : 'none', marginBottom : '10px'}}>
                <IconButton size='large' type='button' title='btn-massenger' onClick={()=> router.push('https://www.messenger.com/t/Divaniicce/')}>
                    <LazyLoad height={"100%"}>
                    <Image  src={massengerLogo} alt='massengerLogo' loading='lazy'
                    style={{fontSize : '50px', color : '#fff', borderRadius : '50%',
                      textAlign : 'center', height : '50px',
                       width : '50px', lineHeight : '50px', backgroundColor : '#007bff' ,border : '1px solid #007bff', padding : '10px'}}
                    />
                    </LazyLoad>
                </IconButton>
            </li>
          </ul>
        </Box>
        <Box sx={{display : {xs : 'block', md : 'none'}}}>
        <Box sx={{position : 'fixed' , width : '100%', zIndex : 1, bottom : 0, backgroundColor : '#ddd', display : 'flex', justifyContent : 'space-between', alignItems : 'center'}}>
             <Box onClick={()=> router.push('https://www.messenger.com/t/Divaniicce/')} sx={{backgroundColor : '#007bff', width : '100%', textAlign : 'center', height : '100%',  padding : '4px 0px'}}>
                <LazyLoad height={"100%"} once>
                <Image  src={massengerLogo} alt='الصفحة الرسمية لميك اب واتيليه ديفا'  loading='lazy'
                 style={{color : '#fff',width : '24px', height : '24px', fontSize : '1.5rem'}}
                />
                </LazyLoad>
            </Box>
            <Box  onClick={()=> router.push('tel:01200001315')} sx={{backgroundColor : '#379d00', width : '100%', textAlign : 'center', padding : '4px 0px'}}>
                <LazyLoad height={"100%"} once>
                    <PhoneIcon sx={{color : '#fff', fontSize : '24px'}}/>
                </LazyLoad>
            </Box>
            <Box onClick={()=> router.push('https://wa.me/+201200001315')} sx={{backgroundColor : 'rgb(37, 211, 102)', width : '100%', textAlign : 'center',  padding : '4px 0px'}}>
                <LazyLoad height={"100%"} once>
                    <WhatsAppIcon sx={{color : '#fff', fontSize : '24px'}}/>
                </LazyLoad>
            </Box>
        </Box>
        </Box>
    </>
  )
}

export default SocialFooter