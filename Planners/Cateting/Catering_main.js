import React,{useState} from 'react';
import Slider from "react-slick";
import Planner_navbar from '../Planner_navbar';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import IMAGES from '../../Imges/Image';
import './catering.css'
import {Breakfast_food_items,Lunch_food_items,Dinner_food_items,Top_Receipes} from './Catering_data'
import MenuItems from './Menu_items'
import {Sidedish,Vada,Sweet_and_Dessarts} from './Menu_items'
import Meals from './Lunch_menu_items';
import {Kuttu_and_Poriyal,Lunch_sidedish,Payasam,Paan,Sweet2,Pickle,Raita} from './Lunch_menu_items';
import { Sidedish3, Sweets3, Tiffen, Vada3,Beverages} from './Dinner_menu';
import {Chettinad,Biriyani,Pulao,Panner}from './Top_categroies'
import Carousel from "react-multi-carousel";
import Breakfast_CartList from './Breakfast_CartList'
import {Catering_CartPage_NavBar,Lunch_CartList,Dinner_CartList} from './Breakfast_CartList'
// import { Link } from 'react-router-dom';
const styles={
  img:
  {
    // height:"px",  
    // width:"210px"
  }
}
var settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 2,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
const CateringHeader=()=>{
  
  return(
    <>

        {/* ---------------------------------------------------IMAGES -------------------------------------------------- */}
          <div id="carouselExampleIndicators1" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src={IMAGES.catering3} className="d-block w-100" alt="..."/>
                      </div>
                      <div className="carousel-item">
                        <img src={IMAGES.catering2} className="d-block w-100" alt="..."/>
                      </div>
                      <div className="carousel-item">
                        <img src={IMAGES.catering1} className="d-block w-100" alt="..."/>
                      </div>
                    </div>
                    <div className="overlay1">

                    </div>
                    <div className="content1"> 
                        <h6> Top Catering Services {' & '} Food Receipes in here... </h6>
                        <button id="btn"> See More</button>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
          </div>
      
</>
    );
}
//  ----------------------------------------------------------- TIFFEN ITEMS-----------------------------------------------------------------
const Breakfast =()=>{
const [mypro,setmypro]=useState('');


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
  // console.log(cart)
  const addtoCart=(data)=>{
    setCart([...cart,{...data,quantity:1}])
  }   

  const  [showcart,setShowCart]=useState(false)
  const handleShow=(value)=>{
      setShowCart(value)
  }
    
    return(
    <>
      {navbarToggle ? <Catering_CartPage_NavBar count={cart.length} handleShow={handleShow}/>:<Planner_navbar/>}
{
showcart ?<Breakfast_CartList cart={cart} handleShow={handleShow}/>:
      <div id="breakfast_items" className="container-fluid">    
            <Slider {...settings}>
              {Breakfast_food_items.map((item1)=>(
                <div>
                      <div className="card  mx-2" id="breakfast-card">
                      <img src={item1.image} className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title"><span>#</span>{item1.breakfast}</h5>
                              <button type="button"  onClick={()=>setmypro(item1.btnclick)} 
                            className="" id="breakfast_btn">See more </button>
                        </div>
                      </div>
                  </div>
              ))}
            </Slider>
         <div>
           {mypro === 'tiffen' && <MenuItems  addtoCart={addtoCart}/>}
           {mypro === 'sidedish_chunty' && <Sidedish addtoCart={addtoCart}/>}
           {mypro ==='vada' && <Vada addtoCart={addtoCart}/>}
           {mypro === 'sweet_dessart' && <Sweet_and_Dessarts addtoCart={addtoCart}/>}

         </div>
      </div>
  }
    </>

  );
}
//  ----------------------------------------------------------- LUNCH ITEMS-----------------------------------------------------------------

const Lunch =()=>{

const [lunch_item,lunch_menu]=useState('');
  
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
  // console.log(cart)
  const addtoCart=(data)=>{
    setCart([...cart,{...data,quantity:1}])
  }   

  const  [showcart,setShowCart]=useState(false)
  const handleShow=(value)=>{
      setShowCart(value)
  }
  return(
      <>
      {navbarToggle ? <Catering_CartPage_NavBar count={cart.length} handleShow={handleShow}/>:<Planner_navbar/>}
{
  showcart? <Lunch_CartList cart={cart} handleShow={handleShow} /> :
          <div id="lunch_items" className="container-fluid">
            <Slider {...settings}>
            {Lunch_food_items.map((item2)=>(
              <div>
                      <div className="card mx-2" id="lunch-card">
                      <img src={item2.images} className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title"><span>#</span>{item2.name}</h5>
                          <button type="button" onClick={()=>lunch_menu(item2.btnclick)}
                           className="" id="lunch_btn"> See more </button>
                        </div>
                      </div>
                  </div>
              ))}
            </Slider> 
            <div>
               {lunch_item ==='kuttu_poriyal'&& <Kuttu_and_Poriyal  addtoCart={addtoCart}/> }
               {lunch_item ==='sidedish2'&& <Lunch_sidedish  addtoCart={addtoCart}/> }
               {lunch_item ==='payasam'&& <Payasam  addtoCart={addtoCart}/> }
               {lunch_item ==='meals'&& <Meals  addtoCart={addtoCart}/> }
               {lunch_item ==='sweet2'&& <Sweet2  addtoCart={addtoCart}/> }
               {lunch_item ==='paan'&& <Paan  addtoCart={addtoCart}/> }
               {lunch_item ==='pickle'&& <Pickle  addtoCart={addtoCart}/> }
               {lunch_item ==='raita'&& <Raita  addtoCart={addtoCart}/> }

               
            </div>
          </div>
            }
      </>

  );
}
//  ----------------------------------------------------------- DINNER ITEMS-----------------------------------------------------------------

const Dinner =()=>{
  const [dinner_item,dinner_menu]=useState('');
  
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
  // console.log(cart)
  const addtoCart=(data)=>{
    setCart([...cart,{...data,quantity:1}])
  }   

  const  [showcart,setShowCart]=useState(false)
  const handleShow=(value)=>{
      setShowCart(value)
  }

 return(
   <>
      {navbarToggle ? <Catering_CartPage_NavBar count={cart.length} handleShow={handleShow}/>:<Planner_navbar/>}
{
  showcart ? <Dinner_CartList cart={cart} handleShow={handleShow} />:
    <div id="dinner_items" className="container-fluid">
  <Slider {...settings}>
      {Dinner_food_items.map((item3)=>(
        <div>
          <div className="card mx-2" id="dinner-card">
            <img src={item3.image} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title"><span>#</span>{item3.name}</h5>
                <button type="button" onClick={()=>dinner_menu(item3.btnclick)} 
                className="" id="dinner_btn">See more </button>
              </div>
          </div>
      </div>
      ))}
  </Slider>
        <div>
          {dinner_item === 'tiffen2' && <Tiffen addtoCart={addtoCart}/>}
          {dinner_item === 'Sidedish3' && < Sidedish3 addtoCart={addtoCart}/>}
          {dinner_item === 'vada2' && <Vada3 addtoCart={addtoCart}/>}
          {dinner_item === 'Sweet3' && <Sweets3 addtoCart={addtoCart}/>}
          {dinner_item === 'beverages' && <Beverages addtoCart={addtoCart}/>}

        </div>
</div>
      }
   </>)}

const Catering=()=>{
  const [toggleState,setToggleState]=useState(1);
  const toggleTab=(index)=>{
    setToggleState(index);
    
  }
  const [top_receipe_item,top_receipes]=useState('');

    return(
      <div className="catering_planner">
          <CateringHeader/>
              {/* ********************************************TOP RECEIPES */}            
        <div className="container-fluid">
            <div id="head_title">
                    <h3 className="col-md-3 col-sm-6" id="text"> Top Receipes</h3>
            </div>
            <div className="" id="top_receipe">        
              {Top_Receipes.map((item4)=>(
                  <div className="col-xl-3 col-md-4 col-sm-6 col-xs-12 my-2" id="main-container">
                      <img className="card-img-top" src={item4.image} alt="" style={styles.img}/>
                      <div className="card-body">
                          <h4 className="card-title text-center">{item4.name}</h4>   
                          <button onClick={()=>top_receipes(item4.btnclick)} className=""> Visit</button> 
                      </div>
                </div>  
              ))}
          </div>
          <div>
              {top_receipe_item === 'chettinad' && < Chettinad/>}
              {top_receipe_item === 'biryani' && < Biriyani/>}
              {top_receipe_item === 'pulao' && <Pulao/>}
              {top_receipe_item === 'panner' && <Panner/>}
        </div>
     </div>
              
                 <div className="container my-5" id="">
                 <div id="menu_title" className="row text-center justify-content-center">
                 <h3 className="col-xl-4 col-md-4 col-12 px-2" id="text">Select Your Menu</h3>
              </div>
                          <ul className="nav nav-pills row" role="tablist" >
                            <li className="nav-item  col-sm-12 col-md-4 my-1">
                              <a className={toggleState === 1 ? "nav-link active":"nav-link"} data-toggle="pill" href="#breakfast" onClick={()=>toggleTab(1)}>Breakfast</a>
                            </li>
                            <li className="nav-item  col-sm-12 col-md-4 my-1">
                              <a className={toggleState === 2 ? "nav-link active":"nav-link"} data-toggle="pill" href="#lunch" onClick={()=>toggleTab(2)}>Lunch</a>
                            </li>
                            <li className="nav-item  col-sm-12 col-md-4 my-1">
                              <a className={toggleState === 3  ? "nav-link active":"nav-link"} data-toggle="pill" href="#dinner" onClick={()=>toggleTab(3)}>Dinner</a>
                            </li>
                          </ul>
                       
                  <div className="tab-content ">
                          <div id="breakfast"  className={toggleState === 1 ? "container tab-pane  active col-md-12":"container tab-pane fade "} ><br/>
                               <Breakfast/>
                          </div>
                          
                          <div id="lunch" className={toggleState === 2 ? "container tab-pane active col-md-12":"container tab-pane fade"}><br/>
                              <Lunch/>
                          </div>

                          <div id="dinner" className={toggleState === 3 ? "container tab-pane active  col-md-12":"container tab-pane"}><br/>
                            <Dinner/>
                        </div>
                      </div>
                     
                        </div>
</div>
    );
}
export default Catering;