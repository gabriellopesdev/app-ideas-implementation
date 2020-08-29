import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css'

ReactDOM.render(
  <React.StrictMode>   
    <header>
        <h1>Border Radius Previewer!</h1>
        <h2>Change some of the 8 values and see the result!</h2>  
    </header>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

