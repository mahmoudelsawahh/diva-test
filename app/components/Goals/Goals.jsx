"use client"
import {Container, Grid, Typography} from '@/app/lib/MuiSsr';
import dynamic from 'next/dynamic';
const RightGoals = dynamic(() => import('./RightGoals'),{
  ssr : false,
});

const Goals = () => {
  return (
      <Container maxWidth="xxl" fixed>
        <Grid container>
          
          <Grid item xs={12} md ={6} sx={{display : {xs : 'block', md : 'flex'}, justifyContent : 'center',  flexDirection : 'column'}}>
             <Typography variant='h1' sx={{color : '#E60263', fontWeight : 700, fontSize : '14px', marginBottom : '5px', width : '100%', }}>مايهمنا ان نسعي نحو الأفضل دائما</Typography>
            <Typography variant='h1' sx={{position : 'relative', paddingBottom : '20px', fontWeight : 'bold', fontSize : '35px', lineHeight : '50px'}} className='goals-title'>اهداف ديفا التي تسعي الي تحقيقها</Typography>
          </Grid>
           <Grid item xs={12} md={6}>
             <RightGoals/>
          </Grid>
        </Grid>
         <Typography variant='body1' sx={{textAlign : 'center' ,fontWeight : 400 , fontSize : '25px'}}>
             بإدارة مدام ديفا يسمح لك ديفا بإظهار جمالك الخاص وإطلاق العنان لشخصيتك الفريدة بغض النظر عن عمرك عن طريق إستخدام فن المكياج المحترف. وهو أكثر من مجرد إستخدام منتجات ذات جودة عالية. تتميز منتجات &quot; ديفا &quot; بألوانها الثابتة والأجمل أنها مموجة أي تعطيكي ألوان جديدة ومميزة ولها لمعة مميزة جداً وناعمة جداً على البشرة . مهمتنا هي تشجيعك على إستكشاف جوانب في شخصيتك وجمالك بطرق مختلفة لم تكتشفيها من قبل. لدينا مجموعة كبيرة من الألوان والإستايلات لخلق تأثيرات فريدة من نوعها تبرز جمالك وتعكس شخصيتك.
         </Typography>
         <Typography variant='h1' sx={{textAlign : 'center' , marginTop : '25px' , fontWeight : 600, fontSize : '1.5rem'}}>
           هدفنا الأول والأخير هو جعلك تبرزين جمالك بوضع المكياج الذي يليق بكِ.
         </Typography>
    </Container>
  )
}

export default Goals