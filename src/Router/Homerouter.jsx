import React from 'react'
import Home from "../Layout/Home"
import {BrowserRouter as Router} from 'react-router-dom'
import { Routes , Route } from 'react-router-dom'


const Homerouter = () => {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default Homerouter