//import * as React from 'react';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import QRCode from "react-qr-code";
import './App.css';
import useSWR from 'swr';
import { useParams } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TimelapseSharpIcon from '@mui/icons-material/TimelapseSharp';
import usdttrx2 from './images/usdttrx.png'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import IconButton from '@mui/material/IconButton';


export default function SimplePaper() {

    const [data1, setData1] = useState();
    const [copySuccess, setCopySuccess] = useState('');
    const { id } = useParams();
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const paymentaddress = "0x1917938340F919F12D84046E7c78dd9C1057A15E"
    console.log('id', id)
    const [age, setAge] = React.useState('usdt');

    const handleChange = (event) => {
      setAge(event.target.value);
    };

    const handleCopy1 = async (_textToCopy) => {
      try {
          await navigator.clipboard.writeText(_textToCopy);
          setCopySuccess(true);
          //alert('Copied!')
      } catch (err) {
          setCopySuccess('Failed to copy!');
      }
    }

    /*const {
        data: user1,
        error,
        isValidating,
      } = useSWR('http://localhost:4000/get/oneinvoice?paymenthash=' + id, fetcher, { refreshInterval: 360000 });
      console.log(user1?.data, 'countries')*/

      let data2

      const check = async () => {
        const response = await fetch('https://novapay.live/api/get/oneinvoice?paymenthash=' + id);
        const data = await response.json();
        console.log(data, 'data');
        data2 = data
        setData1(data)
        console.log(data1?.amount, 'data1')
    }

    const {
      data: user4,
      error4,
      isValidating4,
    } = useSWR('https://novapay.live/api/get/payview?paymenthash=' + id, fetcher, { refreshInterval: 36000000 });
    console.log(user4, 'countries4')
  
    const invoicemap = user4?.data

    function getMaxDecimalPlaces(num1, num2) {
      const decimalPlaces1 = (num1.toString().split('.')[1] || '').length;
      const decimalPlaces2 = (num2.toString().split('.')[1] || '').length;
      return Math.max(decimalPlaces1, decimalPlaces2);
  }

  const fee = Number(user4?.data?.fee);
const amount = Number(user4?.data?.amount);
const sum = fee + amount;
const maxDecimalPlaces = getMaxDecimalPlaces(fee, amount);
const formattedSum = sum.toFixed(maxDecimalPlaces);

    //const { data3, error3 } = useSWR('check', check, { refreshInterval: 3600000 })

    //const code = data1.paymentaddress


      //const fulldata = data1.data

      /*async function awaitinvoice() {
        const shopname1 = "bp75h3eskimqb0gtum5g4fmmkg3ckz"
        const urlencoded = new URLSearchParams()
        const di = shopname1
        console.log('awaiting')
        urlencoded.append("payment", id)
        //urlencoded.append("api", shopname1)
          return fetch('http://localhost:4000/awaittx', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              "Authorization":{
                                "x-api-key": `${shopname1}`
                            },
                "x-api-key": `${di}`
            },
            body: urlencoded
          })
            .then(data => data.json()
          )
         }*/

         //const { data3, error3 } = useSWR('awaitinvoice', awaitinvoice, { refreshInterval: 3600 })
         useEffect(() => {
            check();
        }, [data1]);
  return (
    <Box className='flex'>
    <div className='vertical-center1'>
            <Card className='transparent-bg paid'>
              <CardContent>
                <div className='flex spacebetween inv gen5 aligncenter p10 mb2'>
                  <Typography className='gen4'>Expiration Time</Typography>
                  <div className='flex gen4 aligncenter'>
                  <TimelapseSharpIcon sx={{ color: "#9A86E8", fontSize: 30, marginRight: "10px" }}/>
                    <Typography className='gen4'>00:20:00</Typography>
                  </div>
                </div>
                <div className='inv mb2 pay3'>
                  <Typography className='rt mb2'>Amount</Typography>
                  <div className='pay1 flex spacebetween aligncenter'>
                    <div className='flex alignbase'>
                    <Typography>{user4?.data?.amount}</Typography><span>{user4?.data?.token}</span>
                    </div>
                    <img src={`./images/${user4?.data?.token ? user4?.data?.token : 'none'}.png`} height='30px' width='30px' alt={user4?.data?.token}/>
                  </div>
                </div>
                <div className='inv pay6'>
                  <div className='flex spacebetween'>
                        <Typography className=''>Fee</Typography>
                        <Typography className=''>{user4?.data?.fee}</Typography>
                    </div>
                    <div className='flex spacebetween mb2'>
                        <Typography className=''>Total</Typography>
                        <Typography className=''>{formattedSum}</Typography>
                    </div>
                    <div className='tick mb2'></div>
                <div className='flex spacebetween mb5 tick2 aligncenter'>
                        <Typography className='tick2'>Amount to pay</Typography>
                        <Typography className=''>{formattedSum}</Typography>
                        <Typography className='tick2'></Typography>
                    </div>
                    <div>
                        {<QRCode 
                        value={user4?.data?.address ? user4?.data?.address : paymentaddress}
                        className='mb2 trip'
                         />}
                    </div>
                    <div className='mb5'>
                      <Typography className='tick3'>Address</Typography>
                      <di className='pay8 flex spacebetween aligncenter'>
                      <Typography>{user4?.data?.address}</Typography>
                      <IconButton aria-label="copy" onClick={() => handleCopy1(user4?.data?.address)}>
                          <ContentCopyIcon sx={{ color: "#606060", fontSize: 20 }}/> 
                      </IconButton>
                      </di>
                    </div>
                  </div>
                  </CardContent>
               {/* <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Logo Text
                    </Typography>
                    <Divider />
                    <div className='flex spacebetween'>
                        <Typography className=''>Select token </Typography>
                        <Box sx={{ minWidth: 120 }}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Select Token</InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={age}
                              label="Payment Token"
                              onChange={handleChange}
                            >
                              <MenuItem value={"usdt"}>USDT</MenuItem>
                              <MenuItem value={"usdttrx"}>USDT-TRC20</MenuItem>
                              <MenuItem value={"btc"}>BITCOIN</MenuItem>
                              <MenuItem value={"eth"}>ETHEREUM</MenuItem>
                              <MenuItem value={"trx"}>TRON</MenuItem>
                              <MenuItem value={"sol"}>SOLANA</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                    </div>
                    <Divider />
                    <div className='flex spacebetween'>
                        <Typography className=''>Token:</Typography>
                        <Typography className=''>{age}</Typography>
                    </div>
                    <div className='flex spacebetween'>
                        <Typography className=''>Amount + fee</Typography>
                        <Typography className=''>{user4?.data?.[age].amount + (user4?.data?.[age].fee ? user4?.data?.[age].fee : 0)}</Typography>
                    </div>
                    <div className='flex spacebetween'>
                        <Typography className=''>fee</Typography>
                        <Typography className=''>{user4?.data?.[age].fee}</Typography>
                    </div>
                    <Divider />
                    <Typography>Payment can be sent to recieving address below</Typography>
                    <Divider />
                    <Typography>Payment Address</Typography>
                    <Typography className='mb5'>{user4?.data?.[age].address}</Typography>
                    <div>
                        {<QRCode 
                        value={user4?.data?.[age].address? user4?.data?.[age].address : paymentaddress}
                        className='mb5'
                         />}
                    </div>
                    <Divider />
                    <div className='flex spacebetween'>
                        <Typography className=''>Payment Confirmed</Typography>
                        <Typography className=''>{user4?.data?.isconfirmed == true ? "true" : "false"}</Typography>
                    </div>
                </CardContent>*/}
                {/*<CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>*/}
            </Card>
    </div>
    </Box>
  );
}
