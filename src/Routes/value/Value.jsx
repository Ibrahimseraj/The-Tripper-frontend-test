import React, { useState, useEffect } from 'react';


import { BiGlobe } from  'react-icons/bi'
import { BsPerson } from 'react-icons/bs'


import { Link } from "react-router-dom";


const Value = () => {

      // change header color when scrolling
  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true)
      } else {
        setColor(false)
      }
    }

    window.addEventListener('scroll', changeColor)



  return (
    <div className={color ? 'toxic toxic-bg' : 'toxic'}>
    <div className='powe'>
      <div className='contaier'>
    <a href="/"><h1>the tripper</h1></a>
    </div>
    <div className='nav'>
    <div className='navst'>
        <div className='navul'>
        <ul className='navIt'>
      <li><Link to="/">hotels</Link></li>
      <li><Link to="/">flights</Link></li>
      <li><Link to="/activites">activites</Link></li>
      <li><Link to="/taxi">taxi</Link></li>
  </ul>
    </div>
    <div className='around'>
    <button className='lucky'><BiGlobe /></button>
    <button>
        <BsPerson />
      </button>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Value