import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import store from './redux/store';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HashRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import NavBar from './components/NavBar';

const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-2x57svitcxx0k6g3.us.auth0.com"
      clientId="fhx5yGIXdxt4DuxAlOOVGg8mRVJI3ZQs"
      redirectUri={window.location.origin}
      scope="openid profile email"
    >

    <Provider store={store}>
      <BrowserRouter>   
  <ToastContainer />
  <NavBar/>
    <App />
    </BrowserRouter>
    </Provider>
</Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
