import Navbar from './Navbar';
import TopSection from './TopSection';
import MiddleSection from './MiddleSection';

const App = () =>{
   
    return(
        <>
        <div >
           <Navbar />
           <div className="sections--page">
             <TopSection />
             <MiddleSection />
           </div>
        </div>
        </>
    );
}

export default App