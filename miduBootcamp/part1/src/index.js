import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); //Esta línea indica donde ha de renderizar del HTML y lo guarda en la variable root 
root.render( //Aqui se utiliza la variable root y le pasamos el metodo render y dentro de los parametros le pasamos la funcion App que hemos declarado en el archivo App.js
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
