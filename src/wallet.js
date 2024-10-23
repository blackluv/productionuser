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
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import ReceiptIcon from '@mui/icons-material/Receipt';
import WalletIcon from '@mui/icons-material/Wallet';
import DescriptionIcon from '@mui/icons-material/Description';
import SettingsIcon from '@mui/icons-material/Settings';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import { ResponsiveContainer, PieChart, Pie, Legend, Tooltip } from "recharts";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import FilterListIcon from '@mui/icons-material/FilterList';
import btc2 from './images/btc.png'
import eth2 from './images/eth.png'
import usdt2 from './images/usdt.png'
import trx2 from './images/trx.png'
import sol2 from './images/sol.png'
import usdttrx2 from './images/usdttrx.png'
import IconButton from '@mui/material/IconButton';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import profile5 from './images/circle-user.png'
import logo from './images/logo.png'
import FastForwardIcon from '@mui/icons-material/FastForward';
import FastRewindIcon from '@mui/icons-material/FastRewind';

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
  const [age1, setAge1] = React.useState('');
  const [currency1, setCurrency1] = React.useState('');
  const [age2, setAge2] = React.useState('');
  const [age3, setAge3] = React.useState('');
  const [age4, setAge4] = React.useState('');
  const [age5, setAge5] = React.useState('');
  const [age6, setAge6] = React.useState('');
  const [age7, setAge7] = React.useState('');
  const [copySuccess, setCopySuccess] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [recentSearches, setRecentSearches] = useState([]); //update
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showresult, setShowResult] = useState(false);
  const [results, setResults] = useState({ transactions: [], users: [] });
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPage1, setCurrentPage1] = useState(1);

  const handleChange22 = (event) => {
    setAge(event.target.value);
  };

  const { ready, authenticated, user, login, logout , exportWallet } = usePrivy();

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
  if(solhi.success == true){
  setSolhi(solhi.result ? solhi.result : [])
  } else{
    setSolhi([])
  }
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

  const { data24, error24 } = useSWR('curr', cur, { refreshInterval: 36000 })
  const { data25, error25 } = useSWR('cur2', cur2, { refreshInterval: 36000 })

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

  const rest2 = user200?.txrefs ? user200?.txrefs : []

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

     const {
      data: user14,
      error14,
      isValidating14,
    } = useSWR('https://novapay.live/api/get/allrequest?shop=' + user5?.data?.apikey, fetcher, { refreshInterval: 36000000 });
    console.log(user14?.data, 'countries4')
  
    const invoicemap1 = user14?.data

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
          .then(data => {
            if(data)
              {
                console.log(data,'data33')
                alert("Payment Sent");
              }
            else
              {
                alert("failed");
              }
          }
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
            .then(data => {
              if(data)
                {
                  console.log(data,'data33')
                  alert("Payment denied");
                }
              else
                {
                  alert("failed");
                }
            }
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



  const { data28, error28 } = useSWR('btcval', btcval, { refreshInterval: 36000 })
  const { data29, error29 } = useSWR('solval', solval, { refreshInterval: 36000 })
  const { data30, error30 } = useSWR('trxval', trxval, { refreshInterval: 36000 })
  const { data31, error31 } = useSWR('ethval', ethval, { refreshInterval: 36000 })
  const { data32, error32 } = useSWR('usdtval', usdtval, { refreshInterval: 36000 })
  const { data34, error34 } = useSWR('usdtrxval', usdttrxval, { refreshInterval: 36000 })

  const handleCopy1 = async (_textToCopy) => {
    try {
        await navigator.clipboard.writeText(_textToCopy);
        setCopySuccess(true);
        //alert('Copied!')
    } catch (err) {
        setCopySuccess('Failed to copy!');
    }
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

  const eth = 'https://etherscan.io/tx/'
  const trx = 'https://tronscan.org/#/transaction/'
  const btc = 'https://mempool.space/tx/'
  const usdt = 'https://etherscan.io/tx/'
  const usdttrx = 'https://tronscan.org/#/transaction/'
  const sol = 'https://solscan.io/tx/'


  const pageSize = 10;

  const totalPages = Math.ceil(invoicemap?.length / pageSize);

  const paginateInvoices = (invoicemap, pageSize, currentPage) => {
    const startIndex = (currentPage - 1) * pageSize;
    console.log(invoicemap, 'invoice')
    return invoicemap?.slice(startIndex, startIndex + pageSize);
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  const paginatedInvoices = paginateInvoices(invoicemap, pageSize, currentPage);

  const totalPages1 = Math.ceil(invoicemap1?.length / pageSize);

  const paginateInvoices1 = (invoicemap, pageSize, currentPage) => {
    const startIndex = (currentPage - 1) * pageSize;
    console.log(invoicemap, 'invoice')
    return invoicemap?.slice(startIndex, startIndex + pageSize);
  };

  const handleNext1 = () => {
    if (currentPage1 < totalPages1) {
      setCurrentPage1(prevPage => prevPage + 1);
    }
  };

  const handlePrevious1 = () => {
    if (currentPage1 > 1) {
      setCurrentPage1(prevPage => prevPage - 1);
    }
  };

  const paginatedInvoices1 = paginateInvoices(invoicemap1, pageSize, currentPage1);

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
          <img src={user5?.data?.logo ? 'https://novapay.live/api/' + user5?.data?.logo : logo} width="160px" height="40px"  alt='profile image' className='tit'></img>
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
                                        url = eth; // Replace with your actual ETH link
                                    } else if (invoice.paidin === 'btc') {
                                      url = btc; // Replace with your actual BTC link
                                    } else if (invoice.paidin === 'sol') {
                                      url = sol; // Replace with your actual BTC link
                                    } else if (invoice.paidin === 'trx') {
                                      url = trx; // Replace with your actual BTC link
                                    } else if (invoice.paidin === 'usdt') {
                                      url = eth; // Replace with your actual BTC link
                                    } else if (invoice.paidin === 'usdttrx') {
                                      url = trx; // Replace with your actual BTC link
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
              <div className='wal1 inv'>
                  <div className='flex width spacebetween alignbase pt10 ni inv'>
                    <Typography className='inv-header'>Merchant Wallet</Typography>
                    <div class="input-icons1">
                      <SearchIcon sx={{ color: "#606060", fontSize: 20 }}/>
                        <input class="input-field" 
                              type="text" 
                              placeholder="Search Currency" />
                    </div>
                  </div>
                  <div className='p5'>
                        <Card className='width dip mb2'>
                          <CardContent className='spacebetween flex'>
                          <div className='justcenter flex aligncenter column width10'>
                            <img src={btc2} height='30px' width='30px' alt='btc'/>
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
                          <Button className='lit4 justcenter flex pay' variant="contained" onClick={handleOpen66}>Send</Button>
                          <Modal
                            open={open66}
                            onClose={handleClose66}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                          >
                            <Box className='flex aligncenter justcenter topping'
                            >
                            {success1 == true ? 
                              <Card className='width p20 inv'>
                                <Typography>Transfer of {shopname66} {token1} is successful</Typography>
                                <CheckCircleIcon />
                              </Card> :
                              <Card className='halfwidth inv p20'>
                                <CardContent>
                                <Typography variant='h4 tick'>Transfer Bitcoin</Typography>
                                  <form onSubmit={handleSubmit66}>
                                      <TextField
                                          label="amount"
                                          variant="outlined"
                                          fullWidth
                                          margin="normal"
                                          type='text'
                                          className='mi width fot'
                                          onChange={e => setShopname66(e.target.value)}
                                      />
                                      <TextField
                                          label="enter address to"
                                          variant="outlined"
                                          fullWidth
                                          margin="normal"
                                          type='text'
                                          className='mi width fot mb5 mtnone'
                                          onChange={e => setEmail66(e.target.value)}
                                      />
                                      <Button
                                          variant="contained"
                                          color="primary"
                                          type="submit"
                                          className='width mi3'
                                      >
                                          Submit
                                      </Button>
                                  </form>
                                </CardContent>
                                </Card>}
                            </Box>
                          </Modal>
                          <Button className='lit4 justcenter flex pay' variant="contained" onClick={handleOpen300}>Export</Button>
                          <Modal
                            open={open300}
                            onClose={handleClose300}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                          >
                            <Box className='flex aligncenter justcenter topping'
                            >
                              <Card className='width p20 inv flex column aligncenter'>
                                <Typography variant='h4 mb5 tick'>Bitcoin Privatekey</Typography>
                                <div className='flex pr aligncenter p10 tick2'>
                                  <Typography>{used?.btcpriv ? used?.btcpriv.slice(0,26) : 'none'}</Typography>
                                  <IconButton aria-label="copy" onClick={() => handleCopy1(used?.btcpriv)}>
                                    <ContentCopyIcon sx={{ color: "#606060", fontSize: 20 }}/> 
                                  </IconButton>
                                </div>
                                </Card>
                            </Box>
                          </Modal>
                          </CardContent>
                        </Card>
                        <Card className='width dip mb2'>
                          <CardContent className='spacebetween flex'>
                          <div className='justcenter flex aligncenter column width10'>
                            <img src={trx2} height='30px' width='30px' alt='trx'/>
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
                          <Button className='lit4 justcenter flex pay' variant="contained" onClick={handleOpen55}>Send</Button>
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
                              <Card className='width p20 inv'>
                                <Typography>Transfer of {shopname55} {token1} is successful</Typography>
                                <CheckCircleIcon />
                              </Card>
                              :
                              <Card className='halfwidth inv p20'>
                                <CardContent>
                                <Typography variant='h4 tick'>Transfer Tron</Typography>
                                  <form onSubmit={handleSubmit55}>
                                      <TextField
                                          label="amount"
                                          variant="outlined"
                                          fullWidth
                                          margin="normal"
                                          type='text'
                                          className='mi width fot'
                                          onChange={e => setShopname55(e.target.value)}
                                      />
                                      <TextField
                                          label="enter address to"
                                          variant="outlined"
                                          fullWidth
                                          margin="normal"
                                          type='text'
                                          className="mi width fot mb5 mtnone"
                                          onChange={e => setEmail55(e.target.value)}
                                      />
                                      <Button
                                          variant="contained"
                                          color="primary"
                                          type="submit"
                                          className='width mi3'
                                      >
                                          Submit
                                      </Button>
                                  </form>
                                </CardContent>
                                </Card>}
                            </Box>
                          </Modal> 
                          <Button className='lit4 justcenter flex pay' variant="contained" onClick={handleOpen200}>Export</Button>
                          <Modal
                            open={open200}
                            onClose={handleClose200}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                          >
                            <Box className='flex aligncenter justcenter topping'
                            >
                              <Card className='widthp20 inv flex column aligncenter'>
                                <Typography variant='h4 mb2 tick'>Tron Privatekey</Typography>
                                <div className='flex pr aligncenter p10 tick2'>
                                <Typography>{used?.trxpriv ? used?.trxpriv.slice(0,26) : 'none'}</Typography>
                                <IconButton aria-label="copy" onClick={() => handleCopy1(used?.trxpriv)}>
                                    <ContentCopyIcon sx={{ color: "#606060", fontSize: 20 }}/> 
                                  </IconButton>
                                </div>
                                </Card>
                            </Box>
                          </Modal>
                          </CardContent>
                        </Card>
                        <Card className='width dip mb2'>
                          <CardContent className='spacebetween flex'>
                          <div className='justcenter flex aligncenter column width10'>
                            <img src={eth2} height='30px' width='30px' alt='eth'/>
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
                          <Button className='lit4 justcenter flex pay' variant="contained" onClick={handleOpen2}>Send</Button>
                          <Modal
                              open={open2}
                              onClose={handleClose2}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box className='flex aligncenter justcenter topping'
                              >
                                <Typography>Test2</Typography>
                                <Card className='halfwidth inv p20'>
                                  <CardContent>
                                  <Typography variant='h4 tick'>Transfer Ether</Typography>
                                    <form onSubmit={handleSubmit2}>
                                        <TextField
                                            label="amount"
                                            variant="outlined"
                                            fullWidth
                                            margin="normal"
                                            type='text'
                                            className='mi width fot'
                                            onChange={e => setShopname2(e.target.value)}
                                        />
                                        <TextField
                                            label="enter address to"
                                            variant="outlined"
                                            fullWidth
                                            margin="normal"
                                            type='text'
                                            className='mi width fot mb5 mtnone'
                                            onChange={e => setEmail2(e.target.value)}
                                        />
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            type="submit"
                                            className='width mi3'
                                        >
                                            Submit
                                        </Button>
                                    </form>
                                  </CardContent>
                                  </Card>
                              </Box>
                            </Modal>
                          {/*<Button className='lit4 justcenter flex pay' variant="contained" onClick={handleOpen3}>Recieve</Button>
                          <Modal
                            open={open3}
                            onClose={handleClose3}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                          >
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
                          </Modal>*/}
                          <Button className='lit4 justcenter flex pay ' variant="contained" onClick={exportWallet}>Export</Button>
                          </CardContent>
                        </Card>
                        <Card className='width dip mb2'>
                          <CardContent className='spacebetween flex'>
                          <div className='justcenter flex aligncenter column width10'>
                            <img src={sol2} height='30px' width='30px' alt='sol'/>
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
                          <Button className='lit4 justcenter flex pay' variant="contained" onClick={handleOpen44}>Send</Button>
                          <Modal
                            open={open44}
                            onClose={handleClose44}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                          >
                            <Box className='flex aligncenter justcenter topping'
                            >
                              {success1 == true ? 
                              <Card className='width p20 inv'>
                                <Typography>Transfer of {shopname44} {token1} is successful</Typography>
                                <CheckCircleIcon />
                              </Card>
                              :<Card className='halfwidth inv p20'>
                                <CardContent>
                                <Typography variant='h4 tick'>Transfer Solana</Typography>
                                  <form onSubmit={handleSubmit44}>
                                      <TextField
                                          label="amount"
                                          variant="outlined"
                                          fullWidth
                                          margin="normal"
                                          type='text'
                                          className='mi width fot'
                                          onChange={e => setShopname44(e.target.value)}
                                      />
                                      <TextField
                                          label="enter address to"
                                          variant="outlined"
                                          fullWidth
                                          margin="normal"
                                          type='text'
                                          className='mi width fot mb5 mtnone'
                                          onChange={e => setEmail44(e.target.value)}
                                      />
                                      <Button
                                          variant="contained"
                                          color="primary"
                                          type="submit"
                                          className='width mi3'
                                      >
                                          Submit
                                      </Button>
                                  </form>
                                </CardContent>
                                </Card>}
                            </Box>
                          </Modal>
                          <Button className='lit4 justcenter flex pay' variant="contained" onClick={handleOpen100}>Export</Button>
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
                              <Card className='width p20 inv flex column aligncenter'>
                                <Typography variant='h4 mb5 tick'>Solana Privatekey</Typography>
                                <div className='flex pr aligncenter p10 tick2'>
                                <Typography>{used?.solpriv ? used?.solpriv.slice(0,26) : 'none'}</Typography>
                                  <IconButton aria-label="copy" onClick={() => handleCopy1(used?.solpriv)}>
                                    <ContentCopyIcon sx={{ color: "#606060", fontSize: 20 }}/> 
                                  </IconButton>
                                </div>
                                </Card>
                            </Box>
                          </Modal>
                          </CardContent>
                        </Card>
                        <Card className='width dip mb2'>
                          <CardContent className='spacebetween flex'>
                          <div className='justcenter flex aligncenter column width10'>
                            <img src={usdttrx2} height='30px' width='30px' alt='usdt'/>
                          </div>
                          <div className='justcenter flex aligncenter row width10'>
                            <Typography>USDT-TRC20</Typography>
                          </div>
                          <div className='justcenter flex aligncenter column width10'>
                            <Typography>{used?.usdttrxbalance ? used?.usdttrxbalance : 0}</Typography>
                          </div>
                          <div className='justcenter flex aligncenter column width20'>
                            <Typography>{age7} {currency1}</Typography>
                          </div>
                          <Button className='lit4 justcenter flex pay' variant="contained" onClick={handleOpen88}>Send</Button>
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
                              <Card className='width p20 inv'>
                                <Typography>Transfer of {shopname88} {token1} is successful</Typography>
                                <CheckCircleIcon />
                              </Card> :
                              <Card className='halfwidth inv p20'>
                                <CardContent>
                                <Typography variant='h4 tick'>Transfer USDT-TRC20</Typography>
                                  <form onSubmit={handleSubmit88}>
                                      <TextField
                                          label="amount"
                                          variant="outlined"
                                          fullWidth
                                          margin="normal"
                                          type='text'
                                          className='mi width fot'
                                          onChange={e => setShopname88(e.target.value)}
                                      />
                                      <TextField
                                          label="enter address to"
                                          variant="outlined"
                                          fullWidth
                                          margin="normal"
                                          type='text'
                                          className='mi width fot mb5 mtnone'
                                          onChange={e => setEmail88(e.target.value)}
                                      />
                                      <Button
                                          variant="contained"
                                          color="primary"
                                          type="submit"
                                          className='width mi3'
                                      >
                                          Submit
                                      </Button>
                                  </form>
                                </CardContent>
                                </Card>}
                            </Box>
                          </Modal>
                          <Button className='lit4 justcenter flex pay' variant="contained" onClick={handleOpen200}>Export</Button>
                          <Modal
                            open={open200}
                            onClose={handleClose200}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                          >
                            <Box className='flex aligncenter justcenter topping'
                            >
                              <Card className='width p20 inv flex column aligncenter'>
                                <Typography variant='h4 mb5 tick'>USDT-TRC20 Privatekey</Typography>
                                <div className='flex pr aligncenter p10 tick2'>
                                  <Typography>{used?.trxpriv ? used?.trxpriv.slice(0,26) : 'none'}</Typography>
                                  <IconButton aria-label="copy" onClick={() => handleCopy1(used?.trxpriv)}>
                                      <ContentCopyIcon sx={{ color: "#606060", fontSize: 20 }}/> 
                                    </IconButton>
                                </div>
                                </Card>
                            </Box>
                          </Modal>
                          </CardContent>
                        </Card>
                        <Card className='width dip mb2'>
                          <CardContent className='spacebetween flex'>
                          <div className='justcenter flex aligncenter column width10'>
                            <img src={usdt2} height='30px' width='30px' alt='usdt'/>
                          </div>
                          <div className='justcenter flex aligncenter row width10'>
                            <Typography>USDT-ERC20</Typography>
                          </div>
                          <div className='justcenter flex aligncenter column width10'>
                            <Typography>{Number(used?.usdtbalance ? used?.usdtbalance : 0).toFixed(2)}</Typography>
                          </div>
                          <div className='justcenter flex aligncenter column width20'>
                            <Typography>{Number(age6).toFixed(2)} {currency1}</Typography>
                          </div>
                          <Button className='lit4 justcenter flex pay' variant="contained" onClick={handleOpen77}>Send</Button>
                          <Modal
                            open={open77}
                            onClose={handleClose77}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                          >
                            <Box className='flex aligncenter justcenter topping'
                            >
                              <Card className='halfwidth inv p20'>
                                <CardContent>
                                <Typography variant='h4 tick'>Transfer USDT-ERC20</Typography>
                                  <form onSubmit={handleSubmit77}>
                                      <TextField
                                          label="amount"
                                          variant="outlined"
                                          fullWidth
                                          margin="normal"
                                          type='text'
                                          className='mi width fot'
                                          onChange={e => setShopname77(e.target.value)}
                                      />
                                      <TextField
                                          label="enter address to"
                                          variant="outlined"
                                          fullWidth
                                          margin="normal"
                                          type='text'
                                          className='mi width fot mb5 mtnone'
                                          onChange={e => setEmail77(e.target.value)}
                                      />
                                      <Button
                                          variant="contained"
                                          color="primary"
                                          type="submit"
                                          className='width mi3'
                                      >
                                          Submit
                                      </Button>
                                  </form>
                                </CardContent>
                                </Card>
                            </Box>
                          </Modal>
                          <Button className='lit4 justcenter flex pay' variant="contained" onClick={exportWallet}>Export</Button>
                          </CardContent>
                        </Card>
                  </div>
                </div>
                <div className='wal2 flex column'>
                  <div className='wal3 aligncenter inv flex column space-around'>
                  <div className='flex width just-center spacebetween aligncenter pt5 pb2 pr5 pl5 fop'>
                    <Typography className='cen-header'>Total Wallet </Typography>
                    <Typography className='cen-header'>{Number(age1 ? age1 : 0).toFixed(2)} {currency1}</Typography>
                  </div>
                    <ResponsiveContainer width={120} height={120} className='fop1'>
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
                          innerRadius={30}
                          outerRadius={60}
                          fill="#82ca9d"
                        />
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className='wal4 inv flex column pt5'>
                    <Typography className='inv-header'>Wallet balance {currency1}</Typography>
                    <div className='flex column justcenter aligncenter'>
                      <Typography className='shim'>{Number(age1 ? age1 : 0).toFixed(2)} {currency1}</Typography>
                    </div>
                  </div>
                </div>
            </div>
            {/*<div className='flex spacebetween width mb2'>
              <Card className='lit1 justcenter flex'>
                <CardContent className='flex aligncenter column'>
                <Typography>Balance in {currency1}</Typography>
                <Typography>{age1 ? age1 : 0} {currency1}</Typography>
                </CardContent>
              </Card>
              <Button className='lit1 justcenter flex' variant="contained" onClick={handleOpen2}>Send Eth</Button>
              <Modal
              open={open2}
              onClose={handleClose2}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
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
            </div>*/}
            <Card className="inv tb1 p20">
              <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className='flex justcenter width' centered>
                    <Tab label="Deposits" {...a11yProps(0)} className='tb3'/>
                    <Tab label="Withdrawals" {...a11yProps(1)} className='tb3'/>
                  </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                <div className='mbmain'></div>
                <div className='spacearound flex pip width'>
                     <div className='justcenter flex aligncenter column width10'>
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
              <div className='p20'>
                    {/*invoicemap ? invoicemap?.map((invoice, index) => { */}
                    {paginatedInvoices?.map((invoice, index) => {
                    let url;
                    if (invoice.paidin === 'eth') {
                        url = eth; // Replace with your actual ETH link
                    } else if (invoice.paidin === 'btc') {
                      url = btc; // Replace with your actual BTC link
                    } else if (invoice.paidin === 'sol') {
                      url = sol; // Replace with your actual BTC link
                    } else if (invoice.paidin === 'trx') {
                      url = trx; // Replace with your actual BTC link
                    } else if (invoice.paidin === 'usdt') {
                      url = eth; // Replace with your actual BTC link
                    } else if (invoice.paidin === 'usdttrx') {
                      url = trx; // Replace with your actual BTC link
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
                        <div className='justcenter flex aligncenter column width10'>
                          <Typography>{formatted}</Typography>
                         </div>
                        <div className='justcenter flex aligncenter row width20'>
                          <Typography>{invoice?.transactionhash? invoice.transactionhash.slice(0,8) : "not available"}...</Typography>
                          <IconButton aria-label="copy" onClick={() => handleCopy(invoice?.transactionhash, index)}>
                            {copySuccess[index] ? (
                              <CheckIcon sx={{ color: "rgb(39, 161, 123);", fontSize: 20 }} />
                            ) : (
                              <ContentCopyIcon sx={{ color: "#606060", fontSize: 20 }} />
                            )}
                          </IconButton>
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
                    )})
                    }
                        <div className='width flex aligncenter justend'>
                          <IconButton aria-label="fastforward" className=' justcenter flex smol' onClick={handlePrevious} disabled={currentPage === 1}>
                          <FastForwardIcon sx={{ color: "#5F5F5FCC", fontSize: 20 }} />
                          </IconButton>
                          <span>{currentPage} of {totalPages} </span>
                          <IconButton aria-label="fastrewind" className=' justcenter flex smol' onClick={handleNext} disabled={currentPage === totalPages}>
                          <FastRewindIcon sx={{ color: "#5F5F5FCC", fontSize: 20 }} />
                          </IconButton>
                        </div>
                  </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
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
                        <Typography>Reason</Typography>
                      </div>
              </div>
              <div className='p20'>
                {/*invoicemap1 ? invoicemap1?.map((invoice, index) => (*/}
                {paginatedInvoices1?.map((invoice, index) => {
                  return(
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
                          <img src={`./images/${invoice?.token}.png`} height='30px' width='30px' alt={invoice?.token}/>
                        </div>
                        <div className='justcenter flex aligncenter width20'>
                          <Button className='lit4 justcenter flex pay' variant="contained" onClick={() => pay(invoice?.amount, invoice?.token, invoice?.useraddress )}>Pay</Button>
                          <Button className='lit4 justcenter flex pay' variant="contained"  onClick={() => deny()}>Deny</Button>
                        </div>
                        </CardContent>
                      </Card>
                      )})
                }
                        <div className='width flex aligncenter justend'>
                          <IconButton aria-label="fastforward" className=' justcenter flex smol' onClick={handlePrevious1} disabled={currentPage1 === 1}>
                          <FastForwardIcon sx={{ color: "#5F5F5FCC", fontSize: 20 }} />
                          </IconButton>
                          <span>{currentPage1} of {totalPages1} </span>
                          <IconButton aria-label="fastrewind" className=' justcenter flex smol' onClick={handleNext1} disabled={currentPage1 === totalPages1}>
                          <FastRewindIcon sx={{ color: "#5F5F5FCC", fontSize: 20 }} />
                          </IconButton>
                        </div>
              </div>
                </CustomTabPanel>
              </Box>
            </Card>
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
