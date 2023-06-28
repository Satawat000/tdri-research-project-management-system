import * as React from 'react';
import { useState} from 'react';
import Axios from 'Axios';


import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Alert } from '@mui/material';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

const theme = createTheme({
  palette: {
    maincolor: {
      main: "#86a8c5",
      contrastText: "#ffffff",
    },
  },
});

const  Register=()=> {

  const [res_username, setRes_username] = useState("");
  const [res_name, setRes_name] = useState("");
  const [res_email, setRes_email] = useState("");
  const [res_pass, setRes_pass] = useState("");
  const [res_tel, setRes_tel] = useState("");
  const [loginStatus, setLoginStatus] = useState(null);
  const [submitStatus, setSubmitStatus] = useState(true);

  const [resercherList,setResercherList] = useState([]);

  const [check_email_input,setCheck_email_input] = useState(false);
  const [submitStatus_email, setSubmitStatus_email] = useState(true);


  const addRes =()=>{
    var ans = confirm("ยืนยันการสมัคร");
      if(ans==true){
    
    if(res_username == ""|| res_pass == "" ){
      setSubmitStatus(false);
      return ;
    }
    else if(check_email_input == false){
      setSubmitStatus_email(false);
      return ;
    }
    else{
   
    
    

      Axios.post('http://localhost:3001/register', {
        res_username: res_username,
        res_name: res_name,
        res_email: res_email,
        res_pass: res_pass,
        res_tel: res_tel,
      }).then((response) => {
        console.log(response)
        // setResercherList([
        //   ...resercherList,
        //   {
        //     res_username: res_username,
        //     res_name: res_name,
        //     res_email: res_email,
        //     res_pass: res_pass,
        //     res_tel: res_tel,
        //   },
        // ]);
        
      });
      console.log(resercherList)
      
      
        //window.location.assign("http://localhost:5173/Login");
        window.location="/Login";
      }
    }
             
              
   
  };
  

  //-------------------------------------------------------------------

  ;


  //-------------------------------------------------------------------
  

  const checkUsername = () =>{
    if(res_username == ""){
      setLoginStatus("กรุณาใส่ username ที่ต้องการ");
      return ;
    }
    console.log(res_username);
    Axios.post("http://localhost:3001/Check_Username_Register", {
      res_username: res_username,
      //res_pass: res_pass,
    }).then((response) => {
      //window.location = "/Home";
      console.log(response);
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        //setLoginSucceed(true);

        //setLoginStatus(response.data[0].res_username);
        //window.location = "/Home";
      }
      
    });
      
  }


  //-------------------------------------------------------------------








  const handleSubmit = (event) => {
    console.log("test");
    {/*event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      username: data.get('username'),
      password: data.get('password'),
    });*/}
  };

  


  const check_email =(e)=>{
    setCheck_email_input(e.target.value.includes("mail.com"));
    setRes_email(e.target.value.replace(/[^a-zA-Z0-9+@+.+_+-]/gi, ""))
    
  }

  console.log(res_email)
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        {
          submitStatus == true ? 
          <></>
          :
          <Alert severity="warning">โปรดกรอกข้อมูลที่จำเป็น(*) ในครบถ้วน</Alert>
        }
        {
          submitStatus_email == true ? 
          <></>
          :
          <Alert severity="warning">รูปแบบอีเมลล์ไม่ถูกต้อง ( *ลงท้ายด้วย mail.con)</Alert>
        }
        <Box
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Typography component="h1" variant="h5" color="#86a8c5" fontFamily= 'Century Gothic' sx={{ mb: 3}}>
            Register
          </Typography>
          <form component="form" noValidate /*onSubmit={addRes}*/ sx={{ mt: 1 }}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="Name"
                  //required
                  fullWidth
                  id="Name"
                  label="Name and Surname"
                  color='maincolor' 
                  autoFocus
                  value={res_name}
                  onChange={(event) => {
                    setRes_name(event.target.value.replace(/[0-9+@+.+_+-]/gi, ""))
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  color='maincolor' 
                  name="username"
                  autoComplete="username"
                  value={res_username}
                  onBlur={checkUsername}
                  onChange={(event) => {
                    setRes_username(event.target.value.replace(/[^a-zA-Z0-9+@+.+_+-]/gi, ""))
                  }}
                />
              </Grid>
              { loginStatus != null ? 
                <Grid item xs={12}>
                  {loginStatus == 'Username สามารถใช่ได้'? 
                    <Alert severity="success">{loginStatus}</Alert>
                  :
                    <Alert severity="error">{loginStatus}</Alert>
                  }
                  
                </Grid>
              
              :
              <></>


              }
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  color='maincolor' 
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={res_email}
                  onChange={(event) => {
                    check_email(event);
                    //setRes_email(event.target.value.replace(/[^a-zA-Z0-9+@+.+_+-]/gi, ""))
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  //required
                  fullWidth
                  name="tel"
                  label="Tel"
                  color='maincolor' 
                  type="tel"
                  id="tel"
                  autoComplete="tel"
                  value={res_tel}
                  inputProps={{ 
                    maxLength: 10,
                    
                   }}
                  onChange={(event) => {
                    setRes_tel(event.target.value.replace(/[^0-9]/gi, ""))
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  color='maincolor' 
                  type="password"
                  id="password"
                  autoComplete="password"
                  value={res_pass}
                  onChange={(event) => {
                    setRes_pass(event.target.value.replace(/[^a-zA-Z0-9+@+.+_+-]/gi, ""))
                  }}
                />
              </Grid>

            </Grid>
            <Button
              //type="submit"
              fullWidth
              variant="contained"
              color="maincolor"
              sx={{ mt: 2, mb: 2 }}
              // onSubmit={addRes}
              onClick={addRes}
            >
              Register
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item md>
                <Button
                  fullWidth
                  color="maincolor"
                  onClick={() => { window.location = "/Login" }}
                >
                  Already Reistered? Login
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>

      </Container>
      {/* <h1>{value}</h1> */}
    </ThemeProvider>
  );
}

export default Register