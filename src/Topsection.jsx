import Typed from 'react-typed'
const Topsection = ({ openSignUp }) =>{
       return(
          <div className="text-white mb-6 md:mb-12 ">
            <div className="max-w-[800px] mt-[-96px]
              h-screen mx-auto text-center flex flex-col justify-center">
                <h1 className='text-[#fff] md:text-7xl sm:text-6xl my-28 md:py-4 font-bold text-4xl '>THE SIMPLEST WAY OF KEEPING NOTE</h1>
                <div className=' md:pt-[-30px]'>
                    
                    <div >
                        <p className=" text-[#00df70] md:text-4xl sm:text-4xl md:pl-2 mb-12 py-4 text-xl font-thin  "></p>
                    </div>
                    <p className=' text-[#00df70] mb-6 md:text-2xl text-sm font-thin '>All your notes synced on your devices.Use simple notes now on your browser</p>
                  <button onClick={()=>openSignUp(true)} className=' bg-[#00df70] hover:text-[#000] md:bg-transparent border-[#00df70] hover:ease-in-out duration-500 hover:bg-[#00df70] border w-[200px] rounded-md hover:font-bold font-medium mx-auto py-3'>Get Started</button>
                </div>
              </div>
          </div>
       )
}
export default Topsection;