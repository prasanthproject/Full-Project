import React from 'react';
import Planner_navbar from '../Planner_navbar';
import Mehandi_main from './Mehandi_main'
import BackToTopScroll from '../../BackToTopScroll'

import './Mehandi.css';
const Mehandi =()=>{
    return(
        <>
        <Planner_navbar/>
        <Mehandi_main/>
        <BackToTopScroll/>  
        </>
    )
}
export default Mehandi;