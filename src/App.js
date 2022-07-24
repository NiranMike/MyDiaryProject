/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import MidSection from './MidSection';
import Navbar from './Navbar';
import Topsection from './Topsection';
import NewsLetter from './NewsLetter';

const App = () =>{

    return(
        <>
           <Navbar />
           <Topsection />
           <MidSection />
           <NewsLetter />
        </>
        
    )
}

export default App;