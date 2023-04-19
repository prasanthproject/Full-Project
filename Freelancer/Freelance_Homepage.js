import React from 'react';
import Freelance_Navbar from './Freelance_Navbar';
import { Link } from 'react-router-dom';
import IMAGES from '../Imges/Image';
import './freelances.css';
import {freelance_Categroies} from './freelance_data';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Freelance_footer from './Freelance_footer';
import BackToTopScroll from '../BackToTopScroll';
class Freelance_Homepage extends React.Component{
  
 render(){
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
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 1500, min: 992},
          items: 4
        },
        desktop: {
          breakpoint: { max: 992, min: 768 },
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
        <div id="freelance_homepage"> 
                <Freelance_Navbar/>
                <div className="row" id="image_text">
                    <div className="col-5" id="freelance_homepage_title">
                            <h2>The Most Popular</h2> <h2 className="py-2"> Wedding's Freelance</h2><h2> Platform  </h2>
                    </div>
                    <div className="col-7">
                        <img src={IMAGES.freelance} alt="" />
                    </div>
                </div>

                <div className="container" id="freelance_categroies" >
                    <div id="freelance_categroies_title" className="mt-5">
                            <h3 className="px-2">The Most Popular Categroies </h3>
                    </div>

                    <Carousel responsive={responsive} infinite={true} customRightArrow={<CustomRight />} customLeftArrow={<CustomLeft />}>
                    {freelance_Categroies.map((item)=>(
                      <Link to={item.linkto}>
                        <div className="container mt-3 mb-5" id="freelance_categroies">
                            <div className="" id="card">
                                <img src={item.image} className="card-img-top" alt="..."/>
                                    <h5 id="card-title">{item.category}</h5>
                            </div>
                        </div>
                      </Link>
                    ))}
                    </Carousel>  
                
                </div>
                <div className="container_fluid my-5" id="content_part"> 
                      <div className="row">
                            <div className="col-12 col-md-6" id="content"> 
                            
                            <h2>A whole world of freelance talent at your fingertips</h2>
                            <li className="mt-4"> <HourglassEmptyIcon id="point"/>The best for every budget</li>
                            <p> Find high-quality services at every price point.No hourly rates just project-based pricing</p>                              
                            <li> <HourglassEmptyIcon id="point"/>Quality work don't quickly</li>
                            <p> Find the right freelancers to begin working on your projefct within minutes</p>
                            <li><HourglassEmptyIcon id="point"/>Proctected Payments {'&'} Everytime</li>
                            <p> Always know what you'll pay upfront.Your payment isn't released until you approve the work </p>
                           <li> <HourglassEmptyIcon id="point"/>24/7 Support</li>
                           <p>Find high-quanlity services at every price point.No hourly rates .just project based pricing </p>
                            </div>
                            <div className="col-12 col-md-6 px-4 " id="video">
                                  <img src={IMAGES.freelance} alt="" />
                            </div>
                      </div>
                </div>
                <Freelance_footer id="footer"/>
                <BackToTopScroll/>  
        </div>
    </>

)
 }
}
export default Freelance_Homepage;