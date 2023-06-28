import * as React from 'react';
import { useState,useEffect,useRef } from 'react';
import Axios from 'Axios';
import Avatar from '@mui/material/Avatar';
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

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


const theme = createTheme({
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


export default function ViewWork() {
    const [items, setItems] = useState([]);
    const [memberList,setMemberList] = useState([]);
    const [keywordList,setKeywordList] = useState([]);


    const [value, setValue] = useState(null);
    const [cm_date, setCM_date] = useState(null);
    const [cp_date, setCP_date] = useState(null);
    const [open, setOpen] = React.useState(false);
    const [size, setSize] = useState('large');




    const [th_name, setTHname] = useState("");
    const [en_name, setENname] = useState("");
    const [proj_keyword, setProj_keyword] = useState("");
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
    const [proj_id, setProj_id] = useState("");

    
    const [name, setName] = useState('');
    const inputRef = useRef(null);

    const [check_edit,setCheck_edit] = useState(false);




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
        setCP_date(date)
        const end_day = date.$D;
        const end_month = date.$M + 1;
        const end_year = date.$y;
        setEnd_date(end_year+"-"+end_month+"-"+end_day);
        //console.log(end_date);
    };

    const deleteProject =(id)=>{
        console.log(id);

        var ans = confirm("ยืนยันลบ project :" + id);
            if(ans==true){
                Axios.delete(`http://localhost:3001/delete_project/${id}`).then((response) => {
                    setItems(
                        items.filter((val) => {
                          return val.proj_id != id;
                        })
                      );
                });
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
            setStart_date(response.data[0].start_date);
            setEnd_date(response.data[0].end_date);
            setPJ_data(response.data[0].proj_data);
            setDescription(response.data[0].description);
            setProj_team_leader(response.data[0].proj_team_leader);
            setProj_team_member(response.data[0].proj_team_member);
            setProj_id(response.data[0].proj_id);
            }
        )
        setCM_date(start_date);
        setCP_date(end_date);
        
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
                setRes_id(response.data.user[0].res_id);
              }
            });
        },300);

        const timer3 = setTimeout(() => {
            Axios.get("http://localhost:3001/project_history").then((response) => {
              setItems(response.data);
              
            });
        },500);

        return () => {
            clearTimeout(timer);
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        }

      }, []);

    


         

    //-------------------------------------------------------------


    


    const addProject = () => {
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

    //------------------------------------------------------------------------

    

    



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



      






    

    




    
  
//------------------------------------------------------------------------------------
    const [projectList,setProjectList] = useState([]);


  
      useEffect(() => {
        const timer = setTimeout(() => {
            console.log('This will run after 1 second!');
        Axios.get(`http://localhost:3001/show_resercher`).then((response) => {
          setProjectList(response.data);
        })
        }, 100);
        //return () => clearTimeout(timer);
    
        return () => {
            clearTimeout(timer);
            
    
        }
    
      }, []);

     
    //---------------------------------------------------------------------------------
   

    return (
        <div><Typography>
                <Avatar>{res_id}</Avatar>
            </Typography>
           
            <ThemeProvider theme={theme}>

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
                        <Typography component="h3" variant="h7" color="#86a8c5" fontFamily='Century Gothic' letterSpacing={3}
                            style={bg} sx={{ /*mb: 1,*/ p: 1, borderRadius: 2 }} textAlign='center' width={1150}>
                            Profile
                        </Typography>
                    </Box >
                    
                
                    {projectList.map((row,key) => (
                <Container component="main" maxWidth="lg">
                    <Grid item xs={12}>
                        <Grid item>
                            <Typography component="h3" variant="h6" color="#000000" fontFamily='Century Gothic' letterSpacing={1}
              /*style={bg}*/ sx={{ mt: 5, p: 2, borderRadius: 2 }} textAlign='left' width={1150}>
                                <span>Username : </span> {row.res_username}
                            </Typography>
                            <Typography component="h3" variant="h6" color="#000000" fontFamily='Century Gothic' letterSpacing={1}
              /*style={bg}*/ sx={{ p: 2, borderRadius: 2 }} textAlign='left' width={1150}>
                                <span>Name : </span> {row.res_name}
                            </Typography>
                            <Typography component="h3" variant="h6" color="#000000" fontFamily='Century Gothic' letterSpacing={1}
              /*style={bg}*/ sx={{ p: 2, borderRadius: 2 }} textAlign='left' width={1150}>
                                <span>Email : </span> {row.res_email}
                            </Typography>
                            <Typography component="h3" variant="h6" color="#000000" fontFamily='Century Gothic' letterSpacing={1}
              /*style={bg}*/ sx={{ p: 2, borderRadius: 2 }} textAlign='left' width={1150}>
                                <span>Tel : </span> {row.res_tel}
                            </Typography>
                        </Grid>
                    </Grid>

                </Container>
                ))}
                


                    <Box
                        sx={{
                            marginTop: 3,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                    </Box>
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
                            Upload History
                        </Typography>
                        <div style={{ height: 100, width: '100%' }}>
                            <TableContainer component={Paper} sx={{height: 200}} >
                                
                                <Table sx={{ minWidth: 700 }} size="large" aria-label="a dense table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Tiltle</TableCell>
                                            <TableCell align="left">Status</TableCell>
                                            <TableCell align="left">Commencing date</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {items.map((row) => (
                                            <TableRow
                                                key={row.proj_id}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell onClick={()=>{nextpage(row.proj_id)}} component="th" scope="row">{row.th_name}</TableCell>
                                                <TableCell onClick={()=>{nextpage(row.proj_id)}} align="left">{row.proj_status == "00" ? <Tag color="#47d147">Complete Research</Tag> : <Tag color="#1a53ff">Ongoing Research</Tag>}</TableCell>
                                                <TableCell onClick={()=>{nextpage(row.proj_id)}} align="left">{onChangeDate(row.start_date)}</TableCell>
                                                <Grid align="center">
                                                </Grid>
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




                    
                </Container>
            </ThemeProvider>
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