import React from 'react';
import ReactDOM  from 'react-dom/client';
import "./index.css";
import App from './App';
// import CSSInReactInline from './components/CssInReact/CSSInReactInline';
// import Image from './components/ImageComponents/Image';
// import Message from './components/Message';
// const root = ReactDOM.createRoot(document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <React.StrictMode>
    <App/>
   </React.StrictMode>
  </div>
);

// root.render(
//     <div>
//         <App/>
//     </div>
// );


// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//     <div>
//         <CSSInReactInline/>
//     </div>
// 


