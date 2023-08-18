"use client"
import { Box, Container, Grid, Typography } from '@/app/lib/MuiSsr'

const data = [
    {
        num : 7745,
        title : "جاليري بالموقع"
    },
    {
        num : 4222 ,
        title : "مقال بالموقع"
    },
    {
        num : 6980,
        title : "مشترك بالموقع"
    },
    {
        num : 4222 ,
        title : " متواجد بالموقع"
    },
]

const Distinguishes = () => {
  return (
        <Container maxWidth="xl" fixed>
             <Typography variant='body1' sx={{textAlign : 'center', color : '#E60263', fontSize : '14px', fontWeight : 'bold'}}>ارقامنا اهم مايميزنا</Typography>
             <Typography variant='h1' sx={{textAlign : 'center', fontSize : '2rem', fontWeight : 'bold', position : 'relative'}} className='underline-service-title'> نحرص دائما علي ارضاء عملائنا </Typography>
         <Box sx={{margin : "100px 0px"}}>
         <Grid container>
            {data.map((item, id)=>{
                return (
                        // eslint-disable-next-line react/jsx-key
                        <Grid item key={id} xs={12} md={3} sx={{textAlign : 'center', marginBottom : {xs : '50px', md : '0px'}}}>
                                <Typography variant='h1' sx={{fontSize : '40px', color : '#E60263', marginBottom : '10px', fontWeight : 'bold'}}>{item.num}</Typography>
                                <Typography variant='h1' sx={{fontSize : '16px', fontWeight : 'bold', color : '#000'}}>{item.title}</Typography>                             
                        </Grid>
                )
            })}
         </Grid>
        </Box>
         
    </Container>
  )
}

export default Distinguishes