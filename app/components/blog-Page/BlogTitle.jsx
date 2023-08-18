"use client"
import { Slide , Typography , Container} from '@/app/lib/MuiSsr';

const BlogTitle = () => {
  return (
     <Container maxWidth="xxl" fixed>
        <Slide bottom>
            <Typography variant='subtitle1' sx={{textAlign : 'center', color : '#E60263', fontSize : '16px', fontWeight : 'bold', marginTop : '100px'}}>احدث اخبار ديفا</Typography>
            <Typography variant='h1' sx={{textAlign : 'center', fontSize : '2rem', fontWeight : 'bold', position : 'relative'}} className='underline-service-title'>احدث اخبار الموضة والجمال</Typography>
        </Slide>
    </Container>
  )
}

export default BlogTitle