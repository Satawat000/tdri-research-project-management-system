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
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
//import Select from '@mui/material/Select';
import { useState, useEffect } from "react";
import Axios from 'Axios';

import { Divider, Radio, Select, Space, Tag } from 'antd';
import { FolderFilled } from '@ant-design/icons';
//import IconButton from "@mui/material/IconButton";
//import SearchIcon from "@mui/icons-material/Search";
//import Stack from '@mui/material/Stack';
//import Autocomplete from '@mui/material/Autocomplete';
import InputLabel from '@mui/material/InputLabel';
import ListItemText from '@mui/material/ListItemText';
//import { DataGrid } from '@mui/x-data-grid';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from "@mui/material/TablePagination";
import Paper from '@mui/material/Paper';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';




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
  },
});

const background = {
  backgroundColor: '#86a8c5',
};

const bg = {
  backgroundColor: '#ffffff',

};

function TabPanel(props) {
  const { children, value1, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value1 !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value1 === index && (
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
  value1: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}











export default function SearchMember() {

  const [value, setValue] = React.useState(true);
  const [value1, setValue1] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const [searchQuery, setSearchQuery] = useState("");
  //const dataFiltered = filterData(searchQuery, data);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const [personName2, setPersonName2] = React.useState([]);

  const handleChange2 = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName2(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleChange3 = (event, newValue1) => {
    setValue1(newValue1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };


  //------------------------------------------------------------------------------------
  const [projectList, setProjectList] = useState([]);
  const [publicationList, setPublicationList] = useState([]);
  const [project_id_list, setProject_id_list] = useState([]);
  const [size, setSize] = useState('large');
  const [memberList, setMemberList] = useState([]);
  const [search, setSearch] = useState('');



  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('This will run after 1 second!');
      Axios.get('http://localhost:3001/project').then((response) => {
        //console.log(response);
        setProjectList(response.data);
      })
    }, 10);
    const timer1 = setTimeout(() => {
      console.log('This will run after 1 second!');
      Axios.get('http://localhost:3001/publication').then((response) => {
        //console.log(response);
        setPublicationList(response.data);
      })
    }, 30);
    const timer2 = setTimeout(() => {
      console.log('This will run after 3 second!');

      Axios.get('http://localhost:3001/show_member_list').then((response) => {

        for (let i = 0; i < response.data.length; i++) {
          setMemberList(items => [...items, response.data[i].ml_name]);
        }
      }

      )
    }, 50);
    //return () => clearTimeout(timer);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer1);
      clearTimeout(timer2);


    }

  }, []);


  //---------------------------------------------------------------------------------
  const onChangeDate = (e) => {
    const d = new Date(e);
    const days = d.getDate()
    const month = d.getMonth() + 1
    const year = d.getFullYear()
    //console.log(d);
    // console.log(d.getMonth() + 1);
    // console.log(d.getFullYear());
    return days + "/" + month + "/" + year;
  }
  //---------------------------------------------------------------------------------
  const nextpagePJ = (e) => {
    //console.log(e);
    Axios.post("http://localhost:3001/project_id", {
      proj_id: e,
    }).then((response) => {
      //window.location = "/Home";
      window.location = "/DesPJ";


    });
    //console.log(nextpage_id);



  }

  const nextpagePub = (e) => {
    //console.log(e);
    Axios.post("http://localhost:3001/publication_id", {
      publication_id: e,
    }).then((response) => {
      //window.location = "/Home";
      window.location = "/DesPub";


    });
  }
  //--------------------------------------------------------------------------------

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



  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };











  return (
    <ThemeProvider theme={themes}>
      <Container component="main" maxWidth="lg" >

        <CssBaseline />

        <Box
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            //alignItems: 'center',
          }}

        >
          <Select
            showSearch
            style={{
              width: '100%',
            }}
            size={'large'}
            placeholder="Search Member"
            //optionFilterProp="children"
            onFocus={(e) => { console.log(e) }}
            // filterOption={(input, option) => (option?.label ?? '').includes(input)}
            onChange={(event) => { setSearch(event) }}

            options={memberList.map((item) => ({
              label: item,
              value: item,
            }))}
          /></Box>




        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 3, borderColor: 'divider' }}>
            <Tabs value1={value1} sx={{ width: '100%' }} onChange={handleChange3} /*aria-label="basic tabs example"*/>
              <Tab label="Project" {...a11yProps(0)} />
              <Tab label="Publication" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value1={value1} index={0}>
            <div style={{ height: 777, width: '100%' }} >
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 777 }} size="large" aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <TableCell align='center' width={500}>ชื่อโครงการ</TableCell>
                      <TableCell align="center" width={50}>สถานะ</TableCell>
                      <TableCell align="center" width={300}>ผู้ทำวิจัย</TableCell>
                      <TableCell align="left" width={200}>วันที่เริ่มต้น</TableCell>
                      <TableCell align="left" width={100}>ที่อยู่ไฟล์</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {projectList.filter((row) => {

                      return search.toLowerCase() === '' ? row : row.proj_team_member.toLowerCase().includes(search)
                    })
                      .map((row) => (
                        <TableRow
                          key={row.proj_id}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell onClick={() => { nextpagePJ(row.proj_id) }} component="th" scope="row" name="th_name">{row.th_name}</TableCell>
                          <TableCell onClick={() => { nextpagePJ(row.proj_id) }} align="center">{row.proj_status == "00" ? <Tag color="#47d147">งานวิจัยสมบูรณ์</Tag> : <Tag color="#1a53ff">กำลังดำเนินการ</Tag>}</TableCell>
                          <TableCell onClick={() => { nextpagePJ(row.proj_id) }} align="left">{row.proj_team_member}</TableCell>
                          <TableCell onClick={() => { nextpagePJ(row.proj_id) }} align="left">{onChangeDate(row.start_date)}</TableCell>
                          <TableCell align="left"><FolderFilled /><Tag color="#ffffff">
                            <a
                              href={row.proj_data}
                              style={{
                                textDecoration: 'none', color: "#000000"
                              }}>
                              file
                            </a>
                          </Tag>
                          </TableCell>
                          <a href={row.proj_data}></a>
                        </TableRow>
                      ))}
                  </TableBody>

                  <TablePagination
                    rowsPerPageOptions={[10, 50, 100]}
                    //component="div"
                    count={100}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                </Table>
              </TableContainer>
            </div>
          </TabPanel>
          <TabPanel value1={value1} index={1}>
            <div style={{ height: 777, width: '100%' }}>
              <TableContainer component={Paper} >
                <Table sx={{ minWidth: 777 }} size="large" aria-label="a dense table" >
                  <TableHead>
                    <TableRow >
                      <TableCell align='center' width={500}>ชื่อเรื่อง</TableCell>
                      <TableCell align="left" width={150}>ประเภท</TableCell>
                      <TableCell align="center" width={300}>ผู้แต่ง</TableCell>
                      <TableCell align="left" width={200}>วันที่เผยแพร่</TableCell>
                      <TableCell align="left" width={100}>ที่อยู่ไฟล์</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {publicationList.filter((row) => {

                      return search.toLowerCase() === '' ? row : row.author.toLowerCase().includes(search)
                    })
                      .map((row) => (
                        <TableRow
                          key={row.publ_id}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell onClick={() => { nextpagePub(row.publ_id) }} component="th" scope="row">{row.title}</TableCell>
                          <TableCell onClick={() => { nextpagePub(row.publ_id) }} align="left">{onCheckCatagory(row.catagory)}</TableCell>
                          <TableCell onClick={() => { nextpagePub(row.publ_id) }} align="left">{row.author}</TableCell>
                          <TableCell onClick={() => { nextpagePub(row.publ_id) }} align="left">{onChangeDate(row.publish_date)}</TableCell>
                          <TableCell align="left"><FolderFilled /><Tag color="#ffffff">
                            <a
                              href={row.publ_data}
                              style={{
                                textDecoration: 'none', color: "#000000"
                              }}>
                              file
                            </a>
                          </Tag>
                          </TableCell>
                          <a href={row.publ_data}></a>
                        </TableRow>
                      ))}
                  </TableBody>

                  <TablePagination
                    rowsPerPageOptions={[10, 50, 100]}
                    //component="div"
                    count={100}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />

                </Table>
              </TableContainer>
            </div>
          </TabPanel>
        </Box>





      </Container>
    </ThemeProvider>
  );
}






