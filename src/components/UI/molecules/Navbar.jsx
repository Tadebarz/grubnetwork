import React from 'react'
import Navbutton from '../atoms/Navbutton'

const Navbar = () => {

    const navigationItems = [
        {
            'icon': 'home',
            'text': 'Home'
        },
        {
            'icon': 'users',
            'text': 'Stats'
        },
        {
            'icon': 'users',
            'text': 'Discord'
        },
        {
            'icon': '',
            'text': 'Shop',
            'isBig': true
        },
    ]

  return (
    <div className='flex bg-gradient-to-b  py-[20px] px-[200px] fixed w-full z-[11] justify-between uppercase text-[#e4dad1]'>
        <div className='h-full flex items-center'>
            <p className='text-5xl font-bold'>GN</p>
        </div>
        <div className='flex items-center w-[60%] justify-around'>
            {navigationItems.map((item, index) => (
                <Navbutton
                    key={index}
                    icon={item.icon}
                    text={item.text}
                    isBig={item.isBig}
                />
            ))}
        </div>
    </div>
  )
}

export default Navbar