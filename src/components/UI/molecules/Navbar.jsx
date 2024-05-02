import React from 'react'
import Navbutton from '../atoms/Navbutton'

const Navbar = () => {

    const navigationItems = [
        {
            'icon': 'home',
            'text': 'Home'
        },
        {
            'icon': 'credit-card',
            'text': 'Shop'
        },
        {
            'icon': '',
            'text': 'Grub Network',
            'isBig': true
        },
        {
            'icon': 'users',
            'text': 'Stats'
        },
        {
            'icon': 'users',
            'text': 'Discord'
        }
    ]

  return (
    <div className='flex bg-gradient-to-b py-[20px] px-[30px] ] fixed w-full z-[11] justify-center'>
        {/* <p className='text-white font-extrabold text-3xl'>Grub Network</p> */}
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