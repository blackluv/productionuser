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
  const [connectedaddress, setConnectedaddress] = useState();
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
    data: user,
    error,
    isValidating,
  } = useSWR('https://novapay.live/api/get/address?address=' + currentAccount, fetcher, { refreshInterval: 360000 });
  console.log(user?.data, 'countries')
  const hasaccount1 = async () => {
    if(user?.data == undefined){
      setHasaccount(false)
    }else {
      setHasaccount(true)
      setShopname1(user?.data?.shop)
    }

    console.log(user?.data?.shop, 'hasaccount')
  }

  const { data3, error3 } = useSWR('hasaccount1', hasaccount1, { refreshInterval: 3600 })

  //getbalance
  const {
    data: user1,
    error1,
    isValidating1,
  } = useSWR('https://novapay.live/api/get/balance?shop=' + user?.data?.shop, fetcher, { refreshInterval: 36000000 });
  console.log(user1?.data, 'countries1')
  //getorders
    const {
      data: user2,
      error2,
      isValidating2,
    } = useSWR('https://novapay.live/api/get/orders?shop=' + user?.data?.shop, fetcher, { refreshInterval: 36000000 });
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
  //getallinvoice
    const {
      data: user4,
      error4,
      isValidating4,
    } = useSWR('https://novapay.live/api/get/allinvoice?shop=' + user?.data?.shop, fetcher, { refreshInterval: 36000000 });
    console.log(user4?.data, 'countries4')

    const invoicemap = user4?.data
    //getallwithdrawals
  //registeruser
  async function registeruser(shop, email) {
    const urlencoded = new URLSearchParams()
    console.log(email, 'email')
    urlencoded.append("shop", shop)
    urlencoded.append("email", email)
    urlencoded.append("connectedaddress", currentAccount)
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
			console.log("Connected", accounts[0]);
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
            <ListItem key="Invoicelist" disablePadding>
              <Link to= "/invoicelist" className='ti'>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon /> 
                </ListItemIcon>
                <ListItemText primary="InvoiceList" />
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
        {currentAccount ? 
        /* Check if hasaccount load wallet or if not load register*/
        <div>
            {hasaccount ? 
          <div class="">
            <div className='flex spacebetween width mb2'>
              <Card className='lit1 justcenter flex'>
                <CardContent className='flex aligncenter column'>
                <Typography>Orders</Typography>
                <Typography>{user2?.data}</Typography>
                </CardContent>
              </Card>
              <Card className='lit1 justcenter aligncenter flex'>
                <CardContent className='flex aligncenter column'>
                <Typography>Balance</Typography>
                <Typography>{user1?.data}</Typography>
                </CardContent>
              </Card>
              <Button className='lit1 justcenter flex' variant="contained" disabled="true">Request Withdraw</Button> 
            </div>
            <div className='flex width aligncenter justcenter mb2'>        
              <Card className=''>
                <CardContent className="flex width aligncenter justcenter">
                  <Typography>Merchant Key</Typography>
                  <Typography>{user?.data?.apikey}</Typography>
                </CardContent>
              </Card>
            </div>
            <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                  <Tab label="Invoice (Deposits)" {...a11yProps(0)} />
                  <Tab label="Withdrawals" {...a11yProps(1)} />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
              {invoicemap ? invoicemap?.map((invoice) => (
                <Card className='width'>
                  <CardContent className='spacebetween flex'>
                    <div className='justcenter flex aligncenter column'>
                      <Typography>Transaction Id</Typography>
                      <Typography>{invoice.transactionhash}</Typography>
                    </div>
                    <div className='justcenter flex aligncenter column'>
                      <Typography>Amount</Typography>
                      <Typography>{invoice.amount}</Typography>
                    </div>
                    <div className='justcenter flex aligncenter column'>
                      <Typography>Payment address</Typography>
                      <Typography>{invoice.paymentaddress}</Typography>
                    </div>
                    <div className='justcenter flex aligncenter column'>
                      <Typography>Status</Typography>
                      <Typography>{invoice.isconfirmed}</Typography>
                    </div>
                  </CardContent>
                </Card>
                )) : <Typography>No invoice</Typography>}
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <Card className='width'>
                    <CardContent className='spacebetween flex'>
                      <Typography>Coming Soon</Typography>
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
           <Button variant="contained" onClick={connectWallet}>Signin with metamask</Button> 
        </div> }
        </Box>
    </Box>
  );
}
