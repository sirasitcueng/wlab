import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js'
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from './contexts/AuthContext.js';
import './css/bg.css'
import './css/font.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
document.body.style.backgroundColor = "#f5f5f5";
root.render(
    <React.StrictMode>
        <AuthProvider>
          <App />
        </AuthProvider>
        
    </React.StrictMode>
);
