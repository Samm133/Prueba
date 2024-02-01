import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Myroutes from './Routers/Routes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Myroutes/>
  </React.StrictMode>
);

