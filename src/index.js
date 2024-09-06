import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Demo from './Demo';
import InvoiceList from './InvoiceList'
import Settings from './Settings'
import InvoiceCreate from './InvoiceCreate'
import Router from './Router'
import { BrowserRouter } from 'react-router-dom';
import {PrivyProvider} from '@privy-io/react-auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PrivyProvider
      appId="cm055dwwb04dyxvv8ptttlosv"
      onSuccess={(user) => console.log(`User ${user.wallet} logged in!`)}
      config={{
        // Display email and wallet as login methods
        loginMethods: ['email'],
        // Customize Privy's appearance in your app
        appearance: {
          theme: 'dark',
          accentColor: '#676FFF',
          logo: 'https://your-logo-url',
        },
        // Create embedded wallets for users who don't have a wallet
        embeddedWallets: {
          createOnLogin: 'users-without-wallets',
        },
      }}
    >
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    </PrivyProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
