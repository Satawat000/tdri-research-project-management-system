import * as React from 'react';
import { useState,useEffect,useRef } from 'react';
import Axios from 'Axios';
//import Avatar from '@mui/material/Avatar';
import { Avatar} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
//import TextareaAutosize from '@material-ui/core/TextareaAutosize';
//import Textarea from '@mui/joy/Textarea';
//import TextareaAutosize from '@mui/base/TextareaAutosize';
//import FormControlLabel from '@mui/material/FormControlLabel';
//import Checkbox from '@mui/material/Checkbox';
//import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
//import Select from '@mui/material/Select';
import { Divider,Radio, Select, Space,Tag } from 'antd';
//import { Divider, Select, Space } from 'antd';
//import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
//import Stack from '@mui/material/Stack';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

//import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Modal from '@mui/material/Modal';
//import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import FileUploadIcon from '@mui/icons-material/FileUploadOutlined';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';



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

function createData(status, title, commencingdate) {
    return { status, title, commencingdate};
}


export default function UpPJ() {
    const [items, setItems] = useState([]);
    const [memberList,setMemberList] = useState([]);
    const [keywordList,setKeywordList] = useState([]);
    const [type_List,setType_List] = useState([]);


    const [value, setValue] = useState(null);
    const [cm_date, setCM_date] = useState(null);
    const [cp_date, setCP_date] = useState(null);
    const [open, setOpen] = useState(false);
    const [size, setSize] = useState('large');

    //const default_date = useState(new Date());

    






    const [th_name, setTHname] = useState("");
    const [en_name, setENname] = useState("");
    const [proj_keyword, setProj_keyword] = useState("");
    const [proj_type, setProj_type] = useState("");
    const [proj_team_leader, setProj_team_leader] = useState("");
    const [proj_team_member, setProj_team_member] = useState("");
    const [employee, setEmployee] = useState("");
    const [start_date, setStart_date] = useState();
    const [end_date, setEnd_date] = useState();
    const [proj_status, setProj_status] = useState("");
    const [proj_data, setPJ_data] = useState("");
    const [description, setDescription] = useState("");
    const [res_id, setRes_id] = useState("");
    const [res_name, setRes_name] = useState("");
    const [res_username, setRes_username] = useState("");
    const [proj_id, setProj_id] = useState("");
    const [loginStatus, setLoginStatus] = useState(true);
    

    
    const [name, setName] = useState('');
    const inputRef = useRef(null);

    const [check_edit,setCheck_edit] = useState(false);


    //------------------------------เพิ่ม default_date-----------------------------------
    const [default_date, setDefault_date] = useState(new Date());
    const default_date_change=()=>{  
        const days = default_date.getDate()
        const month = default_date.getMonth() + 1
        const year = default_date.getFullYear()

        //console.log(year+"-"+month+"-"+days);
        
        setStart_date(year+"-"+month+"-"+days);
        setEnd_date(year+"-"+month+"-"+days);
    }

    //-----------------------------------------------------------------




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
        Axios.post('http://localhost:3001/add_member_list',{
            ml_name:name
        }).then((response)=>{
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
        Axios.post('http://localhost:3001/add_keyword_list',{
            kw_name:name
        }).then((response)=>{
            //console.log("response");
            //console.log(response);
        })
        console.log(name);
        //console.log(items);
    };

    //------------------------------------------------------------------------

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

    const combine_keyword =(e)=>{
        
        var row ="";
        for(let i = 0 ;i<e.length;i++){
            if(i+1 == e.length){
                row = row + e[i];
            }else{
                row = row + e[i] + ",";
            }
            
        }
        
        setProj_keyword(row);
        console.log(row);

    }

    //--------------------------------------
    const combine_Leader =(e)=>{
        
        var row ="";
        for(let i = 0 ;i<e.length;i++){
            if(i+1 == e.length){
                row = row + e[i];
            }else{
                row = row + e[i] + ",";
            }
            
        }
        console.log("Leader");
        setProj_team_leader(row);
        console.log(row);

    }

    //--------------------------------------------------
    const combine_member =(e)=>{
        
        var row ="";
        for(let i = 0 ;i<e.length;i++){
            if(i+1 == e.length){
                row = row + e[i];
            }else{
                row = row + e[i] + ",";
            }
            
        }
        console.log("member");
        setProj_team_member(row);
        console.log(row);

    }

    //-----------------------------------------------------------

    const onChangeStartDate = (date, dateString) => {
        if(date == null){
            setCM_date(null)
            setStart_date(new Date());
            return ;
        }
        setCM_date(date)
        const str_day = date.$D;
        const str_month = date.$M + 1;
        const str_year = date.$y;
        setStart_date(str_year+"-"+str_month+"-"+str_day);
        // console.log(str_day);
        // console.log(str_month);
        // console.log(str_year);
        //console.log(str_year+"-"+str_month+"-"+str_day);
      };
    //--------------------------------------------------------------

    const onChangeEndDate = (date, dateString) => {
        if(date == null){
            //setCM_date(null)
            setCP_date(null)
            setEnd_date(new Date());
            return ;
          }
        setCP_date(date)
        const end_day = date.$D;
        const end_month = date.$M + 1;
        const end_year = date.$y;
        setEnd_date(end_year+"-"+end_month+"-"+end_day);
        //console.log(end_date);
    };

    const deleteProject =(id,name)=>{
        console.log(id);

        var ans = confirm("ยืนยันลบ project :" + name);
            if(ans==true){
                Axios.delete(`http://localhost:3001/delete_project/${id}`).then((response) => {
                    setItems(
                        items.filter((val) => {
                          return val.proj_id != id;
                        })
                      );
                });
                window.location = '/UpPJ';
            }     
    }

    const haddleeditProject=(id)=>{

        setCheck_edit(true);


        Axios.get(`http://localhost:3001/edit_project/${id}`).then((response) => {
            //console.log(response.data[0].th_name);
            setTHname(response.data[0].th_name);
            setENname(response.data[0].en_name);
            setProj_keyword(response.data[0].proj_keyword);
            setEmployee(response.data[0].employer);
            edit_start_date(response.data[0].start_date);
            edit_end_date(response.data[0].end_date);
            // setStart_date(response.data[0].start_date);
            // setEnd_date(response.data[0].end_date);
            setPJ_data(response.data[0].proj_data);
            setDescription(response.data[0].description);
            setProj_team_leader(response.data[0].proj_team_leader);
            setProj_team_member(response.data[0].proj_team_member);
            setProj_id(response.data[0].proj_id);
            setProj_status(response.data[0].proj_status);
            setProj_type(response.data[0].proj_type);
            }
        )
        // setCM_date(start_date);
        // setCP_date(end_date);
        
    }

    const edit_start_date =(e)=>{
        console.log("test");
        //console.log(e);
        const d = new Date(e);
        setCM_date(d);
        const days = d.getDate()
        const month = d.getMonth() + 1
        const year = d.getFullYear()
        setStart_date(year+"-"+month+"-"+days);
        //console.log(d);
        
    }
    const edit_end_date =(e)=>{
        //console.log("test");
        const d = new Date(e);
        //console.log(e);
        setCP_date(d);
        const days = d.getDate()
        const month = d.getMonth() + 1
        const year = d.getFullYear()
        setEnd_date(year+"-"+month+"-"+days);
        
    }

    const editProject=(id)=>{
        console.log(id);
        Axios.put("http://localhost:3001/update_project", { 
            th_name: th_name,
            en_name: en_name,
            proj_keyword: proj_keyword,
            employee: employee,
            start_date: start_date,
            end_date: end_date,
            proj_status: proj_status,
            proj_data: proj_data,
            description: description,
            proj_team_leader: proj_team_leader,
            proj_team_member: proj_team_member,
            proj_type: proj_type,
            proj_id: id,
        }).then(
        (response) => {
        setItems(
          items.map((val) => {
            return val.proj_id == id
              ? {
                    th_name: th_name,
                    en_name: en_name,
                    proj_keyword: proj_keyword,
                    employee: employee,
                    start_date: start_date,
                    end_date: end_date,
                    proj_status: proj_status,
                    proj_data: proj_data,
                    description: description,
                    proj_team_leader: proj_team_leader,
                    proj_team_member: proj_team_member,
                    proj_type: proj_type,
                    proj_id: id,
                    res_id: res_id,
                    ad_username: "",
                }
              : val;
          })
        );
        window.location = '/UpPJ';
        }
        );
    }









    //-------------------------------------------------------------

    

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('This will run after 1 second!');
            Axios.get('http://localhost:3001/show_member_list').then((response) => {
            
            for(let i = 0 ; i < response.data.length;i++){
                setMemberList(items =>[...items, response.data[i].ml_name]);
            }
            }
            
        )
        }, 100);
        //return () => clearTimeout(timer);

        const timer1 = setTimeout(() => {
            console.log('This will run after 2 second!');
            Axios.get('http://localhost:3001/show_keyword_list').then((response) => {
            
            for(let i = 0 ; i < response.data.length;i++){
                setKeywordList(items =>[...items, response.data[i].kw_name]);
            }
            }
            
        )
        }, 200);

        const timer2 = setTimeout(() => {
            Axios.get("http://localhost:3001/login_user").then((response) => {
              console.log(response)
              if (response.data.loggedIn == true) {
                setRes_name(response.data.user[0].res_name);
                setRes_username(response.data.user[0].res_username);
                setRes_id(response.data.user[0].res_id);
              }
            });
        },300);

        const timer3 = setTimeout(() => {
            Axios.get("http://localhost:3001/project_history").then((response) => {
              setItems(response.data);
              
            });
        },500);

        //------------------------------เพิ่ม default_date-----------------------------------
        const timer4 = setTimeout(() => {
            default_date_change();
        },500);

        //-----------------------------------------------------------------

        const timer5 = setTimeout(() => {
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

        const timer6 = setTimeout(() => {
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
        //------------------------------เพิ่ม default_date-----------------------------------
            clearTimeout(timer4);
            clearTimeout(timer5);
        //-----------------------------------------------------------------
            clearTimeout(timer6);
        }

      }, []);

    


         

    //-------------------------------------------------------------


    


    const addProject = () => {
        if (th_name=="") {
            alert ("ต้องใส่ชื่อโครงการ")
            return;
        }
        Axios.post("http://localhost:3001/up_project", {
          th_name: th_name,
          en_name: en_name,
          proj_keyword: proj_keyword,
          employee: employee,
          start_date: start_date,
          end_date: end_date,
          proj_status: proj_status,
          proj_data: proj_data,
          description: description,
          proj_team_leader: proj_team_leader,
          proj_team_member: proj_team_member,
          proj_type: proj_type,
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

        Axios.get("http://localhost:3001/project_history").then((response) => {
              setItems(response.data);
              
        });
    };


    

    



    const onChangeDate =(e)=>{
        const d = new Date(e);
        const days = d.getDate()
        const month = d.getMonth() + 1
        const year = d.getFullYear()
        // console.log(d.getDate());
        // console.log(d.getMonth() + 1);
        // console.log(d.getFullYear());
        return days + "/"+ month + "/" + year;
    }


    const nextpage=(e)=>{
        //console.log(e);
        Axios.post("http://localhost:3001/project_id", {
            proj_id: e,
          }).then((response) => {
            //window.location = "/Home";
            window.location = "/DesPJ";
            
            
          });
        //console.log(nextpage_id);
    
    }



      





    const handleOpen = () => setOpen(true);
    const handleClose = () => window.location = '/Home';
    const handleSubmit = (event) => {
        console.log(th_name);
        /*event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });*/
    };

    return (
        <div>
        {loginStatus == true ?
           
            <ThemeProvider theme={themes}>

                <Container component="main" maxWidth="xl" >
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

                <Container component="main" maxWidth="xl" >
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
                            Project History
                        </Typography>
                        <div style={{ height: 100, width: '100%' }}>
                            <TableContainer component={Paper} sx={{height: 200}} >
                                
                                <Table sx={{ minWidth: 700 }} size="large" aria-label="a dense table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="left" width={100}>ลำดับ</TableCell>
                                            <TableCell align='center' width={500}>ชื่อโครงการ</TableCell>
                                            <TableCell align="center" width={150}>สถานะ</TableCell>
                                            <TableCell align="center" width={150}>วันที่เริ่มต้น</TableCell>
                                            <TableCell align="center" width={250}></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {items.map((row,index) => (
                                            <TableRow
                                                key={row.proj_id}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell onClick={() => { nextpage(row.proj_id) }} align="left">{index+1}</TableCell>
                                                <TableCell onClick={()=>{nextpage(row.proj_id)}} component="th" scope="row">{row.th_name}</TableCell>
                                                <TableCell onClick={()=>{nextpage(row.proj_id)}} align="center">{row.proj_status == "00" ? <Tag color="#47d147">งานวิจัยสมบูรณ์</Tag> : <Tag color="#1a53ff">กำลังดำเนินการ</Tag>}</TableCell>
                                                <TableCell onClick={()=>{nextpage(row.proj_id)}} align="center">{onChangeDate(row.start_date)}</TableCell>
                                                <TableCell>
                                                <Grid align="center">
                                                <Button
                                                startIcon={<BorderColorIcon/>}
                                                    //type="submit"
                                                    //fullWidth
                                                    variant="outlined"
                                                    color="warning"
                                                    sx={{ mt: 1, mb: 0 , mr: 1, opacity: 0.5}}
                                                    onClick={() => { haddleeditProject(row.proj_id) }}
                                                >
                                                    edit
                                                </Button>
                                                <Button
                                                startIcon={<DeleteIcon/>}
                                                    //type="submit"
                                                    //fullWidth
                                                    variant="outlined"
                                                    color="error"
                                                    sx={{ mt: 1, mb: 0}}
                                                    onClick={() => { deleteProject(row.proj_id,row.th_name) }}
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

                <Container component="main" maxWidth="lg" style={{ paddingTop:50}}>
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 3,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >

                        <Box component="form" noValidate /*onSubmit={handleSubmit}*/ sx={{ mt: 3, ml: 70, }}>


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
                        {check_edit == false? 
                        <Typography component="h5" variant="h7" color="#ffffff" fontFamily='Century Gothic' letterSpacing={1} textAlign='left'
                            style={background} sx={{ p: 1, borderRadius: 2 }} width={1150}>
                            New Project
                        </Typography>
                        :
                        <Typography component="h5" variant="h7" color="#ffffff" fontFamily='Century Gothic' letterSpacing={1} textAlign='left'
                            style={background} sx={{ p: 1, borderRadius: 2 }} width={1150}>
                            Edit Project
                        </Typography>
                        }
                        <Box component="form" noValidate    sx={{ mt: 3 }}>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="th_name"
                                        //required
                                        fullWidth
                                        //id="Name"
                                        label="ชื่อโครงการ (ภาษาไทย)"
                                        color='maincolor'
                                        autoFocus
                                        //placeholder = "render"
                                        value = {th_name}
                                        onChange={(event) => {
                                            //console.log(event.target.value);
                                            setTHname(event.target.value);
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="en_name"
                                        //required
                                        fullWidth
                                        //id="Name"
                                        label="ชื่อโครงการ (ภาษาอังกฤษ)"
                                        color='maincolor'
                                        autoFocus
                                        value = {en_name}
                                        onChange={(event) => {
                                            setENname(event.target.value)
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="Name"
                                        //required
                                        fullWidth
                                        id="Name"
                                        label="หน่วยงานว่าจ้าง"
                                        color='maincolor'
                                        //autoFocus
                                        value={employee}
                                        onChange={(event) => {
                                            setEmployee(event.target.value)
                                        }}
                                    />
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
                                        value={proj_data}
                                        onChange={(event) => {
                                            //console.log(event.target.value);
                                            setPJ_data(event.target.value)
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker
                                            label="วันที่เริ่มต้น"
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
                                    {/* <Typography>
                                        Commencing date
                                    </Typography>
                                    <Typography>
                                        <DatePicker 
                                            
                                            format="DD-MM-YYYY"
                                            onChange={onChangeStartDate}
                                            size={size}
                                            style={{
                                                width: '100%',
                                            }} 
                                        /> 
                                        
                                    </Typography> */}
                                    
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker
                                            label="วันที่จบโครงการ"
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
                                    {/* <Typography>
                                        Completion date
                                    </Typography>
                                    <Typography>
                                        <DatePicker 
                                            //label="Completion date"
                                            format="DD-MM-YYYY"
                                            onChange={onChangeEndDate}
                                            size={size}
                                            style={{
                                                width: '100%',
                                            }}
                                            
                                        />
                                    </Typography> */}
                                    

                                </Grid>
                                <Grid item xs={12} sm={6}>
                                {!proj_status == "" ?
                                    <Select
                                        labelInValue
                                        //placeholder="สถานะโครงการ"
                                        size='large'
                                        value={proj_status}
                                        //value={proj_status}
                                        style={{
                                        width: 565,
                                        
                                        }}
                                        //defaultValue={proj_status}
                                        onChange={(event) => {
                                            setProj_status(event.value)
                                            console.log(event.value)
                                        }}
                                        options={[
                                        {
                                            value: '00',
                                            label: 'งานวิจัยสมบูรณ์',
                                        },
                                        {
                                            value: '01',
                                            label: 'กำลังดำเนินการ',
                                        },
                                        ]}
                                    />

                                :
                                    <Select
                                        labelInValue
                                        placeholder="สถานะโครงการ"
                                        size='large'
                                        //value={proj_status}
                                        //value={proj_status}
                                        style={{
                                        width: 565,
                                        
                                        }}
                                        //defaultValue={proj_status}
                                        onChange={(event) => {
                                            setProj_status(event.value)
                                            console.log(event.value)
                                        }}
                                        options={[
                                        {
                                            value: '00',
                                            label: 'งานวิจัยสมบูรณ์',
                                        },
                                        {
                                            value: '01',
                                            label: 'กำลังดำเนินการ',
                                        },
                                        ]}
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
                                                        placeholder="เพิ่มคีย์เวิร์ด"
                                                        ref={inputRef}
                                                        value={name}
                                                        onChange={onNameChange}
                                                    />
                                                    <Button type="text"  onClick={addKeyword}>
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
                                <Grid item xs={12} sm={12}>
                                {proj_type != "" ?
                                    <Select 
                                    labelInValue
                                    size={size}
                                    style={{
                                        width: '100%',
                                    }}
                                    //onChange={(event)=>{console.log(event[0])}}
                                    onChange={(e)=>{setProj_type(e.value)}}
                                    placeholder="หมวดหมู่"
                                    value = {proj_type}
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
                                        onChange={(e)=>{setProj_type(e.value)}}
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
                                        placeholder="หัวหน้าโครงการ"
                                        onChange={combine_Leader}
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
                                                    <Button type="text"  onClick={addMember}>
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
                                <Grid item xs={12} sm={6}>
                                    <Select mode="multiple"
                                        size={size}
                                        style={{
                                            width: '100%',
                                        }}
                                        onChange={combine_member}
                                        placeholder="สมาชิกในทีม"
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
                                                    <Button type="text"  onClick={addMember}>
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
                                    placeholder="รายละเอียดโครงการ"
                                    multiline
                                    //rows={10}
                                    maxRows={10}
                                    minRows={2}
                                    value={description}
                                    onChange={(event) => {
                                        setDescription(event.target.value)
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
                                        onClick={handleClose}
                                    >
                                        Cancle
                                    </Button>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    {check_edit == false? 
                                        <Button
                                        startIcon={<FileUploadIcon/>}
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            color="maincolor"
                                            sx={{ mt: 2, mb: 2 }}
                                            onClick={addProject}
                                            //addProject
                                        >
                                        Upload
                                        </Button>
                                :
                                        <Button
                                        startIcon={<SaveAsIcon/>}
                                            //type="submit"
                                            fullWidth
                                            variant="contained"
                                            color="maincolor"
                                            sx={{ mt: 2, mb: 2 }}
                                            onClick={()=>{editProject(proj_id)}}
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

// const Keyword = [
//     { tag: 'เบียว' },
//     { tag: 'โลลิ' },
// ];
// const Author = [
//     { tag: 'art' },
//     { tag: 'bam' },
// ];

// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
// };



// const rows = [
//     createData('Complete Research', 'การวิเคราะห์ผลกระทบในการออกกฎหมาย', '01/05/2013'),
//     createData('Complete Research', 'การวิเคราะห์ผลกระทบในการออกกฎหมาย', '01/05/2013'),
    

// ];