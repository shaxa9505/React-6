import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// const Book = (props) => {
//   return (
//     <div>
//       <h1>{props.name ? props.name : "Book default"} </h1>
//       <p>{props.year}</p>
//       <p>{props.price}</p>
//       <span>{props.children}</span>
//     </div>
//   )
// }

// const App = () => {
//   return (
//     <div>
//       <Book name="" year="2020" price="100$"> 
//         bu kitob sotildi
//       </Book>
//       <Book name="Vue for beginners" year="2021" price="200$"/>
//       <Book name="React for beginners" year="2022" price="300$"/>
//     </div>
//   )
// }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


