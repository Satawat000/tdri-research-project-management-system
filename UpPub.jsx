import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import Axios from 'Axios';
//import Avatar from '@mui/material/Avatar';
import { Avatar} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Textarea from '@mui/joy/Textarea';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
//import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Modal from '@mui/material/Modal';
import { DataGrid } from '@mui/x-data-grid';
//import Textarea from '@mui/joy/Textarea';
import Paper from '@mui/material/Paper';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { Divider, Radio, Select, Space, Tag } from 'antd';
import FileUploadIcon from '@mui/icons-material/FileUploadOutlined';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';


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
    backgroundColor: '#ffffff',

};

const { TextArea } = Input;

function createData(category, title, publisheddate) {
    return { category, title, publisheddate };
}


export default function UpPJ() {
    const [pub_date_value, setPub_date_value] = useState(null);
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([]);

    const [memberList, setMemberList] = useState([]);
    const [keywordList, setKeywordList] = useState([]);
    const [type_List,setType_List] = useState([]);



    const [project_id_list, setProject_id_list] = useState([]);

    const [size, setSize] = useState('large');

    const [name, setName] = useState('');
    const inputRef = useRef(null);
    //---------------------------------------------------------
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [publ_keyword, setPubl_keyword] = useState("");
    const [catagory, setCatagory] = useState("");
    const [fi_code, setFi_code] = useState("");
    const [publish_date, setPublish_date] = useState();
    const [publ_data, setPubl_data] = useState("");
    const [remark, setRemark] = useState("");
    const [proj_id, setProj_id] = useState(null);
    const [res_id, setRes_id] = useState(null);
    const [res_name, setRes_name] = useState("");
    const [res_username, setRes_username] = useState("");
    const [publ_type, setPubl_type] = useState("");
   
    const [publ_id, setPubl_id] = useState("");
    const [th_name_proj, setTh_name_proj] = useState(null);
    const [loginStatus, setLoginStatus] = useState(true);

    //---------------------------------------------------------------
    const [check_edit, setCheck_edit] = useState(false);

    //const [counts,setCounts] = useState(0);

    //------------------------------เพิ่ม default_date-----------------------------------
    const [default_date, setDefault_date] = useState(new Date());
    const default_date_change=()=>{  
        const days = default_date.getDate()
        const month = default_date.getMonth() + 1
        const year = default_date.getFullYear()

        //console.log(year+"-"+month+"-"+days);
        
        setPublish_date(year+"-"+month+"-"+days);
        
    }

    //-----------------------------------------------------------------



    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    const onNameChange = (event) => {

        setName(event.target.value);
    };

    //------------------------------------------------------------------------------
    const addMember = (e) => {

        e.preventDefault();
        setMemberList([...memberList, name || `New item ${index++}`]);
        setName('');

        setTimeout(() => {
            inputRef.current?.focus();
        }, 0);
        Axios.post('http://localhost:3001/add_member_list', {
            ml_name: name
        }).then((response) => {
            //console.log("response");
            //console.log(response);
        })
        console.log(name);
        //console.log(items);
    };

    //------------------------------------------------------------------------------

    const addKeyword = (e) => {

        e.preventDefault();
        setKeywordList([...keywordList, name || `New item ${index++}`]);
        setName('');

        setTimeout(() => {
            inputRef.current?.focus();
        }, 0);
        Axios.post('http://localhost:3001/add_keyword_list', {
            kw_name: name
        }).then((response) => {
            //console.log("response");
            //console.log(response);
        })
        console.log(name);
        //console.log(items);
    };

    const addType = (e) => {
        
        e.preventDefault();
        setType_List([...type_List, name || `New item ${index++}`]);
        setName('');

        setTimeout(() => {
            inputRef.current?.focus();
        }, 0);
        Axios.post('http://localhost:3001/add_type_list',{
            type_name:name
        }).then((response)=>{
            //console.log("response");
            //console.log(response);
        })
        console.log(name);
        //console.log(items);
    };

    //------------------------------------------------------------------------

    const onChangeDate = (date, dateString) => {
        if(date == null){
            //setCM_date(null)
            setPub_date_value(null)
            setPublish_date(new Date());
            return ;
        }
        setPub_date_value(date)
        const end_day = date.$D;
        const end_month = date.$M + 1;
        const end_year = date.$y;
        setPublish_date(end_year + "-" + end_month + "-" + end_day);
        console.log(end_year + "-" + end_month + "-" + end_day);
    };

    //------------------------------------------------------------------------

    const combine_keyword = (e) => {

        var row = "";
        for (let i = 0; i < e.length; i++) {
            if (i + 1 == e.length) {
                row = row + e[i];
            } else {
                row = row + e[i] + ",";
            }

        }

        setPubl_keyword(row);
        console.log(row);

    }

    //--------------------------------------------------
    const combine_Author = (e) => {

        var row = "";
        for (let i = 0; i < e.length; i++) {
            if (i + 1 == e.length) {
                row = row + e[i];
            } else {
                row = row + e[i] + ",";
            }

        }
        console.log("Author");
        setAuthor(row);
        console.log(row);

    }

    //--------------------------------------------------



    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('This will run after 1 second!');
            Axios.get('http://localhost:3001/show_member_list').then((response) => {

                for (let i = 0; i < response.data.length; i++) {
                    setMemberList(items => [...items, response.data[i].ml_name]);
                }
            }

            )
        }, 10);
        //return () => clearTimeout(timer);

        const timer1 = setTimeout(() => {
            console.log('This will run after 2 second!');
            Axios.get('http://localhost:3001/show_keyword_list').then((response) => {

                for (let i = 0; i < response.data.length; i++) {
                    setKeywordList(items => [...items, response.data[i].kw_name]);
                }
            }

            )
        }, 20);

        const timer2 = setTimeout(() => {
            console.log('This will run after 3 second!');
            Axios.get('http://localhost:3001/show_project_id_list').then((response) => {

                for (let i = 0; i < response.data.length; i++) {
                    setProject_id_list(project_id_list =>
                        [...project_id_list,
                        {
                            label: response.data[i].th_name,
                            value: response.data[i].proj_id,
                        },
                        ]
                    );
                }
            }

            )
        }, 30);

        const timer3 = setTimeout(() => {
            Axios.get("http://localhost:3001/login_user").then((response) => {
                console.log(response)
                if (response.data.loggedIn == true) {
                    setRes_username(response.data.user[0].res_username);
                    setRes_id(response.data.user[0].res_id);
                }
            });
        }, 300);

        const timer4 = setTimeout(() => {
            Axios.get("http://localhost:3001/publication_history").then((response) => {
                setItems(response.data);

            });
        }, 500);

        //------------------------------เพิ่ม default_date-----------------------------------
        const timer5 = setTimeout(() => {
            default_date_change();
        },500);

        //-----------------------------------------------------------------

        const timer6 = setTimeout(() => {
            Axios.get('http://localhost:3001/login_user').then((response) => {
              //console.log(response);
              if (response.data.loggedIn == true) {
                console.log("ttt");
      
                setLoginStatus(response.data.loggedIn);
              }
              else{
                setLoginStatus(response.data.loggedIn);
              }
              
            })
        }, 1);

        const timer7 = setTimeout(() => {
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
            clearTimeout(timer3);
            clearTimeout(timer4);
            //------------------------------เพิ่ม default_date-----------------------------------
            clearTimeout(timer5);
            clearTimeout(timer6);
        //-----------------------------------------------------------------
            clearTimeout(timer7);

        }

    }, []);






    //-------------------------------------------------------------

    const addPublication = () => {
        if (title=="") {
            alert ("ต้องใส่ชื่อเรื่อง")
            return;
        }
        Axios.post("http://localhost:3001/up_publication", {
            title: title,
            author: author,
            publ_keyword: publ_keyword,
            catagory: catagory,
            fi_code: fi_code,
            publish_date: publish_date,
            publ_data: publ_data,
            remark: remark,
            proj_id: proj_id,
            publ_type: publ_type,
            res_id: res_id,
        }).then((response) => {
            console.log(response);
            //     setProjectList([
            //     ...projectList,
            //     {
            //       th_name: th_name,
            //   en_name: en_name,
            //   proj_keyword: proj_keyword,
            //   employee: employee,
            //   start_date: start_date,
            //   end_date: end_date,
            //   proj_status: proj_status,
            //   proj_data: proj_data,
            //   description: description,
            //     },
            //   ]);
        });

        Axios.get("http://localhost:3001/publication_history").then((response) => {
            setItems(response.data);
        });
    };

    //-------------------------------------------------------------


    const deletePublication = (id,name) => {
        console.log(id);

        var ans = confirm("ยืนยันลบ Publication :" + name);
        if (ans == true) {
            Axios.delete(`http://localhost:3001/delete_Publication/${id}`).then((response) => {
                setItems(
                    items.filter((val) => {
                        return val.publ_id != id;
                    })
                );
                window.location = '/UpPub';
            });
        }
    }

    //-------------------------------------------------------------

    const onChangeShowDate = (e) => {
        const d = new Date(e);
        const days = d.getDate()
        const month = d.getMonth() + 1
        const year = d.getFullYear()
        // console.log(d.getDate());
        // console.log(d.getMonth() + 1);
        // console.log(d.getFullYear());
        return days + "/" + month + "/" + year;
    }

    //-------------------------------------------------------------

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

    //-------------------------------------------------------------

    const haddleeditPublication = (id) => {

        setCheck_edit(true);


        Axios.get(`http://localhost:3001/edit_publication/${id}`).then((response) => {
            //console.log(response.data[0].th_name);
            setTitle(response.data[0].title);
            setAuthor(response.data[0].author);
            setPubl_keyword(response.data[0].publ_keyword);
            setCatagory(response.data[0].catagory);
            setFi_code(response.data[0].fi_code);
            edit_Publish_date(response.data[0].publish_date);
            //setPublish_date(response.data[0].publish_date);
            setPubl_data(response.data[0].publ_data);
            setRemark(response.data[0].remark);
            setProj_id(response.data[0].proj_id);
            setPubl_id(response.data[0].publ_id);
            setPubl_type(response.data[0].publ_type);
            if(response.data[0].proj_id == null){
                setTh_name_proj(null);

            }else{
                Axios.post("http://localhost:3001/check_project_th_name", {
                proj_id: response.data[0].proj_id,
                }).then((response) => {
                //window.location = "/Home";
                //console.log(response.data[0].proj_id);
                setTh_name_proj(response.data[0].th_name)
           
            });

            }
            


        }
        )
        // setPub_date_value(publish_date);


    }

    const edit_Publish_date =(e)=>{
        //console.log("test");
        //console.log(e);
        const d = new Date(e);
        //setCM_date(d);
        setPub_date_value(d);
        const days = d.getDate()
        const month = d.getMonth() + 1
        const year = d.getFullYear()
        setPublish_date(year+"-"+month+"-"+days);
        //console.log(d);
        
    }

    //-------------------------------------------------------------

    const editPublication = (id) => {
        console.log(id);
        Axios.put("http://localhost:3001/update_publication", {
            title: title,
            author: author,
            publ_keyword: publ_keyword,
            catagory: catagory,
            fi_code: fi_code,
            publish_date: publish_date,
            publ_data: publ_data,
            remark: remark,
            publ_type: publ_type,
            proj_id: proj_id,
            publ_id: id,
        }).then(
            (response) => {
                setItems(
                    items.map((val) => {
                        return val.publ_id == id
                            ? {
                                title: title,
                                author: author,
                                publ_keyword: publ_keyword,
                                catagory: catagory,
                                fi_code: fi_code,
                                publish_date: publish_date,
                                publ_data: publ_data,
                                remark: remark,
                                publ_type: publ_type,
                                proj_id: proj_id,
                                publ_id: id,
                                res_id: res_id,
                                ad_username: "",
                            }
                            : val;
                    })
                );
                window.location = '/UpPub';
            }
        );
    }

    //-------------------------------------------------------------


    const nextpage = (e) => {
        //console.log(e);
        Axios.post("http://localhost:3001/publication_id", {
            publication_id: e,
        }).then((response) => {
            //window.location = "/Home";
            window.location = "/DesPub";


        });
        //console.log(nextpage_id);

    }
    //console.log(project_id_list);

    const test=(e)=>{
        console.log(e);
        Axios.post("http://localhost:3001/check_project_id", {
            th_name: e,
        }).then((response) => {
            //window.location = "/Home";
            //console.log(response.data[0].proj_id);
            setProj_id(response.data[0].proj_id)
            setTh_name_proj(response.data[0].th_name);

            


        });


    }




    return (
        <div>
        {loginStatus == true ?
            <ThemeProvider theme={themes}>

                <Container component="main" maxWidth="lg" >
                    <CssBaseline />
                    <Box
            sx={{
              marginTop: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}

          ><Avatar icon={<UserOutlined />} sx={{borderRadius: 3, width:70 , height: 70}}></Avatar><div>{res_username}</div>
          </Box >
        </Container>

                <Container component="main" maxWidth="lg" >
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 3,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                         <Typography component="h5" variant="h7" color="#ffffff" fontFamily='Century Gothic' letterSpacing={1} textAlign='left'
                            style={background} sx={{ mb: 3, p: 1, borderRadius: 2 }} width={1150} //fullWidth
                        >
                            Publication History
                        </Typography>
                        <div style={{ height: 100, width: '100%' }}>
                            <TableContainer component={Paper} sx={{ height: 200 }}>
                                <Table sx={{ minWidth: 700 }} size="large" aria-label="a dense table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="left" width={100}>ลำดับ</TableCell>
                                            <TableCell align='center' width={500}>ชื่อเรื่อง</TableCell>
                                            <TableCell align="center" width={150}>ประเภท</TableCell>
                                            <TableCell align="center" width={150}>วันที่เผยแพร่</TableCell>
                                            <TableCell align="center" width={250}></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {items.map((row,index) => (

                                            // {setCounts(1)}
                                            
                                            <TableRow
                                                key={row.publ_id}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell onClick={() => { nextpage(row.publ_id) }} align="left">{index+1}</TableCell>
                                                <TableCell onClick={() => { nextpage(row.publ_id) }} component="th" scope="row">{row.title}</TableCell>
                                                <TableCell onClick={() => { nextpage(row.publ_id) }} align="center">{onCheckCatagory(row.catagory)}</TableCell>
                                                <TableCell onClick={() => { nextpage(row.publ_id) }} align="center">{onChangeShowDate(row.publish_date)}</TableCell>
                                                <TableCell>
                                                    <Grid align="center">
                                                        <Button
                                                        startIcon={<BorderColorIcon/>}
                                                            //type="submit"
                                                            //fullWidth
                                                            variant="outlined"
                                                            color="warning"
                                                            sx={{ mt: 1, mb: 0, mr: 1, opacity: 0.5 }}
                                                            onClick={() => { haddleeditPublication(row.publ_id) }}
                                                        >
                                                            edit
                                                        </Button>
                                                        <Button
                                                        startIcon={<DeleteIcon/>}
                                                            // type="submit"
                                                            //fullWidth
                                                            variant="outlined"
                                                            color="error"
                                                            sx={{ mt: 1, mb: 0 }}
                                                            onClick={() => { deletePublication(row.publ_id,row.title) }}
                                                        >
                                                            Remove
                                                        </Button>
                                                    </Grid>
                                                </TableCell>
                                            </TableRow>
                                        
                                            
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </Box>
                </Container>

                <Container component="main" maxWidth="lg" style={{ paddingTop: 50 }}>
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 3,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >

                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3, ml: 70, }}>


                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                                <Grid item md>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>



                    <Box
                        sx={{
                            marginTop: 3,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        {check_edit == false ?
                            <Typography component="h5" variant="h7" color="#ffffff" fontFamily='Century Gothic' letterSpacing={1} textAlign='left'
                                style={background} sx={{ p: 1, borderRadius: 2 }} width={1150}>
                                New Publication
                            </Typography>
                            :
                            <Typography component="h5" variant="h7" color="#ffffff" fontFamily='Century Gothic' letterSpacing={1} textAlign='left'
                                style={background} sx={{ p: 1, borderRadius: 2 }} width={1150}>
                                Edit Publication
                            </Typography>
                        }
                        <Box component="form" noValidate sx={{ mt: 3 }}>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="Name"
                                        //required
                                        fullWidth
                                        //id="Name"
                                        label="ชื่อเรื่อง"
                                        color='maincolor'
                                        autoFocus
                                        value={title}
                                        onChange={(event) => {
                                            //console.log(event.target.value);
                                            setTitle(event.target.value);
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="fi"
                                        //required
                                        fullWidth
                                        //id="Name"
                                        label="รหัสการเงิน"
                                        color='maincolor'
                                        autoFocus
                                        value={fi_code}
                                        onChange={(event) => {
                                            //console.log(event.target.value);
                                            setFi_code(event.target.value);
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker
                                            label="วันที่เผยแพร่"
                                            value={pub_date_value}
                                            openTo="year"
                                            views={["year", "month", "day"]}
                                            inputFormat="DD/MM/YYYY"
                                            onChange={onChangeDate}
                                            
                                            renderInput={(params) => (
                                                <TextField {...params} fullWidth color='maincolor' />
                                            )}
                                        />
                                    </LocalizationProvider>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="file-name"
                                        //required
                                        fullWidth
                                        id="file-name"
                                        label="ที่อยู่ไฟล์"
                                        color='maincolor'
                                        autoFocus
                                        value={publ_data}
                                        onChange={(event) => {
                                            //console.log(event.target.value);
                                            setPubl_data(event.target.value)
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth required autoComplete="given-name" autoFocus >
                                        {/* <InputLabel color='maincolor'>
                                            Category
                                        </InputLabel> */}
                                        {catagory == "" ?
                                            <Select
                                                showSearch
                                                placeholder="ประเภท"
                                                //label="Category"
                                                color='maincolor'
                                                size={size}
                                                onChange={(event) => {
                                                    console.log(event);
                                                    setCatagory(event);
                                                }}

                                                options={[
                                                    {
                                                        value: '10',
                                                        label: 'รายงานทีดีอาร์ไอ',
                                                    },
                                                    {
                                                        value: '20',
                                                        label: 'Quaterly Review',
                                                    },
                                                    {
                                                        value: '30',
                                                        label: 'งานวิจัย',
                                                    },
                                                    {
                                                        value: '40',
                                                        label: 'อื่นๆ',
                                                    },
                                                ]}
                                            />
                                        
                                        :
                                            <Select
                                                showSearch
                                                placeholder="ประเภท"
                                                //label="Category"
                                                color='maincolor'
                                                size={size}
                                                value={catagory}
                                                onChange={(event) => {
                                                    console.log(event);
                                                    setCatagory(event);
                                                }}

                                                options={[
                                                    {
                                                        value: '10',
                                                        label: 'รายงานทีดีอาร์ไอ',
                                                    },
                                                    {
                                                        value: '20',
                                                        label: 'Quaterly Review',
                                                    },
                                                    {
                                                        value: '30',
                                                        label: 'งานวิจัย',
                                                    },
                                                    {
                                                        value: '40',
                                                        label: 'อื่นๆ',
                                                    },
                                                ]}
                                            />
                                        
                                        }
                                        {/* <Select
                                            showSearch
                                            placeholder="ประเภท"
                                            //label="Category"
                                            color='maincolor'
                                            size={size}
                                            onChange={(event) => {
                                                console.log(event);
                                                setCatagory(event);
                                            }}

                                            options={[
                                                {
                                                    value: '10',
                                                    label: 'รายงานทีดีอาร์ไอ',
                                                },
                                                {
                                                    value: '20',
                                                    label: 'Quaterly Review',
                                                },
                                                {
                                                    value: '30',
                                                    label: 'งานวิจัย',
                                                },
                                                {
                                                    value: '40',
                                                    label: 'อื่นๆ',
                                                },
                                            ]}
                                        /> */}
                                            {/* <MenuItem value={10}>รายงานทีดีอาร์ไอ</MenuItem>
                                            <MenuItem value={20}>Quaterly Review</MenuItem>
                                            <MenuItem value={30}>งานวิจัย</MenuItem>
                                            <MenuItem value={40}>อื่น</MenuItem>
                                        </Select> */}
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    {proj_id == null ? 
                                        <Select
                                            showSearch
                                            style={{
                                                width: 565,
                                            }}
                                            size={size}
                                            //value={proj_id}
                                            placeholder="โครงการที่เกี่ยวข้อง"
                                            value={th_name_proj}
                                            //optionFilterProp="children"
                                            //onFocus={(e) => { console.log(e) }}
                                            // filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                            onChange={(e)=>test(e)}

                                            options={project_id_list.map((item) => ({
                                                label: item.label,
                                                value: item.label,
                                            }))}
                                        />
                                        :
                                        <Select
                                            showSearch
                                            style={{
                                                width: 565,
                                            }}
                                            size={size}
                                            value={th_name_proj}
                                            //value={proj_id}
                                            placeholder="โครงการที่เกี่ยวข้อง"
                                            //optionFilterProp="children"
                                            //onFocus={(e) => { console.log(e) }}
                                            // filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                            onChange={(e)=>test(e)}

                                            options={project_id_list.map((item) => ({
                                                label: item.label,
                                                value: item.label,
                                            }))}
                                        />
                                    }
                                    
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                {publ_type != "" ?
                                    <Select 
                                    labelInValue
                                    size={size}
                                    style={{
                                        width: '100%',
                                    }}
                                    //onChange={(event)=>{console.log(event[0])}}
                                    onChange={(e)=>{setPubl_type(e.value)}}
                                    placeholder="หมวดหมู่"
                                    value = {publ_type}
                                    dropdownRender={(menu) => (
                                        <>
                                            {menu}
                                            <Divider
                                                style={{
                                                    margin: '8px 0',
                                                }}
                                            />
                                            <Space
                                                style={{
                                                    padding: '0 8px 4px',
                                                }}
                                            >
                                                <Input
                                                    placeholder="เพิ่มหมวดหมู่"
                                                    ref={inputRef}
                                                    value={name}
                                                    onChange={onNameChange}
                                                />
                                                <Button type="text"  onClick={addType}>
                                                    เพิ่มหมวดหมู่
                                                </Button>
                                            </Space>
                                        </>
                                    )}
                                    options={type_List.map((item) => ({
                                        label: item,
                                        value: item,
                                      }))} 
                                />


                                    :
                                    <Select 
                                        labelInValue
                                        size={size}
                                        style={{
                                            width: '100%',
                                        }}
                                        //onChange={(event)=>{console.log(event[0])}}
                                        onChange={(e)=>{setPubl_type(e.value)}}
                                        placeholder="หมวดหมู่"
                                        // value = {proj_keyword}
                                        dropdownRender={(menu) => (
                                            <>
                                                {menu}
                                                <Divider
                                                    style={{
                                                        margin: '8px 0',
                                                    }}
                                                />
                                                <Space
                                                    style={{
                                                        padding: '0 8px 4px',
                                                    }}
                                                >
                                                    <Input
                                                        placeholder="เพิ่มหมวดหมู่"
                                                        ref={inputRef}
                                                        value={name}
                                                        onChange={onNameChange}
                                                    />
                                                    <Button type="text"  onClick={addType}>
                                                        เพิ่มหมวดหมู่
                                                    </Button>
                                                </Space>
                                            </>
                                        )}
                                        options={type_List.map((item) => ({
                                            label: item,
                                            value: item,
                                          }))} 
                                    />
                                    
                                
                                    }                 
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Select mode="multiple"
                                        size={size}
                                        style={{
                                            width: '100%',
                                        }}
                                        //onChange={(event)=>{console.log(event[0])}}
                                        onChange={combine_keyword}
                                        placeholder="คีย์เวิร์ด"
                                        dropdownRender={(menu) => (
                                            <>
                                                {menu}
                                                <Divider
                                                    style={{
                                                        margin: '8px 0',
                                                    }}
                                                />
                                                <Space
                                                    style={{
                                                        padding: '0 8px 4px',
                                                    }}
                                                >
                                                    <Input
                                                        placeholder="เพิ่มคีย์เวิร์ด"
                                                        ref={inputRef}
                                                        value={name}
                                                        onChange={onNameChange}
                                                    />
                                                    <Button color='maincolor' type="text" onClick={addKeyword}>
                                                        เพิ่มคีย์เวิร์ด
                                                    </Button>
                                                </Space>
                                            </>
                                        )}
                                        options={keywordList.map((item) => ({
                                            label: item,
                                            value: item,
                                        }))}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Select mode="multiple"
                                        size={size}
                                        style={{
                                            width: '100%',
                                        }}
                                        onChange={combine_Author}
                                        placeholder="ผู้แต่ง"
                                        dropdownRender={(menu) => (
                                            <>
                                                {menu}
                                                <Divider
                                                    style={{
                                                        margin: '8px 0',
                                                    }}
                                                />
                                                <Space
                                                    style={{
                                                        padding: '0 8px 4px',
                                                    }}
                                                >
                                                    <Input
                                                        placeholder="เพิ่มชื่อ"
                                                        ref={inputRef}
                                                        value={name}
                                                        onChange={onNameChange}
                                                    />
                                                    <Button color='maincolor' type="text" onClick={addMember}>
                                                        เพิ่มชื่อ
                                                    </Button>
                                                </Space>
                                            </>
                                        )}
                                        options={memberList.map((item) => ({
                                            label: item,
                                            value: item,
                                        }))}
                                    />
                                </Grid>

                            </Grid>

                            <Grid item xs={12} sm={6} sx={{ mt: 1 }}>
                                <TextField fullWidth
                                    color='maincolor'
                                    placeholder="หมายเหตุ"
                                    multiline
                                    //rows={10}
                                    maxRows={10}
                                    minRows={2}
                                    value={remark}
                                    onChange={(event) => {
                                        //console.log(event.target.value);
                                        setRemark(event.target.value);
                                    }}
                                />
                            </Grid>

                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ mb: 1 }}>
                                <Grid item xs={12} sm={6}>
                                    <Button
                                        //type="submit"
                                        fullWidth
                                        variant="outlined"
                                        color="maincolor"
                                        sx={{ mt: 2, mb: 2 }}
                                        onClick={() => { window.location = "/Home" }}
                                    >
                                        Cancle
                                    </Button>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    {check_edit == false ?
                                        <Button
                                        startIcon={<FileUploadIcon/>}
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            color="maincolor"
                                            sx={{ mt: 2, mb: 2 }}
                                            //onClick={() => { window.location = "#" }}
                                            // onSubmit={addPublication}
                                            onClick={addPublication}
                                        >
                                            Upload
                                        </Button>
                                        :
                                        <Button
                                        startIcon={<BorderColorIcon/>}
                                            //type="submit"
                                            fullWidth
                                            variant="contained"
                                            color="maincolor"
                                            sx={{ mt: 2, mb: 2 }}
                                            onClick={() => { editPublication(publ_id) }}
                                        //addProject
                                        >
                                            Save Project
                                        </Button>
                                    }
                                </Grid>
                            </Grid>

                        </Box>


                    </Box>
                </Container>
            </ThemeProvider>
            :
            <>{window.location = '/Login'} </>}
        </div >
    );
}

const Keyword = [
    { tag: 'เบียว' },
    { tag: 'โลลิ' },
];
const Author = [
    { tag: 'art' },
    { tag: 'bam' },
];

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const rows = [
    createData('TDRI Research', 'การวิเคราะห์ผลกระทบในการออกกฎหมาย', '21/09/2015'),


];