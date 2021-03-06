import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MiscBox from './MiscBox';
import Footer from './Footer';
import MiscBoxContainer from './MiscBoxContainer';
import Header from './Header';
import $ from 'jquery';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="parent-style">
      <Header/>
      <App />
      <MiscBoxContainer />
      <Footer/>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
