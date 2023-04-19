import React, { useState, useEffect } from 'react'
import Beautician_main from './Beautician_main';
import BackToTopScroll from '../../BackToTopScroll'
import Planner_navbar from '../Planner_navbar';

const Beautician = () => {
   
    return (
        <>
            <Planner_navbar/>
            <Beautician_main />         
            <BackToTopScroll />

        </>

    )
}
export default Beautician;