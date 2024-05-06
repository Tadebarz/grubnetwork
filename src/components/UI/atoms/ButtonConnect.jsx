import React from 'react'
import steam from '../../../assets/steam-seeklogo.svg'

const ButtonConnect = () => {
  return (
    <>
    <button className=' bg-white flex items-center white border-[1px] h-[50px] rounded-md w-[70%]'>
        <img src={steam} className='object-fill h-full '/>
        <p className='w-full text-black'>Connect</p>
    </button>
    </>
  )
}

export default ButtonConnect