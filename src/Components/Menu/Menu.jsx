import React from 'react'
import './Menu.css'
import Menuu from '../../Assets/men.webp'
import Menuu1 from '../../Assets/men1.webp'
import Menuu2 from '../../Assets/men3.webp'
import Menuu3 from '../../Assets/men4.webp'
import Menuu4 from '../../Assets/men5.webp'
import Menuu5 from '../../Assets/men6.webp'

const Menu = () => {
  return (
    <div className='men'> 
        <div className="men1">
       <p>Discover</p>
       <h2>OUR MENU</h2>
       </div>
       <div className="men2">
        <div className="men3">
         <div className="ki1">
         <img src={Menuu} alt="" />
         </div>
         <div className="ki2">
         <img src={Menuu1} alt="" />
         </div>
        </div >
         <div className="men4">
        <div className="ki3">
        <img src={Menuu2} alt="" />
        </div>
         <div className="ki4">
         <img src={Menuu3} alt="" />
         </div>
         </div>
       </div>
       <div className="men5">
        <div className="ki5">
        <img className='men7' src={Menuu4} alt="" />
        </div>
   <div className="ki6">
   <img  className='men6' src={Menuu5} alt="" />
   </div>
       </div>
       <button className='men8'>LUNCH</button>
       <button className='men9'>DINNER</button>
       <button className='men10'>DRINK</button>
       <button className='men11'>STARTERS</button>
       <button className='men12'>HAPPY HOUR</button>
       <button className='men13'>DESSERT</button>
    </div>
  )
}

export default Menu