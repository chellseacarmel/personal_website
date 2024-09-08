import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Typography, Container, Box, Toolbar, Stack } from '@mui/material';
import Searchbar from '../layouts/dashboard/header/Searchbar';

// ----------------------------------------------------------------------

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 50;

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 1110,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  backgroundColor: "#FFFFFF",
  [theme.breakpoints.up('lg')]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title> Chellsea Robinson's Website</title>
      </Helmet>
      <StyledToolbar/>

      <Container sx={{ textAlign: 'left', alignItems: 'left' }}>
        <StyledContent sx={{ textAlign: 'left', alignItems: 'left' }}> 
          <Typography variant="h2" title sx={{ textAlign: 'center', alignItems: 'center' }}>
            Hi, &#128075; my name is Chellsea.
          </Typography>

          <Typography variant="h3" title sx={{ textAlign: 'center', alignItems: 'center' , color: "#2064d1"}}>
          An Engineer on a mission to innovate with Software and Data.
          </Typography>

          <br/>
          <br/>
          <br/>

          <Box textAlign='center' alignItems='center'>
          <Button to="/dashboard/app" size="large" variant="contained" component={RouterLink} sx={{ textAlign: 'center', alignItems: 'center', borderRadius: "50px", width:"200px" }} >
            Portfolio Dashboard
          </Button>
          </Box>

          <br/>

          <Box textAlign='center' alignItems='center'>
          <a href = "mailto: ccrobinson@cs.stonybrook.edu" id="contact" >
          <Button  size="large" variant="text" sx={{ textAlign: 'center', alignItems: 'center', borderRadius: "50px", width:"200px" }} >
            Contact Me 
          </Button>
          </a>
          </Box>      

        </StyledContent>
      </Container>
    </>
  );
}
