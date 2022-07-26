import React from 'react';
import Laptop from './img1.png'

function MidSection() {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
         <img src={Laptop} alt="" className='w-[500px] mx-auto my-4'/>
         <div className="flex flex-col justify-center">
          <p className=' text-[#00df70] font-bold'>Platform Mobility</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl py-2 font-bold'>Use it everywhere</h1>
          <p>Notes stay updated across all devices,automatically,
            and in real time
          </p>
          <button className=' bg-[#000] w-[200px] text-[#00df70] rounded-md font-medium mx-auto md:mx-0 py-3 mt-6'>Sign Up</button>

         </div>
      </div>
    </div>
  );
}

export default MidSection;