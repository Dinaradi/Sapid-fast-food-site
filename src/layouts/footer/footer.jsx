import React from 'react'
import "../footer/footer.css"
import {logo, iconRussia, vectorup} from "../../assets"

function footer() {
  return (
    <div className='footer'>
       <div className='container'>
          <div className='footer--container'>
              <div className='footer--logo'>
                 <img src={logo} alt="error"/>
              </div>

              <ul className='footer--ul'>
                <li>Главная</li>
                <li>Меню</li>
                <li>Контакты</li>
              </ul>

              <button className='footer--btn'>
                  <img src={iconRussia}  alt="error"/>
              </button>
          </div>

          <div className='footer--bottom'>
               <ul className='footer--bottom--ul'>
                 <li>Copyright © 2022 sapid</li>
                 <li><button className='footer--bottom--btn'><img src={vectorup}/></button></li>
                 <li>Сайт создан <span className='team'>Teamwork</span></li>
               </ul>
          </div>
       </div>
    </div>
  )
}

export default footer
