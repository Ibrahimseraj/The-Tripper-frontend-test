import React from 'react';
import { Link } from 'react-router-dom';
import { BiGlobe } from  'react-icons/bi'
import { BsPerson } from 'react-icons/bs'
import './HeaderNav.css';

function HearNav() {
  return (
    <div className='hhhh'>
        <div className='power'>
      <div className='container'>
    <a href="/"><h1>the tripper</h1></a>
    </div>
    <div className='navbar'>
    <div className='navList'>
        <div className='navListul'>
        <ul className='navItems'>
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
    </div>
    </div>
    </div>
    </div>
  )
}

export default HearNav;