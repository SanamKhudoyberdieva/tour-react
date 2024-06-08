import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./assets/fonts/stylesheet.css";
import "./assets/css/core.css";
import "./assets/css/theme-default.css";
import "./assets/css/demo.css";
import "./assets/css/custom.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
