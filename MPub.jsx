import * as React from 'react';
import { useState, createContext, useEffect } from "react";
import Axios from 'Axios';
import { Tag } from 'antd';
import { FolderFilled, LogoutOutlined } from '@ant-design/icons';
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


import FileUploadIcon from '@mui/icons-material/FileUploadOutlined';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


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
    }
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
  'ชื่อเรื่อง',
  'คีย์เวิร์ด',
  'ชื่อนักวิจัย',
];

const status = [
  'รายงานทีดีอาร์ไอ',
  'Quaterly Review',
  'งานวิจัย',
  'อื่นๆ',
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

function createData(title, category, keyword, data, completedate) {
  return { title, category, keyword, data, completedate };
}


export default function PersistentDrawerLeft() {

  const [publicationList, setPublicationList] = useState([]);
  const [check_value, setCheck_value] = useState('');
  const [search, setSearch] = useState('');

  const [str_date, setStr_date] = useState("");
  const [end_date, setEnd_date] = useState("");
  const [cm_date, setCM_date] = useState(null);
  const [cp_date, setCP_date] = useState(null);

  const [check_date, setCheck_date] = useState(false);

  const [publ_type, setPubl_type] = useState("");
  const [type_List,setType_List] = useState([]);
  const [prepublicationList, setPrePublicationList] = useState([]);


  //-------------------------------------------------------------------

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('This will run after 1 second!');
      Axios.get('http://localhost:3001/publication').then((response) => {
        //console.log(response);
        setPublicationList(response.data);
      })
    }, 10);
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
      clearTimeout(timer2);


    }

  }, []);
  //-------------------------------------------------------------------


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

  //-------------------------------------------------------------------
  const onCheckCatagory = (e) => {
    let catagoryValue = "";
    // console.log("e");
    // console.log(e);
    if (e == '10') {
      catagoryValue = 'รายงานทีดีอาร์ไอ';
    }
    if (e == '20') {
      catagoryValue = 'Quaterly Review'
    }
    if (e == '30') {
      catagoryValue = 'งานวิจัย'
    }
    if (e == '40') {
      catagoryValue = 'อื่นๆ'
    }
    return catagoryValue;
  }
  //-------------------------------------------------------------------
  const nextpage = (e) => {
    //console.log(e);
    Axios.post("http://localhost:3001/publication_id", {
      publication_id: e,
    }).then((response) => {
      //window.location = "/Home";
      window.location = "/MDesPub";


    });
    //console.log(nextpage_id);

  }

  //-------------------------------------------------------------------





  const theme = createTheme({
    palette: {
      maincolor: {
        main: "#86a8c5",
        contrastText: "#ffffff",
      },
    },
  });
  const [open, setOpen] = useState(false);

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
        icon: <FileUploadIcon />,
        path: '/EditData'
    },
    
    {
        text: 'Log Out',
        icon: <LogoutOutlined />,
        path: '/AdminLogin'
    }
]



  const [personName, setPersonName] = React.useState([]);

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

  // 'TDRI Report',
  // 'Quaterly Review',
  // 'Research',
  // 'Other',

  const handleChange2 = (event) => {
    console.log(event.target.value)
    //console.log(event.target.value[0])
    //console.log(event.target.value[0] == 'TDRI Report')
    //console.log(event.target.value[1])
    setPubl_type("");
    console.log(event.target.value.length)
    if (event.target.value.length == 0 || event.target.value.length == 4) {
      setPublicationList([]);
      if(!check_date){
        console.log("all");
        Axios.get('http://localhost:3001/publication').then((response) => {
        //console.log(response);
        setPublicationList(response.data);
      })
      }else{
        Axios.post("http://localhost:3001/search_date_pub", {
          str_date_search: str_date,
          end_date_search: end_date,
        }).then((response) => {
          setPublicationList(response.data);
        });
      }
      
    }


    //-----------------------------------one select-------------------------------------


    if (event.target.value[0] == 'รายงานทีดีอาร์ไอ' && event.target.value.length == 1) {
      setPublicationList([]);
      
      if(!check_date){
        console.log('รายงานทีดีอาร์ไอ');
        Axios.get('http://localhost:3001/publication/TDRI_Report').then((response) => {
        //console.log(response);
        setPublicationList(response.data);
      })
      }else{
        Axios.post("http://localhost:3001/publication/TDRI_Report/date", {
          str_date_search: str_date,
          end_date_search: end_date,
        }).then((response) => {
          setPublicationList(response.data);
        });
      }
      
    }
    if (event.target.value[0] == 'Quaterly Review' && event.target.value.length == 1) {
      setPublicationList([]);
      if(!check_date){
        Axios.get('http://localhost:3001/publication/Quaterly_Review').then((response) => {
          //console.log(response);
          setPublicationList(response.data);
        })
      }else{
        Axios.post("http://localhost:3001/publication/Quaterly_Review/date", {
          str_date_search: str_date,
          end_date_search: end_date,
        }).then((response) => {
          setPublicationList(response.data);
        });
      }
      
    }
    if (event.target.value[0] == 'งานวิจัย' && event.target.value.length == 1) {
      setPublicationList([]);
      if(!check_date){
        Axios.get('http://localhost:3001/publication/Research').then((response) => {
        //console.log(response);
        setPublicationList(response.data);
        })
      }else{
        Axios.post("http://localhost:3001/publication/Research/date", {
          str_date_search: str_date,
          end_date_search: end_date,
        }).then((response) => {
          setPublicationList(response.data);
        });
      }
      
    }
    if (event.target.value[0] == 'อื่นๆ' && event.target.value.length == 1) {
      setPublicationList([]);
      if(!check_date){
        Axios.get('http://localhost:3001/publication/Other').then((response) => {
        //console.log(response);
        setPublicationList(response.data);
      })
      }else{
        Axios.post("http://localhost:3001/publication/Other/date", {
          str_date_search: str_date,
          end_date_search: end_date,
        }).then((response) => {
          setPublicationList(response.data);
        });
      }
      
    }

    //-----------------------------Two select------------------------------------------

    if (event.target.value[0] == 'รายงานทีดีอาร์ไอ' && event.target.value.length == 2) {

      if (event.target.value[1] == 'Quaterly Review') {
        //  TQ  //
        setPublicationList([]);
        if(!check_date){
          Axios.get('http://localhost:3001/publication/TQ').then((response) => {
          //console.log(response);
          setPublicationList(response.data);
        })
        }else{
          Axios.post("http://localhost:3001/publication/TQ/date", {
            str_date_search: str_date,
            end_date_search: end_date,
          }).then((response) => {
            setPublicationList(response.data);
          });
        }
        
      }
      else if (event.target.value[1] == 'งานวิจัย') {
        //  TR
        setPublicationList([]);
        if(!check_date){
          Axios.get('http://localhost:3001/publication/TR').then((response) => {
          //console.log(response);
          setPublicationList(response.data);
        })
        }else{
          Axios.post("http://localhost:3001/publication/TR/date", {
            str_date_search: str_date,
            end_date_search: end_date,
          }).then((response) => {
            setPublicationList(response.data);
          });
        }
        
      } else {
        //  TO
        if(!check_date){
          Axios.get('http://localhost:3001/publication/TO').then((response) => {
          //console.log(response);
          setPublicationList(response.data);
        })
        }else{
          Axios.post("http://localhost:3001/publication/TO/date", {
            str_date_search: str_date,
            end_date_search: end_date,
          }).then((response) => {
            setPublicationList(response.data);
          });
        }
        
      }
    }

    if (event.target.value[0] == 'Quaterly Review' && event.target.value.length == 2) {

      if (event.target.value[1] == 'รายงานทีดีอาร์ไอ') {
        //  TQ  //
        if(!check_date){
          Axios.get('http://localhost:3001/publication/TQ').then((response) => {
          //console.log(response);
          setPublicationList(response.data);
        })
        }else{
          Axios.post("http://localhost:3001/publication/TQ/date", {
            str_date_search: str_date,
            end_date_search: end_date,
          }).then((response) => {
            setPublicationList(response.data);
          });
        }
        
      }
      else if (event.target.value[1] == 'งานวิจัย') {
        //  QR
        if(!check_date){
          Axios.get('http://localhost:3001/publication/QR').then((response) => {
          //console.log(response);
          setPublicationList(response.data);
        })
        }else{
          Axios.post("http://localhost:3001/publication/QR/date", {
            str_date_search: str_date,
            end_date_search: end_date,
          }).then((response) => {
            setPublicationList(response.data);
          });
        }
        
      } else {
        //  QO
        if(!check_date){
          Axios.get('http://localhost:3001/publication/QO').then((response) => {
          //console.log(response);
          setPublicationList(response.data);
        })
        }else{
          Axios.post("http://localhost:3001/publication/QO/date", {
            str_date_search: str_date,
            end_date_search: end_date,
          }).then((response) => {
            setPublicationList(response.data);
          });
        }
        
      }
    }

    if (event.target.value[0] == 'งานวิจัย' && event.target.value.length == 2) {

      if (event.target.value[1] == 'รายงานทีดีอาร์ไอ') {
        //  TR  //
        if(!check_date){
          Axios.get('http://localhost:3001/publication/TR').then((response) => {
          //console.log(response);
          setPublicationList(response.data);
        })
        }else{
          Axios.post("http://localhost:3001/publication/TR/date", {
            str_date_search: str_date,
            end_date_search: end_date,
          }).then((response) => {
            setPublicationList(response.data);
          });
        }
        
      }
      else if (event.target.value[1] == 'Quaterly Review') {
        //  QR
        if(!check_date){
          Axios.get('http://localhost:3001/publication/QR').then((response) => {
          //console.log(response);
          setPublicationList(response.data);
        })
        }else{
          Axios.post("http://localhost:3001/publication/QR/date", {
            str_date_search: str_date,
            end_date_search: end_date,
          }).then((response) => {
            setPublicationList(response.data);
          });
        }
        
      } else {
        //  RO
        if(!check_date){
          Axios.get('http://localhost:3001/publication/RO').then((response) => {
          //console.log(response);
          setPublicationList(response.data);
        })
        }else{
          Axios.post("http://localhost:3001/publication/RO/date", {
            str_date_search: str_date,
            end_date_search: end_date,
          }).then((response) => {
            setPublicationList(response.data);
          });
        }
        
      }
    }

    if (event.target.value[0] == 'อื่นๆ' && event.target.value.length == 2) {

      if (event.target.value[1] == 'รายงานทีดีอาร์ไอ') {
        //  TO  //
        if(!check_date){
          Axios.get('http://localhost:3001/publication/TO').then((response) => {
          //console.log(response);
          setPublicationList(response.data);
        })
        }else{
          Axios.post("http://localhost:3001/publication/TO/date", {
            str_date_search: str_date,
            end_date_search: end_date,
          }).then((response) => {
            setPublicationList(response.data);
          });
        }
        
      }
      else if (event.target.value[1] == 'Quaterly Review') {
        //  QO
        if(!check_date){
          Axios.get('http://localhost:3001/publication/QO').then((response) => {
          //console.log(response);
          setPublicationList(response.data);
        })
        }else{
          Axios.post("http://localhost:3001/publication/QO/date", {
            str_date_search: str_date,
            end_date_search: end_date,
          }).then((response) => {
            setPublicationList(response.data);
          });
        }
        
      } else {
        //  RO
        if(!check_date){
          Axios.get('http://localhost:3001/publication/RO').then((response) => {
          //console.log(response);
          setPublicationList(response.data);
        })
        }else{
          Axios.post("http://localhost:3001/publication/RO/date", {
            str_date_search: str_date,
            end_date_search: end_date,
          }).then((response) => {
            setPublicationList(response.data);
          });
        }
        
      }
    }


    //-----------------------------tree select------------------------------------------

    if (event.target.value[0] == 'รายงานทีดีอาร์ไอ' && event.target.value.length == 3) {

      if (event.target.value[1] == 'Quaterly Review') { // T/Q

        if (event.target.value[2] == 'งานวิจัย') {
          //TQR
          if(!check_date){
            Axios.get('http://localhost:3001/publication/TQR').then((response) => {
            //console.log(response);
            setPublicationList(response.data);
          })
          }else{
            Axios.post("http://localhost:3001/publication/TQR/date", {
              str_date_search: str_date,
              end_date_search: end_date,
            }).then((response) => {
              setPublicationList(response.data);
            });
          }
          
        } else {
          //TQO
          if(!check_date){
            Axios.get('http://localhost:3001/publication/TQO').then((response) => {
            //console.log(response);
            setPublicationList(response.data);
          })
          }else{
            Axios.post("http://localhost:3001/publication/TQO/date", {
              str_date_search: str_date,
              end_date_search: end_date,
            }).then((response) => {
              setPublicationList(response.data);
            });
          }
          
        }
      }
      else if (event.target.value[1] == 'งานวิจัย') { // T/R

        if (event.target.value[2] == 'Quaterly Review') {
          //TQR
          if(!check_date){
            Axios.get('http://localhost:3001/publication/TQR').then((response) => {
            //console.log(response);
            setPublicationList(response.data);
          })
          }else{
            Axios.post("http://localhost:3001/publication/TQR/date", {
              str_date_search: str_date,
              end_date_search: end_date,
            }).then((response) => {
              setPublicationList(response.data);
            });
          }
          
        } else {
          //TRO
          if(!check_date){
            Axios.get('http://localhost:3001/publication/TRO').then((response) => {
            //console.log(response);
            setPublicationList(response.data);
          })
          }else{
            Axios.post("http://localhost:3001/publication/TRO/date", {
              str_date_search: str_date,
              end_date_search: end_date,
            }).then((response) => {
              setPublicationList(response.data);
            });
          }
          
        }
      } else { // T/O

        if (event.target.value[2] == 'Quaterly Review') {
          //TQO
          if(!check_date){
            Axios.get('http://localhost:3001/publication/TQO').then((response) => {
            //console.log(response);
            setPublicationList(response.data);
          })
          }else{
            Axios.post("http://localhost:3001/publication/TQO/date", {
              str_date_search: str_date,
              end_date_search: end_date,
            }).then((response) => {
              setPublicationList(response.data);
            });
          }
          
        } else {
          //TRO
          if(!check_date){
            Axios.get('http://localhost:3001/publication/TRO').then((response) => {
            //console.log(response);
            setPublicationList(response.data);
          })
          }else{
            Axios.post("http://localhost:3001/publication/TRO/date", {
              str_date_search: str_date,
              end_date_search: end_date,
            }).then((response) => {
              setPublicationList(response.data);
            });
          }
          
        }
      }
    }

    if (event.target.value[0] == 'Quaterly Review' && event.target.value.length == 3) {

      if (event.target.value[1] == 'รายงานทีดีอาร์ไอ') { // Q/T

        if (event.target.value[2] == 'งานวิจัย') {
          //TQR
          if(!check_date){
            Axios.get('http://localhost:3001/publication/TQR').then((response) => {
            //console.log(response);
            setPublicationList(response.data);
          })
          }else{
            Axios.post("http://localhost:3001/publication/TQR/date", {
              str_date_search: str_date,
              end_date_search: end_date,
            }).then((response) => {
              setPublicationList(response.data);
            });
          }
          
        } else {
          //TQO
          if(!check_date){
            Axios.get('http://localhost:3001/publication/TQO').then((response) => {
            //console.log(response);
            setPublicationList(response.data);
          })
          }else{
            Axios.post("http://localhost:3001/publication/TQO/date", {
              str_date_search: str_date,
              end_date_search: end_date,
            }).then((response) => {
              setPublicationList(response.data);
            });
          }
          
        }
      }
      else if (event.target.value[1] == 'งานวิจัย') { // Q/R

        if (event.target.value[2] == 'รายงานทีดีอาร์ไอ') {
          //TQR
          if(!check_date){
            Axios.get('http://localhost:3001/publication/TQR').then((response) => {
            //console.log(response);
            setPublicationList(response.data);
          })
          }else{
            Axios.post("http://localhost:3001/publication/TQR/date", {
              str_date_search: str_date,
              end_date_search: end_date,
            }).then((response) => {
              setPublicationList(response.data);
            });
          }
          
        } else {
          //QRO
          if(!check_date){
            Axios.get('http://localhost:3001/publication/QRO').then((response) => {
            //console.log(response);
            setPublicationList(response.data);
          })
          }else{
            Axios.post("http://localhost:3001/publication/QRO/date", {
              str_date_search: str_date,
              end_date_search: end_date,
            }).then((response) => {
              setPublicationList(response.data);
            });
          }
          
        }
      } else { // Q/O

        if (event.target.value[2] == 'รายงานทีดีอาร์ไอ') {
          //TQO
          if(!check_date){
            Axios.get('http://localhost:3001/publication/TQO').then((response) => {
            //console.log(response);
            setPublicationList(response.data);
          })
          }else{
            Axios.post("http://localhost:3001/publication/TQO/date", {
              str_date_search: str_date,
              end_date_search: end_date,
            }).then((response) => {
              setPublicationList(response.data);
            });
          }
          
        } else {
          //QRO
          if(!check_date){
            Axios.get('http://localhost:3001/publication/QRO').then((response) => {
            //console.log(response);
            setPublicationList(response.data);
          })
          }else{
            Axios.post("http://localhost:3001/publication/QRO/date", {
              str_date_search: str_date,
              end_date_search: end_date,
            }).then((response) => {
              setPublicationList(response.data);
            });
          }
          
        }
      }
    }

    if (event.target.value[0] == 'งานวิจัย' && event.target.value.length == 3) {

      if (event.target.value[1] == 'รายงานทีดีอาร์ไอ') { // R/T

        if (event.target.value[2] == 'Quaterly Review') {
          //TQR
          if(!check_date){
            Axios.get('http://localhost:3001/publication/TQR').then((response) => {
            //console.log(response);
            setPublicationList(response.data);
          })
          }else{
            Axios.post("http://localhost:3001/publication/TQR/date", {
              str_date_search: str_date,
              end_date_search: end_date,
            }).then((response) => {
              setPublicationList(response.data);
            });
          }
          
        } else {
          //TRO
          if(!check_date){
            Axios.get('http://localhost:3001/publication/TRO').then((response) => {
            //console.log(response);
            setPublicationList(response.data);
          })
          }else{
            Axios.post("http://localhost:3001/publication/TRO/date", {
              str_date_search: str_date,
              end_date_search: end_date,
            }).then((response) => {
              setPublicationList(response.data);
            });
          }
          
        }
      }
      else if (event.target.value[1] == 'Quaterly Review') { // R/Q

        if (event.target.value[2] == 'รายงานทีดีอาร์ไอ') {
          //TQR
          if(!check_date){
            Axios.get('http://localhost:3001/publication/TQR').then((response) => {
            //console.log(response);
            setPublicationList(response.data);
          })
          }else{
            Axios.post("http://localhost:3001/publication/TQR/date", {
              str_date_search: str_date,
              end_date_search: end_date,
            }).then((response) => {
              setPublicationList(response.data);
            });
          }
          
        } else {
          //QRO
          if(!check_date){
            Axios.get('http://localhost:3001/publication/QRO').then((response) => {
            //console.log(response);
            setPublicationList(response.data);
          })
          }else{
            Axios.post("http://localhost:3001/publication/QRO/date", {
              str_date_search: str_date,
              end_date_search: end_date,
            }).then((response) => {
              setPublicationList(response.data);
            });
          }
          
        }
      } else { // R/O

        if (event.target.value[2] == 'รายงานทีดีอาร์ไอ') {
          //TRO
          if(!check_date){
            Axios.get('http://localhost:3001/publication/TRO').then((response) => {
            //console.log(response);
            setPublicationList(response.data);
          })
          }else{
            Axios.post("http://localhost:3001/publication/TRO/date", {
              str_date_search: str_date,
              end_date_search: end_date,
            }).then((response) => {
              setPublicationList(response.data);
            });
          }
          
        } else {
          //QRO
          if(!check_date){
            Axios.get('http://localhost:3001/publication/QRO').then((response) => {
            //console.log(response);
            setPublicationList(response.data);
          })
          }else{
            Axios.post("http://localhost:3001/publication/QRO/date", {
              str_date_search: str_date,
              end_date_search: end_date,
            }).then((response) => {
              setPublicationList(response.data);
            });
          }
          
        }
      }
    }

    if (event.target.value[0] == 'อื่นๆ' && event.target.value.length == 3) {

      if (event.target.value[1] == 'รายงานทีดีอาร์ไอ') { // O/T

        if (event.target.value[2] == 'Quaterly Review') {
          //TQO
          if(!check_date){
            Axios.get('http://localhost:3001/publication/TQO').then((response) => {
            //console.log(response);
            setPublicationList(response.data);
          })
          }else{
            Axios.post("http://localhost:3001/publication/TQO/date", {
              str_date_search: str_date,
              end_date_search: end_date,
            }).then((response) => {
              setPublicationList(response.data);
            });
          }
          
        } else {
          //TRO
          if(!check_date){
            Axios.get('http://localhost:3001/publication/TRO').then((response) => {
            //console.log(response);
            setPublicationList(response.data);
          })
          }else{
            Axios.post("http://localhost:3001/publication/TRO/date", {
              str_date_search: str_date,
              end_date_search: end_date,
            }).then((response) => {
              setPublicationList(response.data);
            });
          }
          
        }
      }
      else if (event.target.value[1] == 'Quaterly Review') { // O/Q

        if (event.target.value[2] == 'รายงานทีดีอาร์ไอ') {
          //TQO
          if(!check_date){
            Axios.get('http://localhost:3001/publication/TQO').then((response) => {
            //console.log(response);
            setPublicationList(response.data);
          })
          }else{
            Axios.post("http://localhost:3001/publication/TQO/date", {
              str_date_search: str_date,
              end_date_search: end_date,
            }).then((response) => {
              setPublicationList(response.data);
            });
          }
          
        } else {
          //QRO
          if(!check_date){
            Axios.get('http://localhost:3001/publication/QRO').then((response) => {
            //console.log(response);
            setPublicationList(response.data);
          })
          }else{
            Axios.post("http://localhost:3001/publication/QRO/date", {
              str_date_search: str_date,
              end_date_search: end_date,
            }).then((response) => {
              setPublicationList(response.data);
            });
          }
          
        }
      } else { // O/R

        if (event.target.value[2] == 'รายงานทีดีอาร์ไอ') {
          //TRO
          if(!check_date){
            Axios.get('http://localhost:3001/publication/TRO').then((response) => {
            //console.log(response);
            setPublicationList(response.data);
          })
          }else{
            Axios.post("http://localhost:3001/publication/TRO/date", {
              str_date_search: str_date,
              end_date_search: end_date,
            }).then((response) => {
              setPublicationList(response.data);
            });
          }
          
        } else {
          //QRO
          if(!check_date){
            Axios.get('http://localhost:3001/publication/QRO').then((response) => {
            //console.log(response);
            setPublicationList(response.data);
          })
          }else{
            Axios.post("http://localhost:3001/publication/QRO/date", {
              str_date_search: str_date,
              end_date_search: end_date,
            }).then((response) => {
              setPublicationList(response.data);
            });
          }
          
        }
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

  const alltime = () => {
    setPersonName2([]);
    //console.log(projectList);
    setCP_date(null);
    //setEnd_date("");
    setCM_date(null);
    //setStr_date("");
    setCheck_date(false);
    setPubl_type("");
    Axios.get('http://localhost:3001/publication').then((response) => {
      //console.log(response);
      setPublicationList(response.data);
      //setCurProjectList(response.data);
    })


  };

  //--------------------------------------------------------------
  const onChangeStartDate = (date, dateString) => {
    
    console.log(date);
    if(date == null){
      setCM_date(null)
      setStr_date("");
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
    setPubl_type("");
    if (cm_date == null && cp_date == null) { 
      setCheck_date(false);
      Axios.get('http://localhost:3001/publication').then((response) => {
        //console.log(response);
        setPublicationList(response.data);
        //setCurProjectList(response.data);
      })
    }
    else if (cm_date == null && cp_date != null) {
      setCheck_date(true);
      Axios.post("http://localhost:3001/search_date_pub", {
        str_date_search: "",
        end_date_search: end_date,
      }).then((response) => {
        setPublicationList(response.data);
        //setCurProjectList(response.data);

        //window.location = "/Home";
        //window.location = "/DesPub";


      });
    }
    else if (cm_date != null && cp_date == null) {
      setCheck_date(true);
      
      Axios.post("http://localhost:3001/search_date_pub", {
        str_date_search: str_date,
        end_date_search: defualt_date1,
      }).then((response) => {
        setPublicationList(response.data);
        //setCurProjectList(response.data);

        //window.location = "/Home";
        //window.location = "/DesPub";


      });
      setEnd_date(defualt_date1);
    }
    else {
      setCheck_date(true);
      Axios.post("http://localhost:3001/search_date_pub", {
        str_date_search: str_date,
        end_date_search: end_date,
      }).then((response) => {
        setPublicationList(response.data);
        //setCurProjectList(response.data);

        //window.location = "/Home";
        //window.location = "/DesPub";


      });

    }

  };
 
  const [defualt_date1, setDefault_date1] = useState(new Date());

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
    //console.log(e.target.value);
    setPubl_type(e.target.value);
    //setProjectList(preprojectList);
    
    if(e.target.value == null){
      return;
    }
    else{
      // setProjectList(projectList.filter((row)=>{
      //   return  row.proj_type.toLowerCase().includes(e.target.value.toLowerCase())
      // }))
      Axios.post('http://localhost:3001/post_publication_list',{
          publ_type: e.target.value
        }).then((response)=>{
          setPublicationList(response.data);
          setPrePublicationList(response.data);
            //console.log("response");
            //console.log(response);
      })
    }

    
    

  }


  return (
    <ThemeProvider theme={themes}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open} color='maincolor'>
          <Toolbar >
            <IconButton
              color='inherit'
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              TDRI Publication
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


          <Box component="form" noValidate onSubmit={handleSubmit} fullWidth /*sx={{ mt: 3, ml: 70, }}*/>

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
                //placeholder="ค้นหา . . ."
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
                value={publ_type}
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
              <InputLabel id="demo-multiple-checkbox-label">ประเภท</InputLabel>
              <Select color='maincolor'
                //displayEmpty
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={personName2}
                onChange={handleChange2}
                input={<OutlinedInput label="ประเภท" />}
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
              <Button
                startIcon={<CalendarMonthOutlinedIcon />}
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
                  value={cm_date}
                  openTo="year"
                  views={["year", "month", "day"]}
                  inputFormat="DD/MM/YYYY"
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
              <Button
                startIcon={<SearchOutlinedIcon />}
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
              <Table sx={{ minWidth: 777 }} size="large" aria-label="a dense table" >
                <TableHead>
                  <TableRow >
                    <TableCell align='center' width={400}>ชื่อเรื่อง</TableCell>
                    <TableCell align="center" width={150}>ประเภท</TableCell>
                    <TableCell align="center" width={200}>คีย์เวิร์ด</TableCell>
                    <TableCell align="center" width={300}>ชื่อนักวิจัย</TableCell>
                    <TableCell align="center" width={200}>หมวดหมู่</TableCell>
                    <TableCell align="left" width={150}>วันที่เผยแพร่</TableCell>
                  </TableRow>
                </TableHead>
                {check_value == 'ชื่อนักวิจัย' ?
                  <TableBody >
                    {publicationList.filter((row) => {

                      return search.toLowerCase() === '' ? row : row.author.toLowerCase().includes(search.toLowerCase())

                    })
                    .slice(pg * rpg, pg *
                      rpg + rpg).map((row) => (
                        <TableRow
                          key={row.title}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell onClick={() => { nextpage(row.publ_id) }} component="th" scope="row">{row.title}</TableCell>
                          <TableCell onClick={() => { nextpage(row.publ_id) }} align="center">{onCheckCatagory(row.catagory)}</TableCell>
                          <TableCell onClick={() => { nextpage(row.publ_id) }} align="left">{row.publ_keyword}</TableCell>
                          <TableCell onClick={() => { nextpage(row.publ_id) }} align="left">{row.author}</TableCell>
                          <TableCell onClick={() => { nextpage(row.publ_id) }} align="left">{row.publ_type}</TableCell>
                          <TableCell onClick={() => { nextpage(row.publ_id) }} align="left">{onChangeDate(row.publish_date)}</TableCell>
                          
                        </TableRow>
                      ))}
                  </TableBody>
                  :check_value == 'คีย์เวิร์ด' ?
                  <TableBody>
                    {publicationList.filter((row) => {

                      return search.toLowerCase() === '' ? row : row.publ_keyword.toLowerCase().includes(search.toLowerCase())
                    })
                    .slice(pg * rpg, pg *
                      rpg + rpg).map((row) => (
                        <TableRow
                          key={row.title}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell onClick={() => { nextpage(row.publ_id) }} component="th" scope="row">{row.title}</TableCell>
                          <TableCell onClick={() => { nextpage(row.publ_id) }} align="center">{onCheckCatagory(row.catagory)}</TableCell>
                          <TableCell onClick={() => { nextpage(row.publ_id) }} align="left">{row.publ_keyword}</TableCell>
                          <TableCell onClick={() => { nextpage(row.publ_id) }} align="left">{row.author}</TableCell>
                          <TableCell onClick={() => { nextpage(row.publ_id) }} align="left">{row.publ_type}</TableCell>
                          <TableCell onClick={() => { nextpage(row.publ_id) }} align="left">{onChangeDate(row.publish_date)}</TableCell>
                          
                        </TableRow>
                      ))}
                  </TableBody>
                  :
                  <TableBody>
                  {publicationList.filter((row) => {

                    return search.toLowerCase() === '' ? row : row.title.toLowerCase().includes(search.toLowerCase())
                  })
                  .slice(pg * rpg, pg *
                    rpg + rpg).map((row) => (
                      <TableRow
                        key={row.title}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell onClick={() => { nextpage(row.publ_id) }} component="th" scope="row">{row.title}</TableCell>
                        <TableCell onClick={() => { nextpage(row.publ_id) }} align="center">{onCheckCatagory(row.catagory)}</TableCell>
                        <TableCell onClick={() => { nextpage(row.publ_id) }} align="left">{row.publ_keyword}</TableCell>
                        <TableCell onClick={() => { nextpage(row.publ_id) }} align="left">{row.author}</TableCell>
                        <TableCell onClick={() => { nextpage(row.publ_id) }} align="left">{row.publ_type}</TableCell>
                        <TableCell onClick={() => { nextpage(row.publ_id) }} align="left">{onChangeDate(row.publish_date)}</TableCell>
                        
                      </TableRow>
                    ))}
                  </TableBody>
                }

                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, 100]}
                  //component="div"
                  count={publicationList.length}
                  page={pg}
                  onPageChange={handleChangePage}
                  rowsPerPage={rpg}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />        

              </Table>
            </TableContainer>
          </div>



        </Main>
      </Box>
    </ThemeProvider>
  );
}

const rows = [
  createData('การวิเคราะห์ผลกระทบในการออกกฎหมาย', 'TDRI Report', 'กฎหมาย, การออกกฎหมาย', 'file.pdf', '21/09/2015'),
  createData('การวิเคราะห์ผลกระทบในการออกกฎหมาย', 'TDRI Report', 'กฎหมาย, การออกกฎหมาย', 'file.pdf', '21/09/2015'),
  createData('การวิเคราะห์ผลกระทบในการออกกฎหมาย', 'TDRI Report', 'กฎหมาย, การออกกฎหมาย', 'file.pdf', '21/09/2015'),
  createData('การวิเคราะห์ผลกระทบในการออกกฎหมาย', 'TDRI Report', 'กฎหมาย, การออกกฎหมาย', 'file.pdf', '21/09/2015'),
  createData('การวิเคราะห์ผลกระทบในการออกกฎหมาย', 'TDRI Report', 'กฎหมาย, การออกกฎหมาย', 'file.pdf', '21/09/2015'),
  createData('การวิเคราะห์ผลกระทบในการออกกฎหมาย', 'TDRI Report', 'กฎหมาย, การออกกฎหมาย', 'file.pdf', '21/09/2015'),
  createData('การวิเคราะห์ผลกระทบในการออกกฎหมาย', 'TDRI Report', 'กฎหมาย, การออกกฎหมาย', 'file.pdf', '21/09/2015'),
  createData('การวิเคราะห์ผลกระทบในการออกกฎหมาย', 'TDRI Report', 'กฎหมาย, การออกกฎหมาย', 'file.pdf', '21/09/2015'),

];
