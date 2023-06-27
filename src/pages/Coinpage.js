import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CryptoState } from '../Cryptocontext';
import axios from 'axios';
import { SingleCoin } from '../config/api';
import { makeStyles } from '@mui/styles';
import CoinInfo from '../components/CoinInfo';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';


const Coinpage = () => {

  const { id }=useParams();
  const [coin , setCoin]=useState();

  const {currency , symbol}=CryptoState();

  const fetchCoin=async ()=>{
    const {data} = await axios.get(SingleCoin(id));
    setCoin(data);
  }

  console.log("coin  ",coin);
  useEffect(()=>{
      fetchCoin();

  },[]);

  // useEffect(()=>{
  //   axios.get("https://api.coingecko.com/api/v3/coins/bitcoin")
  //   .then((res)=>setCoin(res))
  //   console.log("ress",res)
  // },[])



  
  // const useStyles=makeStyles((theme)=>({
  //   container:{
  //     display:'flex',
  //     // [theme.breakpoints.down("md")]:{
  //     //   flexDirection:'column',
  //     //   alignItems:'center',
  //     // },
  //   },

  // }));
  // const classes=useStyles();






  return (
    <div>
      <div>
        sidebar
      </div>

      <CoinInfo coin ={coin}/>

    </div>
  )
}

export default Coinpage