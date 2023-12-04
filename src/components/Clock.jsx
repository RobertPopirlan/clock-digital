import React, { useState, useEffect } from 'react';
import mountains from '../assets/mountains.jpg'

const Clock = () => {

  const [time, setTime] = useState(new Date());
  const [is24HourFormat, setIs24HourFormat] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

          // Clear the interval when the component is unmounted
          return () => clearInterval(interval);
        }, []);
      
        const hours = is24HourFormat ? time.getHours() : time.getHours() % 12 || 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();




  const toggleHourFormat = () => {
    setIs24HourFormat((prevIs24HourFormat) => !prevIs24HourFormat);
  };

    
  return (
    <div className='h-screen flex items-center justify-center backdrop-blur  content-center' >
        <img src={mountains} alt='my profile' class=" rounder-2xl w-screen h-screen absolute blur-sm"></img>
<div className='inline rounded-full  z-50 '>
      <h1 className='text-white font-bold text-5xl flex items-center justify-center '>Simple Clock</h1>
      <p className='text-white font-bold text-9xl '>
      {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}{' '}
</p>  
       </div>

       <div className='absolute bottom-1/4'>
        <button className='text-white bg-gradient-to-b from-green-500 to-green-200 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300' onClick={toggleHourFormat}>Toggle 12-hour/24-hour Format</button> </div>  

    </div>
  )
}

export default Clock