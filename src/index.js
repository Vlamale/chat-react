import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBJ139Vt-dtmcx4442XAR9WCospyqNCt20",
  authDomain: "real-time-chat-react-bbbfb.firebaseapp.com",
  databaseURL: "https://real-time-chat-react-bbbfb-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "real-time-chat-react-bbbfb",
  storageBucket: "real-time-chat-react-bbbfb.appspot.com",
  messagingSenderId: "745841830249",
  appId: "1:745841830249:web:a1caaef3e90285b41835f8"
}

firebase.initializeApp(firebaseConfig)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
