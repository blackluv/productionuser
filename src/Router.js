//import React from 'react';
import React, { useState, Suspense, lazy } from 'react';
import './App.css';
//import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import { Routes, Route } from "react-router-dom"
//import Dashboard from '../Dashboard/Dashboard';
//import Preferences from '../Preferences/Preferences';
import Demo from './Demo';
import InvoiceList from './InvoiceList'
import Settings from './Settings'
import InvoiceCreate from './InvoiceCreate'
import App from './App';
import Wallet from './wallet';
import Typography from '@mui/material/Typography';
import Disputes from './Disputes'
import Generate from './Generate'


function Router() {

  return (
    <div className="wrapper">
        <Routes>
            <Route exact path="/" element={ <Suspense fallback={<Typography>Loading</Typography>}><App/> </Suspense>} />
            {/*<Route exact path="/" element={ <App/> } />*/}
            <Route path="/invoicelist" element={ <Suspense fallback={<></>}><InvoiceList/></Suspense>  } />
            <Route path="/settings" element={ <Suspense fallback={<></>}><Settings /></Suspense>} />
            <Route path="/wallet" element={ <Suspense fallback={<></>}><Wallet /></Suspense>} />
            <Route path="/invoicecreate" element={ <Suspense fallback={<></>}><InvoiceCreate /></Suspense>} />
            <Route path='/invoice/:id' element={<Suspense fallback={<></>}><Demo /></Suspense>} />
            <Route path='/request' element={<Suspense fallback={<></>}><InvoiceList /></Suspense>} />
            <Route path='/disputes' element={<Suspense fallback={<></>}><Disputes /></Suspense>} />
            <Route path='/generate' element={<Suspense fallback={<></>}><Generate /></Suspense>} />
        </Routes>
    </div>
  );
}

export default Router;