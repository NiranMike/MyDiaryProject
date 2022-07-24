import React from 'react'

function NewsLetter() {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
           <div className='lg:col-span-2 my-4'>
            <h1 className='md:text-5xl sm:text-4xl text-2xl font-bold py-2'>Want to get information on our new updates?</h1>
            <p>Sign up to our newsletter and stay up to date</p>
           </div>
        
           <div className="my-4">
            <div className="flex flex-col sm:flex-row items-center justify-between w-full">
               <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter E-mail' />
               <button className='  bg-[#00df70]  text-[#000] rounded-md font-medium w-[200px] mx-auto ml-4 my-6 px-6 py-3'>Notify Me</button>
            </div>
            <p>We care about the protection of your data. <span className='text-[#00df70] hover:underline cursor-pointer'>Read our Privacy Policy</span></p>
           </div>
        </div>
    </div>
  )
}

export default NewsLetter;