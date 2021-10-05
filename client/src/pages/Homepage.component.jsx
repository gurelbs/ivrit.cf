import React,{useEffect,useState} from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import {Link as LinkRoute} from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://guribs.com/" target="_blank">
        guribs
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const bgColor = (theme) =>
theme.palette.mode === 'light'
  ? theme.palette.grey[200]
  : theme.palette.grey[800];

export default function Homepage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          ברוכים הבאים ל-IVRIT
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'API למידע בעברית בזמן אמת'}
        </Typography>
        <Typography variant="body1" >להתקנה: <code style={{backgroundColor:'lightgray'}}>npm i ivrit</code></Typography>
        <div className="list_wrap">
        <ul>
          <li><LinkRoute title="מגרש משחקים" to="/playground">מגרש משחקים</LinkRoute></li>
          <li><LinkRoute title="תיעוד" to="/docs">תיעוד</LinkRoute></li>
          <li><LinkRoute title="דוגמאות" to="/examples">דוגמאות</LinkRoute></li>
        </ul>
        </div>
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: bgColor,
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            נבנה באהבה ע"י <a target="_blank" href="https://github.com/gurelbs">גוראל בן שבת</a>.
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
