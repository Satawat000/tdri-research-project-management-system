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



export default function SignIn() {

  const [ad_username, setAd_Username] = useState("");
  const [ad_pass, setAd_Password] = useState("");

  const [loginStatus, setLoginStatus] = useState("");
  const [loginSucceed,setLoginSucceed] = useState(false);
  Axios.defaults.withCredentials = true;


  //-----------------------------------------------------------

  const login = (event) => {
    event.preventDefault();
    // console.log(res_username);
    // console.log(res_pass);
    // console.log("res_pass");
    Axios.post("http://localhost:3001/login_admin", {
      ad_username: ad_username,
      ad_pass: ad_pass,
    }).then((response) => {
      //window.location = "/Home";
      console.log(response);
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginSucceed(true);

        setLoginStatus(response.data[0].ad_username);
        window.location = "/MUser";
      }
      
    });
  };

  //-----------------------------------------------------------
  useEffect(() => {
    const timer = setTimeout(() => {
      Axios.get("http://localhost:3001/login_admin_check").then((response) => {
        console.log(response)
        if (response.data.loggedIn_admin == true) {
          
          setLoginStatus(response.data.user[0].ad_username);
        }
      });
    },0);
    return () => {
      clearTimeout(timer);
    }
  }, []);
  //-----------------------------------------------------------


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      username: data.get('usrename'),
      password: data.get('password'),
    });
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
         

          <Typography component="h1" variant="h7" color="#ffffff" fontFamily= 'Century Gothic' sx={{ mt: 5 }}  >
            Admin
          </Typography>
          <Box component="form" onSubmit={login} noValidate sx={{ mt: 1}}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Username"
              color="maincolor" //focused
              variant="filled"
              onChange={e => setAd_Username(e.target.value)}
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
              onChange={e => setAd_Password(e.target.value)}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="maincolor"
              sx={{ mt: 3, mb: 2 }}
              //onClick={() => { window.location = "/MUser" }}
            >
              Login
            </Button>
            <Grid container>
              <Grid item md>
                <Button
                  fullWidth
                  color="maincolor"
                  sx={{ mt: 2, mb: 2}}
                  onClick={() => { window.location = "/Login" }}
                >
                  Login for Researcher
                </Button>
              </Grid>
            </Grid>
            <Grid container>
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
      
    </ThemeProvider>
  );
}