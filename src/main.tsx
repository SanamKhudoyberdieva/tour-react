import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./assets/fonts/stylesheet.css";
import "./assets/css/core.css";
import "./assets/css/theme-default.css";
import "./assets/css/demo.css";
import "./assets/css/custom.css";
import { Provider } from 'react-redux';
import { store } from './store/index.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
