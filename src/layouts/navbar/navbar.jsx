import React from 'react'
import { logo, basket, iconRussia,  } from "../../assets";
import "../navbar/navbar.css"

function navbar() {
  return (
    <div className='navbar'>
    <div className='container'>
      <div className='navbar--content'>
        <div className='navbar--logo'>
          <img src={logo}/>
        </div>

        <ul className='navbar--main--ul'>
            <li>Главная</li>
            <li>Меню</li>
            <li>Контакты</li>
        </ul>

        <div className='navbar--btns--ul'>
             <button className='icon--basket'>
                <img src={basket}/>
                 Карзина
             </button>

             <button className='icon--btn'>
                <img src={iconRussia}/>
             </button>
        </div>
      </div>

    </div>
    </div>
  )
}

export default navbar
