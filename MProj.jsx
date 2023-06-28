import * as React from 'react';
import { useState, useEffect } from "react";
import Axios from 'Axios';
import { styled } from '@mui/material/styles';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
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
import { /*Grid,*/ Tag } from 'antd';
import { FolderFilled, LogoutOutlined } from '@ant-design/icons';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TablePagination from "@mui/material/TablePagination";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import FileUploadIcon from '@mui/icons-material/FileUploadOutlined';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';


import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import InputLabel from '@mui/material/InputLabel';

import { DataGrid } from '@mui/x-data-grid';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


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

const inlineStyles = {
  color: '#86a8c5',
  fontSize: '50px',
  marginTop: '2em',
  'border-bottom': 'solid 3px #86a8c5'
};

const textshadow = {
  fontSize: 100,
  color: '#FFFFFF',
  fontFamily: 'Times New Roman',
  paddingLeft: 30,
  paddingRight: 30,
  textShadowColor: '#86a8c5',
  textShadowOffset: { width: 5, height: 5 },
  textShadowRadius: 10,
};

const background = {
  backgroundColor: '#86a8c5',
};

const bg = {
  border: '1px solid #86a8c5',

};


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
      onInput={(e) => {
        setSearchQuery(e.target.value);
      }}
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




export default function PersistentDrawerLeft() {

  const theme = useTheme();
  const [personName, setPersonName] = useState([]);
  const [projectList, setProjectList] = useState([]);
  const [preprojectList, setPreProjectList] = useState([]);
  const [type_List,setType_List] = useState([]);
  const [proj_type, setProj_type] = useState("");
  const [search, setSearch] = useState('');
  const [check_value, setCheck_value] = useState('');
  const [curprojectList, setCurProjectList] = useState([]);

  //---------------------------search date---------------------------------

  const [str_date, setStr_date] = useState(new Date());
  const [end_date, setEnd_date] = useState(new Date());
  const [cm_date, setCM_date] = useState(null);
  const [cp_date, setCP_date] = useState(null);

  

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('This will run after 1 second!');
      Axios.get('http://localhost:3001/project').then((response) => {
        //console.log(response);
        setProjectList(response.data);
        setCurProjectList(response.data);
      })
    }, 10);
    const timer2 = setTimeout(() => {
      Axios.get('http://localhost:3001/show_type_list').then((response) => {
      
      for(let i = 0 ; i < response.data.length;i++){
          setType_List(items =>[...items, response.data[i].type_name]);
      }
      }
    );
    },60);
    //return () => clearTimeout(timer);

    return () => {
      clearTimeout(timer);
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

  const nextpage = (e) => {
    //console.log(e);
    Axios.post("http://localhost:3001/project_id", {
      proj_id: e,
    }).then((response) => {
      //window.location = "/Home";
      window.location = "/MDesPJ";


    });
    //console.log(nextpage_id);

  }


  //--------------------------------------------------------------------------------




  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
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


  const [searchQuery, setSearchQuery] = useState("");

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

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

  //--------------------------------------------------------------
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
    setPersonName2([]);
    console.log(str_date);
    console.log(end_date);
    setProj_type("");
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

  const [pg, setpg] = useState(0);
  const [rpg, setrpg] = useState(5);

  const handleChangePage = (event, newPage) => {
    setpg(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setrpg(parseInt(event.target.value, 10));
    setpg(0);
  };



  const logout_on=()=>{

    Axios.get('http://localhost:3001/logout').then((response) => {
    console.log(response);
    window.location = "/AdminLogin";

  });
  }

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






  return (
    <ThemeProvider theme={themes}>
     <Container component="main" maxWidth="xl" >
        <CssBaseline />

        <AppBar position="fixed" open={open} color='maincolor'>
          <Toolbar >
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
       
          

          <Box component="form" noValidate onSubmit={handleSubmit} fullWidth style={{paddingTop:50}} /*sx={{ mt: 3, ml: 70, }}*/>

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
                  value={cp_date}
                  openTo="year"
                  views={["year", "month", "day"]}
                  inputFormat="DD/MM/YYYY"
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
                    <TableCell align="left" width={150}>วันที่เริ่มต้น</TableCell>
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
                  rowsPerPageOptions={[5, 10, 25, 100]}
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
  );
}

const rows = [
  createData('การวิเคราะห์ผลกระทบในการออกกฎหมาย', 'Complete Research', 'กฎหมาย, การออกกฎหมาย', 'file.pdf', '01/05/2013'),
  createData('การวิเคราะห์ผลกระทบในการออกกฎหมาย', 'Complete Research', 'กฎหมาย, การออกกฎหมาย', 'file.pdf', '01/05/2013'),
  createData('การวิเคราะห์ผลกระทบในการออกกฎหมาย', 'Complete Research', 'กฎหมาย, การออกกฎหมาย', 'file.pdf', '01/05/2013'),
  createData('การวิเคราะห์ผลกระทบในการออกกฎหมาย', 'Complete Research', 'กฎหมาย, การออกกฎหมาย', 'file.pdf', '01/05/2013'),
  createData('การวิเคราะห์ผลกระทบในการออกกฎหมาย', 'Complete Research', 'กฎหมาย, การออกกฎหมาย', 'file.pdf', '01/05/2013'),
  createData('การวิเคราะห์ผลกระทบในการออกกฎหมาย', 'Complete Research', 'กฎหมาย, การออกกฎหมาย', 'file.pdf', '01/05/2013'),
  createData('การวิเคราะห์ผลกระทบในการออกกฎหมาย', 'Complete Research', 'กฎหมาย, การออกกฎหมาย', 'file.pdf', '01/05/2013'),
  createData('การวิเคราะห์ผลกระทบในการออกกฎหมาย', 'Complete Research', 'กฎหมาย, การออกกฎหมาย', 'file.pdf', '01/05/2013'),

];
