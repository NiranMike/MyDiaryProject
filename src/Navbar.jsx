import close from './multiply_26px.png'
import menu from './menu_50px.png'
import { useState } from 'react';
const Navbar = ({openToggle}) =>{

    const [menue, setMenu] = useState(true);

    const menuToggle = () =>{
        setMenu(!menue);
    }


    return(

            <div className=" flex  item-center  
               justify-between text-white max-w-[1440px] mx-auto px-4">
                <h1 className=" pt-2 w-full text-3xl 
                font-bold text-[#00df70]">TakeNote<span className='text-[#d42c2c]'>.</span></h1>
                <div className="  hidden md:flex">
                    <button  className="p-5 mb-8 hover:underline mx-[180px]  hover:text-[#00df70] hover:cursor-pointer" onClick={()=>openToggle(true)}>Login</button> 
                    <button  className="p-5 mb-8 hover:underline hover:text-[#00df70] hover:cursor-pointer">Add<span className=' text-transparent'>.</span>Notes</button> 
                    
                </div>
                <div onClick={menuToggle} className="block md:hidden">
                    {
                        menue ? <img src={menu} className="w-[30px] pt-2"  alt="Menu" /> : <img src={close} className="w-[30px] pt-2"  alt="Menu" />
                    }
                </div>
                <div className={!menue ? 'md:hidden fixed left-0 top-0 w-[42%] h-full   bg-[#000] ease-in-out duration-700 ' : 'fixed left-[-100%] ease-in-out duration-700' }>
                    <h1 className="w-full text-3xl 
                font-bold m-4 text-[#00df70]">TakeNote<span className='text-[#cf2e2e]'>.</span></h1>
                    <ul className=" md:hidden uppercase p-4">
                        <li className=" hover:text-[#000] hover:font-bold p-4  hover:bg-[#00df70] hover:ease-in-out duration-500 rounded-lg hover:cursor-pointer">Home</li>
                        <li className=" hover:text-[#000] hover:font-bold p-4 hover:bg-[#00df70] hover:ease-in-out duration-500 rounded-lg cursor-pointer">About</li>
                        <li onClick={()=> openToggle(true)} className=" hover:text-[#000] p-4 hover:bg-[#00df70] hover:font-bold hover:ease-in-out duration-500 rounded-lg cursor-pointer">Log In</li>
                        <li className="p-4 hover:text-[#000] hover:bg-[#00df70] hover:font-bold hover:ease-in-out duration-500 rounded-lg cursor-pointer">Add Note</li>
                        <li className=" hover:text-[#000] hover:font-bold p-4  hover:bg-[#00df70] hover:ease-in-out duration-500 rounded-lg cursor-pointer">Contacts</li>
                    </ul>
                </div>
            </div>
    )
}

export default Navbar;
