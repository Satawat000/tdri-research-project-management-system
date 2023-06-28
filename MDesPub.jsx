import * as React from 'react';
import { useState, createContext, useEffect } from "react";
import Axios from 'Axios';
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
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import InputLabel from '@mui/material/InputLabel';
import ListItemText from '@mui/material/ListItemText';
import { DataGrid } from '@mui/x-data-grid';

import HomeIcon from '@mui/icons-material/Home';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import FileOpenIcon from '@mui/icons-material/FileOpen';



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





const DesPub=()=> {


    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const [searchQuery, setSearchQuery] = useState("");
    //const dataFiltered = filterData(searchQuery, data);

    const [publicationList, setPublicationList] = useState([]);


    //-------------------------get data----------------------------


    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('This will run after 1 second!');
            Axios.get('http://localhost:3001/publication_detail').then((response) => {
                setPublicationList(response.data);
            })
        }, 10);
        //return () => clearTimeout(timer);

        return () => {
            clearTimeout(timer);


        }

    }, []);

    //---------------------------------------------------------------

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
    //---------------------------------------------------------------
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

    //---------------------------------------------------------------
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

    return (
        <div>
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
                            TDRI Publication
                        </Typography>
                    </Box >
                </Container>

                {publicationList.map((row, key) => (

                    <Container component="main" maxWidth="xl"><br></br><br></br>

                        <div id="content_area">
                            <table width="100%" border="0" cellpadding="7" cellspacing="0">
                                <tr>
                                    <td width="20%" align="right" valign="top">ชื่อ :</td>
                                    <td width="80%" align='left'>{row.title}</td>
                                </tr>
                                <tr>
                                    <td width="20%" align="right" valign="top">ประเภท :</td>
                                    <td width="80%" align='left'>{onCheckCatagory(row.catagory)}</td>
                                </tr>
                                <tr>
                                    <td width="20%" align="right" valign="top">คีย์เวิร์ด :</td>
                                    <td width="80%" align='left'>{row.publ_keyword}</td>
                                </tr>
                                <tr>
                                    <td width="20%" align="right" valign="top">วันที่เผยแพร่ :</td>
                                    <td width="80%" align='left'>{onChangeDate(row.publish_date)}</td>
                                </tr>
                                <tr>
                                    <td width="20%" align="right" valign="top">รหัสการเงิน :</td>
                                    <td width="80%" align='left'>{row.fi_code}</td>
                                </tr>
                                <tr>
                                    <td width="20%" align="right" valign="top">ผู้แต่ง :</td>
                                    <td width="80%" align='left'>{row.author}</td>
                                </tr>
                                <tr>
                                    <td width="20%" align="right" valign="top">หมายเหตุ :</td>
                                    <td width="80%" align='left'>{row.remark}</td>
                                </tr>
                                <tr>
                                    <td width="20%" align="right" valign="top">ที่อยู่ไฟล์ :</td>
                                    <td width="80%" align='left'>
                                    {row.publ_data!=""?
                                        <a href={row.publ_data}>
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
                            {row.proj_id==null?
                                <Button
                                startIcon={<VisibilityOffIcon/>}
                                    //type="submit"
                                    //fullWidth
                                    variant="contained"
                                    color="maincolor"
                                    //sx={{ mt: 3, mb: 5, ml: 2 }}
                                    //onClick={() => { nextpage(row.proj_id) }}
                                >
                                    ไม่มีโครงการที่เกี่ยวข้อง
                                </Button>
                            
                            :
                                <Button
                                startIcon={<VisibilityIcon/>}
                                    type="submit"
                                    //fullWidth
                                    variant="contained"
                                    color="maincolor"
                                    //sx={{ mt: 3, mb: 5, ml: 2 }}
                                    onClick={() => { nextpage(row.proj_id) }}
                                >
                                    โครงการที่เกี่ยวข้อง
                                </Button>
                        
                            }
                            
                            <Button startIcon={<HomeIcon/>} 
                            onClick={() => { window.location = "/MUser" }} variant='outlined' sx={{ ml: 5 }} color='maincolor'>
                                กลับสู่หน้าหลัก
                            </Button>
                        </Grid>




                    </Container>
                ))}
            </ThemeProvider>
        </div >
    );
}

const title = [
    'การวิเคราะห์ผลกระทบในการออกกฎหมาย',
];
const category = [
    'TDRI Research',
];
const keyword = [
    'กฎหมาย, การออกกฎหมาย',
];
const publisheddate = [
    '21/09/2015',
];
const financecode = [
    'WB114',
];
const author = [
    'วีรวัลย์ ไพบูลย์จิตต์อารี',
];
const description = [
    'บทสรุปสำหรับผู้บริหาร รายงานฉบับสมบูรณ์ โครงการศึกษาวิจัยเรื่อง การวิเคราะห์ผลกระทบในการออกกฎหมาย (Regulatory Impact Analysis) โดย เดือนเด่น นิคมบริรักษ์ วีรวัลย์ ไพบูลย์จิตต์อารี และ ณัฏฐณิชา เลอฟิลิแบร์ด สถาบันวิจัยเพื่อการพัฒนาประเทศไทย เสนอต่อ สำนักงานคณะกรรมการกฤษฎีกา เมื่อเดือนธันวาคม 2557',
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


export default DesPub;

