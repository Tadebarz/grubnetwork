import React, { useRef, useEffect, useState } from 'react';
import ServerItem from '../molecules/ServerItem';
import rusturned from '../../../assets/rusturned.jpg';

const OurServers = () => {
  const [isVisible, setIsVisible] = useState(false);
  const serversRef = useRef(null);

  useEffect(() => {
    const options = {
      threshold: 1 // Intersection threshold
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    }, options);

    observer.observe(serversRef.current);

    // Cleanup function
    return () => observer.unobserve(serversRef.current);
  }, []);

  const dummyObjArray = [
    {
      'name': 'Server 1',
      'mapType': 'Procedural',
      'capacity': Math.floor(Math.random() * 101),
      'img': rusturned,
    },
    {
      'name': 'Server 2',
      'mapType': 'Procedural',
      'capacity': Math.floor(Math.random() * 101),
      'img': rusturned,
    },
    {
      'name': 'Server 3',
      'mapType': 'Procedural',
      'capacity': Math.floor(Math.random() * 101),
      'img': rusturned,
    },
    {
      'name': 'Server 4',
      'mapType': 'Procedural',
      'capacity': Math.floor(Math.random() * 101),
      'img': rusturned,
    }
  ];

  return (
    <div ref={serversRef} className={`relative h-screen flex flex-col items-center p-[200px] justify-around transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className='text-white text-5xl'>
        <p>Our Servers</p>
      </div>
      <div className='flex w-[80%] justify-around'>
        {dummyObjArray.map((server, index) => (
          <ServerItem
            key={index}
            name={server.name}
            mapType={server.mapType}
            capacity={server.capacity}
            img={server.img}
          />
        ))}
      </div>
    </div>
  );
};

export default OurServers;
