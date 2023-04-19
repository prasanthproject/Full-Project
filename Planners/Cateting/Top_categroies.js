import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {chettinadu_receipes,biryani_receipes,pulao_receipes,paneer_receipes} from './Catering_data';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './catering.css'


function Top_categroies(){
    return(
        <>
            <div>

            </div>
        </>
    )
}
const Arrow_Button =()=>{
    const arrowStyle = {
        background: "#fff",
        border: 0,
        color: "red",
      };
      const CustomRight = ({ onClick }) => (
        <button className="arrow right" onClick={onClick} style={arrowStyle}>
          <ArrowForwardIcon style={{ fontSize: "25px" }} />
        </button>
      );
      const CustomLeft = ({ onClick }) => (
        <button className="arrow left" onClick={onClick} style={arrowStyle}>
          <ArrowBackIcon style={{ fontSize: "25px" }} />
        </button>
      );
        return(
            <>

            </>
        )
}
function Chettinad(){
    const arrowStyle = {
        background: "#fff",
        border: 0,
        color: "red",
      };
      const CustomRight = ({ onClick }) => (
        <button className="catering_arrow right" onClick={onClick} style={arrowStyle}>
          <ArrowForwardIcon style={{ fontSize: "25px" }} />
        </button>
      );
      const CustomLeft = ({ onClick }) => (
        <button className="catering_arrow left" onClick={onClick} style={arrowStyle}>
          <ArrowBackIcon style={{ fontSize: "25px" }} />
        </button>
      );
     const responsive = {
         
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 1500, min: 1100},
          items: 4
        },
        desktop: {
          breakpoint: { max: 1100, min: 768 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 768, min: 576 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 576, min: 0 },
          items: 1
        }
      };    
    return(
        <>
                <div className="col-xl-3 col-md-4 col-sm-8 col-10 mx-auto" id="top-receipes-title">
                    <h3> Chettinadu Receipes</h3>
                </div>
                <Carousel responsive={responsive} customRightArrow={<CustomRight />} customLeftArrow={<CustomLeft />}>
                    {chettinadu_receipes.map((item)=>(
                        <div id="top-receipes">
                            <div className="card mx-1">
                                <div className="" id="top_receipess_card">
                                <img src={item.images} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between">
                                            <h5 className="card-title col-9">{item.name}</h5>
                                            <h6 className="card-price col-3"><span>&#8377;</span>{item.price}</h6>
                                        </div>
                                    </div>
                                    <div id="top_receipe_btn">
                                        <button className="" id="">Add to Cart <ShoppingCartIcon/></button>
                                    </div>
                                </div>
                            </div>
                        </div>                                   
                    ))}
                </Carousel>
        </>
    )
}
function Biriyani(){
    const arrowStyle = {
        background: "#fff",
        border: 0,
        color: "red",
      };
      const CustomRight = ({ onClick }) => (
        <button className="catering_arrow right" onClick={onClick} style={arrowStyle}>
          <ArrowForwardIcon style={{ fontSize: "25px" }} />
        </button>
      );
      const CustomLeft = ({ onClick }) => (
        <button className="catering_arrow left" onClick={onClick} style={arrowStyle}>
          <ArrowBackIcon style={{ fontSize: "25px" }} />
        </button>
      );

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 1500, min: 1100},
            items: 4
          },
          desktop: {
            breakpoint: { max: 1100, min: 768 },
            items: 3
          },
          tablet: {
            breakpoint: { max: 768, min: 576 },
            items: 2
          },
          mobile: {
            breakpoint: { max: 576, min: 0 },
            items: 1
          }
      };    
    return(
        <>
            <div className="col-xl-3 col-md-4 col-sm-8 col-10 mx-auto" id="top-receipes-title">
                <h3>Biryani Receipes</h3>          
            </div>
            <Carousel responsive={responsive} customRightArrow={<CustomRight />} customLeftArrow={<CustomLeft />}>
                {biryani_receipes.map((item)=>(
                    <div id="top-receipes">       
                        <div className="card mx-1">
                            <div className="" id="top_receipess_card">
                            <img src={item.images} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <h5 className="card-title col-9">{item.name}</h5>
                                        <h6 className="card-price col-3"><span>&#8377;</span>{item.price}</h6>
                                    </div>
                                </div>
                                <div id="top_receipe_btn">
                                    <button className="" id="">Add to Cart  <ShoppingCartIcon/></button>
                                </div>
                            </div>
                        </div>
                    </div>                                   
                ))}
            </Carousel>
        </>
    )
}
function Pulao(){
    const arrowStyle = {
        background: "#fff",
        border: 0,
        color: "red",
      };
      const CustomRight = ({ onClick }) => (
        <button className="catering_arrow right" onClick={onClick} style={arrowStyle}>
          <ArrowForwardIcon style={{ fontSize: "25px" }} />
        </button>
      );
      const CustomLeft = ({ onClick }) => (
        <button className="catering_arrow left" onClick={onClick} style={arrowStyle}>
          <ArrowBackIcon style={{ fontSize: "25px" }} />
        </button>
      );


    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 1500, min: 1100},
            items: 4
          },
          desktop: {
            breakpoint: { max: 1100, min: 768 },
            items: 3
          },
          tablet: {
            breakpoint: { max: 768, min: 576 },
            items: 2
          },
          mobile: {
            breakpoint: { max: 576, min: 0 },
            items: 1
          }
      };    
    return(
        <>
                <div className="col-xl-3 col-md-4 col-sm-8 col-10 mx-auto" id="top-receipes-title">
                    <h3> Pulao Receipes</h3>
                </div>
                <Carousel responsive={responsive}  customRightArrow={<CustomRight />} customLeftArrow={<CustomLeft />}>
                    {pulao_receipes.map((item)=>(
                        <div id="top-receipes">
                            <div className="card mx-1">
                                <div className="" id="top_receipess_card">
                                <img src={item.images} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between">
                                            <h5 className="card-title col-9">{item.name}</h5>
                                            <h6 className="card-price col-3"><span>&#8377;</span>{item.price}</h6>
                                        </div>
                                    </div>
                                    <div id="top_receipe_btn">
                                        <button className="" id="">Add to Cart  <ShoppingCartIcon/> </button>
                                    </div>
                                </div>
                            </div>
                        </div>                                   
                    ))}
            </Carousel>
        </>
    )
}
function Panner(){
    const arrowStyle = {
        background: "#fff",
        border: 0,
        color: "red",
      };
      const CustomRight = ({ onClick }) => (
        <button className="catering_arrow right" onClick={onClick} style={arrowStyle}>
          <ArrowForwardIcon style={{ fontSize: "25px" }} />
        </button>
      );
      const CustomLeft = ({ onClick }) => (
        <button className="catering_arrow left" onClick={onClick} style={arrowStyle}>
          <ArrowBackIcon style={{ fontSize: "25px" }} />
        </button>
      );


    const responsive = {
        superLargeDesktop: {
           breakpoint: { max: 1500, min: 1100},
            items: 4
          },
          desktop: {
            breakpoint: { max: 1100, min: 768 },
            items: 3
          },
          tablet: {
            breakpoint: { max: 768, min: 576 },
            items: 2
          },
          mobile: {
            breakpoint: { max: 576, min: 0 },
            items: 1
          }
      };    
    return(
        <>
            <div className="col-xl-3 col-md-4 col-sm-8 col-10 mx-auto" id="top-receipes-title">
                <h3> Panner Receipes</h3>
            </div>
            <Carousel responsive={responsive}  customRightArrow={<CustomRight />} customLeftArrow={<CustomLeft />}>
                {paneer_receipes.map((item)=>(
                    <div id="top-receipes">
                        <div className="card mx-1">
                            <div className="" id="top_receipess_card">
                            <img src={item.images} className="" alt="..."/>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">    
                                        <h5 className="card-title col-9">{item.name}</h5>
                                        <h6 className="card-price col-3"><span>&#8377;</span>{item.price}</h6>
                                    </div>
                                </div>
                                <div id="top_receipe_btn">
                                    <button className="" id="">Add to Cart   <ShoppingCartIcon/></button>
                                </div>
                            </div>
                        </div>
                    </div>                                   
                ))}
            </Carousel>
        </>
    )
}

export {Chettinad,Biriyani,Pulao,Panner};
export default Top_categroies;