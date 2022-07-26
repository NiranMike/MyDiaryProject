import close from './multiply_26px.png'
import menu from './menu_50px.png'
import { useState } from 'react';
const Navbar = () =>{

    const [menue, setMenu] = useState(true);

    const menuToggle = () =>{
        setMenu(!menue);
    }

    return(

            <div className=" flex item-center h-24  
            justify-between text-white max-w-[1440px] mx-auto px-4">
                <h1 className=" pt-2 w-full text-3xl 
                font-bold text-[#00df70]">TakeNote<span className='text-[#d42c2c]'>.</span></h1>
                <ul className="  hidden md:flex">
                    <li className="p-5 mb-8 hover:underline hover:text-[#00df70] hover:cursor-pointer">LogIn</li>
                    <li className="p-5 mb-8 hover:underline hover:text-[#00df70] hover:cursor-pointer">AddNotes</li>
                    <li className="p-5 mb-8 hover:underline hover:text-[#00df70] hover:cursor-pointer">Home</li>
                    <li className="p-5 mb-8 hover:underline hover:text-[#00df70] hover:cursor-pointer">About</li>
                    <li className="p-5 mb-8 hover:underline hover:text-[#00df70] hover:cursor-pointer">Contacts</li>
                    
                </ul>
                <div onClick={menuToggle} className="block md:hidden">
                    {
                        menue ? <img src={menu} className="w-[30px] pt-2"  alt="Menu" /> : <img src={close} className="w-[30px] pt-2"  alt="Menu" />
                    }
                </div>
                <div className={!menue ? 'fixed left-0 top-0 w-[40%] md:w-[20%] h-full   bg-[#000] ease-in-out duration-700 ' : 'fixed left-[-100%]' }>
                    <h1 className="w-full text-3xl 
                font-bold m-4 text-[#00df70]">TakeNote<span className='text-[#cf2e2e]'>.</span></h1>
                    <ul className=" uppercase p-4">
                        <li className=" hover:text-[#000] hover:font-bold p-4  hover:bg-[#00df70] hover:ease-in-out duration-500 rounded-lg hover:cursor-pointer">Home</li>
                        <li className=" hover:text-[#000] hover:font-bold p-4 hover:bg-[#00df70] hover:ease-in-out duration-500 rounded-lg cursor-pointer">About</li>
                        <li className=" hover:text-[#000] p-4 hover:bg-[#00df70] hover:font-bold hover:ease-in-out duration-500 rounded-lg cursor-pointer">Log In</li>
                        <li className="p-4 hover:text-[#000] hover:bg-[#00df70] hover:font-bold hover:ease-in-out duration-500 rounded-lg cursor-pointer">Add Note</li>
                        <li className=" hover:text-[#000] hover:font-bold p-4  hover:bg-[#00df70] hover:ease-in-out duration-500 rounded-lg cursor-pointer">Contacts</li>
                    </ul>
                </div>
            </div>
    )
}

export default Navbar;