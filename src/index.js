import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {AppContext} from "./component/context/context";

import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbrTcl6NpG0KlLt-mqP_F4JdAwv3ZJwwo",
  authDomain: "expenses-d5c90.firebaseapp.com",
  projectId: "expenses-d5c90",
  storageBucket: "expenses-d5c90.appspot.com",
  messagingSenderId: "31939314538",
  appId: "1:31939314538:web:7cf4112e34c004b0f59b13"
};

// Initialize Firebase
 initializeApp(firebaseConfig);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <AppContext>
       <App/>
    </AppContext> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
