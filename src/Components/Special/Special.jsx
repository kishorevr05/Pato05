import React from 'react'
import './Special.css'
import { IoMail } from "react-icons/io5";

const Special = () => {
  return (
    <div className='spe'>
        <h3>SPECIALS SIGN UP</h3>
        <input className='spe2' type="email" name="" id="" placeholder='Email Address' />
        <button>SING-UP</button>
        <IoMail className='spe3' />
    </div>
  )
}

export default Special