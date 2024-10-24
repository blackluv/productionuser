//import * as React from 'react';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './App.css';
import { CardHeader } from '@mui/material';
import { Link } from 'react-router-dom';
import useSWR from 'swr';
import { usePrivy } from "@privy-io/react-auth";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
//import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import ReceiptIcon from '@mui/icons-material/Receipt';
import WalletIcon from '@mui/icons-material/Wallet';
import DescriptionIcon from '@mui/icons-material/Description';
import SettingsIcon from '@mui/icons-material/Settings';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import btc1 from './images/btc.png'
import profile5 from './images/circle-user.png'
import logo from './images/logo.png'
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import IconButton from '@mui/material/IconButton';
//import SearchIcon from '@mui/icons-material/Search';
//import FormControl from '@mui/material/FormControl';
//import TextField from '@mui/material/TextField';

const drawerWidth = 240;

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function PermanentDrawerLeft() {
  const [currentAccount, setCurrentAccount] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = React.useState(0);
  const [hasaccount, setHasaccount] = React.useState(false);
  const [shopname1, setShopname1] = useState('');
  const [shopname2, setShopname2] = useState('');
  const [shopname, setShopname] = useState();
  const [email, setEmail] = useState('');
  const [BTC, setBTC] = useState('');
  const [ETH, setETH] = useState('');
  const [TRX, setTRX] = useState('');
  const [SOL, setSOL] = useState('');
  const [age, setAge] = React.useState('');
  const [inputValue, setInputValue] = useState('');
  const [recentSearches, setRecentSearches] = useState([]); //update
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showresult, setShowResult] = useState(false);
  const [results, setResults] = useState({ transactions: [], users: [] });
  const { ready, authenticated, user, login, logout } = usePrivy();
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');


  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setShowSuggestions(false); // Hide suggestions when typing
    setShowResult(false)
  };

  const handleInputClick = () => {
    setShowSuggestions(true); // Show suggestions on click
  };

  const handleSearch = async (search) => {
    setInputValue(search);
    console.log(search , 'search')
    setShowSuggestions(false);
    if (!recentSearches.includes(search)) {
      setRecentSearches((prev) => [search, ...prev]);
    }

    //if (!search.trim()) return;

    try {

      console.log('searching')
      const response = await fetch(`https://novapay.live/api/search?query=${encodeURIComponent(search)}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data, 'data')
      setResults(data);
    } catch (error) {
      console.error('Fetch error:', error);
    }

    setShowResult(true)
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch(inputValue);
    }
  };

  async function pay(amount, token, addressto) {
    const urlencoded = new URLSearchParams()
    urlencoded.append("amount", amount)
    urlencoded.append("api", user5?.data?.apikey)
    urlencoded.append("token", token)
    urlencoded.append("addressto", addressto)
    console.log("api", user5?.data?.apikey)
      return fetch('https://novapay.live/api/sendtx', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: urlencoded
      })
        .then(data => data.json()
      )
     }

     async function deny() {
      const urlencoded = new URLSearchParams()
      urlencoded.append("api", user5?.data?.apikey)
      console.log("api", user5?.data?.apikey)
        return fetch('https://novapay.live/api/request/deny', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: urlencoded
        })
          .then(data => data.json()
        )
       }

       const eth1 = 'https://etherscan.io/tx/'
       const trx1 = 'https://tronscan.org/#/transaction/'
       const btc1 = 'https://mempool.space/tx/'
       const usdt1 = 'https://etherscan.io/tx/'
       const usdttrx1 = 'https://tronscan.org/#/transaction/'
       const sol1 = 'https://solscan.io/tx/'

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #ddd',
    boxShadow: 24,
    p: 4,
    borderradius: 25,
  };

  //const hasaccount = true;

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const {
    data: user5,
    error,
    isValidating,
  } = useSWR('https://novapay.live/api/get/address?address=' + user?.wallet?.address, fetcher, { refreshInterval: 100 });
  console.log(user5?.data, 'countries')
  const hasaccount1 = async () => {
    if(user5?.data == undefined){
      setHasaccount(false)
    }else {
      setHasaccount(true)
      setShopname1(user5?.data?.apikey)
    }

    console.log(shopname1, 'hasaccount')
  }

  const { data3, error3 } = useSWR('hasaccount1', hasaccount1, { refreshInterval: 3600 })

  async function edituser(shop, email, age) {
    const urlencoded = new URLSearchParams()
    console.log(email, 'email')
    urlencoded.append("shop", shop)
    urlencoded.append("email", email)
    urlencoded.append("api", shopname1)
    urlencoded.append("currency", age)
      return fetch('https://novapay.live/api/settings/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: urlencoded
      })
        .then(data => {
          if(data)
            {
              console.log(data,'data33')
              alert("Settings Updated");
            }
          else
            {
              alert("failed");
            }
        }
      )
     }

     async function edituser1(shopname, email) {
      const urlencoded = new URLSearchParams()
      console.log(email, 'email')
      urlencoded.append("shop", shopname)
      urlencoded.append("email", email)
      urlencoded.append("api", shopname1)
        return fetch('https://novapay.live/api/settings/update1', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: urlencoded
        })
          .then(data => {
            if(data)
              {
                console.log(data,'data33')
                alert("invoice created");
              }
            else
              {
                alert("failed");
              }
          }
        )
       }

       async function editwebhook(_shopname2) {
        const urlencoded = new URLSearchParams()
        urlencoded.append("webhookurl", shopname2)
        urlencoded.append("api", shopname1)
        console.log('CALLING')
          return fetch('https://novapay.live/api/settings/updatehook', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: urlencoded
          })
            .then(data => {
              if(data)
                {
                  console.log(data,'data33')
                  alert("Webhook added");
                }
              else
                {
                  alert("failed");
                }
              }
          )
         }

       const handleSubmit = async e => {
        e.preventDefault();
        let user = await edituser(shopname, email, age)
        console.log(user, 'user')
        console.log(shopname1, 'apikey')
        //props.history.push("/");
      }

      const handleSubmit2 = async e => {
        e.preventDefault();
        let user = await editwebhook(shopname2)
        console.log(user, 'user')
        console.log(shopname1, 'apikey')
        //props.history.push("/");
      }


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChange100 = (event) => {
    setAge(event.target.value);
  };

  async function Getuser(){
    let btcbal = await fetch('https://novapay.live/api/get/address?address=' + user?.wallet?.address).then((response) => response.json())
    const hasaccount2 = async () => {
      if(btcbal?.data == undefined){
        setHasaccount(false)
      }else {
        setHasaccount(true)
        setShopname1(btcbal?.data?.shop)
      }
  
      console.log(btcbal?.data?.shop, 'hasaccount2')
    }
    hasaccount2()
  }

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('api', user5?.data?.apikey);

    try {
      const response = await fetch('https://novapay.live/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('File upload failed.');
      }

      const data = await response.json();
      setUploadStatus(
        <>
        File uploaded successfully: <a href={`https://novapay.live/api/${data.filePath}`} target="_blank" rel="noopener noreferrer">{data.filePath.split('/').pop()}</a>
      </>
      );
    } catch (error) {
      setUploadStatus('File upload failed.');
      console.error(error);
    }
  };

  /*if (!ready) {
    return null;
  }
  if (!hasaccount) {
    return null;
  }*/


  /*const connectWallet = async () => {
		try {
			const { ethereum } = window;

			if (!ethereum) {
				alert("Get MetaMask -> https://metamask.io/");
				return;
			}

			// Fancy method to request access to account.
			const accounts = await ethereum.request({ method: "eth_requestAccounts" });
		
			// Boom! This should print out public address once we authorize Metamask.
			console.log("Connected", accounts[0]);
			setCurrentAccount(accounts[0]);
		} catch (error) {
			console.log(error)
		}
	};

  const checkaccount = async () => {}

  useEffect(() => {
    connectWallet();
}, [currentAccount]);*/
useEffect(() => {
  Getuser()
}, [hasaccount, ready, authenticated]);
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <div className='fip'></div>
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          {/*<Typography variant="h6" noWrap component="div" className='tit'>
            Novapay
          </Typography>*/}
          <img src={user5?.data?.whitelabel === true ? 'https://novapay.live/api/' + user5?.data?.logo : logo} width="160px" height="40px"  alt='profile image' className='tit'></img>
          <div class="input-icons mr2">
          <IconButton aria-label="search" onClick={() => handleSearch(inputValue)}>
          <SearchIcon sx={{ color: "#606060", fontSize: 20 }}/>
        </IconButton>
          <input className="input-field" 
                   type="text" 
                   placeholder="Search Transaction ID or Username..."
                   value={inputValue}
                   onChange={handleInputChange}
                   onClick={handleInputClick}
                   onKeyDown={handleKeyDown}
                    />
              {showSuggestions && recentSearches.length > 0 && (
                <div className="suggestions-card">
                  <div className='p20'>
                  <div className='suggestions-header'>
                    RECENT HISTORY
                  </div>
                  <ul>
                    {recentSearches.map((search, index) => (
                      <li key={index} onClick={() => handleSearch(search)} className="suggestion-item">
                        {search}
                      </li>
                    ))}
                  </ul>
                  </div>
                </div>
              )}
          {showresult && results.transactions.length > 0 && (
          <div className="suggestions-card1">
            <h3 className='suggestions-header1'>Search Result</h3>
            <Card className='inv p20 lu'>
            <div className='spacearound flex pip width mb2'>
                     <div className='justcenter flex aligncenter column width15'>
                        <Typography>Date</Typography>
                      </div>
                      <div className='justcenter flex aligncenter column width20'>
                        <Typography>Transaction id</Typography>
                      </div>
                      <div className='justcenter flex aligncenter column width10'>
                        <Typography>Amount</Typography>
                      </div>
                      <div className='justcenter flex aligncenter column width10'>
                        <Typography>Token</Typography>
                      </div>
                      <div className='justcenter flex aligncenter column width10'>
                        <Typography>Status</Typography>
                      </div>
                      <div className='justcenter flex aligncenter column width10 aligncenter'>
                        <Typography>Tx/Hash</Typography>
                      </div>
              </div>
              {results.transactions.map((invoice, index) => {
                                    let url;
                                    if (invoice.paidin === 'eth') {
                                        url = eth1; // Replace with your actual ETH link
                                    } else if (invoice.paidin === 'btc') {
                                      url = btc1; // Replace with your actual BTC link
                                    } else if (invoice.paidin === 'sol') {
                                      url = sol1; // Replace with your actual BTC link
                                    } else if (invoice.paidin === 'trx') {
                                      url = trx1; // Replace with your actual BTC link
                                    } else if (invoice.paidin === 'usdt') {
                                      url = eth1; // Replace with your actual BTC link
                                    } else if (invoice.paidin === 'usdttrx') {
                                      url = trx1; // Replace with your actual BTC link
                                    } 
                
                                    var date = new Date(invoice.date ? invoice.date : 0 * 1000);
                                    console.log(date, 'date')
                                    const options = {
                                      year: 'numeric',
                                      month: '2-digit',
                                      day: '2-digit',
                                      hour: '2-digit',
                                      minute: '2-digit',
                                      hour12: false, // Use 24-hour format
                                      timeZone: 'GMT' // Set timezone to GMT
                                  };
                                    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
                
                                    const [datePart, timePart] = formattedDate.split(', ');
                                    const [month, day, year] = datePart.split('/');
                                    console.log('month', month, day, year)
                
                                  // Will display time in 10:30:23 format
                                  const formatted = `${day}/${month}/${year}, ${timePart}`;
                
                                  console.log(formatted);
              return(
              <Card key={index} className='width dip mb2'>
                        <CardContent className='spacebetween flex'>
                        <div className='justcenter flex aligncenter column width15'>
                          <Typography>{formatted}</Typography>
                         </div>
                        <div className='justcenter flex aligncenter row width20'>
                          <Typography>{invoice?.transactionhash? invoice.transactionhash.slice(0,8) : "not available"}...</Typography>
                        </div>
                        <div className='justcenter flex aligncenter column width10'>
                          <Typography>{Number(invoice.amount).toFixed(2)}</Typography>
                        </div>
                        <div className='justcenter flex aligncenter column width10'>
                          <img src={`./images/${invoice.paidin ? invoice.paidin : 'none'}.png`} height='30px' width='30px' alt={invoice.paidin}/>
                        </div>
                        <div className='justcenter flex aligncenter column width10'>
                          <Typography>{invoice.isconfirmed == true ? <CheckIcon sx={{ color: "#006B0B", fontSize: 20 }}/>  : <CloseIcon sx={{ color: "#B60101", fontSize: 20 }}/> }</Typography>
                        </div>
                          <Link variant="contained" className='width10' to={url + invoice.chainhash} >View</Link>
                        </CardContent>
                      </Card>
              )})}
            </Card>
          </div>
        )}
        {showresult && results.users.length > 0 && (
          <div className="suggestions-card1">
            <h3 className='suggestions-header1'>Search Result</h3>
            <Card className='inv p20 lu'>
            <div className='spacearound flex pip width mb2'>
            <div className='justcenter flex aligncenter column width10'>
                        <Typography>Date</Typography>
                      </div>
                      <div className='justcenter flex aligncenter column width10'>
                        <Typography>User</Typography>
                      </div>
                      <div className='justcenter flex aligncenter column width20'>
                        <Typography>Wallets</Typography>
                      </div>
                      <div className='justcenter flex aligncenter column width10'>
                        <Typography>Amount</Typography>
                      </div>
                      <div className='justcenter flex aligncenter column width10'>
                        <Typography>Token</Typography>
                      </div>
                      <div className='justcenter flex aligncenter column width20 aligncenter'>
                        <Typography>Reason</Typography>
                      </div>
              </div>
              {results.users.map((invoice, index) => {
                
                                    var date = new Date(invoice.date ? invoice.date : 0 * 1000);
                                    console.log(date, 'date')
                                    const options = {
                                      year: 'numeric',
                                      month: '2-digit',
                                      day: '2-digit',
                                      hour: '2-digit',
                                      minute: '2-digit',
                                      hour12: false, // Use 24-hour format
                                      timeZone: 'GMT' // Set timezone to GMT
                                  };
                                    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
                
                                    const [datePart, timePart] = formattedDate.split(', ');
                                    const [month, day, year] = datePart.split('/');
                                    console.log('month', month, day, year)
                
                                  // Will display time in 10:30:23 format
                                  const formatted = `${day}/${month}/${year}, ${timePart}`;
                
                                  console.log(formatted);
              return(
                <Card key={index} className='width dip mb2'>
                <CardContent className='spacebetween flex'>
                <div className='justcenter flex aligncenter column width10'>
                  <Typography>12/10/2024</Typography>
                </div>
                <div className='justcenter flex aligncenter column width10'>
                  <Typography>{invoice?.username ? invoice?.username : 'none'}</Typography>
                </div>
                <div className='justcenter flex aligncenter row width20'>
                  <Typography>{invoice?.useradress ? invoice?.useradress.slice(0,8) :'not available'}....</Typography>
                </div>
                <div className='justcenter flex aligncenter column width10'>
                  <Typography>{Number(invoice?.amount).toFixed(2)}</Typography>
                </div>
                <div className='justcenter flex aligncenter column width10'>
                  <img src={`./images/${invoice?.token}.png`} height='30px' width='30px' alt={invoice?.token}/>
                </div>
                <div className='justcenter flex aligncenter width20'>
                  <Button className='lit4 justcenter flex pay smol' variant="contained" onClick={() => pay(invoice?.amount, invoice?.token, invoice?.useraddress )}>Pay</Button>
                  <Button className='lit4 justcenter flex pay' variant="contained"  onClick={() => deny()}>Deny</Button>
                </div>
                </CardContent>
              </Card>
              )})}
            </Card>
          </div>
        )}
        </div>
        <div className='icon-noti mr2'>
          <NotificationsNoneOutlinedIcon sx={{ color: "#606060", fontSize: 20 }}/>
        </div>
        <div className='profile-icon1' sx={{ width: '33px', height: '33px', borderradius: '28px', marginright: '10px', border: '1px solid #358FE5' }}>
            <img src={profile5} width="100%" height="100%"  alt='profile image'></img>
          </div>
          <Typography className='mr2 profile-text1' sx={{ color: "#FFFFFF", fontSize: '16px', fontWeight: '300' }}>{user5?.data?.shop}</Typography>
        <Link className='icon-noti' onClick={logout}>
          <LogoutIcon sx={{ color: "#D0D0D0", fontSize: 18 }}/>
        </Link>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {/*Toolbar />*/}
        <Divider />
        <List>
          <div className='mb20'></div>
            <ListItem key="home" disablePadding>
              <Link to= "/" className='ti'>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon sx={{ color: "#606060", fontSize: 20 }}/> 
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
              </Link>
            </ListItem>
        </List>
        <List>
            <ListItem key="invoice" disablePadding>
              <Link to= "/invoicecreate" className='ti'>
              <ListItemButton>
                <ListItemIcon>
                  <ReceiptIcon sx={{ color: "#606060", fontSize: 20 }}/> 
                </ListItemIcon>
                <ListItemText primary="Invoice" />
              </ListItemButton>
              </Link>
            </ListItem>
        </List>
        <List>
            <ListItem key="Wallet" disablePadding>
              <Link to= "/wallet" className='ti'>
              <ListItemButton>
                <ListItemIcon>
                  <WalletIcon sx={{ color: "#606060", fontSize: 20 }}/> 
                </ListItemIcon>
                <ListItemText primary="Wallet" />
              </ListItemButton>
              </Link>
            </ListItem>
        </List>
        <List>
            <ListItem key="Request" disablePadding>
              <Link to= "/request" className='ti'>
              <ListItemButton>
                <ListItemIcon>
                  <DescriptionIcon sx={{ color: "#606060", fontSize: 20 }}/> 
                </ListItemIcon>
                <ListItemText primary="Request" />
              </ListItemButton>
              </Link>
            </ListItem>
        </List>
        <List>
            <ListItem key="Disputes" disablePadding>
              <Link to= "/disputes" className='ti'>
              <ListItemButton>
                <ListItemIcon>
                  <DescriptionIcon sx={{ color: "#606060", fontSize: 20 }}/> 
                </ListItemIcon>
                <ListItemText primary="Disputes" />
              </ListItemButton>
              </Link>
            </ListItem>
        </List>
        <List>
            <ListItem key="Generate" disablePadding>
              <Link to= "/generate" className='ti'>
              <ListItemButton>
                <ListItemIcon>
                  <DescriptionIcon sx={{ color: "#606060", fontSize: 20 }}/> 
                </ListItemIcon>
                <ListItemText primary="Generate Link" />
              </ListItemButton>
              </Link>
            </ListItem>
        </List>
        {/*<div className='mb5'></div>
        <Typography className='others'>Others</Typography>*/}
        <Divider />
        <List>
            <ListItem key="Settings" disablePadding>
              <Link to= "/settings" className='ti'>
              <ListItemButton>
                <ListItemIcon>
                  <SettingsIcon sx={{ color: "#606060", fontSize: 20 }}/> 
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItemButton>
              </Link>
            </ListItem>
        </List>
        <List>
            <ListItem key="Support" disablePadding disabled="true">
              <Link to= "" className='ti'>
              <ListItemButton>
                <ListItemIcon>
                  <ContactSupportIcon sx={{ color: "#606060", fontSize: 20 }}/> 
                </ListItemIcon>
                <ListItemText primary="Support" />
              </ListItemButton>
              </Link>
            </ListItem>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        {ready && authenticated ? 
        /* Check if hasaccount load wallet or if not load register*/
        <div>
            {hasaccount ? 
          <div class="">
            {/*<Typography variant='h4' className='mb5'>Settings</Typography>*/}
            <div className='mbmain'></div>
            <div className='width flex spacearound'>
              <div className='flex column'>
                <form className='width' onSubmit={handleSubmit}>
                    <TextField
                        label="Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        className='mi'
                        onChange={e => setShopname(e.target.value)}
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        className='mi'
                        onChange={e => setEmail(e.target.value)}
                    />
                        <Box sx={{ minWidth: 120, marginBottom: '8%' }}>
                            <FormControl fullWidth className='mi'>
                              <InputLabel id="demo-simple-select-label">Set Currency</InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange100}
                              >
                              <MenuItem value={'USD'}>USD</MenuItem>
                              <MenuItem value={'AED'}>AED</MenuItem>
                              <MenuItem value={'GBP'}>GBP</MenuItem>
                              <MenuItem value={'EUR'}>EUR</MenuItem>
                              <MenuItem value={'INR'}>INR</MenuItem>
                              </Select>
                            </FormControl>
                          </Box>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        className='width mi-button'
                    >
                        Save
                    </Button>
                </form>

                {user5?.data?.whitelabel === true ?
                <div className='mt5'>
                  <input className='white' type="file" onChange={handleFileChange} />
                  <button onClick={handleUpload}>Upload Logo</button>
                  <p className='white'>{uploadStatus}</p>
                </div> 
                :
                <Typography></Typography>}

                </div>

                <form className='width40' onSubmit={handleSubmit2}>
                    <TextField
                        label="Set Webhook endpoint"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        className='mb2 mi'
                        onChange={e => setShopname2(e.target.value)}
                    />

                    <Typography className='mb2'>Webhook Endpoint</Typography>
                    <Typography className='mb2'>{shopname2 ? shopname2 : user5?.data?.webhookurl}</Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        className='width mi-button'
                    >
                        Submit
                    </Button>
                </form>
              </div>
          </div> :
          <div class="vertical-center">
            <Typography>You do not have an account. Register to continue</Typography>
            <Button variant="contained" onClick={handleOpen}>Complete Registration</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              {/*<Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Complete registration
                </Typography>
              </Box>*/}
              <Box
                component="form"
                sx={style}
                noValidate
                autoComplete="off"
              >
                <div className='flex column justifycenter aligncenter'>
                  <Typography id="modal-modal-title" variant="h6" component="h2" className='mb10'>
                    Complete registration
                  </Typography>
                  <form onSubmit={handleSubmit}>
                        <TextField
                            label="username"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            type='text'
                            onChange={e => setShopname(e.target.value)}
                        />
                        <TextField
                            label="email"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            type='email'
                            onChange={e => setEmail(e.target.value)}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            className='width'
                        >
                            Submit
                        </Button>
                    </form>
                </div>
              </Box>
            </Modal>
            
          </div>
        }
        </div> 
        :
        <div class="vertical-center">
          <Typography>
            Create a wallet to get started
          </Typography>
           <Button variant="contained" onClick={login}>Signin to Novapay</Button> 
        </div> }
        </Box>
    </Box>
  );
}
