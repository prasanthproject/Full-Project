import React from 'react';
import {useEffect,useState} from 'react';
import './Components/Homepage.css'
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';

const BackToTopScroll=()=>{
    const [backToTopButton,setToTopButton]=useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 200){
                setToTopButton(true)
            }else{
                setToTopButton(false)
            }
        })
    },[])
    const scrollUp=()=>{
        window.scrollTo({
            top:0,
            bahaviour:"smooth"
        })
    }
    return(
        <>
            {backToTopButton && (<button id="backToTopButton" onClick={scrollUp} ><KeyboardArrowUpRoundedIcon id="top_arrow"/></button>)}
        </>
    )
}
export default  BackToTopScroll;