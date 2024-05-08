import React from 'react'
const Navbutton = ({icon, text ,isBig}) => {
  return (
    <div>
        <p className={` ${isBig ? 'font-extrabold text-4xl' : 'text-xl font-bold'}`}>{text}</p>
    </div>
  )
}

export default Navbutton