"use client"
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { baseUrl } from '@/app/lib/baseUrl';
const Loading = dynamic(() => import('@/app/loading'),{
  ssr : false,
});
import { Slide , Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Typography} from '@/app/lib/MuiSsr';
import { Suspense } from 'react';
import LazyLoad from 'react-lazyload';

const SubBlog = ({data}) => {
  const router = useRouter();
  return (
          <Container maxWidth={'lg'} fixed>
         <Grid container spacing={3} >
         <Suspense fallback={<Loading/>}>
         {data ?
          data.map((item)=>{
            return (
      <Grid item xs={12} md={6} lg={4} key={item.id}>
          <LazyLoad height={"100%"} once>
            <Slide bottom>
              <Card onClick={()=> router.push(`/blog/${item.id}/${item.name.split(' ').join('-')}`)}>
                 <CardActionArea>
                     <CardMedia >
                         <Image src={`${baseUrl}/images?id=${item.imageId}`} width={250} height={200} alt={item.name} style={{ objectFit: 'cover', width : "100%" }}/>
                 </CardMedia>
                 <CardContent sx={{minHeight : '80px', overflow : 'hidden', margin : '5px 0px'}}>
                 <Typography variant='h1' sx={{fontSize : '22px', fontWeight : 'bold', textAlign : 'center'}}>{item.name}</Typography>
                 </CardContent>
               </CardActionArea>
                  <CardActions sx={{margin : '0px 10px'}}>
                      <Button size="large" sx={{backgroundColor : '#555555', color : '#fff',
                       fontWeight : 'bold', padding : '10px 25px', ":hover" : {backgroundColor : '#555555'}}}
                      onClick={()=> router.push(`/blog/${item.id}/${item.name.split(' ').join('-')}`)}
                      >اقرأ المزيد</Button> 
                </CardActions>
              </Card>
            </Slide>
          </LazyLoad>
          </Grid>         
            )
          })
          : <Loading/>}
         </Suspense>
   
         </Grid>
        </Container>
  )
}

export default SubBlog