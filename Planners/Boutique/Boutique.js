import React, { useState } from 'react'
import Boutique_main from './Boutique_main';
import BackToTopScroll from '../../BackToTopScroll'
// import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Planner_navbar from '../Planner_navbar'
import {CartPage_NavBar} from './Boutique_ProductPage';
import Boutique_CartList from './Boutique_CartList';
 

const Boutique = () => {
  
  const [navbarToggle,setnavbarToggle]=useState(false);
  
  const NavbarchangeBg2 = () => {
    if (window.scrollY >= 20) {
      setnavbarToggle(true);
    }
    else {
      setnavbarToggle(false);
    }
  };
  window.addEventListener("scroll", NavbarchangeBg2);
  
const [cart,setCart]=useState([])
// console.log(cart)
const addtoCart=(data)=>{
  setCart([...cart,{...data,quantity:1}])
}   
  const  [showcart,setShowCart]=useState(false)
  const handleShow=(value)=>{
      setShowCart(value)
  }
  
 return (

  <>
    <div>
            {navbarToggle ? <CartPage_NavBar count={cart.length} handleShow={handleShow}/> : <Planner_navbar/> }
    </div>
    {
      showcart ? <Boutique_CartList cart={cart} handleShow={handleShow}/>:
      <Boutique_main addtoCart={addtoCart} />
    }
      <BackToTopScroll />
  </>
  )

}
export default Boutique;
