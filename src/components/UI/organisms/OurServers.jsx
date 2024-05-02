import React from 'react'
import ServerItem from '../molecules/ServerItem'
import rusturned from '../../../assets/rusturned.jpg'

const OurServers = () => {

  const dummyObjArray = [
    {
      'name': 'Server 1',
      'mapType': 'Procedural',
      'capacity': '34/10',
      'img': rusturned,
    },
    {
      'name': 'Server 1',
      'mapType': 'Procedural',
      'capacity': '34/10',
      'img': rusturned,
    },
    {
      'name': 'Server 1',
      'mapType': 'Procedural',
      'capacity': '34/10',
      'img': rusturned,
    },
    {
      'name': 'Server 1',
      'mapType': 'Procedural',
      'capacity': '34/10',
      'img': rusturned,
    },

  ]

  return (
    <div className='relative h-screen flex flex-col items-center p-[200px] justify-around'>
      <div className='text-white text-5xl'>
        <p>Our Servers</p>
      </div>
      <div className='flex w-[80%] justify-around '>
        {dummyObjArray.map((server, index) => (
          <ServerItem
            name={server.name}
            mapType={server.mapType}
            capacity={server.capacity}
            img={server.img}
          />
        ))}
      </div>
    </div>
  )
}

export default OurServers