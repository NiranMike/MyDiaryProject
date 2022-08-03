import React from 'react'

function SignUp({closeSignUp}) {
  return (
    <form>
      <div className='bg-[#00000057] w-[100%] fixed top-0 bottom-0 backdrop-blur-lg  h-[100vh]'>
      <div className=' text-[#ffffff] p-[3px] backdrop-blur-lg bg-[#8eecbd21] w-[300px] md:w-[380px]
       z-10 fixed left-[10%] right-[10%] rounded-lg h-[70vh] top-[20%] mx-auto'>
           <div className="flex justify-around py-3  ">
              <p className=' text-center text-lg font-bold px-[80px] md:px-[130px]'>Sign<span className=' text-transparent'>.</span>Up</p>
              <button onClick={()=> closeSignUp(false)} className="border right-0 w-7 text-[#ffffff] border-[#ffffff] h-6">X</button>
            </div>
        <div>
          <input type="text" placeholder='First name'  className='p-[10px] border-b-[1px] bg-transparent  mx-[6%] w-[250px] md:w-[260px] md:mx-[15%] my-4' />
          <input type="text" placeholder='Last name'  className='p-[10px] border-b-[1px] bg-transparent mx-[6%] w-[250px] md:w-[260px] md:mx-[15%] my-1' />
          <input type="email" placeholder='E-mail' className='p-[10px] border-b-[1px] bg-transparent mx-[6%] w-[250px] md:w-[260px] md:mx-[15%] my-4' />
          <input type="password" placeholder='Password' className='p-[10px] border-b-[1px] bg-transparent mx-[6%] w-[250px] md:mx-[15%] md:w-[260px] my-4' />
          <button type="submit" className="mx-[25%] md:mx-[30%] w-[150px] rounded-lg my-3 h-[6vh] bg-transparent border border-[#00df70] hover:bg-[#00df70] hover:text-[#000] hover:font-bold ease-in-out duration-200">Sign Up</button>
        </div>
      </div>
    </div>
    </form>

  )
}

export default SignUp;
