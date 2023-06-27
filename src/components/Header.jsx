import { AppBar, Container, Typography, Toolbar, Select, MenuItem } from '@mui/material'
import { makeStyles } from '@mui/styles';
import React from 'react'
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CryptoState } from '../Cryptocontext';


const useStyles=makeStyles(()=>({
   title:{
      flex:1,
      color:"gold",
      fontFamily:"Montserrat",
      fontWeight:"bold",
      cursor:"pointer",
   },
}));

const darkTheme = createTheme({
   palette: {
     mode: 'dark',
   },
 });

const Header = () => {

   const navigate=useNavigate();
   const classes=useStyles()
   const {currency , setCurrency} = CryptoState(); 

   // console.log(currency)


  return (
   
   <ThemeProvider theme={darkTheme}>

    <AppBar color='transparent' position='static'>
        <Container>
            <Toolbar>
                <Typography variant='h6' onClick={()=> navigate("/")} className={classes.title}>Cryptoscope</Typography>
                <Select variant='outlined' style={{
                   width: 100,
                   height: 40,
                   marginRight: 15,
                }}                   
                   value={currency}
                   onChange={(e)=> setCurrency(e.target.value)}
                >
                  <MenuItem value={'INR'}>INR</MenuItem>
                  <MenuItem value={'USD'}>USD</MenuItem>
                </Select>
            </Toolbar>
        </Container>
    </AppBar>

   </ThemeProvider>

   //  <AppBar position="static" color="transparent" >
   //      <Toolbar>
   //          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
   //              Cryptoscope
   //           </Typography>
   //           <Select variant='outlined' style={{
   //              width: 100,
   //              height: 40,
   //              marginLeft: 15
   //           }}>

   //            <MenuItem value={'INR'} >INR</MenuItem>
   //            <MenuItem value={'USD'} >USD</MenuItem>
                
   //           </Select>
   //      </Toolbar>
   //  </AppBar>

  )
}

export default Header