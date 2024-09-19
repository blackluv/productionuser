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
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import { usePrivy } from "@privy-io/react-auth";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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
  const [shopname1, setShopname1] = useState();
  const [invoice, setInvoice] = useState('');
  const [currency, setCurency] = useState('');
  const [alert, setAlert] = useState(false);
  const [alertContent, setAlertContent] = useState('');
  const { ready, authenticated, user, login, logout } = usePrivy();

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

    console.log(user5?.data?.shop, 'hasaccount')
  }

  const { data3, error3 } = useSWR('hasaccount1', hasaccount1, { refreshInterval: 3600 })

  const {
    data: user4,
    error4,
    isValidating4,
  } = useSWR('https://novapay.live/api/get/allinvoice?shop=' + user5?.data?.shop, fetcher, { refreshInterval: 36000000 });
  console.log(user4?.data, 'countries4')

  const invoicemap = user4?.data

  //const { data3, error3 } = useSWR('hasaccount1', hasaccount1, { refreshInterval: 3600 })

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    let user = edituser(invoice, currency)
    console.log(user, 'user')
    //props.history.push("/");
  }

  async function edituser(invoice, currency) {
    const urlencoded = new URLSearchParams()
    console.log(shopname1, 'invoice')
    const di = shopname1
    urlencoded.append("amount", invoice)
    urlencoded.append("api", shopname1)
    urlencoded.append("token", "usdt") 
    urlencoded.append("currency", currency)
      return fetch('https://novapay.live/api/createinvoice1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: urlencoded
      })
        .then(data => /*data.json()*/{
          if(data.data.success === true)
            {
              console.log(data,'data33')
              setAlertContent("invoice created");
              setAlert(true);
            }
          else
            {
              setAlertContent("failed");
              setAlert(false);
            }
  })
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

  const handleChange100 = (event) => {
    setCurency(event.target.value);
  };

    /*if (!ready) {
    return null;
  }
  if (!hasaccount) {
    return null;
  }*/

  /*const checkaccount = async () => {} 

  useEffect(() => {
    connectWallet();
}, [currentAccount]);*/
useEffect(() => {
  Getuser()
}, [hasaccount, ready, authenticated]);
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
        <Button className='lit4 justcenter flex' variant="contained" onClick={logout}>Logout</Button>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        {ready && authenticated  ? 
        /* Check if hasaccount load wallet or if not load register*/
        <div>
            {hasaccount ? 
          <div class="">
            <Typography variant='h4' className='mb5'>Create an Invoice</Typography>
            <form onSubmit={handleSubmit}>
                    <TextField
                        label="Amount"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        onChange={e => setInvoice(e.target.value)}
                    />
                        <Box sx={{ minWidth: 120 }}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Select Currency</InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={currency}
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
                        className='width'
                    >
                        Submit
                    </Button>
                    <div className='mb2'>
                    {/*alert ? <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">{alertContent}</Alert> : <Alert severity='error'>{alertContent}</Alert> */}
                    </div>
                  </form>

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
                      <Typography>Status</Typography>
                      <Typography>{invoice.isconfirmed == true ? "true" : "false"}</Typography>
                    </div>
                      <Link variant="contained" to={'/invoice/' +  invoice.transactionhash}>View</Link>
                    </CardContent>
                  </Card>
                  )) : 
                  <Card>
                  <Typography>No invoice</Typography>
                  </Card>
                  }
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
              >
                <div className='flex column justifycenter aligncenter'>
                  <Typography id="modal-modal-title" variant="h6" component="h2" className='mb10'>
                    Create invoice
                  </Typography>
                  <form onSubmit={handleSubmit}>
                    <TextField
                        label="Amount"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        onChange={e => setInvoice(e.target.value)}
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
           <Button variant="contained" onClick={login}>Signin with metamask</Button> 
        </div> }
        </Box>
    </Box>
  );
}
