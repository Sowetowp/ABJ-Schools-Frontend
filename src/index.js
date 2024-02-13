import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  swdev  from './swDev'
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import configureStore from './Redux/Store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

const store = configureStore()

const persistor = persistStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
swdev()