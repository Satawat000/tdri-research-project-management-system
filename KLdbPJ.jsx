import * as React from 'react';
//import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
//import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useEffect } from "react";
import Axios from 'Axios';
import MuiAppBar from '@mui/material/AppBar';
import { /*Grid,*/ Tag } from 'antd';
import { FolderFilled } from '@ant-design/icons';

import SearchIcon from "@mui/icons-material/Search";
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import InputLabel from '@mui/material/InputLabel';
//import ListItemText from '@mui/material/ListItemText';
//import { DataGrid } from '@mui/x-data-grid';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Paper from '@mui/material/Paper';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import TablePagination from "@mui/material/TablePagination";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';



import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';


import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from "@mui/material/IconButton";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import FileUploadIcon from '@mui/icons-material/FileUploadOutlined';
import LoginIcon from '@mui/icons-material/Login';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const themes = createTheme({
  palette: {
    maincolor: {
      main: "#86a8c5",
      contrastText: "#ffffff",
    },
    seccolor: {
      main: "#757575",
      contrastText: "#ffffff",
    },
  },
});
//----------------------------------


const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

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



//----------------------------------

const ITEM_HEIGHT = 50;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      //width: 250,
    },
  },
};

const names = [
  'ชื่อโครงการ',
  'คีย์เวิร์ด',
  'ชื่อนักวิจัย',
];

const status = [
  'กำลังดำเนินการ',
  'งานวิจัยสมบูรณ์',
];

const SearchBar = ({ setSearchQuery }) => (
  <form>
    <TextField
      id="search-bar"
      className="text"
      // onInput={(e) => {
      //   setSearchQuery(e.target.value);
      // }}
      onChange={(e) => { setSearchQuery(e.target) }}
      label="Enter Search . . . "
      variant="outlined"
      placeholder="Search..."
      size="large"
      fullWidth
    />

  </form>
);

const filterData = (query, data) => {
  if (!query) {
    return data;
  } else {
    return data.filter((d) => d.toLowerCase().includes(query));
  }
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function createData(title, status, keyword, data, commencingdate) {
  return { title, status, keyword, data, commencingdate };
}







export default function KLdbPJ(props) {


  const theme = useTheme();
  const [personName, setPersonName] = useState([]);
  const [proj_type, setProj_type] = useState("");
  const [projectList, setProjectList] = useState([]);
  const [preprojectList, setPreProjectList] = useState([]);
  const [curprojectList, setCurProjectList] = useState([]);

  const [type_List,setType_List] = useState([]);
  //const [nextpage_id,setNextpage_id] = useState("");
  const [search, setSearch] = useState('');
  //const [search_title,setSearch_Title] = useState('');
  //const [search_keyword,setSearch_keyword] = useState('');
  const [check_value, setCheck_value] = useState('');
  //const [searchQuery, setSearchQuery] = useState("");

  //console.log(search);

  //---------------------------search date---------------------------------

  const [str_date, setStr_date] = useState(new Date());
  const [end_date, setEnd_date] = useState(new Date());
  const [cm_date, setCM_date] = useState(null);
  const [cp_date, setCP_date] = useState(null);

  const onChangeStartDate = (date, dateString) => {
    
    console.log(date);
    if(date == null){
      setCM_date(null)
      setStr_date(new Date());
      return ;
    }
    setCM_date(date)
    const str_day = date.$D;
    const str_month = date.$M + 1;
    const str_year = date.$y;
    setStr_date(str_year + "-" + str_month + "-" + str_day);
    
  };

  const onChangeEndDate = (date, dateString) => {
    
    if(date == null){
      //setCM_date(null)
      setCP_date(null)
      setEnd_date(new Date());
      return ;
    }
  
    setCP_date(date)
    const str_day = date.$D;
    const str_month = date.$M + 1;
    const str_year = date.$y;
    setEnd_date(str_year + "-" + str_month + "-" + str_day);
    
    
    
  };

  //--------------------------------------------------------------
  const handleSearchDate = () => {
    setProj_type("")
    setPersonName2([]);
    console.log(str_date);
    console.log(end_date);
    if (cm_date == null && cp_date == null) {
      Axios.get('http://localhost:3001/project').then((response) => {
        //console.log(response);
        setProjectList(response.data);
        setCurProjectList(response.data);
      })
    }
    else if (cm_date == null && cp_date != null) {
      Axios.post("http://localhost:3001/search_date", {
        str_date_search: "",
        end_date_search: end_date,
      }).then((response) => {
        setProjectList(response.data);
        setCurProjectList(response.data);

        //window.location = "/Home";
        //window.location = "/DesPub";


      });
    }
    else if (cm_date != null && cp_date == null) {
      Axios.post("http://localhost:3001/search_date", {
        str_date_search: str_date,
        end_date_search: end_date,
      }).then((response) => {
        setProjectList(response.data);
        setCurProjectList(response.data);

        //window.location = "/Home";
        //window.location = "/DesPub";


      });
    }
    else {
      Axios.post("http://localhost:3001/search_date", {
        str_date_search: str_date,
        end_date_search: end_date,
      }).then((response) => {
        setProjectList(response.data);
        setCurProjectList(response.data);

        //window.location = "/Home";
        //window.location = "/DesPub";


      });

    }

  };




  //--------------------------------------------------------------------------------

  const nextpage = (e) => {
    //console.log(e);
    Axios.post("http://localhost:3001/project_id", {
      proj_id: e,
    }).then((response) => {
      //window.location = "/Home";
      window.location = "/DesPJ";


    });
    //console.log(nextpage_id);

  }




  //--------------------------------------------------------------------------------


  const [loginStatus, setLoginStatus] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('This will run after 1 second!');
      Axios.get('http://localhost:3001/project').then((response) => {
        //console.log(response);
        setProjectList(response.data);
        setCurProjectList(response.data);
        setPreProjectList(response.data);
      })
    }, 10);
    const timer1 = setTimeout(() => {
      Axios.get('http://localhost:3001/login_user').then((response) => {
        console.log(response);
        if (response.data.loggedIn == true) {

          setLoginStatus(response.data.user[0].res_username);
        }
      })
    }, 20);
    //return () => clearTimeout(timer);
    const timer2 = setTimeout(() => {
      Axios.get('http://localhost:3001/show_type_list').then((response) => {
      
      for(let i = 0 ; i < response.data.length;i++){
          setType_List(items =>[...items, response.data[i].type_name]);
      }
      }
    );
    },600);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer1);
      clearTimeout(timer2);


    }

  }, []);


  //--------------------------------------------------------------------------------

  const onChangeDate = (e) => {
    const d = new Date(e);
    const days = d.getDate()
    const month = d.getMonth() + 1
    const year = d.getFullYear()
    // console.log(d.getDate());
    // console.log(d.getMonth() + 1);
    // console.log(d.getFullYear());
    return days + "/" + month + "/" + year;
  }




  //--------------------------------------------------------------------------------




   //const dataFiltered = filterData(searchQuery, data);

   const handleChange = (event) => {
    console.log(event.target.value);
    setCheck_value(event.target.value);
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const [personName2, setPersonName2] = useState([]);

  const handleChange2 = (event) => {
    console.log(event.target.value.length)
    console.log(event.target.value)
    if (event.target.value.length == 2 || event.target.value.length == 0) {
      if(proj_type != ""){
        setProjectList(preprojectList);
      }
      else{
        setProjectList(curprojectList);
      }

      




      // Axios.get('http://localhost:3001/project').then((response) => {
      //   //console.log(response);
      //   setProjectList(response.data);
      // })
    }
    else {
      if (event.target.value[0] == 'กำลังดำเนินการ') {
        setProjectList(projectList.filter((row)=>{
          return  row.proj_status.toLowerCase().includes('01')
        }))

          





        // Axios.get('http://localhost:3001/project/Ongoing_Research').then((response) => {
        //   //console.log(response);
        //   setProjectList(response.data);
        // })
      }
      if (event.target.value[0] == 'งานวิจัยสมบูรณ์') {
        setProjectList(projectList.filter((row)=>{
          return  row.proj_status.toLowerCase().includes('00')
        }))


        // Axios.get('http://localhost:3001/project/Complete_Research').then((response) => {
        //   //console.log(response);
        //   setProjectList(response.data);
        // })
      }
    }

    const {
      target: { value },
    } = event;
    setPersonName2(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );



  };

  const change_type =(e)=>{
    console.log(e.target.value);
    setProj_type(e.target.value);
    setProjectList(preprojectList);
    
    if(e.target.value == null){
      return;
    }
    else{
      // setProjectList(projectList.filter((row)=>{
      //   return  row.proj_type.toLowerCase().includes(e.target.value.toLowerCase())
      // }))
      Axios.post('http://localhost:3001/post_project_list',{
          proj_type: e.target.value
        }).then((response)=>{
          setProjectList(response.data);
          setPreProjectList(response.data);
            //console.log("response");
            //console.log(response);
      })
    }

    
    

  }

  //--------------------------------------------------------------------------------
  //--------------------------------------------------------------
  const alltime = () => {
    //console.log(projectList);
    setPersonName2([]);
    setCP_date(null);
    setEnd_date(new Date());
    setCM_date(null);
    setStr_date(new Date());
    setProj_type("");
    Axios.get('http://localhost:3001/project').then((response) => {
      //console.log(response);
      setProjectList(response.data);
      setCurProjectList(response.data);
    })


  };




  //---------------------------------------------------------------------


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  

  const [pg, setpg] = useState(0);
  const [rpg, setrpg] = useState(5);

  const handleChangePage = (event, newPage) => {
    setpg(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setrpg(parseInt(event.target.value, 10));
    setpg(0);
  };

  //----------------------------------



  const [open, setOpen] = useState(false);

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
        text: 'Srearch Publication',
        icon: <SearchIcon />,
        path: '/KLdbPub'
    },
    {
        text: 'Upload Project',
        icon: <FileUploadIcon />,
        path: '/UpPj'
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
        text: 'Srearch Publication',
        icon: <SearchIcon />,
        path: '/KLdbPub'
    },
    {
      text: 'Login',
      icon: <LoginIcon />,
      path: '/Login'
    },

  ]


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
    if (textpath == 'Upload Publication') {
      window.location = "/UpPub";
    }
    if (textpath == 'Upload Project') {
      window.location = "/UpPJ";
    }
    if (textpath == 'Srearch Publication') {
      window.location = "/KLdbPub";
    }


  }




  return (
    <div >
      <ThemeProvider theme={themes}>
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
              Search Project
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
              {themes.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
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




          <Box component="form" noValidate onSubmit={handleSubmit} fullWidth style={{paddingTop:50}}/*sx={{ mt: 3, ml: 70, }}*/>

            <FormControl sx={{ m: 1, width: 150, mt: 0 }}
            >
              <Select color='maincolor'
                //multiple
                //sx={{ m: 1, width: 300, mt: 3 }}
                displayEmpty
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return <em>ค้นหาตาม</em>;
                  }
                  return selected.join(', ');
                }}
                MenuProps={MenuProps}
                inputProps={{ 'aria-label': 'Without label' }}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl sx={{ m: 1, width: 420, mt: 0 }} >
              {/* <SearchBar /> */}
              <TextField color='maincolor'
                id="search-bar"
                className="text"
                // onInput={(e) => {
                //   setSearchQuery(e.target.value);
                // }}
                onChange={(e) => { setSearch(e.target.value) }}
                label="ค้นหา "
                variant="outlined"
                //placeholder="Search..."
                size="large"
              // fullWidth
              />
            </FormControl>
            
            <FormControl sx={{ m: 1, width: 233, mt: 0 }}>
            <InputLabel id="demo-multiple-checkbox-label">หมวดหมู่</InputLabel>
            <Select color='maincolor'
                //multiple
                //sx={{ m: 1, width: 300, mt: 3 }}
                displayEmpty
                value={proj_type}
                onChange={change_type}
                input={<OutlinedInput />}
                // renderValue={(selected) => {
                //   if (selected.length === 0) {
                //     return <em>ค้นหาตาม</em>;
                //   }
                //   return selected.join(', ');
                // }}
                MenuProps={MenuProps}
                inputProps={{ 'aria-label': 'Without label' }}
              >
                {type_List.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>


            <FormControl sx={{ m: 1, width: 280, mt: 0 }}>
              <InputLabel id="demo-multiple-checkbox-label">สถานะ</InputLabel>
              <Select color='maincolor'
                //displayEmpty
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={personName2}
                onChange={handleChange2}
                //onChange={(e)=>{console.log(e)}}
                input={<OutlinedInput label="Status" />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
              >
                {status.map((status) => (
                  <MenuItem key={status} value={status}>
                    <Checkbox checked={personName2.indexOf(status) > -1} />
                    <ListItemText primary={status} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl sx={{ m: 1, width: 150, mt: 0 }}>
              <Button startIcon={<CalendarMonthOutlinedIcon />}
                //type="submit"
                fullWidth
                variant="outlined"
                color="seccolor"
                sx={{ mt: 0, mb: 0, height: 55 }}
                onClick={alltime}
              >
                ทุกช่วงเวลา
              </Button>
            </FormControl>
            <FormControl sx={{ m: 1, width: 420, mt: 0 }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="ตั้งแต่วันที่"
                  openTo="year"
                  views={["year", "month", "day"]}
                  inputFormat="DD/MM/YYYY"
                  value={cm_date}
                  onChange={onChangeStartDate}
                  renderInput={(params) => (
                    <TextField {...params} fullWidth color='maincolor' />
                  )}
                />
              </LocalizationProvider>
            </FormControl>

            <FormControl sx={{ m: 1, width: 420, mt: 0 }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="ถึงวันที่"
                  openTo="year"
                  views={["year", "month", "day"]}
                  inputFormat="DD/MM/YYYY"
                  value={cp_date}
                  onChange={onChangeEndDate}
                  renderInput={(params) => (
                    <TextField {...params} fullWidth color='maincolor' />
                  )}
                />
              </LocalizationProvider>
            </FormControl>
            <FormControl sx={{ m: 1, width: 96, mt: 0 }}>
              <Button startIcon={<SearchOutlinedIcon />}
                //type="submit"
                fullWidth
                variant="contained"
                color="maincolor"
                sx={{ mt: 0, mb: 0, height: 55 }}
                onClick={handleSearchDate}
              >
                ค้นหา
              </Button>
            </FormControl>
          </Box>

          <div style={{ height: 'auto', width: '100%' }}>
            <TableContainer component={Paper} >
              <Table sx={{ minWidth: 777 }} size="large" aria-label="a dense table">
                <TableHead >
                  <TableRow>
                    <TableCell align="center" width={500}>ชื่อโครงการ</TableCell>
                    <TableCell align="center" width={50}>สถานะ</TableCell>
                    <TableCell align="center" width={200}>คีย์เวิร์ด</TableCell>
                    <TableCell align="center" width={300}>ชื่อนักวิจัย</TableCell>
                    <TableCell align="center" width={200}>หมวดหมู่</TableCell>
                    <TableCell align="left" width={120}>วันที่เริ่มต้น</TableCell>
                  </TableRow>
                </TableHead>
                {check_value == 'ชื่อนักวิจัย' ?
                  <TableBody>
                    {projectList.filter((row) => {

                      return search.toLowerCase() === '' ? row : row.proj_team_member.toLowerCase().includes(search.toLowerCase())
                    })
                    .slice(pg * rpg, pg *
                      rpg + rpg).map((row) => (
                        <TableRow
                          key={row.proj_id}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell onClick={() => { nextpage(row.proj_id) }} component="th" scope="row" name="th_name">{row.th_name}</TableCell>
                          <TableCell onClick={() => { nextpage(row.proj_id) }} align="center">{row.proj_status == "00" ? <Tag color="#47d147">งานวิจัยสมบูรณ์</Tag> : <Tag color="#1a53ff">กำลังดำเนินการ</Tag>}</TableCell>
                          <TableCell onClick={() => { nextpage(row.proj_id) }} align="left">{row.proj_keyword}</TableCell>
                          <TableCell onClick={() => { nextpage(row.proj_id) }} align="left">{row.proj_team_member}</TableCell>
                          <TableCell onClick={() => { nextpage(row.proj_id) }} align="left">{row.proj_type}</TableCell>
                          <TableCell onClick={() => { nextpage(row.proj_id) }} align="left">{onChangeDate(row.start_date)}</TableCell>
                          
                        </TableRow>
                      ))}
                  </TableBody>
                  :check_value == 'คีย์เวิร์ด' ?
                  <TableBody>
                    {projectList.filter((row) => {
                      // if(check_value == ''){
                      //   return row ;
                      // }
                      // if(check_value == '' && search == 'Title'){
                      //   return search.toLowerCase() === '' ? row : row.th_name.toLowerCase().includes(search)
                      // }
                      // if(check_value == '' && search == 'Keyword'){
                      //   return search.toLowerCase() === '' ? row : row.proj_keyword.toLowerCase().includes(search)
                      // }
                      return search.toLowerCase() === '' ? row : row.proj_keyword.toLowerCase().includes(search.toLowerCase())
                    })
                    .slice(pg * rpg, pg *
                      rpg + rpg).map((row) => (
                        <TableRow
                          key={row.proj_id}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell onClick={() => { nextpage(row.proj_id) }} component="th" scope="row" name="th_name">{row.th_name}</TableCell>
                          <TableCell onClick={() => { nextpage(row.proj_id) }} align="left">{row.proj_status == "00" ? <Tag color="#47d147">งานวิจัยสมบูรณ์</Tag> : <Tag color="#1a53ff">กำลังดำเนินการ</Tag>}</TableCell>
                          <TableCell onClick={() => { nextpage(row.proj_id) }} align="left">{row.proj_keyword}</TableCell>
                          <TableCell onClick={() => { nextpage(row.proj_id) }} align="left">{row.proj_team_member}</TableCell>
                          <TableCell onClick={() => { nextpage(row.proj_id) }} align="left">{row.proj_type}</TableCell>
                          <TableCell onClick={() => { nextpage(row.proj_id) }} align="left">{onChangeDate(row.start_date)}</TableCell>
                          
                        </TableRow>
                      ))}

                  </TableBody>
                  :
                  <TableBody>
                  {projectList.filter((row) => {
                    // if(check_value == ''){
                    //   return row ;
                    // }
                    // if(check_value == '' && search == 'Title'){
                    //   return search.toLowerCase() === '' ? row : row.th_name.toLowerCase().includes(search)
                    // }
                    // if(check_value == '' && search == 'Keyword'){
                    //   return search.toLowerCase() === '' ? row : row.proj_keyword.toLowerCase().includes(search)
                    // }
                    return search.toLowerCase() === '' ? row : row.th_name.toLowerCase().includes(search.toLowerCase())
                  })
                  .slice(pg * rpg, pg *
                    rpg + rpg).map((row) => (
                      <TableRow
                        key={row.proj_id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell onClick={() => { nextpage(row.proj_id) }} component="th" scope="row" name="th_name">{row.th_name}</TableCell>
                        <TableCell onClick={() => { nextpage(row.proj_id) }} align="left">{row.proj_status == "00" ? <Tag color="#47d147">งานวิจัยสมบูรณ์</Tag> : <Tag color="#1a53ff">กำลังดำเนินการ</Tag>}</TableCell>
                        <TableCell onClick={() => { nextpage(row.proj_id) }} align="left">{row.proj_keyword}</TableCell>
                        <TableCell onClick={() => { nextpage(row.proj_id) }} align="left">{row.proj_team_member}</TableCell>
                        <TableCell onClick={() => { nextpage(row.proj_id) }} align="left">{row.proj_type}</TableCell>
                        <TableCell onClick={() => { nextpage(row.proj_id) }} align="left">{onChangeDate(row.start_date)}</TableCell>
                       
                      </TableRow>
                    ))}

                  </TableBody>

                }
                
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25,100]}
                  //component="div"
                  count={projectList.length}
                  page={pg}
                  onPageChange={handleChangePage}
                  rowsPerPage={rpg}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
                
              </Table>
            </TableContainer>
          </div>

        </Container>
      </ThemeProvider>
    </div >
  );
}

/*
const columns = [
  { field: 'title', headerName: 'Title', width: 300 },
  { field: 'stats', headerName: 'Status', width: 200 },
  { field: 'keywords', headerName: 'Keywords', width: 300 },
  {
    field: 'data',
    headerName: 'Data',
    //type: 'file',
    width: 100,
  },
  { field: 'commencingdate', headerName: 'Commencing Date', width: 200 },
  /*{
    field: 'commencing date',
    headerName: 'Commencing Date',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 200,
    valueGetter: (params) =>
      `${params.row.title || ''} ${params.row.stats || ''}`,
  },
];

const rows = [
  { title: 'art', stats: 'complete research', keyword: 'เบียว', data: '-', commencingdate: '-' },
];
*/





// const rows = [
//     createData('การวิเคราะห์ผลกระทบในการออกกฎหมาย', 'Complete Research', 'กฎหมาย, การออกกฎหมาย', 'file.pdf', '01/05/2013'),
//     createData('การวิเคราะห์ผลกระทบในการออกกฎหมาย', 'Complete Research', 'กฎหมาย, การออกกฎหมาย', 'file.pdf', '01/05/2013'),
//     createData('การวิเคราะห์ผลกระทบในการออกกฎหมาย', 'Complete Research', 'กฎหมาย, การออกกฎหมาย', 'file.pdf', '01/05/2013'),
//     createData('การวิเคราะห์ผลกระทบในการออกกฎหมาย', 'Complete Research', 'กฎหมาย, การออกกฎหมาย', 'file.pdf', '01/05/2013'),
//     createData('การวิเคราะห์ผลกระทบในการออกกฎหมาย', 'Complete Research', 'กฎหมาย, การออกกฎหมาย', 'file.pdf', '01/05/2013'),
//     createData('การวิเคราะห์ผลกระทบในการออกกฎหมาย', 'Complete Research', 'กฎหมาย, การออกกฎหมาย', 'file.pdf', '01/05/2013'),
//     createData('การวิเคราะห์ผลกระทบในการออกกฎหมาย', 'Complete Research', 'กฎหมาย, การออกกฎหมาย', 'file.pdf', '01/05/2013'),
//     createData('การวิเคราะห์ผลกระทบในการออกกฎหมาย', 'Complete Research', 'กฎหมาย, การออกกฎหมาย', 'file.pdf', '01/05/2013'),

//   ];

