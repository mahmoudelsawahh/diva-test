"use client"
import { Box } from '@mui/material'
import { InfinitySpin } from 'react-loader-spinner'

const Loading = () => {
  return (
    <Box sx={{width : '100%', height : '100vh', zIndex : 55555, display : 'flex', justifyContent : 'center', alignItems : 'center'}}>
      <InfinitySpin 
          width='200'
          color="#E60263"   
             />   
 </Box>
  )
}

export default Loading