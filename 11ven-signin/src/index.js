import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { UserProvider } from './contexts/user.context';
import { CartContextProvider } from './contexts/cart.context'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


