import React from 'react';
import Catering_main from './Catering_main';
import BackToTopScroll from '../../BackToTopScroll'

const Catering=()=>{
   
  // const [navbarToggle,setnavbarToggle]=useState(false);
  
  // const NavbarchangeBg2 = () => {
  //   if (window.scrollY >= 20) {
  //     setnavbarToggle(true);
  //   }
  //   else {
  //     setnavbarToggle(false);
  //   }
  // };
  // window.addEventListener("scroll", NavbarchangeBg2);
  return(
      <>
        {/* <Planner_navbar/> */}
        <Catering_main/>
        <BackToTopScroll/>  
      </>
  );
    
}
export default Catering;