//import React from 'react';
import React, { useState } from 'react';
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


function Router() {

  return (
    <div className="wrapper">
        <Routes>
            <Route exact path="/" element={ <App/> } />
            <Route path="/invoicelist" element={ <InvoiceList/> } />
            <Route path="/settings" element={ <Settings />} />
            <Route path="/invoicecreate" element={ <InvoiceCreate />} />
            <Route path='/invoice/:id' element={<Demo />} />
        </Routes>
    </div>
  );
}

export default Router;