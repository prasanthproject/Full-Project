import React,{useState} from 'react';
import Planner_navbar from '../Planner_navbar';
import "./Photo_Video_grapher.css";
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import IMAGES from '../../Imges/Image'
import {Switch} from 'antd';

const  Show_and_Hide=()=>
{
    return(
        <>
            <form>
                <div id="part2">
                    <div className="card">
                        <div className="row">
                            <h6 className="col-4"><CalendarMonthRoundedIcon id="icon"/> Date of Shoot </h6>
                            <input type="date" className="col-8 form-control"  required/>
                        </div>
                    </div>
                    <div className="card">
                        <div className="row">
                            <h6  className="col-4"> <LocationOnIcon id="icon"/> Location of Shoot</h6>
                            <input type="text" className="col-8 form-control shadow-none " placeholder="Enter the Location" autoComplete="off" required/>
                        </div>
                    </div>
                    <div className="card">
                        <div className="row">
                            <input type="checkbox"  className=" bg-info col-1"  />
                            <h6 className="col-8" id="video" > Do yu want Videographer for song shoot</h6>
                        </div>
                    </div>
                </div>  
            </form>
        </>         
    )
}

const PhotoVideo_main=()=>{
    const [count,setCount]=useState(0);
    const [count1,setCount1]=useState(0);

    const [toggle,setToggle]=useState();
    const toggler=()=>{
        toggle ? setToggle(false):setToggle(true); 
    }

    return(
      <>   
        <div id="carouselExampleIndicators3" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src={IMAGES.photo1} className="d-block w-100" alt="..."/>
                      </div>
                      <div className="carousel-item">
                        <img src={IMAGES.photo2} className="d-block w-100" alt="..."/>
                      </div>
                      <div className="carousel-item">
                        <img src={IMAGES.video1} className="d-block w-100" alt="..."/>
                      </div>
                    </div>
                    <div className="overlay1">

                    </div>
                    <div className="content1"> 
                        <h6> Top Photographer {' & '} Videographer <br/>Services in here... </h6>
                        <button id="btn"> See More</button>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicator3" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
          </div>
           
        <div className="container-fluid mb-5" id="photo_video_grapher">
                <div className="row">
                    <div className="col-sm-12 col-lg-2" id="images_set">
                                {/* <img src={IMAGES.photo5} alt="" className="mt-5"/>
                                <img src={IMAGES.photo4} alt="" />
                                <img src={IMAGES.a1} alt="" /> */}
                    </div>
                    <div className="col-12 col-lg-8" id="wedding_shoot">
                                <form>
                                <div className="part1">
                                <h3>Wedding PhotoShoot</h3>
                                <div className="card">
                                    <div className="row">
                                        <h6 className="col-10 col-lg-4"><CalendarMonthRoundedIcon id="icon" required/> Date of Wedding </h6>
                                        <input type="date" className="col-10 col-lg-5 form-control"  />
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="row">
                                        <h6  className="col-12 col-lg-4"> <LocationOnIcon id="icon"/> Location of Wedding</h6>
                                         <input type="text" className="col-10 col-lg-5 form-control shadow-none " placeholder="Enter the Location" autoComplete="off" required/>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="row">
                                    <h6 className="col-10 col-lg-4 py-1"> <PhotoCameraIcon id="icon"/> No of PhotoGrapher</h6>                                
                                        <div className="form-group col-12 col-lg-8">
                                            <div className="row">
                                                <button className="btn btn-success col-2 col-lg-1"  onClick={()=>setCount(count-1)} disabled={count===0} ><b>-</b></button>
                                                    <p className="col-8 col-lg-3 text-center">{count}</p>
                                                <button className="btn btn-success col-2 col-lg-1"  onClick={()=>setCount(count+1)} disabled={count===5} ><b>+</b></button>	                                                	
                                            </div>	
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="row">
                                        <h6 className="col-10 col-lg-4"> <VideocamRoundedIcon id="icon"/> No of Videographer</h6>
                                        <div className="form-group  col-12 col-lg-8">
                                            <div className="row">
                                                <button className="btn btn-success  col-2 col-lg-1"  onClick={()=>setCount1(count1-1)} disabled={count1===0}><b>-</b></button>
                                                    <p className="col-8 col-lg-3 text-center">{count1}</p>
                                                <button className="btn btn-success col-2 col-lg-1"  onClick={()=>setCount1(count1+1)} disabled={count===5}><b>+</b></button>	
                                                    
                                            </div>	
                                        </div>    
                                    </div>
                                </div>

                            </div>
   
                                </form>
                                <div className="part2">
                                <div className="form-group" id="pre_shoot">
                                    <label className="row">  
                                        <h3 className="col-5">Pre-Wedding Shoot </h3> 
                                        <div className="col-7">
                                             <h2 id="switch"> 
                                            No  <Switch onChange={toggler} />  Yes 
                                            
                                             </h2>
                                        </div>
                                        <div className="col-12">
                                        {toggle ? <Show_and_Hide/> : <span>  </span>}
                                                
                                        </div>
                                    </label>
                               </div>
                            </div>
                                
                    </div>
                    <div className="col-sm-10 col-lg-2" id="images_set1">
                        {/* <img src={IMAGES.a1} alt="" className="mt-5"/>
                        <img src={IMAGES.a1} alt="" />
                        <img src={IMAGES.a1} alt="" /> */}
                                
                    </div>
                </div>
                <button className="btn col-5  btn-success px-5 rounded-0">OrderNow </button>
            
        </div>
     </>
    )
}
export default PhotoVideo_main;
