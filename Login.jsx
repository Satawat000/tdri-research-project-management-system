import * as React from 'react';
import { useState ,useEffect,useContext} from 'react';
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
import { Alert } from '@mui/material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { UserContext } from './Usercontext';


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
      main: "#ffffff",
      contrastText: "#000000",
    },
  },
});

const background = {
  backgroundColor: '#86a8c5',
  //backgroundImage: 'url(http://www.sosuco.com/material_pictureRe/SAB29020024A.jpg)' ,
};

const border = {
  border: '1px solid #ffffff',

};



export default function Login(){
  

  const [res_username, setUsername] = useState("");
  const [res_pass, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");
  const [loginSucceed,setLoginSucceed] = useState(false);
  
  Axios.defaults.withCredentials = true;

  
  // const {value,setValue} = useContext(UserContext);



//------------------------------------------------------


  const login = (event) => {
    event.preventDefault();
    // console.log(res_username);
    // console.log(res_pass);
    // console.log("res_pass");

    

    //-----------------------------------------------------------

    Axios.post("http://localhost:3001/login", {
      res_username: res_username,
      res_pass: res_pass,
    }).then((response) => {
      //window.location = "/Home";
      console.log(response);
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginSucceed(true);

        setLoginStatus(response.data[0].res_username);
        window.location = "/Home";
      }
      
    });
  };


//------------------------------------------------------

  useEffect(() => {
    const timer = setTimeout(() => {
      Axios.get("http://localhost:3001/login_user").then((response) => {
        console.log(response)
        if (response.data.loggedIn == true) {
          
          setLoginStatus(response.data.user[0].res_username);
        }
      });
    },0);
    return () => {
      clearTimeout(timer);
    }
  }, []);




  const handleSubmit = (event) => {
    event.preventDefault();
    /*const data = new FormData(event.currentTarget);
    console.log({
      username: event.target.value,
      password: data.get('password'),
    });*/
    console.log(res_username);
    console.log(res_pass);
  };

  return (
    <ThemeProvider theme={theme}  > 
      <Container component="main" maxWidth="xs" style={background} width={700} height={500} sx={{ borderRadius: 2 }}>
        <CssBaseline /> 
        <Box 
        
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            style: 'background',
          }}
        >
         

          <Typography component="h1" variant="h7" color="#ffffff" fontFamily= 'Century Gothic' sx={{ mt: 3 }}  >
            Login
          </Typography>
          <Box component="form" onSubmit={login} noValidate sx={{ mt: 1}}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Username"
              color="maincolor" //focused
              variant="filled"
              name="username"
              onChange={e => setUsername(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              color="maincolor"  //focused
              variant="filled"
              onChange={e => setPassword(e.target.value)}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="maincolor"
              sx={{ mt: 3, mb: 1 }}
              //login
              //onClick={()=>{login}}
              //onClick={()=>{window.location = "/Home"}}
            >
              Login
            </Button>
            <Grid container>
              <Grid item md>
                <Button
                  fullWidth
                  color="maincolor"
                  sx={{ mt: 1}}
                  onClick={() => { window.location = "/AdminLogin" }}
                >
                  Login for Admin
                </Button>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item md>
                <Button
                  fullWidth
                  color="maincolor"
                  sx={{ mt: 2 , mb: 2}}
                  onClick={() => { window.location = "/Register" }}
                >
                  Don't have an account? Register
                </Button>
              </Grid>
            </Grid>
            

            
          </Box>
          
        </Box>
      </Container>
      <br/>
      {loginStatus != "" && loginSucceed == false ? <Alert variant="filled" severity="error">
          {loginStatus}
      </Alert> : <p></p>}
      {loginSucceed == true ? <Alert variant="filled" severity="success">
          success
      </Alert> : <p></p>}
      
      {/* <h1>{value}</h1>
      <button onClick={()=>{setValue("Haha")}}>change</button>
      <button onClick={()=>{window.location = "/Home"}}>home</button> */}
    </ThemeProvider>
  );
}