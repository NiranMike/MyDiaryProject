/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import Navbar from './Navbar.jsx';
import Topsection from './Topsection.jsx';
import MidSection from './MidSection';
import NewsLetter from './NewsLetter';
import SignUp from './SignUp.jsx';
import Login from './Login';

const App = () =>{
    const [toggle, setToggle] = useState(false);
    const [clickSignUp, setClickSignUp] = useState(false);
    

    return(
        <>
           {clickSignUp && <SignUp closeSignUp={setClickSignUp} className="z-[2]"/>}
           <Navbar openToggle={setToggle} className="z-0" />
           {toggle && <Login closeToggle={setToggle} className="z-[2]"/>}  
           <Topsection openSignUp={setClickSignUp} className="z-0" />
           <MidSection openSignUp={setClickSignUp} className="z-0" />
           <NewsLetter className="z-0" />
        </>
        
    )
}

export default App;