import React, { useState }  from 'react';
import Planner_navbar from '../Planner_navbar';
import Invitation_main from  './Invitation_main';
import BackToTopScroll from '../../BackToTopScroll'
import {Invite_ProductPage_NavBar} from './Invite_ProductPage'
import Invitation_CartList from './Invitation_CartList';
import Invite_ProductPage from './Invite_ProductPage';


const Invitation=()=>{
  const [navbarToggle,setnavbarToggle]=useState(false);

  const NavbarchangeBg2 = () => {
    if (window.scrollY >= 500) {
      setnavbarToggle(true);
    }
    else {
      setnavbarToggle(false);
    }
  };
  window.addEventListener("scroll", NavbarchangeBg2);

const [cart,setCart]=useState([])
  console.log(cart)
  const addtoCart=(data)=>{
    setCart([...cart,{...data,quantity:1}])
  }   
const  [showcart,setShowCart]=useState(false)
    const handleShow=(value)=>{
        setShowCart(value)
    }
  
  return(
      <>
      <div>
      {navbarToggle ? <Invite_ProductPage_NavBar count={cart.length} handleShow={handleShow}/> : <Planner_navbar/> }

       {
         showcart ?<Invitation_CartList cart={cart} handleShow={handleShow}/>: <Invitation_main  addtoCart={addtoCart} />
       }
        <BackToTopScroll/> 
      </div> 
      </>
    )
}
export default Invitation;