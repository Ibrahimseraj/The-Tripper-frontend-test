import React from 'react'

const Modal = ({open, onclose}) => {

    if(!open) return null;

    
  return (
    <div className='free'>
        <div className='give'>
            <p>jkdfsfke</p>
            <span onClick={onclose}>X</span>
        </div>
    </div>
  )
}


export default Modal