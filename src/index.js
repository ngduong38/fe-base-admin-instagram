import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
    RouterProvider,
 } from 'react-router-dom';
import router from './routers/router.js';
import "./assets/scss/index.scss"


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
);



