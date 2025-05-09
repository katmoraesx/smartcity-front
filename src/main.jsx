import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App.jsx';
import './index.css'; // Aqui estão os estilos com Tailwind

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
