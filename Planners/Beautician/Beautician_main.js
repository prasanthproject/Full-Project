import React ,{useState}from 'react';
import './Beautician.css';
import IMAGES from '../../Imges/Image';
import Beautician_CartList from './Beautician_main';
import {Bride,Groom} from './Beautician_details';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link} from 'react-router-dom';



const Beautician_main=()=>{
    const [toggleState,setToggleState]=useState(0);
    const toggleTab=(index)=>{
      setToggleState(index);

    }
    return(
       <>
         <div id="carouselExampleIndicators4" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src={IMAGES.beautician1} className="d-block w-100" alt="..."/>
                      </div>
                      <div className="carousel-item">
                        <img src={IMAGES.beautician2} className="d-block w-100" alt="..."/>
                      </div>
                      <div className="carousel-item">
                        <img src={IMAGES.beautician3} className="d-block w-100" alt="..."/>
                      </div>
                    </div>
                    <div className="overlay1">

                    </div>
                    <div className="content1"> 
                        <h6> Top Catering Services {' & '} Food Receipes in here... </h6>
                        <button id="btn"> See More</button>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
          </div>
      
       <div id="beautician">          
            <div className="container" id="beautician_menubar">
                <ul className="nav nav-pills justify-content-around  ">
                    <li className="nav-item col-12 col-md-5 mx-1 my-2">
                        <a id="nav-link" className={toggleState === 1 ? "nav-link active":"nav-link"} data-toggle="pill" href="#groom" onClick={()=>toggleTab(1)}>Groom <img src={IMAGES.groom} alt=""/> </a>
                    </li>
                    <li className="nav-item col-12 col-md-5 mx-1 my-2">
                        <a id="nav-link" className={toggleState === 2 ? "nav-link active":"nav-link"} data-toggle="pill" href="#bride" onClick={()=>toggleTab(2)}>Bride <img src={IMAGES.bride}  alt=""/></a>
                    </li>
                </ul>
   
                <div className="tab-content" >
                        <div id="groom"  className={toggleState === 1 ? "container tab-pane  active col-md-12":"container tab-pane fade "}>
                                <Groom/> 
                        </div>
                        <div id="bride"  className={toggleState === 2 ? "container tab-pane  active col-md-12":"container tab-pane fade "}>
                                <Bride/>
                        </div>

                </div>
            </div>
            
        </div>
        </>
    )
}
export default Beautician_main;
