import React from "react";
import "../main/main.css";
import {basket, fastfood, sale} from "../../assets"

function main() {
  return (
    <div className="main">
      <div className="container">
        <div className="main--category">
          <ul className="category--ul">
            <li className="grey">Все</li>
            <li>Лаваш</li>
            <li>Шаурма</li>
            <li>Бургеры</li>
            <li>Хот-дог</li>
            <li>Пицца</li>
            <li>Напитки</li>
          </ul>

          <button className="category--btn">
            <img src={basket} />
            <span>20 000</span>
          </button>
        </div>

        <div className="main--cards">
            <div className="card">
             
            <div className="sale"><img src={sale}/></div>
                 <div className="card--header">
                     <img src={fastfood}/>
                 </div>

                <div className="card--main">
                    <h3>Саб с говядиной</h3>
                    <p>Сочная говядина гриль, кольца свежего красного лука, соус "барбекю" с дымком в удлиненной пышной булочке</p>
                </div>

                <div className="card--footer">
                    <div>
                        <p>9 000 сум</p>
                        <span><del>10 000 сум</del></span>
                    </div>

                    <button>В карзинку</button>
                </div>
            </div>

            <div className="card">
            <div className="card--header">
                <img src={fastfood}/>
            </div>

           <div className="card--main">
               <h3>Саб с говядиной</h3>
               <p>Сочная говядина гриль, кольца свежего красного лука, соус "барбекю" с дымком в удлиненной пышной булочке</p>
           </div>

           <div className="card--footer">
               <div>
                   <p>9 000 сум</p>
                   
               </div>

               <button>В карзинку</button>
           </div>
       </div>

        </div>
      </div>
    </div>
  );
}

export default main;
