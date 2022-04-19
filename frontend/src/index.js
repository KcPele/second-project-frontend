import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//form eth-hooks
import { EthersAppContext } from 'eth-hooks/context';
import reportWebVitals from './reportWebVitals';
import ProviderOrSignerContext from './context/ProviderOrSignerContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
  <EthersAppContext>
    <ProviderOrSignerContext>
  
    <App />
 
    </ProviderOrSignerContext>
    </EthersAppContext>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
