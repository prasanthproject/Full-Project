import React from 'react';
import Planintro from './Planintro'
import Footer from '../Components/Footer';
import BackToTopScroll from '../BackToTopScroll'
const Planpackage =()=>{
    return(
        <div id="planner">
            <Planintro/>
            <Footer/>
            <BackToTopScroll/>  
        </div>
    )
}
export default Planpackage;
