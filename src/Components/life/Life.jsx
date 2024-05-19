import React, { useState, useEffect } from 'react';
//import React from 'react';


import './life.css'
import { Link } from "react-router-dom";

import { BiGlobe } from  'react-icons/bi'
import { BsPerson } from 'react-icons/bs'

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';





const Life = () => {
  const [color, setColor] = useState(false);
  
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true)
      } else {
        setColor(false)
      }
    }

    window.addEventListener('scroll', changeColor)


  return (
    <div className={color ? 'header header-bg' : 'header'}>
    <div className='power'>
      <div className='container'>
    <a href="/"><h1>the tripper</h1></a>
    </div>
    <div className='navbar'>
    <div className='navList'>
        <div className='navListul'>
        <ul className='navItem'>
      <li><Link to="/">hotels</Link></li>
      <li><Link to="/">flights</Link></li>
      <li><Link to="/activites">activites</Link></li>
      <li><Link to="/taxi">taxi</Link></li>
  </ul>
    </div>
    <div className='high'>
    <button className='money'><BiGlobe /></button>
    <button>
    <BsPerson />
      </button>
    </div>
    <div className='tate'>
    <h1>plan your trip with <br />the tripper</h1>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Life