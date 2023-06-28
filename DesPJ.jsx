import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
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
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import InputLabel from '@mui/material/InputLabel';
import ListItemText from '@mui/material/ListItemText';
import { DataGrid } from '@mui/x-data-grid';
import Modal from '@mui/material/Modal';
import HomeIcon from '@mui/icons-material/Home';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FileOpenIcon from '@mui/icons-material/FileOpen';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
//import { Divider, List } from 'antd';
import Divider from '@mui/material/Divider';



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
    border: '1px solid #86a8c5',

};

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


const ITEM_HEIGHT = 48;
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
    'Title',
    'Keyword',
];

const status = [
    'Ongoing Research',
    'Complete Research',
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





export default function DesPJ() {

    const [value, setValue] = useState(null);
    const [open, setOpen] = useState(false);

    const handleClose = () => setOpen(false);

    const [check_proj_id, setCheck_proj_id] = useState("");
    const [pub_list, setPub_list] = useState([]);
    const [loginStatus, setLoginStatus] = useState(true);


    const theme = useTheme();
    const [personName, setPersonName] = useState([]);

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

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    const [projectList, setProjectList] = useState([]);

    //------------------------------------------------------------------------------------

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('This will run after 1 second!');
            Axios.get('http://localhost:3001/project_detail').then((response) => {
                setProjectList(response.data);
                setCheck_proj_id(response.data[0].proj_id);
            })
        }, 100);
        //return () => clearTimeout(timer);
        // const timer1 = setTimeout(() => {
        //     console.log('This will run after 2 second!');
        //     console.log(publ_id);

        // }, 1000);

        

        return () => {
            clearTimeout(timer);
            


        }

    }, []);
    //---------------------------------------------------------------------------------

    const handleOpen = (id) => {
        //console.log(proj_id);
        Axios.get(`http://localhost:3001/show_publication_in_project/${id}`).then((response) => {
            //console.log(response.data[0].th_name);
            setPub_list(response.data);
        }
        )
        setOpen(true);
    }
    //---------------------------------------------------------------------------------

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
                            //alignItems: 'center',
                        }}

                    >
                        <Typography component="h3" variant="h7" color="#86a8c5" fontFamily='Century Gothic' letterSpacing={3}
                            style={bg} sx={{ /*mb: 1,*/ p: 1, borderRadius: 2 }} textAlign='center' width={1150}>
                            TDRI Project
                        </Typography>
                    </Box >
                </Container>
                {projectList.map((row) => (
                    <Container component="main" maxWidth="xl" key={row.proj_id}><br></br><br></br>
                        <div id="content_area">
                            <table width="100%" border="0" cellpadding="7" cellspacing="0">
                                <tr>
                                    <td width="20%" align="right" valign="top">ชื่อโครงการ (ภาษาไทย) :</td>
                                    <td width="80%" align='left'>{row.th_name}</td>
                                </tr>
                                <tr>
                                    <td width="20%" align="right" valign="top">ชื่อโครงการ (ภาษาอังกฤษ) :</td>
                                    <td width="80%" align='left'>{row.en_name}</td>
                                </tr>
                                <tr>
                                    <td width="20%" align="right" valign="top">คีย์เวิร์ด :</td>
                                    <td width="80%" align='left'>{row.proj_keyword}</td>
                                </tr>
                                <tr>
                                    <td width="20%" align="right" valign="top">วันที่เริ่มต้น :</td>
                                    <td width="80%" align='left'>{onChangeDate(row.start_date)}</td>
                                </tr>
                                <tr>
                                    <td width="20%" align="right" valign="top">วันที่จบโครงการ :</td>
                                    <td width="80%" align='left'>{onChangeDate(row.end_date)}</td>
                                </tr>
                                <tr>
                                    <td width="20%" align="right" valign="top">สถานะโครงการ :</td>
                                    <td width="80%" align='left'>{row.proj_status == "00" ? "งานวิจัยสมบูรณ์" : "กำลังดำเนินการ"}</td>
                                </tr>
                                <tr>
                                    <td width="20%" align="right" valign="top">หน่วยงานว่าจ้าง :</td>
                                    <td width="80%" align='left'>{row.employer}</td>
                                </tr>
                                <tr>
                                    <td width="20%" align="right" valign="top">หัวหน้าโครงการ :</td>
                                    <td width="80%" align='left'>{row.proj_team_leader}</td>
                                </tr>
                                <tr>
                                    <td width="20%" align="right" valign="top">สมาชิกในทีม :</td>
                                    <td width="80%" align='left'>{row.proj_team_member}</td>
                                </tr>
                                <tr>
                                    <td width="20%" align="right" valign="top">รายละเอียดโครงการ :</td>
                                    <td width="80%" align='left'>{row.description}</td>
                                </tr>
                                <tr>
                                    <td width="20%" align="right" valign="top">ที่อยู่ไฟล์ :</td>
                                    <td width="80%" align='left'>
                                        {row.proj_data!=""?
                                        <a href={row.proj_data}>
                                            <Button
                                            startIcon={<FileOpenIcon/>}
                                                //type="submit"
                                                //fullWidth
                                                variant="text"
                                                color="maincolor"
                                            //sx={{ mt: 1 }}
                                            //onClick={() => { window.location = "#" }}
                                            >
                                                Open file
                                            </Button></a>
                                        
                                        :
                                            
                                                <Button
                                                startIcon={<FileOpenIcon/>}
                                                    //type="submit"
                                                    //fullWidth
                                                    variant="text"
                                                    color="maincolor"
                                                //sx={{ mt: 1 }}
                                                //onClick={() => { window.location = "#" }}
                                                >
                                                    ไม่มีไฟล์ข้อมูล
                                                </Button>


                                        }
                                        </td>
                                </tr>
                            </table>
                        </div>



                        <Grid item xs={12} sm={6} sx={{ mt: 2, mb: 5, ml: 2 }}>
                            <Button startIcon={<VisibilityIcon/>} 
                            onClick={() => { handleOpen(check_proj_id) }} variant='contained' color='maincolor'>
                                ผลงานที่เกี่ยวข้องกับโครงการ
                            </Button>
                            <Modal
                                open={open}
                                onClose={handleClose}
                            //aria-labelledby="modal-modal-title"
                            //aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <div style={{ height: 300, width: '100%' }}>
                                        <TableContainer component={Paper} sx={{height: 300}}>
                                            <Table sx={{ minWidth: 100 }} size="large" aria-label="a dense table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell align="center">TDRI Publication</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {pub_list.map((row) => (
                                                        <TableRow
                                                            key={row.publ_id}
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                            <TableCell onClick={() => { nextpage(row.publ_id) }} align="left">{row.title}</TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </div>

                                </Box>
                            </Modal>
                            <Button startIcon={<HomeIcon/>} 
                            onClick={() => { window.location = "/Home" }} variant='outlined' sx={{ ml: 5 }} color='maincolor'>
                                กลับสู่หน้าหลัก
                            </Button>
                        </Grid>




                    </Container>
                ))}
            </ThemeProvider>
            :
            <>{window.location = '/Login'} </>}
        </div >
    );
}

const titleThai = [
    'การวิเคราะห์ผลกระทบในการออกกฎหมาย',
];
const titleEng = [
    'Regulatory Impact Analysis',
];
const keyword = [
    'กฎหมาย, การออกกฎหมาย',
];
const commencingdate = [
    '01/05/2013',
];
const completedate = [
    '11/06/2014',
];
const stats = [
    'Complete Research',
];
const employer = [
    'Office of the Coucil of state',
];
const team = [
    'ดร.เดือนเด่น นิคมบริรักษ์, วีรวัลย์ ไพบูลย์จิตต์อารี, คุณณัฏฐณิชา เลอฟิลิแบร์ต',
];
const description = [
    'The project aims to1) study practical guidance on using Regulatory Impact Analysis (RIA) in OECD countries and developing countries 2) analyze the economic and social impacts by using a case study of the regulation which has been enforced and 3) make recommendations for RIA procedure in Thailand.',
];
const data = [
    'file.pdf   ',
    <Button
        type="submit"
        //fullWidth
        variant="text"
        //color="maincolor"
        //sx={{ mt: 1 }}
        onClick={() => { window.location = "#" }}
    >
        Open file
    </Button>

];

function createData(category) {
    return { category };
}
const rows = [
    createData('TDRI Research'),

];




