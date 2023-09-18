import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
    RouterProvider,
 } from 'react-router-dom';
import router from './routers/router.js';
import "./assets/scss/index.scss"
import { Provider } from "react-redux";
import {CookiesProvider} from "react-cookie";
import store from "./app/store.js"

ReactDOM.createRoot(document.getElementById('root')).render(
  <CookiesProvider>
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
  </CookiesProvider>
);



