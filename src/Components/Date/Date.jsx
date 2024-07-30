import React from 'react'
import './Date.css'
import Tab from '../../Assets/tab.webp'

const Date = () => {
  return (
    <div>
        <div className="iit3">
   <div className="was1">
   <div className="dat">
       <p>Reservation</p>
       <h2>OUR MENU</h2>
       </div>
       <div className="dat1">
       <div className="dat3">
        <p>Date</p>
        <input className='dat2' type="date" name="" id="" />
       </div>
        <div className="dat3">
          <p>Name</p>
          <input className='dat2' type="text" placeholder='Name' />
        </div>
       </div>
       <div className="dat1">
       <div className="dat3">
        <p>Time</p>
        <input type="time" className='dat2' name="" id="" />
       </div>
        <div className="dat3">
          <p>Phone</p>
          <input className='dat2' type="text" placeholder='Phone' />
        </div>
       </div>
       <div className="dat1">
       <div className="dat3">
        <p>People</p>
        <input type="number" className='dat2' name="" id="" />
       </div>
        <div className="dat3">
          <p>Email</p>
          <input className='dat2' type="text" placeholder='Email' />
        </div>
       </div>

       <div className="dat4">
        <button>BOOK TABLE</button>
       </div>
   </div>

      <div className="iit2">
        <img src={Tab} alt="" />
      </div>
    </div>
    </div>
  )
}

export default Date