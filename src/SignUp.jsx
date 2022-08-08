import React from 'react'

function SignUp({closeSignUp}) {
  return (
    <form>
      <div className='bg-[#00000057] w-[100%] fixed top-0 bottom-0 backdrop-blur-lg  h-[100vh]'>
      <div className='w-[80%] min-w-[200px] md:w-[380px] text-[#ffffff] p-[3px] backdrop-blur-lg bg-[#8eecbd21] z-10 fixed left-[10%] right-[10%] rounded-lg h-[70vh] top-[20%] mx-auto'>
            <div className="flex justify-around py-3  ">
              <p className=' text-center text-lg md:px-[130px] px-[80px] font-bold'>Sign<span className=' text-[#0000]'>.</span>Up</p>
              <button onClick={()=> closeSignUp(false)} className="border right-0 w-7 h-6">X</button>
            </div>
            <div className="">
              {/* <input type="text" placeholder='First name'  className='p-[10px] border-b-[1px] bg-transparent  mx-[15%] w-[260px] my-4' />
              <input type="text" placeholder='Last name'  className='p-[10px] border-b-[1px] bg-transparent mx-[15%] w-[260px] my-1' /> */}
              <input type="text" placeholder='First Name' className='p-[3px] border-b-[1px] bg-transparent mx-[6%] w-[85%] md:w-[260px] md:mx-[15%] my-1' />
              <input type="text" placeholder='Last Name' className='p-[6px] border-b-[1px] bg-transparent mx-[6%] w-[85%] md:w-[260px] md:mx-[15%] my-3' />
              <input type="email" placeholder='Email' className='p-[6px] border-b-[1px] bg-transparent mx-[6%] w-[85%] md:w-[260px] md:mx-[15%] my-3' />
              <input type="password" placeholder='Password' className='p-[6px] border-b-[1px] bg-transparent mx-[6%] w-[85%] md:w-[260px] md:mx-[15%] my-3' />
              <button type="submit" className="mx-[17%] xsm:mx-[25%] sm:mx-[35%] md:mx-[30%] w-[150px] rounded-lg h-[6vh] bg-transparent border hover:bg-[#00df70] ease-in-out duration-300 my-4 hover:text-[#000] hover:font-bold border-[#00df70]">Done</button>
            </div>
        
          </div>
    </div>
    </form>

  )
}

export default SignUp;