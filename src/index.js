import React from 'react';
import ReactDOM from 'react-dom';
// import Practice from './Home/practice';
import './index.css';
import reportWebVitals from './reportWebVitals';
import CreateAdvice from './Home/CreateAdvice';

ReactDOM.render(
  <React.StrictMode>
    <CreateAdvice/>
    {/* <Practice/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
