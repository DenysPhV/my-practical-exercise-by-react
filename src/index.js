// import React from 'react';
// import ReactDOM from 'react-dom'; // у него есть рендер

// const spanOne = React.createElement('span', { children: 'hello' });
// const spanTwo = React.createElement('span', { children: 'react' });

const spanOne = <span>hello</span>;
const spanTwo = <span>react</span>;
const element = (
  <div>
    {spanOne}
    {spanTwo}
  </div>
);

console.log(element);

// ReactDOM.render(element, document.querySelector('#root'));

// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
