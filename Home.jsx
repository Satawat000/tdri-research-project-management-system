import * as React from 'react';
import Axios from 'Axios';
import { UserContext } from './Usercontext';
import { useState, useEffect, useContext } from 'react';
import { styled } from '@mui/material/styles';
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
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import HouseIcon from '@mui/icons-material/House';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { DataGrid } from '@mui/x-data-grid';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FileUploadIcon from '@mui/icons-material/FileUploadOutlined';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

import Textarea from '@mui/joy/Textarea';

import DemoPie from './Chart_pie';
import Chart_pie_project from './Chart_pie_project';
import Bar_chart_PJ_SL_yaer from './Bar_chart_PJ_SL_yaer';
import Bar_chart_Pub_SL_yaer from './Bar_chart_Pub_SL_yaer';
import Demo1 from './Bar_Chart';
import Bar_Chart_Pub from './Bar_Chart_Pub';


import Carousel from 'react-bootstrap/Carousel';



const drawerWidth = 240;

const background = {
  backgroundColor: '#86a8c5',
};

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
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


export default function PersistentDrawerLeft() {


  //--------------------------------------------------

  const [loginStatus, setLoginStatus] = useState("");


  // Axios.defaults.withCredentials = true;

  useEffect(() => {
    const timer = setTimeout(() => {
      Axios.get('http://localhost:3001/login_user').then((response) => {
        console.log(response);
        if (response.data.loggedIn == true) {

          setLoginStatus(response.data.user[0].res_username);
        }
      })
    }, 10);
    return () => {
      clearTimeout(timer);
    }
  }, []);

  //--------------------------------------------------







  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  const theme = createTheme({
    palette: {
      maincolor: {
        main: "#86a8c5",
        contrastText: "#ffffff",
      },
    },
  });

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const itemLogin = [
    {
      text: 'Home',
      icon: <HomeIcon />,
      path: '/Home'
    },
    {
      text: 'User Profile',
      icon: <AccountCircleIcon />,
      path: '/Profile'
    },

    {
      text: 'Log Out',
      icon: <LogoutIcon />,
      path: '/Login'
    }
  ]

  const itemNoLogin = [
    {
      text: 'Home',
      icon: <HomeIcon />,
      path: '/Home'
    },
    {
      text: 'Login',
      icon: <LoginIcon />,
      path: '/Login'
    },

  ]

  //----------------------------------------

  const GotoPath = (e) => {
    const textpath = e.target.outerText;

    console.log(e.target.outerText);

    if (textpath == 'Log Out') {
      const LogoutConfirm = "yes";
      Axios.get('http://localhost:3001/logout').then((response) => {
        console.log(response);
        window.location = "/Login";

      });
    }
    if (textpath == 'User Profile') {
      window.location = "/Profile";
    }
    if (textpath == 'Login') {
      window.location = "/Login";
    }
    if (textpath == 'Search Member') {
      window.location = "/SearchMember";
    }
    if (textpath == 'Search Date') {
      window.location = "/SearchDate";
    }



  }

  //------------------------------------------------------

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     Axios.get("http://localhost:3001/login_user").then((response) => {
  //       console.log(response)
  //       if (response.data.loggedIn == true) {

  //         setLoginStatus(response.data.user[0].res_username);
  //       }
  //     });
  //   }, 0);
  //   return () => {
  //     clearTimeout(timer);
  //   }
  // }, []);

  //---------------------------------------------------------

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };





  // const {value} = useContext(UserContext);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open} color="maincolor">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              TDRI  Research Project Management System
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
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
          {loginStatus != "" ?
            <List>
              {itemLogin.map(item => (
                <ListItem

                  // onClick={() => {
                  //   if (item.path === '/login') {
                  //     localStorage.removeItem('token');
                  //   }
                  //   window.location = (item.path)
                  // }}
                  onClick={GotoPath}
                  //value={item.text}
                  key={item.text}
                  disablePadding
                  sx={{ display: 'block' }} >
                  <ListItemButton
                  >
                    <ListItemIcon
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>
              ))}


            </List>
            :
            <List>
              {itemNoLogin.map(item => (
                <ListItem

                  // onClick={() => {
                  //   if (item.path === '/login') {
                  //     localStorage.removeItem('token');
                  //   }
                  //   window.location = (item.path)
                  // }}
                  onClick={GotoPath}
                  //value={item.text}
                  key={item.text}
                  disablePadding
                  sx={{ display: 'block' }} >
                  <ListItemButton
                  >
                    <ListItemIcon
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>
              ))}


            </List>
          }

          <Divider />

        </Drawer>
        <Main /*open={open}*/>
          {/* <DrawerHeader /> */}

          <div style={{ height: 'auto', width: '100%',paddingTop: 30 }}>
            <Container component="main" maxWidth="xl" >
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 0,
                  marginBottom: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >


                {loginStatus != "" ?
                  <Grid container rowSpacing={2} columnSpacing={{ xs: 12, sm: 2, md: 2 }} >

                    <Grid item xl>
                      <Button
                        startIcon={<SearchIcon />}
                        type="submit"
                        fullWidth
                        variant="outlined"
                        size='large'
                        color='maincolor'
                        sx={{ mt: 0, mb: 1 }}
                        onClick={() => { window.location = "/KLdbPJ" }}
                      >
                        Search Project
                      </Button>
                    </Grid>
                    <Grid item xl>
                      <Button
                        startIcon={<SearchIcon />}
                        type="submit"
                        fullWidth
                        variant="outlined"
                        size='large'
                        color='maincolor'
                        sx={{ mt: 0, mb: 1 }}
                        onClick={() => { window.location = "/KLdbPub" }}
                      >
                        Search Publication
                      </Button>
                    </Grid>

                    <Grid item xl>
                      <Button
                        startIcon={<FileUploadIcon />}
                        type="submit"
                        fullWidth
                        variant="outlined"
                        size='large'
                        color='maincolor'
                        sx={{ mt: 0, mb: 1 }}
                        onClick={() => { window.location = "/UpPJ" }}
                      >
                        Upload Project
                      </Button>
                    </Grid>
                    <Grid item xl>
                      <Button
                        startIcon={<FileUploadIcon />}
                        type="submit"
                        fullWidth
                        variant="outlined"
                        size='large'
                        color='maincolor'
                        sx={{ mt: 0, mb: 1 }}
                        onClick={() => { window.location = "/UpPub" }}
                      >
                        Upload Publication
                      </Button>
                    </Grid>
                  </Grid>
                  :
                  <>
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2 }} >

                      <Grid item xl>
                        <Button
                          startIcon={<SearchIcon />}
                          type="submit"
                          fullWidth
                          variant="outlined"
                          size='large'
                          color='maincolor'
                          sx={{ mt: 0, mb: 1 }}
                          onClick={() => { window.location = "/KLdbPJ" }}
                        >
                          Search Project
                        </Button>
                      </Grid>
                      <Grid item xl>
                        <Button
                          startIcon={<SearchIcon />}
                          type="submit"
                          fullWidth
                          variant="outlined"
                          size='large'
                          color='maincolor'
                          sx={{ mt: 0, mb: 1 }}
                          onClick={() => { window.location = "/KLdbPub" }}
                        >
                          Search Publication
                        </Button>
                      </Grid>
                      <Grid item xl>
                        <Button item xl startIcon={<LockOutlinedIcon />}
                          variant="contained" size='large' fullWidth onClick={() => { window.location = "/Login" }}
                          color="maincolor" sx={{ mt: 0, ml: 1 }}
                        >Login to upload
                        </Button>
                      </Grid>
                      </Grid>
                  </>
                }
                <Grid container spacing={2} columns={3}>
                  <Grid item xl >
                  <Chart_pie_project />
                  </Grid>
                  <Grid item xl>
                  <DemoPie />
                  </Grid>
                </Grid>
                <Grid container spacing={6} columns={16}>
                  <Grid item xl >
                    <Demo1/>
                  </Grid>
                  <Grid item xl>
                    <Bar_chart_PJ_SL_yaer/>
                  </Grid>
                </Grid>
                <br/>
                <Grid container spacing={6} columns={16}>
                  <Grid item xl >
                    <Bar_Chart_Pub/>
                  </Grid>
                  <Grid item xl>
                    <Bar_chart_Pub_SL_yaer/>
                  </Grid>
                </Grid>
                


              




              </Box>
             

            </Container>
            
          </div>


        </Main>
      </Box>

    </ThemeProvider>
  );
}

const columns = [
  { field: 'name', headerName: 'Name', width: 450 },
  { field: 'email', headerName: 'Email', width: 450 },
  { field: 'role', headerName: 'Role', width: 150 },
  { field: 'remove', headerName: 'Remove', width: 100 },
  /*{
    field: 'commencing date',
    headerName: 'Commencing Date',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 200,
    valueGetter: (params) =>
      `${params.row.title || ''} ${params.row.stats || ''}`,
  },*/
];

const rows = [

];