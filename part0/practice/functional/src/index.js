import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

let orders = [
    {amount:250},
    {amount:400},
    {amount:100},
    {amount:325}
]

ReactDOM.createRoot(document.getElementById('root')).render(<App orders={orders}/>);
