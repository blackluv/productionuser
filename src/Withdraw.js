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
import { PaymentTwoTone } from '@mui/icons-material';

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
  const [id, setId] = React.useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open1, setOpen1] = React.useState(false);
  const handleClose1 = () => setOpen1(false);
  const [value, setValue] = React.useState(0);
  const [shopname, setShopname] = useState();
  const [email, setEmail] = useState();
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

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  //createuser
  async function createuser(shop, email, connectedaddress) {
    const urlencoded = new URLSearchParams()
    urlencoded.append("shop", shop)
    urlencoded.append("email", email)
    urlencoded.append("connectedaddress", connectedaddress)
      return fetch('https://novapay.live/asi/user/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: urlencoded
      })
        .then(data => data.json()
      )
     }
  //getall invoice
  const {
    data: getusers,
    error,
    isValidating,
  } = useSWR('https://novapay.live/asi/get/totalinvoice', fetcher, { refreshInterval: 36000000 });
  console.log(getusers, 'countries')
  const usermap = getusers?.data

  const {
    data: user10,
    error10,
    isValidating10,
  } = useSWR('https://novapay.live/api/get/allrequest?shop=', fetcher, { refreshInterval: 36000000 });
  console.log(user10?.data, 'countries4')

const requestmap = user10?.data

  //getuser 
  async function getuser(id) {
    return usermap[id]
  }
  //deleteuser
  async function deleteuser(shop) {
    const urlencoded = new URLSearchParams()
    urlencoded.append("shop", shop)
      return fetch('https://novapay.live/asi/user/delete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: urlencoded
      })
        .then(data => data.json()
      )
     }
  //edituser
  async function edituser(shop, connectedaddress, email) {
    const urlencoded = new URLSearchParams()
    urlencoded.append("shop", shop)
    urlencoded.append("connectedaddress", connectedaddress)
    urlencoded.append("email", email)
      return fetch('https://novapay.live/asi/user/edit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: urlencoded
      })
        .then(data => data.json()
      )
     }
  //blockuser
  async function blockuser(shop) {
    const urlencoded = new URLSearchParams()
    urlencoded.append("shop", shop)
      return fetch('https://novapay.live/asi/user/block', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: urlencoded
      })
        .then(data => data.json()
      )
     }
  //updateuserrole
  async function updaterole(shop, role) {
    const urlencoded = new URLSearchParams()
    urlencoded.append("shop", shop)
    urlencoded.append("role", role)
      return fetch('https://novapay.live/asi/user/addrole', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: urlencoded
      })
        .then(data => data.json()
      )
     }

  const hasaccount = false;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const connectWallet = async () => {
	};

  async function deny(hash) {
    const urlencoded = new URLSearchParams()
    urlencoded.append("txid", hash)
      return fetch('https://novapay.live/asi/payout/deny', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: urlencoded
      })
        .then(data => data.json()
      )
     }

     async function pay(hash) {
      const urlencoded = new URLSearchParams()
      urlencoded.append("txid", hash)
        return fetch('https://novapay.live/asi/payout/pay', {
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
    let user = createuser(shopname, email, connectedaddress)
    //props.history.push("/");
  }

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
        <List>
            <ListItem key="Request" disablePadding>
              <Link to= "/request" className='ti'>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon /> 
                </ListItemIcon>
                <ListItemText primary="Request" />
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
        {/*<Toolbar />*/}
        {ready && authenticated ? 
                <div>
            {hasaccount ? 
        <div class="">
            <div className='mb5 flex width spacebetween'>
            <Typography variant='h4' className=''>Requests</Typography>
            </div>
        <Card className='width'>
              <div className='spacearound flex mt2 bottom'>
                 <div className='justcenter flex aligncenter column width20 mb2'>
                      <Typography>Transaction id</Typography>
                  </div>
                  <Divider />
                  <div className='justcenter flex aligncenter column width20 mb2'>
                      <Typography>Shop</Typography>
                  </div>
                  <div className='justcenter flex aligncenter column width20 mb2'>
                      <Typography>Wallet</Typography>
                  </div>
                  <div className='justcenter flex aligncenter column width20 mb2'>
                      <Typography>Amount</Typography>
                  </div>
                  <div className='justcenter flex aligncenter column width20 mb2'>
                      <Typography>Token</Typography>
                  </div>
                  <div className='justcenter flex aligncenter column width20 mb2'>
                      <Typography>status</Typography>
                  </div>
                  <div className='justcenter flex aligncenter column width20 mb2'>
                      <Typography>action</Typography>
                  </div>
                  </div>
                  {requestmap?.map((request) => (
                  <CardContent className='spacearound flex bottom'>
                  <div className='justcenter flex aligncenter column width20 mb2'>
                      {/*<Typography>Shopname</Typography>*/}
                      <Typography>{request.transactionhash}</Typography>
                  </div>
                  <Divider />
                  <div className='justcenter flex aligncenter column width20 mb2'>
                      {/*<Typography>Email</Typography>*/}
                      <Typography>{request.shop}</Typography>
                  </div>
                  <div className='justcenter flex aligncenter column width20 mb2'>
                      {/*<Typography>Deposits</Typography>*/}
                      <Typography>{request.paytoaddress}</Typography>
                  </div>
                  <div className='justcenter flex aligncenter column width20 mb2'>
                      {/*<Typography>Deposits</Typography>*/}
                      <Typography>{request.amount}</Typography>
                  </div>
                  <div className='justcenter flex aligncenter column width20 mb2'>
                      {/*<Typography>payouts</Typography>*/}
                      <Typography>{request.token}</Typography>
                  </div>
                  <div className='justcenter flex aligncenter column width20 mb2'>
                      {/*<Typography>payouts</Typography>*/}
                      <Typography>{request?.isconfirmed == true ? "true" : "false"}</Typography>
                  </div>
                  <Button  className='width20' onClick={() =>deny(request?.transactionhash)}>Deny</Button>
                  <Button  className='width20' onClick={() => pay(request?.transactionhash)}>Pay</Button>
              </CardContent>
               ))}
            </Card>
        </div>
        :
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
                <TextField id="outlined-basic" label="ShopName" variant="outlined" className='mb5'/>
                <TextField id="outlined-basic" label="Email" variant="outlined" className='mb5'/>
                <Button variant="contained" >Register</Button>
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
         <Button variant="contained" onClick={login}>Signin Novapay</Button> 
      </div> }
        </Box>
    </Box>
  );
}
