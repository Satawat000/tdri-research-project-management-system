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
import Input from '@mui/material/Input';
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
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FormControl from '@mui/material/FormControl';
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



const  EditData=()=>{

    const [admintList, setAdminList] = useState([]);
    const [usertList, setUserList] = useState([]);

    const [memberList,setMemberList] = useState([]);
    const [keywordList,setKeywordList] = useState([]);
    const [typeList,setTypeList] = useState([]);
    const [loginStatus, setLoginStatus] = useState(true);

    

    //-------------------------------------------------------------------------

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('This will run after 1 second!');
            Axios.get('http://localhost:3001/show_member_list').then((response) => {
            
          
            setMemberList(response.data);
           
            }
            
        )
        }, 100);
        //return () => clearTimeout(timer);
        const timer1 = setTimeout(() => {
            console.log('This will run after 2 second!');
            Axios.get('http://localhost:3001/show_keyword_list').then((response) => {
            
           
                setKeywordList(response.data);
            
            }
            
        )
        }, 200);

        const timer3 = setTimeout(() => {
            console.log('This will run after 2 second!');
            Axios.get('http://localhost:3001/show_type_list').then((response) => {
            
           
                setTypeList(response.data);
            
            }
            
        )
        }, 200);

        const timer2 = setTimeout(() => {
            Axios.get('http://localhost:3001/login_admin_check').then((response) => {
                //console.log(response);
                if (response.data.loggedIn_admin == true) {
                    console.log("ttt");

                    setLoginStatus(response.data.loggedIn_admin);
                }
                else {
                    setLoginStatus(response.data.loggedIn_admin);
                }

            })
        }, 1);

        return () => {
            clearTimeout(timer);
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);


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

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        //console.log(newValue);
        setCheck_Click(null);
        setInput_value("");
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

    const [check_Click,setCheck_Click] = useState(null);
    const [input_value,setInput_value] = useState("");
    const [keyword_id,setKeywordID] = useState(null);
    const [member_id,setMemberID] = useState(null);
    const [type_id,setTypeID] = useState(null);

    //-----------------------------------------------------------

    const addKeyword = (e) => {
        
        
        Axios.post('http://localhost:3001/add_keyword_list',{
            kw_name:input_value
        }).then((response)=>{
            //console.log("response");
            //console.log(response);
            window.location = '/EditData';
        })
        //console.log(input_value);
        //console.log(items);
    };

    const handle_editKeyword = (e) => {     
        let id = e;
        setCheck_Click('edit');
        Axios.get(`http://localhost:3001/edit_keyword/${id}`).then((response) => {
            //console.log(response.data[0].kl_name);
            setInput_value(response.data[0].kw_name);
            
            setKeywordID(response.data[0].kw_id);
            }
        )
        
    };

    const handle_editType = (e) => {     
        let id = e;
        setCheck_Click('edit');
        Axios.get(`http://localhost:3001/edit_type/${id}`).then((response) => {
            //console.log(response.data[0].kl_name);
            setInput_value(response.data[0].type_name);
            
            setTypeID(response.data[0].type_id);
            }
        )
        
    };



    const editType=(id)=>{
        //console.log(keyword_id);
        Axios.put("http://localhost:3001/update_type", { 
            type_name: input_value,       
            type_id: id,
        }).then(
        (response) => {   
            window.location = '/EditData';     
            
        }
        );
    }

    const addtype = (e) => {
        
        
        Axios.post('http://localhost:3001/add_type_list',{
            type_name:input_value
        }).then((response)=>{
            //console.log("response");
            //console.log(response);
            window.location = '/EditData';
        })
        //console.log(input_value);
        //console.log(items);
    };


    const editKeyword=(id)=>{
        //console.log(keyword_id);
        Axios.put("http://localhost:3001/update_keyword", { 
            kw_name: input_value,       
            kw_id: id,
        }).then(
        (response) => {   
            window.location = '/EditData';     
            
        }
        );
    }

    const handle_editData = (e) => {     
        let id = e;
        setCheck_Click('edit');
        Axios.get(`http://localhost:3001/edit_member_list/${id}`).then((response) => {
            //console.log(response.data[0].kl_name);
            setInput_value(response.data[0].ml_name);
            
            setMemberID(response.data[0].ml_id);
            }
        )
        
    };


    const editData=(id)=>{
        //console.log(keyword_id);
        Axios.put("http://localhost:3001/update_member_list", { 
            ml_name: input_value,       
            ml_id: id,
        }).then(
        (response) => {        
            window.location = '/EditData';
            
        }
        );
    }
    //-----------------------------------------------------------
    const addMember = (e) => {
        
        
        Axios.post('http://localhost:3001/add_member_list',{
            ml_name:input_value
        }).then((response)=>{
            //console.log("response");
            //console.log(response);
            window.location = '/EditData';
        })
        //console.log(input_value);
        //console.log(items);
    };
    //-----------------------------------------------------------
    const deleteKeyword =(id,name)=>{
        console.log(id);

        var ans = confirm("ยืนยันลบ คีย์เวิร์ด :" + name);
            if(ans==true){
                Axios.delete(`http://localhost:3001/delete_keyword/${id}`).then((response) => {
                    setKeywordList(
                        keywordList.filter((val) => {
                          return val.kw_id != id;
                        })
                      );
                });
                setInput_value("");
                //window.location = '/EditData';
            }
                
    }

    const deleteMember =(id,name)=>{
        console.log(id);

        var ans = confirm("ยืนยันลบ ชื่อนักวิจัย :" + name);
            if(ans==true){
                Axios.delete(`http://localhost:3001/delete_member/${id}`).then((response) => {
                    setMemberList(
                        memberList.filter((val) => {
                          return val.ml_id != id;
                        })
                      );
                });
                setInput_value("");
                //window.location = 'EditData';
            }
                
    }

    const deleteType =(id,name)=>{
        console.log(id);

        var ans = confirm("ยืนยันลบ หมวดหมู่ :" + name);
            if(ans==true){
                Axios.delete(`http://localhost:3001/delete_type/${id}`).then((response) => {
                    setTypeList(
                        typeList.filter((val) => {
                          return val.type_id != id;
                        })
                      );
                });
                setInput_value("");
                //window.location = '/EditData';
            }
                
    }



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
            <Container component="main" maxWidth="xl" >
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
                            Manage Keyword and Member
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
               
                    {value == 0 ?
                    <div>
                    
                        <TextField sx={{mt: 7}}
                            autoComplete="given-name"
                            name="keyword"
                            //required
                            
                            id="keyword"
                            label="คีย์เวิร์ด"
                            color='maincolor'
                            autoFocus
                            value={input_value}
                            onChange={(event) => {
                                //console.log(event.target.value);
                                setInput_value(event.target.value);
                            }}
                        />
                       
                        {check_Click == 'edit' ?
                        <FormControl sx={{ m: 1, width: 140, mt: 0 }}>
                            <Button 
                                startIcon={<EditOutlinedIcon/>}
                                
                               

                                variant="contained"
                                
                                sx={{ mt: 7, mb: 0, height: 55 }}
                                onClick={()=>editKeyword(keyword_id) }
                            >
                            แก้ไขคีย์เวิร์ด
                            </Button>
                            </FormControl>
                        
                        :
                        
                        <FormControl sx={{ m: 1, width: 127, mt: 0 }}>
                            <Button 
                                startIcon={<EditOutlinedIcon/>}
                                
                                

                                variant="contained"
                                color="success"
                                sx={{ mt: 7, mb: 0,  height: 55}}
                                onClick={addKeyword}
                            >
                            เพิ่มคีย์เวิร์ด
                            </Button>
                            </FormControl>

                        
                        }
                 
                    </div>

                    :value == 1 ?
                        <div>
                            <TextField sx={{mt: 7}}
                                autoComplete="given-name"
                                name="member"
                                //required
                                width={200}
                                id="member"
                                label="ชื่อนักวิจัย"
                                color='maincolor'
                                autoFocus
                                value={input_value}
                                onChange={(event) => {
                                    //console.log(event.target.value);
                                    setInput_value(event.target.value);
                                }}
                            />
                            {check_Click == 'edit' ?
                            
                        <FormControl sx={{ m: 1, width: 150, mt: 0 }}>
                                <Button 
                                    startIcon={<EditOutlinedIcon/>}
                                    
                                    
                                    variant="contained"
                                    //color="success"
                                    sx={{ mt: 7, mb: 0, height: 55 }}
                                    onClick={()=>editData(member_id) }
                                >
                                แก้ไขชื่อนักวิจัย
                                </Button>
                                </FormControl>
                            
                            :
                            
                        <FormControl sx={{ m: 1, width: 140, mt: 0 }}>
                            <Button 
                                    startIcon={<EditOutlinedIcon/>}
                                    
                                    
                                    variant="contained"
                                    color="success"
                                    sx={{ mt: 7, mb: 0, height: 55 }}
                                    onClick={addMember}
                                >
                                เพิ่มชื่อนักวิจัย
                                </Button>
                                </FormControl>
                            }
                        </div>
                    :
                    <div>
                        <TextField sx={{mt: 7}}
                            autoComplete="given-name"
                            name="member"
                            //required
                            width={200}
                            id="member"
                            label="ชื่อหมวดหมู่"
                            color='maincolor'
                            autoFocus
                            value={input_value}
                            onChange={(event) => {
                                //console.log(event.target.value);
                                setInput_value(event.target.value);
                            }}
                            />
                            {check_Click == 'edit' ?
                        
                            <FormControl sx={{ m: 1, width: 150, mt: 0 }}>
                                <Button 
                                    startIcon={<EditOutlinedIcon/>}
                                    
                                    
                                    variant="contained"
                                    //color="success"
                                    sx={{ mt: 7, mb: 0, height: 55 }}
                                    onClick={()=>editType(type_id) }
                                >
                                แก้ไขชื่อหมวดหมู่
                                </Button>
                            </FormControl>
                        
                        :
                        
                            <FormControl sx={{ m: 1, width: 140, mt: 0 }}>
                                <Button 
                                startIcon={<EditOutlinedIcon/>}
                                        
                                
                                variant="contained"
                                color="success"
                                sx={{ mt: 7, mb: 0, height: 55 }}
                                onClick={addtype}
                            >
                                เพิ่มหมวดหมู่
                                </Button>
                            </FormControl>
                        }
                    </div>
                
                    
                    }
                   
                    
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 3, borderColor: 'divider' }}>
                            <Tabs  onChange={handleChange} /*aria-label="basic tabs example"*/>
                                <Tab label="คีย์เวิร์ด" {...a11yProps(0)} />
                                <Tab label="ชื่อนักวิจัย" {...a11yProps(1)} />
                                <Tab label="หมวดหมู่" {...a11yProps(2)} />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0} >
                            <div style={{ height: 'auto', width: '100%' }}>
                            
                                <TableContainer component={Paper} sx={{height: 300}}>
                                
                                    <Table sx={{ minWidth: 1000 }} size="large" aria-label="a dense table" >
                                        
                            
                                        <TableBody>
                                            {keywordList.map((row) => (
                                                <TableRow
                                                    key={row.kw_id}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell width={700} component="th" scope="row">{row.kw_name}</TableCell>
                                                    
                                                    <Button 
                                                    startIcon={<EditOutlinedIcon/>}
                                                        //type="submit"
                                                        //fullWidth
                                                        variant="outlined"
                                                        color="warning"
                                                        sx={{ mt: 1, mb: 0, opacity: 0.7 }}
                                                        onClick={() => { handle_editKeyword(row.kw_id)}}
                                                    >
                                                        Edit
                                                    </Button>
                                                    <Button
                                                    startIcon={<DeleteIcon/>}
                                                        //type="submit"
                                                        //fullWidth
                                                        variant="outlined"
                                                        color="error"
                                                        sx={{ mt: 1, mb: 0, ml: 1 }}
                                                        onClick={() => { deleteKeyword(row.kw_id,row.kw_name) }}
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
                            <div style={{ height: 'auto', width: '100%' }}>
                                <TableContainer component={Paper} sx={{height: 300}}>
                                    <Table sx={{ minWidth: 1000 }} size="large" aria-label="a dense table">
                                        
                                        <TableBody>
                                            {memberList.map((row) => (
                                                <TableRow
                                                    key={row.ml_id}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell width={700} component="th" scope="row">{row.ml_name}</TableCell>
                                                   
                                                  
                                                    <Button
                                                    startIcon={<EditOutlinedIcon/>}
                                                        //type="submit"
                                                        //fullWidth
                                                        variant="outlined"
                                                        color="warning"
                                                        sx={{ mt: 1, mb: 0, opacity: 0.7 }}
                                                        onClick={() => { handle_editData(row.ml_id)}}
                                                    >
                                                        Edit
                                                    </Button>
                                                    <Button
                                                    startIcon={<DeleteIcon/>}
                                                        //type="submit"
                                                        //fullWidth
                                                        variant="outlined"
                                                        color="error"
                                                        sx={{ mt: 1, mb: 0, ml: 1 }}
                                                        onClick={() => { deleteMember(row.ml_id,row.ml_name) }}
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
                        <TabPanel value={value} index={2}>
                            <div style={{ height: 'auto', width: '100%' }}>
                                <TableContainer component={Paper} sx={{height: 300}}>
                                    <Table sx={{ minWidth: 1000 }} size="large" aria-label="a dense table">
                                        
                                        <TableBody>
                                            {typeList.map((row) => (
                                                <TableRow
                                                    key={row.type_id}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell width={700} component="th" scope="row">{row.type_name}</TableCell>
                                                   
                                                  
                                                    <Button
                                                    startIcon={<EditOutlinedIcon/>}
                                                        //type="submit"
                                                        //fullWidth
                                                        variant="outlined"
                                                        color="warning"
                                                        sx={{ mt: 1, mb: 0, opacity: 0.7 }}
                                                        onClick={() => { handle_editType(row.type_id)}}
                                                    >
                                                        Edit
                                                    </Button>
                                                    <Button
                                                    startIcon={<DeleteIcon/>}
                                                        //type="submit"
                                                        //fullWidth
                                                        variant="outlined"
                                                        color="error"
                                                        sx={{ mt: 1, mb: 0, ml: 1 }}
                                                        onClick={() => { deleteType(row.type_id,row.type_name) }}
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
                    



               </Container>
        </ThemeProvider>
        :
        <>{window.location = '/AdminLogin'} </>}
        </div>
    );
}


export default EditData;
