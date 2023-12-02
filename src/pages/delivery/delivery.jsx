import React from 'react'
import '../delivery/delivery.css'
import { deliverygreen, bike, vector, telephone, at, compass } from '../../assets'

function delivery() {
  return (
    <div className='delivery'>   
      <div className='container'>
          <div className='deliverygreen'>
           <img src={deliverygreen} />
          </div>  
        <div className='delivery--content'>   
            <div className='content--text'>
                <h1>Доставка по всему Ташкенту!</h1>
                <div className='delivery--address'>
                    <div className='address--one'>
                      <p>Г. Ташкент, Мирзо-Улугбекский р-н</p>
                      <img src={vector} />
                    </div>
                    <div className='address--two'>
                        <div className='address'>   
                          <p>Г. Ташкент, Мирзо-Улугбекский р-н</p>
                          <img src={vector} />
                        </div>
                        <div className='address--more'>
                            <div className='number'>
                                 <img src={telephone}/>
                                 <p>+998 (78) 777-20-20</p>
                            </div>
                            <div className='gmail'>
                                <img src={at}/>
                                <p>support@macbro.uz</p>
                            </div>
                            <div className='compass'>
                                <img src={compass}/>
                                <p>Г. Ташкент, Шайхонтахурский р-н, ул. Алишера Навои 27</p>
                            </div>
                        </div>
                    </div>
                    <div className='address--one'>
                        <p>Г. Ташкент, Мирзо-Улугбекский р-н</p>
                        <img src={vector} />
                  </div>
                </div>  
            </div>

            <div className='bike--img'>
               <img src={bike} />
           </div>
        </div>
      </div>
    </div>
  )
}

export default delivery
