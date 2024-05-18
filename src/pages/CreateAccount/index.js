import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HeaderB from '../../components/header';
import { Alert } from '@mui/material';


let theme = createTheme({
    
  });
  theme = createTheme(theme, {
    palette: {
      roktoLaal: theme.palette.augmentColor({
        color: {
          main: '#e30909',
        },
        name: 'roktoLaal',
      }),
    },
  });

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <a color="inherit" href="#">
        T Bank Inc.
      </a>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



function CreateAccount() {
  const [error, setError] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const password = data.get('password');
    const confirmPassword = data.get('confirmPassword');

    console.log('Form Submitted'); // Debugging log

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      console.log('Passwords do not match'); // Debugging log
      return;
    }

    setError('');

    const formData = {
      fullname: data.get('fullname'),
      dob: data.get('DOB'),
      email: data.get('email'),
      password,
    };

    console.log('Form Data:', formData); // Debugging log

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbymcARgAKS0zUSoFWkFPvjte6OJcrvX9z5Okb-RBISByk4b_JDrD5PIe-ZFOSjeWguf/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Fetch Response:', response); // Debugging log

      if (response.ok) {
        const result = await response.json();
        console.log('Data stored successfully', result);
      } else {
        console.error('Error storing data');
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <HeaderB />
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(images/background.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 4, bgcolor: 'red' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Create an Account
            </Typography>
            {error && <Alert severity="error">{error}</Alert>}
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="fullname"
                label="Full Name"
                name="fullname"
                autoComplete="fullname"
                autoFocus
                InputLabelProps={{
                    shrink: true, // Ensures the label stays above the field
                  }}
                
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="DOB"
                label="Date Of Birth"
                name="DOB"
                type="date"
                autoComplete="dob"
                autoFocus
                
                InputLabelProps={{
                  shrink: true, // Ensures the label stays above the field
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                InputLabelProps={{
                    shrink: true, // Ensures the label stays above the field
                  }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Enter your Password"
                type="password"
                id="password"
                InputLabelProps={{
                    shrink: true, // Ensures the label stays above the field
                  }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Re-Enter your Password"
                type="password"
                id="confirmPassword"
                InputLabelProps={{
                    shrink: true, // Ensures the label stays above the field
                  }}
              />
              
              <Button
                type="submit"
                color="roktoLaal"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Create an Account
              </Button>
              <Grid container>
                
                <Grid item>
                  <Link to='/Login'>Already Have an Account? Log In</Link>
                  
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}


export default CreateAccount