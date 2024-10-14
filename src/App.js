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

  const { ready, authenticated, user, login, logout } = usePrivy();

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
    console.log('bal', ethers.utils.formatEther(res))
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

  const { data3, error3 } = useSWR('hasaccount1', hasaccount1, { refreshInterval: 3600 })

  const handleChange300 = (event) => {
    setAge(event.target.value);
  };
  //getbalance
  const {
    data: user1,
    error1,
    isValidating1,
  } = useSWR('https://novapay.live/api/get/balance?shop=' + user5?.data?.shop, fetcher, { refreshInterval: 36000000 });
  console.log(user1?.data, 'countries1')
  //getorders
    const {
      data: user2,
      error2,
      isValidating2,
    } = useSWR('https://novapay.live/api/get/orders?shop=' + user5?.data?.shop, fetcher, { refreshInterval: 36000000 });
    console.log(user2?.data, 'countries2')
    //getbalance
    const {
      data: user22,
      error22,
      isValidating22,
    } = useSWR('https://novapay.live/api/wallets' + user5?.data?.apikey, fetcher, { refreshInterval: 36000000 });
    console.log(user22?.data, 'countries2')
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
    console.log(user4?.data, 'countries4')
  
    const invoicemap = user4?.data

    //const invoicemap = user4?.data
    //getallwithdrawals
    const {
      data: user10,
      error10,
      isValidating10,
    } = useSWR('https://novapay.live/api/get/requestadmin?shop=' + user5?.data?.apikey, fetcher, { refreshInterval: 36000000 });
    console.log(user10?.data, 'countries4')

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
  
      console.log(btcbal?.data?.shop, 'hasaccount2')
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
      console.log(user, 'user')
      //props.history.push("/");
    }

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div" className='tit'>
            Novapay
          </Typography>
          <TextField
          label="Search"
          id="outlined-start-adornment"
          className='fi1'
          sx={{ m: 1, width: '60%'}}
        />
        <div className='icon-noti'>
          <NotificationsNoneOutlinedIcon sx={{ color: "#606060", fontSize: 20 }}/>
        </div>
        <div className='profile flex'>
          <div className='profile-icon'></div>
          <Typography className='profile-text'>{user5?.data?.shop}</Typography>
        </div>
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
        <div className='mb5'></div>
        <Typography className='others'>Others</Typography>
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
            <div className='flex spacebetween width mb2'>
              <div className='mat1 inv'>
                <div className='flex width spacebetween alignbase'>
                  <Typography className='inv-header'>Merchant Wallet</Typography>
                  <TextField
                    label="Search Currency"
                    id="outlined-start-adornment"
                    className='fi1'
                    sx={{ m: 1, width: '48%'}}
                  />
                </div>
                <div className='p5'>
                      <Card className='width dip mb2'>
                        <CardContent className='spacebetween flex'>
                        <div className='justcenter flex aligncenter column width10'>
                          <Typography>icon</Typography>
                         </div>
                        <div className='justcenter flex aligncenter row width10'>
                          <Typography>BTC</Typography>
                        </div>
                        <div className='justcenter flex aligncenter column width10'>
                          <Typography>0.009</Typography>
                        </div>
                        <div className='justcenter flex aligncenter column width10'>
                          <Typography>$100</Typography>
                        </div>
                        </CardContent>
                      </Card>
                      <Card className='width dip mb2'>
                        <CardContent className='spacebetween flex'>
                        <div className='justcenter flex aligncenter column width10'>
                          <Typography>icon</Typography>
                         </div>
                        <div className='justcenter flex aligncenter row width10'>
                          <Typography>TRX</Typography>
                        </div>
                        <div className='justcenter flex aligncenter column width10'>
                          <Typography>0.009</Typography>
                        </div>
                        <div className='justcenter flex aligncenter column width10'>
                          <Typography>$100</Typography>
                        </div>
                        </CardContent>
                      </Card>
                      <Card className='width dip mb2'>
                        <CardContent className='spacebetween flex'>
                        <div className='justcenter flex aligncenter column width10'>
                          <Typography>icon</Typography>
                         </div>
                        <div className='justcenter flex aligncenter row width10'>
                          <Typography>ETH</Typography>
                        </div>
                        <div className='justcenter flex aligncenter column width10'>
                          <Typography>0.009</Typography>
                        </div>
                        <div className='justcenter flex aligncenter column width10'>
                          <Typography>$100</Typography>
                        </div>
                        </CardContent>
                      </Card>
                      <Card className='width dip mb2'>
                        <CardContent className='spacebetween flex'>
                        <div className='justcenter flex aligncenter column width10'>
                          <Typography>icon</Typography>
                         </div>
                        <div className='justcenter flex aligncenter row width10'>
                          <Typography>SOL</Typography>
                        </div>
                        <div className='justcenter flex aligncenter column width10'>
                          <Typography>0.009</Typography>
                        </div>
                        <div className='justcenter flex aligncenter column width10'>
                          <Typography>$100</Typography>
                        </div>
                        </CardContent>
                      </Card>
                      <Card className='width dip mb2'>
                        <CardContent className='spacebetween flex'>
                        <div className='justcenter flex aligncenter column width10'>
                          <Typography>icon</Typography>
                         </div>
                        <div className='justcenter flex aligncenter row width10'>
                          <Typography>USDT-TRC20</Typography>
                        </div>
                        <div className='justcenter flex aligncenter column width10'>
                          <Typography>0.009</Typography>
                        </div>
                        <div className='justcenter flex aligncenter column width10'>
                          <Typography>$100</Typography>
                        </div>
                        </CardContent>
                      </Card>
                      <Card className='width dip mb2'>
                        <CardContent className='spacebetween flex'>
                        <div className='justcenter flex aligncenter column width10'>
                          <Typography>icon</Typography>
                         </div>
                        <div className='justcenter flex aligncenter row width10'>
                          <Typography>USDT-ERC20</Typography>
                        </div>
                        <div className='justcenter flex aligncenter column width10'>
                          <Typography>0.009</Typography>
                        </div>
                        <div className='justcenter flex aligncenter column width10'>
                          <Typography>$100</Typography>
                        </div>
                        </CardContent>
                      </Card>
                </div>
              </div>
              <div className='mat2 inv aligncenter flex column ' /*style={{ width: '100px', height: 300 }}*/>
                <div className='flex width spacebetween aligncenter p5'>
                    <Typography className='cen-header'>Total Wallet </Typography>
                    <Typography className='cen-header'>$</Typography>
                  </div>
                <ResponsiveContainer width={180} height={180}>
                  <PieChart /*width={1000} height={400*/>
                    <Pie
                      dataKey="value"
                      data={
                        [
                          { name: "BTC", value: 2400 },
                          { name: "SOL", value: 4567 },
                          { name: "ETH", value: 1398 },
                          { name: "TRX", value: 9800 },
                          { name: "USDT-TRC20", value: 3908 },
                          { name: "USDT-ERC20", value: 4800 }
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
                <div className='mat3-div inv flex row aligncenter'>
                  <Typography className='ash1' >Transaction Count</Typography>
                  <Typography className='ash'>{user2?.data}</Typography>
                </div>
                <div className='mat3-div inv flex aligncenter'>
                  <Typography className='ash1 mb2'>API Key</Typography>
                  <Typography className='ash'>{user5?.data?.apikey}</Typography>
                </div>
                <div className='mat3-div inv flex aligncenter'>
                  <Typography className='ash1'>Webhook Key</Typography>
                  <Typography className='ash'>{user5?.data?.webhookkey ? user5?.data?.webhookkey : "Set webhook endpoint"}</Typography>
                </div>
              </div>
            </div>
            <Card className='width inv'>
              <div className='mb4'></div>
              <div className='flex width spacebetween alignbase'>
                  <Typography className='inv-header'>Withdrawal requests</Typography>
                  <FilterListIcon sx={{ color: "#606060", fontSize: 25, marginRight: 5 }}/> 
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
                {invoicemap ? invoicemap?.map((invoice) => (
                      <Card className='width dip'>
                        <CardContent className='spacebetween flex'>
                        <div className='justcenter flex aligncenter column width10'>
                          <Typography>12/10/2024</Typography>
                        </div>
                        <div className='justcenter flex aligncenter column width10'>
                          <Typography>not available</Typography>
                        </div>
                        <div className='justcenter flex aligncenter row width20'>
                          <Typography>{invoice?.useradress.slice(0,8)}....</Typography>
                          <ContentCopyIcon sx={{ color: "#606060", fontSize: 20 }}/> 
                        </div>
                        <div className='justcenter flex aligncenter column width10'>
                          <Typography>{invoice?.amount}</Typography>
                        </div>
                        <div className='justcenter flex aligncenter column width10'>
                          <Typography>{invoice?.token}</Typography>
                        </div>
                        <div className='justcenter flex aligncenter width20'>
                          <Button className='lit4 justcenter flex pay' variant="contained" onClick={() => pay(invoice?.amount, invoice?.token, invoice?.useraddress )}>Pay</Button>
                          <Button className='lit4 justcenter flex pay' variant="contained"  onClick={() => deny()}>Deny</Button>
                        </div>
                        </CardContent>
                      </Card>
                      )) : 
                      <Card>
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
