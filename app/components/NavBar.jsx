"use client"
import Logo from '/public/diva-logo.png'
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import {AppBar , Box  , CssBaseline , Divider , Drawer, IconButton , 
  List , ListItem, Toolbar  , Container , SearchIcon , MenuIcon, Button 
} from '@/app/lib/MuiSsr';
import { useState } from 'react';
const drawerWidth = 240;
export default function DrawerAppBar(props) {
    const router = useRouter();
  const currentRoute = usePathname();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const navbarData = [
    {
        title : 'الرئيسية',
        slug : '/'
    },
    {
        title : 'من نحن',
        slug : '/about'
    },
    {
        title : 'خدماتنا',
        slug : '/gallery'
    },
    {
        title : 'المقالات',
        slug : '/blog'
    },
    {
        title : 'اتصل بنا',
        slug : '/contact'
    },
  ]


  const navLink = ()=>{
    return (
      <> 
         {navbarData.map((item , id)=>{
            return (
                <Button  key={id} aria-label={item.title} onClick={()=> router.push(item.slug)}
             className={currentRoute === "/" ? "active" : "no-active"  }
             title={item.title} name="link" role='link'
            sx={{fontWeight : 'bold' , margin : '10px 20px', fontSize : '18px', color : '#000'}}
             >
                    {item.title} 
                   </Button>   
            )
         })}
      </>
    )
  }

  const drawer = (
   
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
                <div>
                  <div style={{position : 'relative', padding : '10px 60px'}}>
                  <Image priority={true} layout="responsive" onClick={()=> router.push(`/`)} style={{width : '100%',}} objectFit='cover'  src={Logo} alt='اتيليه فساتين زفاف وافراح'/>
                  </div>
                 </div>
     <Divider />
     <List>
     <ListItem aria-label="btn" title='button' disablePadding sx={{display : 'flex', flexDirection : 'column'}} className='nav-link'>
           {navLink()}
         </ListItem>
     </List>
   </Box>
  
 );
 const container = window !== undefined ? () => window().document.body : undefined;
 return ( 
        <>
     <CssBaseline />
     <AppBar sx={{position: 'fixed'}}>
       <Container maxWidth="lg" fixed>
       <Toolbar sx={{flexDirection : {xs : 'row-reverse', md : 'row'}}}>
         <IconButton
           color="inherit"
           aria-label="open drawer"
           edge="start"
           onClick={handleDrawerToggle}
           sx={{ mr: 2, display: { md: 'none' }, 
           // width : '100%', justifyContent : 'flex-end'
            }}
         >
           <MenuIcon aria-label="menu items" title="menu icon"/>
         </IconButton>
         <Box sx={{ flexGrow: 1 , display: { xs: 'flex', sm: 'block' }, justifyContent : 'flex-start' ,  cursor : 'pointer'
          }}>
                 <div style={{width : '90px', position : 'relative', height : '76px', padding : '5px'}}>
                 <Image priority={true} layout="responsive" onClick={()=> router.push(`/`)} objectFit='cover'  src={Logo} alt='اتيليه فساتين زفاف وافراح'/>
                 </div>
         </Box>

         <Box to="/page-link" sx={{ display: { xs: 'none', md: 'block' } }}  className='nav-link'>
              {navLink()}
             <IconButton
               size='large'
               color="inherit"
               edge="start"
                title="Search Icon"
               sx={{ mr: 2}}
               aria-label="Search Icon"
               
         >
           <SearchIcon />
         </IconButton>

         </Box>
       </Toolbar>
       </Container>
     </AppBar>
     <Box component="nav">
       <Drawer
       anchor='left'
         container={container}
         variant="temporary"
         open={mobileOpen}
         onClose={handleDrawerToggle}
         ModalProps={{
           keepMounted: true, // Better open performance on mobile.
         }}
         sx={{
           display: { sm: 'block', md: 'none' },
           '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
         }}
       >
         {drawer}
       </Drawer>     
   </Box>
        </>
     
 );
}