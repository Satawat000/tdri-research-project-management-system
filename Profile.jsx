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
import BorderColorIcon from '@mui/icons-material/BorderColor';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';









const drawerWidth = 240;

const background = {
    backgroundColor: '#86a8c5',
};

const bg = {
    border: '1px solid #86a8c5',

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
    const [loginStatus1, setLoginStatus1] = useState(true);
    const [projectList, setProjectList] = useState([]);


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

        const timer1 = setTimeout(() => {
            Axios.get('http://localhost:3001/login_user').then((response) => {
              //console.log(response);
              if (response.data.loggedIn == true) {
                console.log("ttt");
      
                setLoginStatus1(response.data.loggedIn);
              }
              else{
                setLoginStatus1(response.data.loggedIn);
              }
              
            })
        }, 1);

        const timer2 = setTimeout(() => {
            console.log('This will run after 1 second!');
            Axios.get(`http://localhost:3001/show_resercher`).then((response) => {
                setProjectList(response.data);
            })
        }, 100);

        return () => {
            clearTimeout(timer);
            clearTimeout(timer1);
            clearTimeout(timer2);
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
            text: 'Srearch Project',
            icon: <SearchIcon />,
            path: '/KLdbPJ'
        },
        {
            text: 'Srearch Publication',
            icon: <SearchIcon />,
            path: '/KLdbPub'
        },
        {
            text: 'Upload Project',
            icon: <FileUploadIcon />,
            path: '/UpPJ'
        },
        {
            text: 'Upload Publication',
            icon: <FileUploadIcon />,
            path: '/UpPub'
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
          if (textpath == 'Home') {
            window.location = "/Home";
          }
          if (textpath == 'Upload Project') {
            window.location = "/UpPJ";
          }
          if (textpath == 'Upload Publication') {
            window.location = "/UpPub";
          }
          if (textpath == 'Srearch Publication') {
            window.location = "/KLdbPub";
          }
          if (textpath == 'Srearch Project') {
            window.location = "/KLdbPJ";
          }



    }



    //---------------------------------------------------------

    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
// const {value} = useContext(UserContext);





    return (
    <div>
    {loginStatus1 == true ?
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
                        <Typography variant="h6" noWrap component="div" >
                            User Profile
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
                    <DrawerHeader />

                    <Box
                        sx={{
                            marginTop: 0,
                            marginBottom: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >

                  
                        <Grid
                            item
                            md={6}
                            container
                            //direction="row"
                            //justifyContent="center"
                            spacing={4}
                            alignItems="center"
                            sx={{ mt: 2 }}
                        >

                            <Card
                                sx={{ minWidth: 100 }}
                                color='maincolor'
                                raised={true}
                            //onClick={() => { window.location = "/EditProfile" }}
                            >
                                <CardContent>
                                    <Typography
                                        //sx={{ fontSize: 14 }}
                                        component="div"
                                        color='maincolor'
                                        xs={12}
                                    >
                                        {projectList.map((row, key) => (
                                            <Container component="main" maxWidth="xl">

                                                <Grid item xs={12}>
                                                    <Grid item>
                                                        <Typography component="h3" variant="h6" color="#000000" letterSpacing={3}
              /*style={bg}*/ sx={{ mt: 0, p: 2, borderRadius: 2 }} textAlign='left' width={1150}>
                                                            <span>Name and Surname : </span> {row.res_name}
                                                        </Typography>
                                                        <Typography component="h3" variant="h6" color="#000000" letterSpacing={3}
              /*style={bg}*/ sx={{ p: 2, borderRadius: 2 }} textAlign='left' width={1150}>
                                                            <span>Username : </span> {row.res_username}
                                                        </Typography>
                                                        <Typography component="h3" variant="h6" color="#000000" letterSpacing={3}
              /*style={bg}*/ sx={{ p: 2, borderRadius: 2 }} textAlign='left' width={1150}>
                                                            <span>Email : </span> {row.res_email}
                                                        </Typography>
                                                        <Typography component="h3" variant="h6" color="#000000" letterSpacing={3}
              /*style={bg}*/ sx={{ p: 2, borderRadius: 2 }} textAlign='left' width={1150}>
                                                            <span>Tel : </span> {row.res_tel}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>



                                                
                                                    <Button onClick={() => { window.location = "/EditProfile" }} //fullWidth
                                                        startIcon={<BorderColorIcon />}
                                                        variant="contained"
                                                        color="maincolor"
                                                        sx={{ mt: 5, mb: 2 }}>
                                                        Edit Profile
                                                    </Button>

                                       




                                            </Container>
                                        ))}

                                    </Typography>


                                </CardContent>
                            </Card>
                        </Grid>
                       
                    </Box>




                </Main>
            </Box>
            {/* <h1>{value}</h1> */}

        </ThemeProvider>
        :
        <>{window.location = '/Login'} </>}
        </div>
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