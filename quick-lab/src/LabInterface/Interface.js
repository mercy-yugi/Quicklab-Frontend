import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useEffect, useState } from 'react';
import '../LabInterface/interface.css'
import DigitalTimer from '../LabInterface/timer.js';
import Foooter from '../Footer';
import axios from "axios";
import '../dashboard/dashboard.css';
import { Link, useNavigate} from 'react-router-dom';


const drawerWidth = 240;
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
      
    }),
  }),
);
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));
export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const[title, setTitle]=useState('')
  const [practicals,setPracticals]=useState([])
  const [instructions,setInstructions]=useState('')
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  useEffect(()=>{
       fetchPractical()

       
}, [])
const navigate = useNavigate()


const goHome = () => {
  navigate('/home')


}


const getInstructions=(pra,tit)=>{
    console.log(pra)
    pra.map(item => {
      if(item.title === tit){ 
        console.log(tit)
        setInstructions(item.instructions)   
      }
    })
}

const fetchPractical=()=>{
  const title = JSON.parse(localStorage.getItem('title'));  
  if (title) {
    setTitle(title);
    console.log(title)
     }
     else{
      console.log('no title')
     } 
  axios.get("https://sheltered-earth-23604.herokuapp.com/api/practicals/")
.then(res=>{
  getInstructions(res.data, title)

 })
 .catch(error=>{
     console.log(error)
 })
}
  return (
    <Box sx={{ display: '' }}>
      <CssBaseline />

      <AppBar  position="fixed" open={open} >
        <Toolbar className='appbar'>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <div className='header'>
            <div className='heading1'>
            {/* {ArrowBackIcon} */}
            <Typography className='heading1' variant="h6" noWrap component="div">
            {title}        
        </Typography>
 
            </div>
          
         <div className='timer'>
          <DigitalTimer/>
         </div>
         <HomeIcon  className='home'  onClick={goHome}/>
          </div> 
          
        </Toolbar>
      </AppBar>
      <Drawer className='drawer'
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
         
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List className='list'>
            <Typography className='instructions'>Instructions</Typography>
            <Typography paragraph>
               
        </Typography>
          <p>{instructions !=='' ? instructions :<span>Instructions Loading</span>}</p>
         
        </List>
        <Divider />
        <List  className='list'>
       
        </List>
      </Drawer>
      <Main open={open} className='main'>
        <DrawerHeader />
        <Typography paragraph>
          
        </Typography>
        <Typography paragraph>
        <div className='interface'>
        {/* <DigitalTimer/> */}
          </div>  
        </Typography>
      </Main>
      <Drawer className='drawer'
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List className='list'>
            <Typography className='instructions'>Lab Equipment</Typography>
            <Typography paragraph>
        </Typography>
         
        </List>
        <Divider />
        <List className='list '>
        
        </List>
      </Drawer>
    <div className='buttons'>
    <button className='clear'>Clear</button>
          <button className='record'>Record Observation</button>
    </div>
      <Foooter/>
    </Box>
 
  );
 
}