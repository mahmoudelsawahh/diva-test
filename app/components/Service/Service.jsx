"use client"
import {Fade , Slide , Box, Container, Grid, Typography} from '@/app/lib/MuiSsr';
import Image from 'next/image';
import divaBg from '/public/divanice.com_imgs_section-bg.webp'
import waveBg from '/public/divanice.com_imgs_waves.png'
import LazyLoad from 'react-lazyload';
const serviceData  = [
    {
        title : "قسم خاص بفساتين الزفاف",
        description : 'موجود في ديفا فريق متخصص واقف معاكي يساعدك على إختيار الفستان المناسب لجسمك وشكلك ولون بشرتك عشان تقدري تتجنبي ظهور أي ديفوهات وتطلعي ملكة في ليلة العمر. متوفر في ديفا فساتين زفاف للمحجبات وغير المحجبات وفساتين زفاف بذيل وذيل متوسط أو بدون ديل. كل فساتين الزفاف في ديفا مستوردة. متوفر في ديفا فساتين زفاف لأشهر مصممي الأزياء.            '
    },
    {
        title : 'قسم خاص بـ " ميك أب الزفاف " للعروسة',
        description : 'جميع الماتريال المستخدمة في الميكب أب أوريجينال وماركات عالمية مشهورة مثل " شانيل – ديور – ماك – أنستازيا – فور إيفير " وغيرهم من البراندات العالمية الأخرى الكثيرة. متوفر في ديفا أيضاً عدسات لاصقة لأشهر البراندات العالمية مثل " ذهب - أنستازيا – بيلا ". كما نقوم بإستيراد الإكسسوارات والتاجات والطرح كي تكوني مميزة مع ديفا. ولأننا نعرف أهمية اليوم بالنسبة للعروسة، نتعهد بالحفاظ على أعلى مستوى ممكن في كل الخدمات المقدمة من ديفا لعرائسها. وفيما يلي رأي بعض العرائس والفنانات اللي شرفونا في السيشن.'
    },
    {
        title : "برنامج تنظيف البشرة و الشعر ",
        description : "يتطلب حضور العروسة قبلها بـ 5 أيام. تقوم مدام ديفا بتحديد طرق لف الطرحة وإستايل الميك أب المعتمد ولون العدسات وإختيار الإكسسوارات والتاجات وتحديد اللوك النهائي للعروسة. كما تقوم مدام ديفا بعمل فورمة الشعر الخاص بالعروسة. توجد أشكال كثيرة للفة الطرح في ديفا كما يوجد لدينا تجهيز خاص للمنتقبات ... يتم تجهيز العروسة المنتقبة بأعلى المواصفات كما يتم تطريز النقاب بنفس تطريز الفستان."
    },
    {
        title : "قسم خاص بفساتين السواريه و السهرة ",
        description : "يوجد تشكيلة رائعة من الفساتين في ديفا المجمعة من أكثر من دولة لضمان ظهورك بمظهر شيك ورقيق للمناسبة. كما يساعدك فريق العمل في ديفا على إختيار فستانك المناسب للمناسبة. كما يوجد في ديفا فساتين سواريه للمحجبات وغير المحجبات."
    },
    {
        title : "قسم خاص بفساتين الخطوبة والشبكة ",
        description : "يوجد فريق عمل مختص في ديفا يساعدك على إختيار الفساتين ذات الألوان المميز والإستايلات المناسبة لجسمك. متوفر كوليكشن من الفساتين المنفوشة والسك للمحجبات وغير المحجبات.            "
    },
    {
        title : "احدث واقوى برنامج تنظيف البشرة",
        description : "ديفا تقدم لكي احدث واقوى الكريمات والماسكات والاسكريبات الخاصة بالبشرة المستخدمة في خلال الخمسة ايام قبل موعد الفرح طبقا لبرنامج تنظيف البشرة            "
    }
]
const Service = () => {
  return (
        <Box sx={{position : 'relative', height : '100%'}}>
         <LazyLoad height={"100%"} once>
         <Image loading='lazy' src={waveBg} alt='ما الذي نقدمه من خدمات ؟' layout='full' height={75} style={{position : 'absolute' , top : 0, left : 0, transform: "rotate(180deg)", zIndex : 255, width : '100%'}}/> 
         </LazyLoad>
                <LazyLoad height={'100%'} once>
                <Image loading='lazy' src={divaBg} alt='ما الذي نقدمه من خدمات ؟' layout='responsive' objectFit='cover' className='image-responsive'/>
                </LazyLoad>
            <Box sx={{position : 'absolute', width : '100%', height : '100%', backgroundColor : 'rgba(254, 245, 246, .85)',  top : 0 , left : 0  }}>
            </Box>
            <Container maxWidth="xl"  sx={{textAlign : 'center', padding : '40px 0px'}}>
              <Typography variant='body1' sx={{fontSize : '14px', fontWeight : 'bold' , color : '#E60263', marginTop : '50px'}}>الخدمات المميزة</Typography>
              <Typography variant='h1' sx={{fontWeight : 'bold', position : 'relative', fontSize : '2rem', marginBottom : '60px'}} className='underline-service-title' >ما الذي نقدمه من خدمات ؟</Typography>
        <Grid container spacing={3} sx={{marginBottom : '50px'}}>
            {serviceData.map((item , id)=>{
                return (
                   // eslint-disable-next-line react/jsx-key
                   <Grid item xs={12} lg={4} key={id}>
                    <Fade left>
                       <Slide bottom>
                             <Typography variant='h1' sx={{fontWeight : 'bold' , margin : '20px 0px' ,textAlign : 'center', fontSize : '1.5rem'}}>{item.title}</Typography>
                       </Slide>
                        <Typography  sx={{fontSize : '18px', margin : 'auto', lineHeight : '40px', width : '90%', fontWeight : 500}}>{item.description}</Typography>
                       </Fade>
                    </Grid>
                )
            })}
        </Grid>
    </Container>
        <LazyLoad height={'100%'} once>
        <Image loading='lazy' src={waveBg} layout='full' alt='ما الذي نقدمه من خدمات ؟' height={75} style={{position : 'absolute' , bottom : 0, left : 0, zIndex : 255, width : '100%'}}/> 

        </LazyLoad>
        </Box>
  )
}

export default Service