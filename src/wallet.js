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
  const [hasaccount, setHasaccount] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);
  const [value, setValue] = React.useState(0);
  const [shopname, setShopname] = useState('');
  const [shopname2, setShopname2] = useState('');
  const [shopname1, setShopname1] = useState('');
  const [email, setEmail] = useState('');
  const [email2, setEmail2] = useState('');
  const [bal, setBal] = useState(0);
  const [resp, setResp] = useState(null);
  const [resp1, setResp1] = useState([]);
  const [connectedaddress, setConnectedaddress] = useState();

  const { ready, authenticated, user, login, logout } = usePrivy();

  //const {wallets} = useWallets();
  const {wallets, ready: walletsReady} = useWallets();

  const getbalance = async () => {
    const wallet = wallets[0];
    await wallet.switchChain(11155111);
    const provider = await wallet.getEthersProvider();
    const signer = provider.getSigner();
    const balance = await signer.getBalance();
    //const balance1 = await provider.getBalance(wallet)
    const res = Math.round(ethers.utils.formatEther(balance) * 1e2) / 1e2;
    setBal(res)
    console.log('bal', ethers.utils.formatEther(res))
  }

  const { data5, error5 } = useSWR('getbalance', getbalance, { refreshInterval: 36000 })
  const sendeth = async (_amout, _address) => {
    const wallet = wallets[0];
    await wallet.switchChain(11155111);
    const provider = await wallet.getEthersProvider();
    const signer = provider.getSigner();
    const tx = await signer.sendTransaction({
        to: _address,
        value: ethers.utils.parseUnits(_amout, 'ether'),
      });
      tx.wait(3)
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
  } = useSWR('https://novapay.live/api/get/address?address=' + user?.wallet?.address, fetcher, { refreshInterval: 360000 });
  console.log(user5?.data, 'countries')
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
  } = useSWR('https://api-sepolia.etherscan.io/api?module=account&action=txlist&address=' + user?.wallet?.address + '&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=5MB1DN839Y3E8YUQGE5WAB7R522FKYUD7Y', fetcher, { refreshInterval: 3600000 });
  console.log(user5?.data, 'countries')

  console.log(user7?.result, 'usertx')

  const rest = user7?.result

  const { data3, error3 } = useSWR('hasaccount1', hasaccount1, { refreshInterval: 3600 })

  //getbalance
  const {
    data: user1,
    error1,
    isValidating1,
  } = useSWR('https://novapay.live/api/get/balance?shop=' + user5?.data?.shop, fetcher, { refreshInterval: 36000000 });
  console.log(user1?.data, 'countries1')
  const {
    data: user22,
    error22,
    isValidating22,
  } = useSWR('https://novapay.live/api/wallets?api=' + user5?.data?.apikey, fetcher, { refreshInterval: 36000000 });
  console.log(user22?.data, 'countries2')
  //getorders
    const {
      data: user2,
      error2,
      isValidating2,
    } = useSWR('https://novapay.live/api/get/orders?shop=' + user5?.data?.shop, fetcher, { refreshInterval: 36000000 });
    console.log(user2?.data, 'countries2')
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
    console.log(user4?.data, 'countries4')

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const connectWallet = async () => {
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
}, [currentAccount]);

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
                <Typography>Eth Balance</Typography>
                <Typography>{bal} ETH</Typography>
                </CardContent>
              </Card>
              <Button className='lit1 justcenter flex' variant="contained" onClick={handleOpen2}>Send</Button>
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
              <Button className='lit1 justcenter flex' variant="contained" onClick={handleOpen3}>Recieve</Button> 
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
                  <Tab label="Send Tokens" {...a11yProps(2)} />
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
                )) : <Typography>No transactions on wallet</Typography>}
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <Typography>All wallets</Typography>
                <Card className='width mb2'>
                  <CardContent className='spacebetween flex'>
                    <div className='justcenter flex aligncenter column'>
                      <Typography>Solana</Typography>
                    </div>
                    <div className='justcenter flex aligncenter column'>
                      <Typography>{user22.data?.solbalance}</Typography>
                    </div>
                  </CardContent>
                </Card>
                <Card className='width mb2'>
                  <CardContent className='spacebetween flex'>
                    <div className='justcenter flex aligncenter column'>
                      <Typography>Tron</Typography>
                    </div>
                    <div className='justcenter flex aligncenter column'>
                      <Typography>{user22.data?.trxbalance}</Typography>
                    </div>
                  </CardContent>
                </Card>
                <Card className='width mb2'>
                  <CardContent className='spacebetween flex'>
                    <div className='justcenter flex aligncenter column'>
                      <Typography>Bitcoin</Typography>
                    </div>
                    <div className='justcenter flex aligncenter column'>
                      <Typography>{user22.data?.btcbalance}</Typography>
                    </div>
                  </CardContent>
                </Card>
                <Card className='width mb2'>
                  <CardContent className='spacebetween flex'>
                    <div className='justcenter flex aligncenter column'>
                      <Typography>USDT</Typography>
                    </div>
                    <div className='justcenter flex aligncenter column'>
                      <Typography>{user22.data?.usdtbalance}</Typography>
                    </div>
                  </CardContent>
                </Card>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                <Typography>Send Tokens</Typography>
                <Card className='width mb2'>
                  <CardContent className='spacebetween flex'>
                    <div className='justcenter flex aligncenter column'>
                      <Typography>Solana</Typography>
                    </div>
                    <div className='justcenter flex aligncenter column'>
                      <Typography>{user22.data?.solbalance}</Typography>
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
