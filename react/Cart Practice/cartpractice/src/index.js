import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Header from './Components/Header/Header'
// import Card from './Components/Card/card';
// import s21ultra from './Components/Card/CardsImages/s21ultra.png'
// import opporeno5 from './Components/Card/CardsImages/opporeno5.jpg'

import reportWebVitals from './reportWebVitals';
// import Home from './Components/Calculator/Home';
import ToDoList from './Components/ToDoList/ToDoList';
// import Calcu from './Components/Calculator/Calcu';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Header /> */}
    {/* <div className='container'>
      <div className='row'>
        <div className="col"><Card img={s21ultra} title="Samsung S21 Ultra" price="242,999" /></div>
        <div className='col'><Card img={opporeno5} title="Oppo reno 5" price=" $ 1200" /></div>
        <div className="col"><Card img={opporeno5} title="Oppo reno 5" price=" $ 800" /></div>
        <div className="col"><Card img={s21ultra} title="Galaxy A34" price=" $ 800" /></div>
      </div>
    </div>
 */}
 {/* <Home /> */}
 <ToDoList />
 {/* <Calcu /> */}
  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
