import React from "react";

function Login(props) {
  const {closeToggle} = props
  return (
      <form >
        <div className=' bg-[#00000057] w-[100%] fixed top-0 bottom-0 backdrop-blur-lg  h-[100vh]'>
          </div>
          <div className='w-[300px] md:w-[380px] text-[#ffffff] p-[3px] backdrop-blur-lg bg-[#8eecbd21] z-10 fixed left-[10%] right-[10%] rounded-lg h-[60vh] top-[20%] mx-auto'>
            <div className="flex justify-around py-3  ">
              <p className=' text-center text-lg md:px-[130px] px-[80px] font-bold'>Login</p>
              <button onClick={()=> closeToggle(false)} className="border right-0 w-7 h-6">X</button>
            </div>
            
            
            <div>
              {/* <input type="text" placeholder='First name'  className='p-[10px] border-b-[1px] bg-transparent  mx-[15%] w-[260px] my-4' />
              <input type="text" placeholder='Last name'  className='p-[10px] border-b-[1px] bg-transparent mx-[15%] w-[260px] my-1' /> */}
              <input type="email" placeholder='E-mail' className='p-[10px] border-b-[1px] bg-transparent mx-[6%] w-[250px] md:w-[260px] md:mx-[15%] my-4' />
              <input type="password" placeholder='Password' className='p-[10px] border-b-[1px] bg-transparent mx-[6%] w-[250px] md:w-[260px] md:mx-[15%] my-10' />
              <button type="submit" className="mx-[25%] md:mx-[30%] w-[150px] rounded-lg h-[6vh] bg-transparent border hover:bg-[#00df70] ease-in-out duration-300 my-4 hover:text-[#000] hover:font-bold border-[#00df70]">Confirm</button>
            </div>
        
          </div>
      </form>
      
  )
}

export default Login;
