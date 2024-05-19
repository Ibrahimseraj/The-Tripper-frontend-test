//import React from 'react'
import React, { useState } from 'react';

import './navbar.css'
import { BsPerson } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { format } from 'date-fns'
import { FaCalendarAlt } from 'react-icons/fa'
import { addDays } from "date-fns";



const Navbar = () => {

  const [destination, setDestination] = useState('');
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ])
    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
      adult: 1,
      children: 0,
      room: 1
      
    })

    const [state, setState] = useState([
      {
        startDate: new Date(),
        endDate: addDays(new Date(), 7),
        key: 'selection'
      }
    ]);
    

  const handleSearch = (event) => {
    event.preventDefault();
    const destinationValue = event.target.search.value;
    setDestination(destinationValue);
    event.target.action = `/hotels/${destinationValue}`; // update action to include destination
    event.target.submit();
  }

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === 'i' ? options[name] + 1 : options[name] - 1
      }
    })
  }




  return (
    <div className='headerSearch'>
    <div className='headerSearchItem'>
      <AiOutlineSearch className='headerIcon' />
     {/*<input
        type='text'
        placeholder='going to'
        className='headerSearchInput'
      />*/}
      <form onSubmit={handleSearch}>
        <input type="text" name="search" className='headerSearchInput' />
        <button type='submit'>search</button>
      </form>
    </div>
    <div className='headerSearchItem'>
    <FaCalendarAlt
    minDate={new Date()}
    maxDate={new Date('26/5/2023')}
    className='headerIcon'
  />
      <span
    onClick={() => setOpenDate(!openDate)}
    className='headerSearchText'
  >{`${format(
    date[0].startDate,
    'dd/MM/yyyy'
  )} to ${format(date[0].endDate, 'dd/MM/yyyy')}`}</span>
  {openDate && (
    <DateRange
      editableDateInputs={true}
      onChange={(item) => setDate([item.selection])}
      moveRangeOnFirstSelection={false}
      ranges={date}
      className='date'
      minDate={new Date()}
      maxDate={new Date('12/31/2023')}
    />
  )}
    </div>
    <div className='headerSearchItem'>
      <BsPerson className='headerIcon' />
      <span
        onClick={() => setOpenOptions(!openOptions)}
        className='headerSearchText'
      >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
      {openOptions && (
        <div className='options'>
          <div className='optionsItem'>
            <span className='optionText'>adult</span>
            <div className='optionCounter'>
              <button
                disabled={options.adult <= 1}
                className='optionCounterButton'
                onClick={() => handleOption('adult', 'd')}
              >
                -
              </button>
              <span className='optionCounterButton'>{options.adult}</span>
              <button
                className='optionCounterButton'
                onClick={() => handleOption('adult', 'i')}
              >
                +
              </button>
            </div>
          </div>
          <div className='optionsItem'>
            <span className='optionText'>children</span>
            <div className='optionCounter'>
              <button
                disabled={options.children <= 0}
                className='optionCounterButton'
                onClick={() => handleOption('children', 'd')}
              >
                -
              </button>
              <span className='optionCounterButton'>
                {options.children}
              </span>
              <button
                className='optionCounterButton'
                onClick={() => handleOption('children', 'i')}
              >
                +
              </button>
            </div>
          </div>
          <div className='optionsItem'>
            <span className='optionText'>room</span>
            <div className='optionCounter'>
              <button
                disabled={options.room <= 1}
                className='optionCounterButton'
                onClick={() => handleOption('room', 'd')}
              >
                -
              </button>
              <span className='optionCounterButton'>{options.room}</span>
              <button
                className='optionCounterButton'
               onClick={() => handleOption('room', 'i')}
              >
                +
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    <div className='headerSearchItem'>
    <button className='headerBtn' type='submit'>Search</button>
    </div>
    </div>
      )
    }
    
    export default Navbar