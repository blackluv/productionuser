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
import { usePrivy, useWallets } from "@privy-io/react-auth";
import { ethers } from "ethers";
import QRCode from "react-qr-code";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

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
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open44, setOpen44] = React.useState(false);
  const [open55, setOpen55] = React.useState(false);
  const [open66, setOpen66] = React.useState(false);
  const [open77, setOpen77] = React.useState(false);
  const [open88, setOpen88] = React.useState(false);
  const [open100, setOpen100] = React.useState(false);
  const [open200, setOpen200] = React.useState(false);
  const [open300, setOpen300] = React.useState(false);
  const [hasaccount, setHasaccount] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);
  const handleOpen44 = () => setOpen44(true);
  const handleClose44 = () => setOpen44(false);
  const handleOpen55 = () => setOpen55(true);
  const handleClose55 = () => setOpen55(false);
  const handleOpen66 = () => setOpen66(true);
  const handleClose66 = () => setOpen66(false);
  const handleOpen77 = () => setOpen77(true);
  const handleClose77 = () => setOpen77(false);
  const handleOpen88 = () => setOpen88(true);
  const handleClose88 = () => setOpen88(false);
  const handleOpen100 = () => setOpen100(true);
  const handleClose100 = () => setOpen100(false);
  const handleOpen200 = () => setOpen200(true);
  const handleClose200 = () => setOpen200(false);
  const handleOpen300 = () => setOpen300(true);
  const handleClose300 = () => setOpen300(false);
  const [value, setValue] = React.useState(0);
  const [shopname, setShopname] = useState('');
  const [shopname2, setShopname2] = useState('');
  const [shopname1, setShopname1] = useState('');
  const [shopname44, setShopname44] = useState('');
  const [shopname55, setShopname55] = useState('');
  const [shopname66, setShopname66] = useState('');
  const [shopname77, setShopname77] = useState('');
  const [shopname88, setShopname88] = useState('');
  const [email, setEmail] = useState('');
  const [success1, setSuccess1] = useState(false);
  const [token1, setToken1] = useState('');
  const [email2, setEmail2] = useState('');
  const [email44, setEmail44] = useState('');
  const [email55, setEmail55] = useState('');
  const [email66, setEmail66] = useState('');
  const [email77, setEmail77] = useState('');
  const [email88, setEmail88] = useState('');
  const [gone, setGone] = useState('');
  const [solhi, setSolhi] = useState();
  const [bal, setBal] = useState(0);
  const [resp, setResp] = useState(null);
  const [resp1, setResp1] = useState([]);
  const [connectedaddress, setConnectedaddress] = useState();
  const [age, setAge] = React.useState('');

  const handleChange22 = (event) => {
    setAge(event.target.value);
  };

  const { ready, authenticated, user, login, logout , exportWallet } = usePrivy();

  //const {wallets} = useWallets();
  const {wallets, ready: walletsReady} = useWallets();

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

  const getsol = async () => {
  var myHeaders = new Headers();
myHeaders.append("x-api-key", "vXLwVmfF1Ipdu4aR");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

let solhi = fetch(
  'https://api.shyft.to/sol/v1/transaction/history?network=mainnet-beta&tx_num=2&account='+ used?.soladdress +'&enable_raw=true',
  requestOptions
)
  .then(response => response.text())
  .then(result => console.log(result.result, 'solhistory'))
  .catch(error => console.log('error', error));

  setSolhi(solhi.result ? solhi.result : [])
}

const { data15, error15 } = useSWR('getsol', getsol, { refreshInterval: 36000 })

  const { data5, error5 } = useSWR('getbalance', getbalance, { refreshInterval: 36000 })
  const sendeth = async (_amout, _address) => {
    const wallet = wallets[0];
    await wallet.switchChain(1);
    const provider = await wallet.getEthersProvider();
    const signer = provider.getSigner();
    const tx = await signer.sendTransaction({
        to: _address,
        value: ethers.utils.parseUnits(_amout, 'ether'),
      });
      tx.wait(3)
  }

  const sendusdt = async (_amout, _address) => {
    const wallet = wallets[0];
    await wallet.switchChain(1);
    const provider = await wallet.getEthersProvider();
    const usdtaddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7"
    const usdtabi = [
      {
        name: "transfer",
        type: "function",
        inputs: [
          {
            name: "_to",
            type: "address",
          },
          {
            type: "uint256",
            name: "_tokens",
          },
        ],
        constant: false,
        outputs: [],
        payable: false,
      },
    ];
    const signer = provider.getSigner();
    const USDT2 = new ethers.Contract(usdtaddress, usdtabi,signer);
    const tx = await USDT2.transfer(
        _address,
        _amout
        //ethers.utils.parseUnits(_amout, 6),
  );
      tx.wait(3)
  }
  const send = async (_shopname22, _api, _age, _shopname33) => {
    const urlencoded = new URLSearchParams()
    urlencoded.append("api", _api)
    urlencoded.append("token", _age)
    urlencoded.append("amount", _shopname22)
    urlencoded.append("addressto", _shopname33)
    //urlencoded.append("connectedaddress", connectedaddress)
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
 /* const gettransactions = async () => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'X-API-Key': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImRjMWU5Y2E1LWMwMWMtNDAzNC1hMGExLTBmNmJmZmJmNWJiYiIsIm9yZ0lkIjoiNDA1NjAzIiwidXNlcklkIjoiNDE2NzgyIiwidHlwZUlkIjoiYTJiYzc5OGItMTYzNi00YzVkLTkzZjAtMWRlMDI1ZDYwYTU2IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MjQzNjAzMTksImV4cCI6NDg4MDEyMDMxOX0.2HuzWCFdG2ZTa780lQCcnzDKEYwsrFfY4PWESmnrLTQ'
        },
       };

       fetch(
        'https://deep-index.moralis.io/api/v2.2/wallets/'+ user?.wallet?.address + '/history?chain=eth&order=DESC',
        options
       )
       .then(response => response.json())
       .then(data => {
         setResp1(data.result);
      });
        /*.then((response) => response.json())
        .then((response) => console.log('rel',response?.result))
        .then((response) => setResp(response))
        .catch((err) => console.error(err));*/
        //console.log('resp', resp1)

  //}

  /*const { data6, error6 } = useSWR('gettransactions', gettransactions, {
    revalidateOnFocus: false,
    revalidateOnMount:false,
    revalidateOnReconnect: false,
    refreshWhenOffline: false,
    refreshWhenHidden: false,
    refreshInterval: 0
  })*/

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

    console.log(user5?.data?.shop, 'hasaccount')
  }

  const {
    data: user7,
    error7,
    isValidating7,
  } = useSWR('https://api.etherscan.io/api?module=account&action=txlist&address=' + user?.wallet?.address + '&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=5MB1DN839Y3E8YUQGE5WAB7R522FKYUD7Y', fetcher, { refreshInterval: 3600000 });
  //console.log(user5?.data, 'countries')

  //console.log(user7?.result, 'usertx')

  const rest = user7?.result

  const { data3, error3 } = useSWR('hasaccount1', hasaccount1, { refreshInterval: 3600 })


  //getbalance
  const {
    data: user1,
    error1,
    isValidating1,
  } = useSWR('https://novapay.live/api/get/balance?shop=' + user5?.data?.shop, fetcher, { refreshInterval: 36000000 });
  //console.log(user1?.data, 'countries1')
  const {
    data: user22,
    error22,
    isValidating22,
  } = useSWR('https://novapay.live/api/wallets?api=' + user5?.data?.apikey, fetcher, { refreshInterval: 36000000 });
  //console.log(user22, 'countries22')
  const used = user22?.data
  //console.log('https://novapay.live/api/wallets?api=' + user5?.data?.apikey, 'theme')

  const {
    data: user100,
    error100,
    isValidating100,
  } = useSWR('https://api.trongrid.io/v1/accounts/' + used?.trxaddress + '/transactions', fetcher, { refreshInterval: 3600000 });

  //console.log(user100, 'trx')

  const rest1 = user100?.data

  const {
    data: user200,
    error200,
    isValidating200,
  } = useSWR('https://api.blockcypher.com/v1/btc/main/addrs/' + used?.btcaddress, fetcher, { refreshInterval: 3600000 });

  //console.log(user200, 'btc')

  const rest2 = user200?.txrefs

  //getorders
    const {
      data: user2,
      error2,
      isValidating2,
    } = useSWR('https://novapay.live/api/get/orders?shop=' + user5?.data?.shop, fetcher, { refreshInterval: 36000000 });
    //console.log(user2?.data, 'countries2')
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
    const {
      data: user4,
      error4,
      isValidating4,
    } = useSWR('https://novapay.live/api/get/allinvoice?shop=' + user5?.data?.shop, fetcher, { refreshInterval: 36000000 });
    //console.log(user4?.data, 'countries4')

    const invoicemap = user4?.data
    //getallwithdrawals
  //registeruser
  async function registeruser(shop, email) {
    const urlencoded = new URLSearchParams()
    console.log(user?.wallet?.address, 'user')
    urlencoded.append("shop", shop)
    urlencoded.append("email", email)
    urlencoded.append("connectedaddress", user?.wallet?.address)
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

     const handleSubmit = async e => {
      e.preventDefault();
      let user = registeruser(shopname, email)
      console.log(user, 'user')
      //props.history.push("/");
    }

    const handleSubmit2 = async e => {
        e.preventDefault();
        let user = sendeth(shopname2, email2)
        console.log(user, 'user')
        //props.history.push("/");
      } 
      //sol,trx,btc
      const handleSubmit77 = async e => {
        e.preventDefault();
        let user = sendusdt(shopname77, email77)
        console.log(user, 'user')
        //props.history.push("/");
      } 

      const send88 = async (_shopname88, _email88) => {
        const urlencoded = new URLSearchParams()
        urlencoded.append("api", user5?.data?.apikey)
        urlencoded.append("token", 'usdt-trc20')
        urlencoded.append("amount", _shopname88)
        urlencoded.append("addressto", _email88)
        //urlencoded.append("connectedaddress", connectedaddress)
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

      let con 

      const send66 = async (_shopname66, _email66) => {
        const urlencoded = new URLSearchParams()
        urlencoded.append("api", user5?.data?.apikey)
        urlencoded.append("token", 'btc')
        urlencoded.append("amount", _shopname66)
        urlencoded.append("addressto", _email66)
        //urlencoded.append("connectedaddress", connectedaddress)
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

      const send55 = async (_shopname55, _email55) => {
        const urlencoded = new URLSearchParams()
        urlencoded.append("api", user5?.data?.apikey)
        urlencoded.append("token", 'trx')
        urlencoded.append("amount", _shopname55)
        urlencoded.append("addressto", _email55)
        //urlencoded.append("connectedaddress", connectedaddress)
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

      const send44 = async (_shopname44, _email44) => {
        const urlencoded = new URLSearchParams()
        urlencoded.append("api", user5?.data?.apikey)
        urlencoded.append("token", 'sol')
        urlencoded.append("amount", _shopname44)
        urlencoded.append("addressto", _email44)
          return fetch('https://novapay.live/api/sendtx', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: urlencoded
          })
          .then(data => data.json())
      }


      const handleSubmit44 = async e => {
        e.preventDefault();
        let user = await send44(shopname44, email44)
        console.log(user, 'user')
        setSuccess1(user.data)
        setToken1("sol")
        //props.history.push("/");
      }

      const handleSubmit55 = async e => {
        e.preventDefault();
        let user = await send55(shopname55, email55)
        console.log(user, 'user')
        setSuccess1(user.data)
        setToken1("trx")
        //props.history.push("/");
      }

      const handleSubmit66 = async e => {
        e.preventDefault();
        let user = await send66(shopname66, email66)
        console.log(user, 'user')
        setSuccess1(user.data)
        setToken1("btc")
        //props.history.push("/");
      }

      const handleSubmit88 = async e => {
        e.preventDefault();
        let user = await send88(shopname88, email88)
        console.log(user, 'user')
        setSuccess1(user.data)
        setToken1("usdt-trc20")
        //props.history.push("/");
      }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (!ready) {
    return null;
  }
  if (!hasaccount) {
    return null;
  }

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
			//console.log("Connected", accounts[0]);
			setCurrentAccount(accounts[0]);
		} catch (error) {
			console.log(error)
		}
	};

  const checkaccount = async () => {} 
  useEffect(() => {
    connectWallet();
}, [currentAccount]);*/

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/*<AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>*/}
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
        <Toolbar />
        <Divider />
        <List>
            <ListItem key="home" disablePadding>
              <Link to= "/" className='ti'>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon /> 
                </ListItemIcon>
                <ListItemText primary="home" />
              </ListItemButton>
              </Link>
            </ListItem>
        </List>
        <List>
            <ListItem key="invoice" disablePadding>
              <Link to= "/invoicecreate" className='ti'>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon /> 
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
                  <InboxIcon /> 
                </ListItemIcon>
                <ListItemText primary="wallet" />
              </ListItemButton>
              </Link>
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem key="Settings" disablePadding>
              <Link to= "/settings" className='ti'>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon /> 
                </ListItemIcon>
                <ListItemText primary="Settings" />
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
            <div className='flex spacebetween width mb2'>
              <Card className='lit1 justcenter flex'>
                <CardContent className='flex aligncenter column'>
                <Typography>Balance in USD</Typography>
                <Typography>{used?.balanceinusd ? used?.balanceinusd : 0} USD</Typography>
                </CardContent>
              </Card>
              <Button className='lit1 justcenter flex' variant="contained" onClick={handleOpen2}>Send Eth</Button>
              <Modal
              open={open2}
              onClose={handleClose2}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              {/*<Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Complete registration
                </Typography>
              </Box>*/}
              <Box className='flex aligncenter justcenter topping'
              >
                <Typography>Test2</Typography>
                <Card className='halfwidth'>
                  <CardContent>
                  <Typography variant='h4'>Transfer Ether</Typography>
                    <form onSubmit={handleSubmit2}>
                        <TextField
                            label="amount"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            type='text'
                            onChange={e => setShopname2(e.target.value)}
                        />
                        <TextField
                            label="enter address to"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            type='text'
                            onChange={e => setEmail2(e.target.value)}
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
                  </CardContent>
                  </Card>
              </Box>
            </Modal>
              <Button className='lit1 justcenter flex' variant="contained" onClick={handleOpen3}>Recieve Eth</Button> 
              <Modal
              open={open3}
              onClose={handleClose3}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              {/*<Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Complete registration
                </Typography>
              </Box>*/}
              <Box className='flex aligncenter justcenter topping'
              >
                <Typography>Test3</Typography>
                <Card className=''>
                  <CardContent className='width'>
                    <div className='flex column justcenter aligncenter'>
                    <Typography variant='h6' className='mb2'> You can deposit Ether to the below address</Typography>
                    <Typography className=''>{user?.wallet?.address}</Typography>
                    <Divider />
                    Scan qrCode below

                    <QRCode 
                        value={user?.wallet?.address ? user?.wallet?.address : "loading" }
                        className='mb5'
                         />
                         </div>
                  </CardContent>
                  </Card>
              </Box>
            </Modal>
            </div>
            <div className='flex width aligncenter justcenter mb2'>        
            </div>
            <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                  <Tab label="Transactions" {...a11yProps(0)} />
                  <Tab label="All Wallets Balance" {...a11yProps(1)} />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
              {rest ? rest?.map((resp) => (
                <Card className='width mb2'>
                  <CardContent className='spacebetween flex'>
                    <div className='justcenter flex aligncenter column'>
                      <Typography>Transaction Hash</Typography>
                      <Typography> {resp?.hash.slice(0, 6)}...{resp?.hash.slice(-4)}</Typography>
                    </div>
                    <div className='justcenter flex aligncenter column'>
                      <Typography>Confirmation</Typography>
                      <Typography>{resp?.confirmations}</Typography>
                    </div>
                    <div className='justcenter flex aligncenter column'>
                      <Typography>Amount</Typography>
                      <Typography>{Math.round(ethers.utils.formatEther(resp?.value) * 1e2) / 1e2}</Typography>
                    </div>
                    <div className='justcenter flex aligncenter column'>
                      <Typography>To Address</Typography>
                      <Typography>{resp?.to.slice(0, 6)}...{resp?.to.slice(-4)}</Typography>
                    </div>
                  </CardContent>
                </Card>
                )) : <Typography></Typography>}
              {rest1 ? rest1?.map((resp) => (
                <Card className='width mb2'>
                  <CardContent className='spacebetween flex'>
                    <div className='justcenter flex aligncenter column'>
                      <Typography>Transaction Hash</Typography>
                      <Typography> {resp?.txID.slice(0, 6)}...{resp?.txID.slice(-4)}</Typography>
                    </div>
                    <div className='justcenter flex aligncenter column'>
                      <Typography>Confirmation</Typography>
                      <Typography>{resp?.ret[0].contractret}</Typography>
                    </div>
                    <div className='justcenter flex aligncenter column'>
                      <Typography>Amount</Typography>
                      <Typography>{resp?.raw_data.contract[0].parameter.value.amount / 1000000}</Typography>
                    </div>
                    <div className='justcenter flex aligncenter column'>
                      <Typography>To Address</Typography>
                      <Typography>{resp?.raw_data.contract[0].parameter.value.to_address.slice(0, 6)}...{resp?.raw_data.contract[0].parameter.value.to_address.slice(-4)}</Typography>
                    </div>
                  </CardContent>
                </Card>
                )) : <Typography></Typography>}
              {rest2 ? rest2?.map((resp) => (
                <Card className='width mb2'>
                  <CardContent className='spacebetween flex'>
                    <div className='justcenter flex aligncenter column'>
                      <Typography>Transaction Hash</Typography>
                      <Typography> {resp?.tx_hash.slice(0, 6)}...{resp?.tx_hash.slice(-4)}</Typography>
                    </div>
                    <div className='justcenter flex aligncenter column'>
                      <Typography>Confirmation</Typography>
                      <Typography>{resp?.confirmations}</Typography>
                    </div>
                    <div className='justcenter flex aligncenter column'>
                      <Typography>Amount</Typography>
                      <Typography>{resp?.value / 100000000}</Typography>
                    </div>
                  </CardContent>
                </Card>
                )) : <Typography></Typography>}
                {solhi ? solhi?.map((resp) => (
                <Card className='width mb2'>
                  <CardContent className='spacebetween flex'>
                    <div className='justcenter flex aligncenter column'>
                      <Typography>Sender</Typography>
                      <Typography> {resp?.info.sender.slice(0, 6)}...{resp?.info.sender.slice(-4)}</Typography>
                    </div>
                    <div className='justcenter flex aligncenter column'>
                      <Typography>Amount</Typography>
                      <Typography>{resp?.info.amount}</Typography>
                    </div>
                    <div className='justcenter flex aligncenter column'>
                      <Typography>Type</Typography>
                      <Typography>Solana</Typography>
                    </div>
                    <div className='justcenter flex aligncenter column'>
                      <Typography>Reciever</Typography>
                      <Typography>{resp?.info.reciever.slice(0, 6)}...{resp?.info.reciever.slice(-4)}</Typography>
                    </div>
                  </CardContent>
                </Card>
                )) : <Typography></Typography>}
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
              <Card className='width mb2'>
                  <CardContent className='spacebetween flex'>
                    <div className='justcenter flex aligncenter column'>
                      <Typography>Ethereum</Typography>
                    </div>
                    <Button className='justcenter flex' variant="contained" onClick={exportWallet}>Export</Button>
                    <div className='justcenter flex aligncenter column'>
                      <Typography>{used?.ethbalance ? used?.ethbalance / 1000000000000000000 : 0}</Typography>
                    </div>
                  </CardContent>
                </Card>
                <Card className='width mb2'>
                  <CardContent className='spacebetween flex'>
                    <div className='justcenter flex aligncenter column'>
                      <Typography>Solana</Typography>
                    </div>
                    <div className='justcenter flex aligncenter column'>
                      <Typography>{used?.solbalance ? used?.solbalance / 1000000000 : 0}</Typography>
                    </div>
                    <Button className='justcenter flex' variant="contained" onClick={handleOpen44}>Send</Button>
                    <Modal
              open={open44}
              onClose={handleClose44}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              {/*<Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Complete registration
                </Typography>
              </Box>*/}
              <Box className='flex aligncenter justcenter topping'
              >
                {success1 == true ? 
                <Card className='width p20'>
                  <Typography>Transfer of {shopname44} {token1} is successful</Typography>
                  <CheckCircleIcon />
                </Card>
                :<Card className='halfwidth'>
                  <CardContent>
                  <Typography variant='h4'>Transfer Solana</Typography>
                    <form onSubmit={handleSubmit44}>
                        <TextField
                            label="amount"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            type='text'
                            onChange={e => setShopname44(e.target.value)}
                        />
                        <TextField
                            label="enter address to"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            type='text'
                            onChange={e => setEmail44(e.target.value)}
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
                  </CardContent>
                  </Card>}
              </Box>
            </Modal>
                    <Button className='justcenter flex' variant="contained" onClick={handleOpen100}>Export</Button>
                    <Modal
                      open={open100}
                      onClose={handleClose100}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      {/*<Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                          Complete registration
                        </Typography>
                      </Box>*/}
                      <Box className='flex aligncenter justcenter topping'
                      >
                        <Card className='width p20'>
                          <Typography variant='h4 mb2'>Solana Privatekey</Typography>
                          <Typography>{used?.solpriv ? used?.solpriv : 'none'}</Typography>
                          </Card>
                      </Box>
                    </Modal>
                    <div className='justcenter flex aligncenter column'>
                      <Typography>{used?.soladdress ? used?.soladdress : 'none'}</Typography>
                    </div>
                  </CardContent>
                </Card>
                <Card className='width mb2'>
                  <CardContent className='spacebetween flex'>
                    <div className='justcenter flex aligncenter column'>
                      <Typography>Tron</Typography>
                    </div>
                    <div className='justcenter flex aligncenter column'>
                      <Typography>{used?.trxbalance ? used?.trxbalance / 1000000 : 0}</Typography>
                    </div>
                    <Button className='justcenter flex' variant="contained" onClick={handleOpen55}>Send</Button>
                    <Modal
              open={open55}
              onClose={handleClose55}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              {/*<Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Complete registration
                </Typography>
              </Box>*/}
              <Box className='flex aligncenter justcenter topping'
              >
              {success1 == true ? 
                <Card className='width p20'>
                  <Typography>Transfer of {shopname55} {token1} is successful</Typography>
                  <CheckCircleIcon />
                </Card>
                :
                <Card className='halfwidth'>
                  <CardContent>
                  <Typography variant='h4'>Transfer Tron</Typography>
                    <form onSubmit={handleSubmit55}>
                        <TextField
                            label="amount"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            type='text'
                            onChange={e => setShopname55(e.target.value)}
                        />
                        <TextField
                            label="enter address to"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            type='text'
                            onChange={e => setEmail55(e.target.value)}
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
                  </CardContent>
                  </Card>}
              </Box>
            </Modal> 
            <Button className='justcenter flex' variant="contained" onClick={handleOpen200}>Export</Button>
                    <Modal
                      open={open200}
                      onClose={handleClose200}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box className='flex aligncenter justcenter topping'
                      >
                        <Card className='width p20'>
                          <Typography variant='h4 mb2'>Tron Privatekey</Typography>
                          <Typography>{used?.trxpriv ? used?.trxpriv : 'none'}</Typography>
                          </Card>
                      </Box>
                    </Modal>
                    <div className='justcenter flex aligncenter column'>
                      <Typography>{used?.trxaddress ? used?.trxaddress : 'none'}</Typography>
                    </div>
                  </CardContent>
                </Card>
                <Card className='width mb2'>
                  <CardContent className='spacebetween flex'>
                    <div className='justcenter flex aligncenter column'>
                      <Typography>Bitcoin</Typography>
                    </div>
                    <div className='justcenter flex aligncenter column'>
                      <Typography>{used?.btcbalance ? used?.btcbalance / 100000000 : 0}</Typography>
                    </div>
                    <Button className='justcenter flex' variant="contained" onClick={handleOpen66}>Send</Button>
                    <Modal
              open={open66}
              onClose={handleClose66}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              {/*<Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Complete registration
                </Typography>
              </Box>*/}
              <Box className='flex aligncenter justcenter topping'
              >
              {success1 == true ? 
                <Card className='width p20'>
                  <Typography>Transfer of {shopname66} {token1} is successful</Typography>
                  <CheckCircleIcon />
                </Card> :
                <Card className='halfwidth'>
                  <CardContent>
                  <Typography variant='h4'>Transfer Bitcoin</Typography>
                    <form onSubmit={handleSubmit66}>
                        <TextField
                            label="amount"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            type='text'
                            onChange={e => setShopname66(e.target.value)}
                        />
                        <TextField
                            label="enter address to"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            type='text'
                            onChange={e => setEmail66(e.target.value)}
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
                  </CardContent>
                  </Card>}
              </Box>
            </Modal>
            <Button className='justcenter flex' variant="contained" onClick={handleOpen300}>Export</Button>
                    <Modal
                      open={open300}
                      onClose={handleClose300}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      {/*<Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                          Complete registration
                        </Typography>
                      </Box>*/}
                      <Box className='flex aligncenter justcenter topping'
                      >
                        <Card className='width p20'>
                          <Typography variant='h4 mb2'>Bitcoin Privatekey</Typography>
                          <Typography>{used?.btcpriv ? used?.btcpriv : 'none'}</Typography>
                          </Card>
                      </Box>
                    </Modal>
                    <div className='justcenter flex aligncenter column'>
                      <Typography>{used?.btcaddress ? used?.btcaddress  : 'none'}</Typography>
                    </div>
                  </CardContent>
                </Card>
                <Card className='width mb2'>
                  <CardContent className='spacebetween flex'>
                    <div className='justcenter flex aligncenter column'>
                      <Typography>USDT-ERC20</Typography>
                    </div>
                    <div className='justcenter flex aligncenter column'>
                      <Typography>{used?.usdtbalance ? used?.usdtbalance : 0}</Typography>
                    </div>
                    <Button className='justcenter flex' variant="contained" onClick={handleOpen77}>Send</Button>
                      <Modal
                      open={open77}
                      onClose={handleClose77}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      {/*<Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                          Complete registration
                        </Typography>
                      </Box>*/}
                      <Box className='flex aligncenter justcenter topping'
                      >
                        <Card className='halfwidth'>
                          <CardContent>
                          <Typography variant='h4'>Transfer USDT-ERC20</Typography>
                            <form onSubmit={handleSubmit77}>
                                <TextField
                                    label="amount"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    type='text'
                                    onChange={e => setShopname77(e.target.value)}
                                />
                                <TextField
                                    label="enter address to"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    type='text'
                                    onChange={e => setEmail77(e.target.value)}
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
                          </CardContent>
                          </Card>
                      </Box>
                    </Modal>
                    <Button className='justcenter flex' variant="contained" onClick={exportWallet}>Export</Button>
                    <div className='justcenter flex aligncenter column'>
                    <Typography>{user?.wallet?.address ? user?.wallet?.address : 'none'}</Typography>
                    </div>
                  </CardContent>
                </Card>
                <Card className='width mb2'>
                  <CardContent className='spacebetween flex'>
                    <div className='justcenter flex aligncenter column'>
                      <Typography>USDT-TRC20</Typography>
                    </div>
                    <div className='justcenter flex aligncenter column'>
                      <Typography>{0}</Typography>
                    </div>
                    <Button className='justcenter flex' variant="contained" onClick={handleOpen88}>Send</Button>
                    <Modal
                      open={open88}
                      onClose={handleClose88}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      {/*<Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                          Complete registration
                        </Typography>
                      </Box>*/}
                      <Box className='flex aligncenter justcenter topping'
                      >
                      {success1 == true ? 
                        <Card className='width p20'>
                          <Typography>Transfer of {shopname88} {token1} is successful</Typography>
                          <CheckCircleIcon />
                        </Card> :
                        <Card className='halfwidth'>
                          <CardContent>
                          <Typography variant='h4'>Transfer USDT-TRC20</Typography>
                            <form onSubmit={handleSubmit88}>
                                <TextField
                                    label="amount"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    type='text'
                                    onChange={e => setShopname88(e.target.value)}
                                />
                                <TextField
                                    label="enter address to"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    type='text'
                                    onChange={e => setEmail88(e.target.value)}
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
                          </CardContent>
                          </Card>}
                      </Box>
                    </Modal>
                    <Button className='justcenter flex' variant="contained" onClick={handleOpen200}>Export</Button>
                    <Modal
                      open={open200}
                      onClose={handleClose200}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box className='flex aligncenter justcenter topping'
                      >
                        <Card className='width p20'>
                          <Typography variant='h4 mb2'>USDT-TRC20 Privatekey</Typography>
                          <Typography>{used?.trxpriv ? used?.trxpriv : 'none'}</Typography>
                          </Card>
                      </Box>
                    </Modal>
                    <div className='justcenter flex aligncenter column'>
                    <Typography>{used?.trxaddress ? used?.trxaddress : 'none'}</Typography>
                    </div>
                  </CardContent>
                </Card>
              </CustomTabPanel>
            </Box>
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
              <Box className='flex aligncenter justcenter topping'
              >
                <Card className='halfwidth'>
                  <CardContent>
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
