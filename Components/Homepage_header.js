import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import IMAGES from '../Imges/Image';
import './Homepage.css'
const styles={
    menu:{
        color: '#fff',
        fontSize: '20px',
        fontWeight:'bold'
    }
}
const Homepage_header=()=>{
    const [navbar, setNavbar]=useState(false);
    const changeBg =()=>{
        if(window.scrollY>=550){
            setNavbar(true);
        }else{
            setNavbar(false);
        }
    };
    window.addEventListener("scroll",changeBg);
    return(      
        <>
        
        <nav className={navbar ? "navbar scroll navbar-expand-sm  fixed-top" : "navbar navbar-expand-sm fixed-top"}id="homapageNavbar">
            <a className="navbar-brand ml-5" href="#">BooKing</a>   
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end mx-5" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className={navbar? "nav-link nav-link-font ":"nav-link"}  aria-current="page" href="#" style={styles.menu}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className={navbar? "nav-link nav-link-font ":"nav-link"} href="#Categoriescard" style={styles.menu}>Categories</a>
                        </li>
                        <li className="nav-item">
                         <Link to="/Freelance">
                            <a className={navbar? "nav-link nav-link-font ":"nav-link"}  style={styles.menu}>Freelancers</a>
                         </Link>
                        </li>
                       
                            <li className="nav-item">
                        <Link to="/ ">
                                <a className={navbar? "nav-link nav-link-font ":"nav-link"} style={styles.menu}>Login</a>
                        </Link>
                            </li>
                    </ul>
                </div>
        </nav>
        
        {/* ---------------------------------------------------IMAGES -------------------------------------------------- */}
        <div id="Homepage_header">
        <div className="header">  
              <div className="img"> 
                  <div>
                    <img src={IMAGES.g1} alt="" />
                  </div>
                  <div className="overlay">  </div>
                  
              </div>
              <div className="content"> 
                     
                  <h6 className="mx-3">   <span>NO 1 </span> Wedding Planner {'&'} <br/> Wedding Freelencer <br/>  in Madurai</h6>
                  <button className="btn"> ReadMore</button>
              </div>
        </div>
          </div>

          
</>
    )
}
export default Homepage_header;