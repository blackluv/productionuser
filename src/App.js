//import * as React from 'react';
import React, { useEffect, useState , lazy, Suspense} from 'react';
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
import { usePrivy, useWallets } from "@privy-io/react-auth";
import { ethers } from "ethers";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import ReceiptIcon from '@mui/icons-material/Receipt';
import WalletIcon from '@mui/icons-material/Wallet';
import DescriptionIcon from '@mui/icons-material/Description';
import SettingsIcon from '@mui/icons-material/Settings';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
//import { PieChart } from '@mui/x-charts/PieChart';
import { ResponsiveContainer, PieChart, Pie, Legend, Tooltip } from "recharts";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import FilterListIcon from '@mui/icons-material/FilterList';
import btc from './images/btc.png'
import eth from './images/eth.png'
import usdt from './images/usdt.png'
import usdttrx from './images/usdttrx.png'
import trx from './images/trx.png'
import sol from './images/sol.png'
import profile5 from './images/circle-user.png'
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CheckIcon from '@mui/icons-material/Check';
import Alert from '@mui/material/Alert';
import logo from './images/logo.png'

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
  const [hasaccount, setHasaccount] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = React.useState(0);
  const [shopname, setShopname] = useState('');
  const [shopname1, setShopname1] = useState('');
  const [email, setEmail] = useState('');
  const [key, setKey] = useState('');
  const [bal, setBal] = useState(0);
  const [connectedaddress, setConnectedaddress] = useState();
  const [age, setAge] = React.useState('');
  const [currency1, setCurrency1] = React.useState('');
  const [age1, setAge1] = React.useState('');
  const [age2, setAge2] = React.useState('');
  const [age3, setAge3] = React.useState('');
  const [age4, setAge4] = React.useState('');
  const [age5, setAge5] = React.useState('');
  const [age6, setAge6] = React.useState('');
  const [age7, setAge7] = React.useState('');
  const [copySuccess, setCopySuccess] = useState({});
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [recentSearches, setRecentSearches] = useState(['apple', 'banana', 'cherry']); //update
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [results, setResults] = useState({ transactions: [], users: [] });

  const { ready, authenticated, user, login, logout } = usePrivy();

  const {wallets, ready: walletsReady} = useWallets();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setShowSuggestions(false); // Hide suggestions when typing
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
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const getbalance = async () => {
    const wallet = wallets[0];
    await wallet.switchChain(1);
    const provider = await wallet.getEthersProvider();
    const signer = provider.getSigner();
    const balance = await signer.getBalance();
    //const balance1 = await provider.getBalance(wallet)
    const res = Math.round(ethers.utils.formatEther(balance) * 1e2) / 1e2;
    setBal(res)
    //console.log('bal', ethers.utils.formatEther(res))
  }

  const { data5, error5 } = useSWR('getbalance', getbalance, { refreshInterval: 36000 })

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
  //console.log(user5?.data, 'countries')
  const hasaccount1 = async () => {
    if(user5?.data == undefined){
      setHasaccount(false)
    }else {
      setHasaccount(true)
      setShopname1(user5?.data?.shop)
    }

    //console.log(user5?.data?.shop, 'hasaccount')
  }

  const { data3, error3 } = useSWR('hasaccount1', hasaccount1, { refreshInterval: 3600 })

  const cur = async () => {
    if(user5?.data?.currency == undefined){
      setCurrency1('USD ')
    } else{
      setCurrency1(user5?.data?.currency)
    }
  }

  const cur2 = async () => {
    if(user5?.data?.currency == undefined){
      setAge1(used?.balanceinusd ? used?.balanceinusd : 0)
    } else if(user5?.data?.currency == "EUR"){
      setAge1(used?.balanceineur ? used?.balanceineur : 0)
    } else if(user5?.data?.currency == "AED"){
      setAge1(used?.balanceinaed ? used?.balanceinaed : 0)
    } else if(user5?.data?.currency == "USD"){
      setAge1(used?.balanceinusd ? used?.balanceinusd : 0)
    } else if(user5?.data?.currency == "GBP"){
      setAge1(used?.balanceingbp ? used?.balanceingbp : 0)
    } else if(user5?.data?.currency == "INR"){
      setAge1(used?.balanceininr ? used?.balanceininr : 0)
    }
  }

  const btcval = async () => {
    if(user5?.data?.currency == undefined){
      setAge2(used?.btcbalusd ? used?.btcbalusd : 0)
    } else if(user5?.data?.currency == "EUR"){
      setAge2(used?.btcbaleur ? used?.btcbaleur : 0)
    } else if(user5?.data?.currency == "AED"){
      setAge2(used?.btcbalaed ? used?.btcbalaed: 0)
    } else if(user5?.data?.currency == "USD"){
      setAge2(used?.btcbalusd ? used?.btcbalusd: 0)
    } else if(user5?.data?.currency == "GBP"){
      setAge(used?.btcbalgbp ? used?.btcbalgbp : 0)
    } else if(user5?.data?.currency == "INR"){
      setAge2(used?.btcbalinr ? used?.btcbalinr : 0)
    }
  }

  const ethval = async () => {
    if(user5?.data?.currency == undefined){
      setAge3(used?.ethbalusd ? used?.ethbalusd : 0)
    } else if(user5?.data?.currency == "EUR"){
      setAge3(used?.ethbaleur ? used?.ethbaleur : 0)
    } else if(user5?.data?.currency == "AED"){
      setAge3(used?.ethbalaed ? used?.ethbalaed: 0)
    } else if(user5?.data?.currency == "USD"){
      setAge3(used?.ethbalusd ? used?.ethbalusd: 0)
    } else if(user5?.data?.currency == "GBP"){
      setAge3(used?.ethbalgbp ? used?.ethbalgbp : 0)
    } else if(user5?.data?.currency == "INR"){
      setAge3(used?.ethbalinr ? used?.ethbalinr : 0)
    }
  }

  const solval = async () => {
    if(user5?.data?.currency == undefined){
      setAge4(used?.solbalusd ? used?.solbalusd : 0)
    } else if(user5?.data?.currency == "EUR"){
      setAge4(used?.solbaleur ? used?.solbaleur : 0)
    } else if(user5?.data?.currency == "AED"){
      setAge4(used?.solbalaed ? used?.solbalaed: 0)
    } else if(user5?.data?.currency == "USD"){
      setAge4(used?.solbalusd ? used?.solbalusd: 0)
    } else if(user5?.data?.currency == "GBP"){
      setAge4(used?.solbalgbp ? used?.solbalgbp : 0)
    } else if(user5?.data?.currency == "INR"){
      setAge4(used?.solbalinr ? used?.solbalinr : 0)
    }
  }

  const trxval = async () => {
    if(user5?.data?.currency == undefined){
      setAge5(used?.trxbalusd ? used?.trxbalusd : 0)
    } else if(user5?.data?.currency == "EUR"){
      setAge5(used?.trxbaleur ? used?.trxbaleur : 0)
    } else if(user5?.data?.currency == "AED"){
      setAge5(used?.trxbalaed ? used?.trxbalaed: 0)
    } else if(user5?.data?.currency == "USD"){
      setAge5(used?.trxbalusd ? used?.trxbalusd: 0)
    } else if(user5?.data?.currency == "GBP"){
      setAge5(used?.trxbalgbp ? used?.trxbalgbp : 0)
    } else if(user5?.data?.currency == "INR"){
      setAge5(used?.trxbalinr ? used?.trxbalinr : 0)
    }
  }

  const usdtval = async () => {
    if(user5?.data?.currency == undefined){
      setAge6(used?.usdtbalusd ? used?.usdtbalusd : 0)
    } else if(user5?.data?.currency == "EUR"){
      setAge6(used?.usdtbaleur ? used?.usdtbaleur : 0)
    } else if(user5?.data?.currency == "AED"){
      setAge6(used?.usdtbalaed ? used?.usdtbalaed: 0)
    } else if(user5?.data?.currency == "USD"){
      setAge6(used?.usdtbalusd ? used?.usdtbalusd: 0)
    } else if(user5?.data?.currency == "GBP"){
      setAge6(used?.usdtbalgbp ? used?.usdtbalgbp : 0)
    } else if(user5?.data?.currency == "INR"){
      setAge6(used?.usdtbalinr ? used?.usdtbalinr : 0)
    }
  }

  const usdttrxval = async () => {
    if(user5?.data?.currency == undefined){
      setAge7(used?.usdttrxbalusd ? used?.usdttrxbalusd : 0)
    } else if(user5?.data?.currency == "EUR"){
      setAge7(used?.usdttrxbaleur ? used?.usdttrxbaleur : 0)
    } else if(user5?.data?.currency == "AED"){
      setAge7(used?.usdttrxbalaed ? used?.usdttrxbalaed: 0)
    } else if(user5?.data?.currency == "USD"){
      setAge7(used?.usdttrxbalusd ? used?.usdttrxbalusd: 0)
    } else if(user5?.data?.currency == "GBP"){
      setAge7(used?.usdttrxbalgbp ? used?.usdttrxbalgbp : 0)
    } else if(user5?.data?.currency == "INR"){
      setAge7(used?.usdttrxbalinr ? used?.usdttrxbalinr : 0)
    }
  }




  const {
    data: user24,
    error24,
    isValidating24,
  } = useSWR('https://novapay.live/api/wallets?api=' + user5?.data?.apikey, fetcher, { refreshInterval: 36000000 });
  //console.log(user22, 'countries22')
  const used = user24?.data

  const { data26, error26 } = useSWR('curr', cur, { refreshInterval: 36000 })
  const { data27, error27 } = useSWR('cur2', cur2, { refreshInterval: 36000 })
  const { data28, error28 } = useSWR('btcval', btcval, { refreshInterval: 36000 })
  const { data29, error29 } = useSWR('solval', solval, { refreshInterval: 36000 })
  const { data30, error30 } = useSWR('trxval', trxval, { refreshInterval: 36000 })
  const { data31, error31 } = useSWR('ethval', ethval, { refreshInterval: 36000 })
  const { data32, error32 } = useSWR('usdtval', usdtval, { refreshInterval: 36000 })
  const { data34, error34 } = useSWR('usdtrxval', usdttrxval, { refreshInterval: 36000 })

  const handleChange300 = (event) => {
    setAge(event.target.value);
  };
  //getbalance
  const {
    data: user1,
    error1,
    isValidating1,
  } = useSWR('https://novapay.live/api/get/balance?shop=' + user5?.data?.shop, fetcher, { refreshInterval: 36000000 });
  //console.log(user1?.data, 'countries1')
  //getorders
    const {
      data: user2,
      error2,
      isValidating2,
    } = useSWR('https://novapay.live/api/get/orders?shop=' + user5?.data?.shop, fetcher, { refreshInterval: 36000000 });
    //console.log(user2?.data, 'countries2')
    //getbalance
    const {
      data: user22,
      error22,
      isValidating22,
    } = useSWR('https://novapay.live/api/wallets' + user5?.data?.apikey, fetcher, { refreshInterval: 36000000 });
    //console.log(user22?.data, 'countries2')
    //requestwithdrawal
  async function requestwithdrawal(shop, amount) {
    const urlencoded = new URLSearchParams()
    urlencoded.append("shop", shop)
    urlencoded.append("amount", amount)
    //urlencoded.append("connectedaddress", connectedaddress)
      return fetch('https://novapay.live/api/withdrawal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: urlencoded
      })
        .then(data => data.json()
      )
     }
  //getallinvoi
    /*const {
      data: user4,
      error4,
      isValidating4,
    } = useSWR('https://novapay.live/api/get/allinvoice?shop=' + user5?.data?.shop, fetcher, { refreshInterval: 36000000 });
    console.log(user4, 'countries4')*/
    const {
      data: user4,
      error4,
      isValidating4,
    } = useSWR('https://novapay.live/api/get/allrequest?shop=' + user5?.data?.apikey, fetcher, { refreshInterval: 36000000 });
    //console.log(user4?.data, 'countries4')
  
    const invoicemap = user4?.data

    //const invoicemap = user4?.data
    //getallwithdrawals
    const {
      data: user10,
      error10,
      isValidating10,
    } = useSWR('https://novapay.live/api/get/requestadmin?shop=' + user5?.data?.apikey, fetcher, { refreshInterval: 36000000 });
    //console.log(user10?.data, 'countries4')

    const requestmap = user10?.data
  //registeruser

  async function Getuser(){
    let btcbal = await fetch('https://novapay.live/api/get/address?address=' + user?.wallet?.address).then((response) => response.json())
    const hasaccount2 = async () => {
      if(btcbal?.data == undefined){
        setHasaccount(false)
      }else {
        setHasaccount(true)
        setShopname1(btcbal?.data?.shop)
      }
  
      //console.log(btcbal?.data?.shop, 'hasaccount2')
    }
    hasaccount2()
  }
  async function registeruser(shop, email, key) {
    const urlencoded = new URLSearchParams()
    console.log(user?.wallet?.address, 'user')
    urlencoded.append("shop", shop)
    urlencoded.append("email", email)
    urlencoded.append("connectedaddress", user?.wallet?.address)
    urlencoded.append("key", key)
    urlencoded.append("currency", age)
      return fetch('https://novapay.live/api/create/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: urlencoded
      })
        .then(data => data.json()
      )
     }

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

         const handleCopy = async (_textToCopy, index) => {
          try {
              //await navigator.clipboard.writeText(_textToCopy);
              navigator.clipboard.writeText(_textToCopy).then(() => {
                setCopySuccess((prev) => ({ ...prev, [index]: true }));
                setTimeout(() => {
                  setCopySuccess((prev) => ({ ...prev, [index]: false }));
                }, 2000);
              });
              //setCopySuccess(true);
              //alert('Copied!')
          } catch (err) {
              setCopySuccess('Failed to copy!');
          }
        }

     async function request(hash, amount, shop) {
      const urlencoded = new URLSearchParams()
      urlencoded.append("invoice", hash)
      urlencoded.append("amount", amount)
      urlencoded.append("shop", shop)
        return fetch('https://novapay.live/api/createwithdrawal', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: urlencoded
        })
          .then(data => data.json()
        )
       }

       async function awaittx(hash) {
        const urlencoded = new URLSearchParams()
        urlencoded.append("payment", hash)
        urlencoded.append("api", user5?.data?.apikey)
        console.log("api", user5?.data?.apikey)
          return fetch('https://novapay.live/api/awaittx', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: urlencoded
          })
            .then(data => data.json()
          )
         }

     const handleSubmit = async e => {
      e.preventDefault();

      if(shopname){
        let check = await fetch('https://novapay.live/api/get/user?shop=' + shopname).then((response) => response.json())
        if(check?.data?.shop == shopname){
          alert('Shop already exists')
        }
      }
      let user = registeruser(shopname, email, key)
      //console.log(user, 'user')
      //props.history.push("/");
    }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
    // Add navigation logic here if necessary
  };

  /*if (!ready) {
    return null;
  }*/


  //const checkaccount = async () => {} 
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
          <img src={logo} width="160px" height="40px"  alt='profile image' className='tit'></img>
          {/*<TextField
          label="Search"
          id="outlined-start-adornment"
          className='fi1'
          sx={{ m: 1, width: '40%'}}
        />*/}
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
                  <ul>
                    {recentSearches.map((search, index) => (
                      <li key={index} onClick={() => handleSearch(search)} className="suggestion-item">
                        {search}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
          {results.transactions.length > 0 && (
          <div className="suggestions-card">
            <h3>Transactions</h3>
            <ul>
              {results.transactions.map((transaction) => (
                <li key={transaction.transactionId} className=" flex column">
                     amount {Number(transaction.amount).toFixed(2)}
                     hash {transaction.transactionhash}
                     token paidin {transaction.paidin}
                     status confirmed {transaction.isconfirmed === true ? 'success' : 'not confimed'}
                     date{transaction.date}
              </li>
              ))}
            </ul>
          </div>
        )}
        {results.users.length > 0 && (
          <div className="">
            <h3>Users</h3>
            <ul>
              {results.users.map((user) => (
                <li key={user.username}>
                  {user.username} - {user.email}
                </li>
              ))}
            </ul>
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
        {/*<div className='profile1 flex'>
        <div className='profile-icon1' sx={{ width: '33px', height: '33px', borderradius: '28px', marginright: '10px', border: '1px solid #358FE5' }}>
            <img src={btc} width="100%" height="100%"  alt='profile image'></img>
          </div>
          {/*<div className='profile-icon1' sx={{ width: '33px', height: '33px', borderradius: '28px', marginright: '10px', border: '1px solid #358FE5' }}></div>*/}
          {/*<Typography className='profile-text1' sx={{ color: "#FFFFFF", fontSize: '16px', fontWeight: '300' }}>{user5?.data?.shop}</Typography>*
          <Typography className='' sx={{ color: "#FFFFFF", fontSize: '16px', fontWeight: '300' }}>{user5?.data?.shop}</Typography>
        </div>*/}
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
        <Divider />
        <List>
          <div className='mb20'></div>
            <ListItem key="home" 
            disablePadding>
              <Link to= "/" className='ti'>
              <ListItemButton >
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
            <div className='mbmain'></div>
            <div className='flex spacebetween width mb2 pot'>
              <div className='mat1 inv '>
                <div className='flex width spacebetween alignbase pt10 ni inv'>
                  <Typography className='inv-header'>Merchant Wallet</Typography>
                  <div class="input-icons1">
                    <SearchIcon sx={{ color: "#606060", fontSize: 20 }}/>
                      <input class="input-field" 
                            type="text" 
                            placeholder="Search Currency" />
                  </div>
                </div>
                <div className='p5 met'>
                      <Card className='width dip mb2 '>
                        <CardContent className='spacebetween flex'>
                        <div className='justcenter flex aligncenter column width10'>
                          <img src={btc} height='30px' width='30px' alt='btc'/>
                         </div>
                        <div className='justcenter flex aligncenter row width10'>
                          <Typography>BTC</Typography>
                        </div>
                        <div className='justcenter flex aligncenter column width10'>
                          <Typography>{Number(used?.btcbalance ? used?.btcbalance : 0).toFixed(2)}</Typography>
                        </div>
                        <div className='justcenter flex aligncenter column width20'>
                          <Typography>{Number(age2).toFixed(2)} {currency1}</Typography>
                        </div>
                        </CardContent>
                      </Card>
                      <Card className='width dip mb2'>
                        <CardContent className='spacebetween flex'>
                        <div className='justcenter flex aligncenter column width10'>
                          <img src={trx} height='30px' width='30px' alt='trx'/>
                         </div>
                        <div className='justcenter flex aligncenter row width10'>
                          <Typography>TRX</Typography>
                        </div>
                        <div className='justcenter flex aligncenter column width10'>
                          <Typography>{Number(used?.trxbalance ? used?.trxbalance : 0).toFixed(2)}</Typography>
                        </div>
                        <div className='justcenter flex aligncenter column width20'>
                          <Typography>{Number(age5).toFixed(2)} {currency1}</Typography>
                        </div>
                        </CardContent>
                      </Card>
                      <Card className='width dip mb2'>
                        <CardContent className='spacebetween flex'>
                        <div className='justcenter flex aligncenter column width10'>
                        <img src={eth} height='30px' width='30px' alt='eth'/>
                         </div>
                        <div className='justcenter flex aligncenter row width10'>
                          <Typography>ETH</Typography>
                        </div>
                        <div className='justcenter flex aligncenter column width10'>
                          <Typography>{Number(used?.ethbalance ? used?.ethbalance : 0).toFixed(2)}</Typography>
                        </div>
                        <div className='justcenter flex aligncenter column width20'>
                          <Typography>{Number(age3).toFixed(2)} {currency1}</Typography>
                        </div>
                        </CardContent>
                      </Card>
                      <Card className='width dip mb2'>
                        <CardContent className='spacebetween flex'>
                        <div className='justcenter flex aligncenter column width10'>
                        <img src={sol} height='30px' width='30px' alt='sol'/>
                         </div>
                        <div className='justcenter flex aligncenter row width10'>
                          <Typography>SOL</Typography>
                        </div>
                        <div className='justcenter flex aligncenter column width10'>
                          <Typography>{Number(used?.solbalance ? used?.solbalance : 0).toFixed(2)}</Typography>
                        </div>
                        <div className='justcenter flex aligncenter column width20'>
                          <Typography>{Number(age4).toFixed(2)} {currency1}</Typography>
                        </div>
                        </CardContent>
                      </Card>
                      <Card className='width dip mb2'>
                        <CardContent className='spacebetween flex'>
                        <div className='justcenter flex aligncenter column width10'>
                        <img src={usdttrx} height='30px' width='30px' alt='usdt'/>
                         </div>
                        <div className='justcenter flex aligncenter row width10'>
                          <Typography>USDT-TRC20</Typography>
                        </div>
                        <div className='justcenter flex aligncenter column width10'>
                          <Typography>{Number(used?.usdttrxbalance ? used?.usdttrxbalance : 0).toFixed(2)}</Typography>
                        </div>
                        <div className='justcenter flex aligncenter column width20'>
                          <Typography>{Number(age7).toFixed(2)} {currency1}</Typography>
                        </div>
                        </CardContent>
                      </Card>
                      <Card className='width dip mb2'>
                        <CardContent className='spacebetween flex'>
                        <div className='justcenter flex aligncenter column width10'>
                        <img src={usdt} height='30px' width='30px' alt='usdt'/>
                         </div>
                        <div className='justcenter flex aligncenter row width10'>
                          <Typography>USDT-ERC20</Typography>
                        </div>
                        <div className='justcenter flex aligncenter column width10'>
                          <Typography>{Number(used?.usdtbalance ? used?.usdtbalance : 0).toFixed(2)}</Typography>
                        </div>
                        <div className='justcenter flex  aligncenter column width20'>
                          <Typography>{Number(age6).toFixed(2)} {currency1}</Typography>
                          {/*<Typography>{currency1}</Typography>*/}
                        </div>
                        </CardContent>
                      </Card>
                </div>
              </div>
              <div className='mat2 inv aligncenter flex column ' /*style={{ width: '100px', height: 300 }}*/>
                <div className='flex width spacebetween aligncenter p5 fop'>
                    <Typography className='cen-header'>Total Wallet </Typography>
                    <Typography className='cen-header'>{Number(age1 ? age1 : 0).toFixed(2)} {currency1}</Typography>
                  </div>
                <ResponsiveContainer width={180} height={180}>
                  <PieChart /*width={1000} height={400*/>
                    <Pie
                      dataKey="value"
                      data={
                        [
                          { name: "BTC Value", value: age2 ? age2 : 1 , fill: '#f8931a'},
                          { name: "SOL Value", value: age4 ? age4 : 1, fill: '#8556f0'},
                          { name: "ETH Value", value: age3 ? age3 : 1, fill: '#627eea'},
                          { name: "TRX Value", value: age5 ? age5 : 1, fill: '#ec0928'},
                          { name: "USDT-TRC20 Value", value: age7 ? age7 : 1, fill: '#27a17b'},
                          { name: "USDT-ERC20 Value", value: age6 ? age6 : 1, fill: '#27a17b'}
                        ]
                      }
                      //cx={500}
                      //cy={200}
                      innerRadius={40}
                      outerRadius={80}
                      fill="#82ca9d"
                    />
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className='mat3'>
                <div className='mat3-div inv1 flex row aligncenter'>
                  <Typography className='ash1' >Transaction Count</Typography>
                  <Typography className='ash'>{user2?.data}</Typography>
                </div>
                <div className='mat3-div inv1 flex aligncenter'>
                  <Typography className='ash1 mb2'>API Key</Typography>
                  <Typography className='ash'>{user5?.data?.apikey}</Typography>
                </div>
                <div className='mat3-div inv1 flex aligncenter'>
                  <Typography className='ash1'>Webhook Key</Typography>
                  <Typography className='ash'>{user5?.data?.webhookkey ? user5?.data?.webhookkey : "Set webhook endpoint"}</Typography>
                </div>
              </div>
            </div>
            <Card className='width inv'>
              <div className='mb4'></div>
              <div className='flex width spacebetween alignbase'>
                  <Typography className='inv-header'>Withdrawal requests</Typography>
                  <IconButton aria-label="filter">
                    <FilterListIcon sx={{ color: "#606060", fontSize: 25, marginRight: 5 }}/> 
                  </IconButton>
              </div>
              <div className='spacearound flex pip width'>
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
                        <Typography>Action</Typography>
                      </div>
              </div>
              <div className='p20'>
                {invoicemap ? invoicemap?.map((invoice, index) => (
                      <Card key={index} className='width dip mb2'>
                        <CardContent className='spacebetween flex'>
                        <div className='justcenter flex aligncenter column width10'>
                          <Typography>12/10/2024</Typography>
                        </div>
                        <div className='justcenter flex aligncenter column width10'>
                          <Typography>not available</Typography>
                        </div>
                        <div className='justcenter flex aligncenter row width20'>
                          <Typography>{invoice?.useradress ? invoice?.useradress.slice(0,8) : 'not available'}....</Typography>
                          <IconButton aria-label="copy" onClick={() => handleCopy(invoice?.useradress, index)}>
                            {copySuccess[index] ? (
                              <CheckIcon sx={{ color: "rgb(39, 161, 123);", fontSize: 20 }} />
                            ) : (
                              <ContentCopyIcon sx={{ color: "#606060", fontSize: 20 }} />
                            )}
                          </IconButton>
                        </div>
                        <div className='justcenter flex aligncenter column width10'>
                          <Typography>{Number(invoice?.amount).toFixed(2)}</Typography>
                        </div>
                        <div className='justcenter flex aligncenter column width10'>
                          <img src={`./images/${invoice.token}.png`} height='30px' width='30px' alt={invoice?.token}/>
                        </div>
                        <div className='justcenter flex aligncenter width20'>
                          <Button className='lit4 justcenter flex pay smol' variant="contained" onClick={() => pay(invoice?.amount, invoice?.token, invoice?.useraddress )}>Pay</Button>
                          <Button className='lit4 justcenter flex pay' variant="contained"  onClick={() => deny()}>Deny</Button>
                        </div>
                        </CardContent>
                      </Card>
                      )) : 
                      <Card className='inv'>
                      <Typography>No request</Typography>
                      </Card>
                }
              </div>
            </Card>
          </div>
           :
          <div class="vertical-center">
            <Typography>Create your shop to continue</Typography>
            <Button variant="contained" onClick={handleOpen}>Create Shop</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className='flex aligncenter justcenter topping'
              >
                <Card className='halfwidth'>
                  <CardContent>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="shopname"
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
                        <TextField
                            label="Wallet Key"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            type='email'
                            onChange={e => setKey(e.target.value)}
                        />
                            <Box sx={{ minWidth: 120 }}>
                              <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Select Currency</InputLabel>
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  value={age}
                                  label="Age"
                                  onChange={handleChange300}
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
                            className='width'
                        >
                            Submit
                        </Button>
                    </form>
                  </CardContent>
                  </Card>
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
           <Button variant="contained" onClick={login}>Signin to novapay</Button>
        </div> 
        }
        </Box>
    </Box>
  );
}
