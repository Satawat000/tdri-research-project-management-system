import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import Axios from 'Axios';
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

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FileUploadIcon from '@mui/icons-material/FileUploadOutlined';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { LoginOutlined, LogoutOutlined } from '@ant-design/icons';



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
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

function createData(name, email, role, remove) {
    return { name, email, role, remove };
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}



export default function PersistentDrawerLeft() {

    const [admintList, setAdminList] = useState([]);
    const [usertList, setUserList] = useState([]);
    const [loginStatus, setLoginStatus] = useState(true);

    

    //-------------------------------------------------------------------------

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('This will run after 1 second!');
            Axios.get('http://localhost:3001/admin_list').then((response) => {
                //console.log(response);
                setAdminList(response.data);
            })
        }, 10);
        //return () => clearTimeout(timer);
        const timer1 = setTimeout(() => {
            console.log('This will run after 2 second!');
            Axios.get('http://localhost:3001/user_list').then((response) => {
                //console.log(response);
                setUserList(response.data);
            })
        }, 30);

        const timer2 = setTimeout(() => {
            Axios.get('http://localhost:3001/login_admin_check').then((response) => {
              //console.log(response);
              if (response.data.loggedIn_admin == true) {
                console.log("ttt");
      
                setLoginStatus(response.data.loggedIn_admin);
              }
              else{
                setLoginStatus(response.data.loggedIn_admin);
              }
              
            })
        }, 1);

        return () => {
            clearTimeout(timer);
            clearTimeout(timer1);
            clearTimeout(timer2);


        }

    }, []);
    //console.log(admintList);

    //-------------------------------------------------------------------------
    const deleteResercher = (id) => {
        console.log(id);

        var ans = confirm("ยืนยันลบ resercher :" + id);
        if (ans == true) {
            Axios.delete(`http://localhost:3001/delete_resercher/${id}`).then((response) => {
                setUserList(
                    usertList.filter((val) => {
                        return val.res_id != id;
                    })
                );

            });
        };

    }
    //-------------------------------------------------------------------------
    const deleteAdmin = (id) => {
        console.log(id);

        var ans = confirm("ยืนยันลบ admin :" + id);
        if (ans == true) {
            Axios.delete(`http://localhost:3001/delete_admin/${id}`).then((response) => {
                setAdminList(
                    admintList.filter((val) => {
                        return val.ad_username != id;
                    })
                );
            });
        }
    }
    //-------------------------------------------------------------------------
    const editUser = (e) => {
        console.log(e);
        Axios.post("http://localhost:3001/admin_edit_user", {
          admin_user_id: e,
        }).then((response) => {
          //window.location = "/Home";
          window.location = "/MEditProfile";
    
    
        });
        //console.log(nextpage_id);
    
      }

      //-------------------------------------------------------------------------



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

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const item = [
        {
            text: 'Manage Users',
            icon: <ManageAccountsIcon />,
            path: '/MUser'
        },
        {
            text: 'Search Project',
            icon: <SearchIcon />,
            path: '/MProj'
        },
        {
            text: 'Srearch Publication',
            icon: <SearchIcon />,
            path: '/MPub'
        },
        {
            text: 'Upload Project',
            icon: <FileUploadIcon />,
            path: '/MUpPJ'
        }
        ,{
            text: 'Upload Publication',
            icon: <FileUploadIcon />,
            path: '/MUpPub'
        },
        {
            text: 'Manage Keyword and Member',
            icon: <EditOutlinedIcon />,
            path: '/EditData'
        },
        
        {
            text: 'Log Out',
            icon: <LogoutOutlined />,
            path: '/AdminLogin'
        }
    ]

    const logout_on=()=>{

        Axios.get('http://localhost:3001/logout').then((response) => {
        console.log(response);
        window.location = "/AdminLogin";

      });
    }


    return (
        <div>
        {loginStatus == true ?    
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
                            Manage Users
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
                    <List>
                        {item.map(item => (
                            <ListItem

                                onClick={() => {
                                    if (item.path === '/login') {
                                        localStorage.removeItem('token');
                                    }
                                    if(item.text== 'Log Out'){
                                        logout_on();

                                    }
                                    else{
                                        window.location = (item.path)
                                    }
                                }}
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
                    <Divider />

                </Drawer>
                <Main /*open={open}*/>
                    <DrawerHeader />
                    
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 3, borderColor: 'divider' }}>
                            <Tabs  onChange={handleChange} /*aria-label="basic tabs example"*/>
                                <Tab label="Admin" {...a11yProps(0)} />
                                <Tab label="Users" {...a11yProps(1)} />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            <div style={{ height: 300, width: '100%' }}>
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 1100 }} size="large" aria-label="a dense table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell width={300}>Username</TableCell>
                                                <TableCell width={300} align="left">Email</TableCell>
                                                <TableCell width={300} align="left">Tel</TableCell>
                                                <TableCell width={170} align="right"></TableCell>
                                                
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {admintList.map((row) => (
                                                <TableRow
                                                    key={row.ad_username}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row">{row.ad_name}</TableCell>
                                                    <TableCell align="left">{row.ad_email}</TableCell>
                                                    <TableCell align="left">{row.ad_tel}</TableCell>
                                                    <Button
                                                    startIcon={<DeleteIcon/>}
                                                        //type="submit"
                                                        //fullWidth
                                                        variant="outlined"
                                                        color="error"
                                                        sx={{ mt: 1, mb: 0 }}
                                                        onClick={() => { deleteAdmin(row.ad_username) }}
                                                    >
                                                        Remove
                                                    </Button>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <div style={{ height: 300, width: '100%' }}>
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 1100 }} size="large" aria-label="a dense table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Name and Surname</TableCell>
                                                <TableCell>Username</TableCell>
                                                <TableCell align="left">Email</TableCell>
                                                <TableCell align="left">Tel</TableCell>
                                                <TableCell align="right"></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {usertList.map((row) => (
                                                <TableRow
                                                    key={row.res_id}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell  component="th" scope="row">{row.res_name}</TableCell>
                                                    <TableCell  component="th" scope="row">{row.res_username}</TableCell>
                                                    <TableCell  align="left">{row.res_email}</TableCell>
                                                    <TableCell  align="left">{row.res_tel}</TableCell>
                                                    <Button
                                                    startIcon={<EditOutlinedIcon/>}
                                                        //type="submit"
                                                        //fullWidth
                                                        variant="outlined"
                                                        color="warning"
                                                        sx={{ mt: 1, mb: 0, opacity: 0.7 }}
                                                        onClick={() => { editUser(row.res_id) }}
                                                    >
                                                        Edit
                                                    </Button>
                                                    <span> </span>
                                                    <Button
                                                    startIcon={<DeleteIcon/>}
                                                        //type="submit"
                                                        //fullWidth
                                                        variant="outlined"
                                                        color="error"
                                                        sx={{ mt: 1, mb: 0 }}
                                                        onClick={() => { deleteResercher(row.res_id) }}
                                                    >
                                                        Remove
                                                    </Button>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </TabPanel>
                    </Box>
                    



                </Main>
            </Box>
        </ThemeProvider>
        :
        <>{window.location = '/AdminLogin'} </>}
        </div>
    );
}


const admin = [
    createData('Winit Theanvanichpant', 'winittheanvanichpant@gmail.com', 'Admin', ''),
    createData('Winit Theanvanichpant', 'winittheanvanichpant@gmail.com', 'Admin', ''),
    createData('Winit Theanvanichpant', 'winittheanvanichpant@gmail.com', 'Admin', ''),



];

const users = [
    createData('Winit Theanvanichpant', 'winittheanvanichpant@gmail.com', 'User', ''),
    createData('Winit Theanvanichpant', 'winittheanvanichpant@gmail.com', 'User', ''),
    createData('Winit Theanvanichpant', 'winittheanvanichpant@gmail.com', 'User', ''),
    createData('Winit Theanvanichpant', 'winittheanvanichpant@gmail.com', 'User', ''),
    createData('Winit Theanvanichpant', 'winittheanvanichpant@gmail.com', 'User', ''),


];
