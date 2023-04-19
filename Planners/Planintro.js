import {useState} from "react";
import {Link}from 'react-router-dom';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import IMAGES from '../Imges/Image';
import './planner.css'
const styles={
        imgs:
        {
            marginTop:'15px',
            marginLeft:'53px'
        },
        menu:{
            color: '#2b8b0e',
            fontSize: '20px',
            fontWeight:'bold'
        }
    
}
const Planintro=()=>{
    const [navbar,SetNavbar]=useState(false);
    const changBg3=()=>{
      if(window.scrollY>=25){
        SetNavbar(true);
      }else{
        SetNavbar(false);
      }
    };
    window.addEventListener("scroll",changBg3);
return(
<div id="">
    
        <nav className={navbar ? "navbar Planner_scroll navbar-expand-sm  fixed-top" : "navbar navbar-expand-sm fixed-top"} id="planner_navbar">          
            <div className="container-fluid">
                <a className="navbar-brand text-danger" href="#">BooKing</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse  justify-content-end mx-5" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/homepage">
                                 <a className="nav-link" aria-current="page" href="#" style={styles.menu}>Home </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Freelance">                      
                                <a className="nav-link"  aria-current="page" style={styles.menu}>Freelencers</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
                <div className="row" id="planner_categroies_title">
                    <p> Choose what you need </p>
                </div>

            <div className="grid_layout" id="grid_layout">
                
                    <div className="box1">
                        <img src={IMAGES.m1} alt="" />
                        <div className="overlay">
                                <h5 id="text-title">
                                        Vendor
                                </h5>                   
                                <div>  Vendors  and  Vills are  searching for your favtorite places and Locations  </div>
                                <Link to="/planpackage/vendors">
                                        <button id="btn"> See more </button>
                                </Link>
                        </div> 
                    </div>
                    <div className="box2">
                        <img src={IMAGES.m2} alt="" />
                        <div className="overlay">      
                                <h5 id="text-title">
                                    Cathering
                                </h5>
                                <div>           All type of foods arranged quickly and tasty. Freelencers chef and catering services are available</div>
                                <Link to="/planpackage/catering">
                                <button id="btn"> See more </button>
                                </Link>
                        </div>
                    </div>
                    <div className="box3">
                        <img src={IMAGES.m4} alt="" />
                        <div className="overlay">
                                <h5 id="text-title">
                                    Mehandi
                                </h5>
                                <div>    Mehandi Designer are have Best design and know all type of mehandi design and Freelencers </div>
                                <Link to="/planpackage/mehandi">
                                    <button id="btn"> See more </button>
                                </Link>
                            </div> 
                        </div>
                    <div className="box4">
                        <img src={IMAGES.m3} alt="" />
                        <div className="overlay">
                                <h5 id="text-title">
                                        Boutique
                                </h5>
                                <div>   Most popular design and Designner for Groom and Bride avilable and Freelencers Designer </div> 
                                <Link to="/planpackage/boutique">
                                    <button id="btn"> See more </button>
                                </Link>
                            </div>  
                    </div>
                    <div className="box5">
                        <img src={IMAGES.m5} alt="" />
                        <div className="overlay">
                                <h5 id="text-title">
                                        Beautician
                                </h5>
                                <div>    We have trained and Certificate Beautician and hair stylest and freelencers beauty shop</div>
                                <Link to="/planpackage/beautician">                                
                                     <button id="btn"> See more </button>
                                </Link>
                        </div> 
                    </div>
                    <div className="box6">
                        <img src={IMAGES.m6} alt="" />
                        <div className="overlay">
                                <h5 id="text-title">
                                        Invitation
                                </h5>
                                <div>    All types and grand and normal look invitation are here and Other Invitation Shop</div>
                                <Link to="/planpackage/invitation">
                                        <button id="btn"> See more </button>
                                </Link>
                        </div> 
                    </div>
                    <div className="box7">
                        <img src={IMAGES.m7} alt="" />
                        <div className="overlay">
                                <h5 id="text-title">
                                        Photo {'&'} Video garphers
                                </h5>
                                <div>    All types and grand and normal look invitation are here and Other Invitation Shop</div>
                                <Link to="/planpackage/photo_video_graphers">
                                    <button id="btn"> See more </button>
                                </Link>
                        </div>  
                    </div>
                    
            </div>











        {/* <div className="contrainer-fluid" id="planner_categroies">
            <div className="row " id="planner_categroies_title">
                    <p> Choose what you need </p>
            </div>
            <div className="row" id="option">
                <div className="col-xl-5 col-xs-12 " style={styles.imgs}>
                    <img className="card-img-top" src={IMAGES.a1} alt="" id="plannerimage"/>
                 </div>
    
            </div> 
         
        </div> */}
    </div>


            
    );
}
export default Planintro;