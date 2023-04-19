import React, { useState,useCallback } from 'react';
import IMAGES from '../../Imges/Image';
import Planner_navbar from '../Planner_navbar'
import {Mehandi_categroies} from './Mehandi_data'
import './Mehandi.css';
const CATEGORIEY=[
    "Arabic",
    "Indian",
    "Morocco",
    "Pakistani",
    "Western"
]
function MehandiFilter(props){
    const{
        categroies,
        onFilterChange,
    }=props
    return(
    <>
   
        <div className="container" id="mehandi_categroies">
                 <div className="col-8 col-md-4 col-lg-3 my-3 px-2" id="mehandi_categroies_title">
                 <h4>Top Categories</h4>
            </div>
      
            <div className="row" id="checkbox_group">
                <div className=" col-xl-2 col-md-3 col-sm-4 col-6 my-1 mx-3" id="tile">  
                        <input type="checkbox" name="mehandi" id="mehandi1" className="checkbox" onChange={onFilterChange} value="Arabic"/>            
                            <label htmlFor="mehandi1">
                                <img src={require('./Images/mehandi1.jpg')} alt="" className="card-img-top" />
                                <h6>Arabic</h6>
                            </label>
                    </div>
                <div className="  col-xl-2 col-md-3 col-sm-4 col-6 my-1 mx-3" id="tile">  
                        <input type="checkbox" name="mehandi" id="mehandi2"  className="checkbox" onChange={onFilterChange} value="Indian"/>
                        <label htmlFor="mehandi2">
                            <img src={require('./Images/mehandi2.jpg')}alt="" className="card-img-top"/>
                            <h6>Indian </h6>
                        </label>
                </div> 
                <div className=" col-xl-2 col-md-3 col-sm-4 col-6 my-1 mx-3" id="tile">  
                        <input type="checkbox" name="mehandi" id="mehandi3"  className="checkbox" onChange={onFilterChange} value="Morocco"/>
                        <label htmlFor="mehandi3">
                            <img src={require('./Images/mehandi3.jpg')} alt="" className="card-img-top" />
                            <h6>Morocco </h6>
                        </label>
                </div>
                <div className="  col-xl-2 col-md-3 col-sm-4 col-6 my-1 mx-3" id="tile">  
                        <input type="checkbox" name="mehandi" id="mehandi4"  className="checkbox"  onChange={onFilterChange} value="Pakistani"/>
                        <label htmlFor="mehandi4">
                            <img src={require('./Images/mehandi4.png')} alt="" className="card-img-top" />
                            <h6>Pakstani </h6>
                        </label>
                </div>
                <div className=" col-xl-2 col-md-3 col-sm-4 col-6 my-1 mx-3" id="tile">  
                        <input type="checkbox" name="mehandi" id="mehandi5"  className="checkbox" onChange={onFilterChange} value="Western"/>
                        <label htmlFor="mehandi5">
                            <img src={require('./Images/mehandi5.png')} alt="" className="card-img-top" />
                            <h6>Western </h6>
                        </label>
                </div>
            </div>
        </div>
    </>
    )
}

function MehandiProduct(props){
    
    const {mehandi} =props
    return(
        <>
                <div className="col-md-10 col-12" id="product">
                    <div id="mehandi_card" className="col-12 my-1">
                        <div className="card mx-1 my-1">
                            <img src={mehandi.images} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <div id="mehandi_btn">
                                        <button className="">Booking Now</button>                                   
                                </div>
                            </div>
                        </div>
                    </div>    
                   
                </div>
            
        </>
    )
}
function MehandiList(props){  
    const {mehandilist}=props

    const [noOfmehandi,setOfmehandi]=useState(6);
    const slice=mehandilist.slice(0,noOfmehandi);
    const loadmore=()=>{
      setOfmehandi(noOfmehandi+3);
    }
    return(
        <>
         <div className="container my-4"id="mehandilist">
         {slice.map(mehandi=>(
                    <MehandiProduct mehandi={mehandi}/>
            ))}
           
         </div>
            <div className="text-center" id="loadmore_btn">
                <button className=" col-10 col-sm-8 col-md-6 mt-2 mb-5 mx-1" id="loadmore" onClick={()=>loadmore()}> Load More...</button>
            </div> 
        </>
    )
}
const Mehandi_main=()=>{
  
      
      const [state,setState]=useState({
        mehandilist:Mehandi_categroies,
        filters:new Set(),
    })
    const handleFilterChange = useCallback(event=>{
        setState(previousState=>{
            let filters=new Set(previousState.filters)
            let mehandilist=Mehandi_categroies;
    
            if (event.target.checked) {
                filters.add(event.target.value)
              }
            else {
            filters.delete(event.target.value)
            }
            
            if (filters.size) 
            {
            mehandilist = mehandilist.filter(product => {
                return filters.has( product.categroies)
            })}
        
            return {
            filters,
            mehandilist,
            }})
          }, [setState])

    return(
     <>
     <div id="mehandi">
            <div id="mehandi_carouselExampleIndicators1" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src={IMAGES.mehandi2} className="d-block w-100" alt="..."/>
                      </div>
                      <div className="carousel-item">
                        <img src={IMAGES.mehandi3} className="d-block w-100" alt="..."/>
                      </div>
                      <div className="carousel-item">
                        <img src={IMAGES.mehandi1} className="d-block w-100" alt="..."/>
                      </div>
                    </div>
                    <div className="overlay1">

                    </div>
                    <div className="content1"> 
                        <h6> Top Mehandi Collections {' & '} Menhadi Artistes </h6>
                        <button id="btn"> See More</button>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#mehandi_carouselExampleIndicators1" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#mehandi_carouselExampleIndicators1" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
          </div>
            <div>
                <MehandiFilter categroies={CATEGORIEY} onFilterChange={handleFilterChange}/>
                
                <div className="container" id="mehandi_collections_title">
                        <p>  Top Collections  </p>
                </div>

                <MehandiList mehandilist={state.mehandilist}/>
            </div>
            
     </div>

</>
    )
}
export default Mehandi_main;