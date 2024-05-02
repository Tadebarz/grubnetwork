import React from 'react'
import ButtonConnect from '../atoms/ButtonConnect'
import { Map, UsersRound } from 'lucide-react'

const ServerItem = ({name, mapType, capacity, img}) => {
  return (
    <div className='relative flex flex-col w-[288px] h-[348px] text-white rounded-md'>
      <div className="absolute inset-0 bg-[#242424] opacity-20 backdrop-blur-md rounded-md"></div>
      <div className='z-10'>
        <div className='h-[40%] w-full'>
          <img src={img} className='w-full h-full rounded-t-md' alt="Server image" />
        </div>
        
        <div className='flex flex-col p-5'>
          <p className='text-xl'>{name}</p>
          <div className='flex'>
            <Map/>
            <p>{mapType} Map</p>
          </div>
          <div className='flex'>
          <UsersRound />
            <p>{capacity}</p>
          </div>
          <ButtonConnect/>
        </div>
      </div>
    </div>
  )
}

export default ServerItem