import React from 'react'
import ButtonConnect from '../atoms/ButtonConnect'
import { Map, UsersRound } from 'lucide-react'

const ServerItem = ({name, mapType, capacity, img}) => {
  return (
    <div className='relative flex flex-col w-[288px] h-[348px] rounded-md'>
      <div className="absolute inset-0 bg-[#FFFFFF] opacity-10 backdrop-blur-md rounded-md"></div>
      <div className='z-10'>
        <div className='h-[40%] w-full'>
          {/* <img src={img} className='w-full h-full rounded-t-md' alt="Server image" /> */}
        </div>
        
        <div className='flex flex-col p-5'>
          <p className='text-xl'>{name}</p>
          <div className='flex'>
            <Map className='mr-[15px]'/>
            <p>{mapType} Map</p>
          </div>
          <div className='flex items-center'>
            <UsersRound className='mr-[15px]'/>
            <div className='w-full bg-[#242424] flex rounded-md h-[15px] items-center relative'>
              <div className={`w-[${capacity}%] h-full bg-[#676767] rounded-md relative`} style={{ width: `${capacity}%` }}></div>
              <p className='absolute z-2 text-[12px] w-full text-center'>{capacity}/100</p>
            </div>
          </div>
          <div className='mt-[30px] flex justify-center'>
            <ButtonConnect/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServerItem