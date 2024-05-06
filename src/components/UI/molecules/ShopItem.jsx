import React from 'react'
import ButtonConnect from '../atoms/ButtonConnect'
import { Map, UsersRound } from 'lucide-react'

const ShopItem = ({name, mapType, capacity, img}) => {
    return (
      <div className='relative flex flex-col w-[288px] h-[348px] rounded-md'>
        <div className="absolute inset-0 bg-[#242424] opacity-20 backdrop-blur-md rounded-md"></div>
        <div className='z-10'>
          <div className='h-[40%] w-full'>
            <img src={img} className='w-full h-full rounded-t-md' alt="Server image" />
          </div>
          
          <div className='flex flex-col p-5 justify-between relative h-[70%]'>
            <p className='text-2xl text-center'>LATAM PosiedonPVP #1 - Russia</p>
            
            
            <button className='text- white border-[1px] h-[50px] rounded-md'>
                View Kits
            </button>
          </div>
        </div>
      </div>
    )
  }

export default ShopItem