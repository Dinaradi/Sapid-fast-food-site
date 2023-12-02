import React from 'react';
import "../header/header.css";
import {greenbg, yellowbg} from '../../assets'


function header() {
  return (
    <div className='header'>
      <div className='container'>
         <div className='header--content'>
             <div className='header--content--text'>
                 <div className="text">
                    <h1>10% скидки на все<br/>бургеры!</h1>
                    <p>Общая сумма заказа должна быть больше или равна 70 000 сум. Предложение не распространяется на доставку. Акция "Товар дня" продлится до 31.12.2022. следите за предложениями!</p>
                 </div>
                 <button className='header--btn'>В меню</button>
             </div>

             <div className="header--content--image">
                 <div className='yellowbg'>
                    <img src={yellowbg}/>
                 </div>
                 <div className='greenbg'>
                    <img src={greenbg}/>
                 </div>
                 
                 <div className='image--text'>
                    <h1>10%</h1>
                    <span>скидка</span>
                 </div>
             </div>
         </div>
      </div>
    </div>
  )
}

export default header
