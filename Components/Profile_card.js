import React from 'react';
import './Homepage.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const Details=[
  {id:2,image:require('../Imges/woman.png'),name:"Miss.Shreya",work:"Costume Designer",description:"I am well educated and graduate in fashion design.I have designed more then hundred dresses and I have beed experienced for four years"},
    {id:1,image:require('../Imges/man.png'),name:"Mr.Kannayiram",work:"Chef",description:"I'm an experienced Chef and I have own Catering Services. I have been working in this industry for fifteen year."},
    {id:3,image:require('../Imges/woman.png'),name:"Miss.Priya",work:"Costume Designer",description:"I am famous and  experienced in this field for more then four years.I have with working as a costume designers  for top celebrities"},
    {id:5,image:require('../Imges/man.png'),name:"Mr.Gopal & Co",work:"Wedding Decoration Designers",description:"I have Four year experience and well educated in this field. I have been working in Thandunane for two Years and all my team members are well experienced and Skilled"},
    {id:4,image:require('../Imges/woman.png'),name:"Mrs.Reshma",work:"Mehandi Designer",description:"I'm an experienced mehandi designer. I have been working in this industry for five years and I have put above thousands of designs.I have been working in this Wedding Planner company for two years."},
    {id:6,image:require('../Imges/man.png'),name:"Mr.Mani'Catering",work:"Catering Services",description:"I have Four year experience  in this field. I have been working in Thandunane for two Years and all my team members are well experienced and Skilled"},
    {id:7,image:require('../Imges/woman.png'),name:"Miss.Thanam",work:"Beautician",description:"I am famous and experienced beautician in this field and I have a own beauty parlour in madurai.I have with working in Thandunane for six months"},
    {id:8,image:require('../Imges/man.png'),name:"Mr.Arun",work:"Mehandi Designer",description:"I'm an experienced Mehandi designers.I have been collecting and designed for more then five hundred. I have been working in this industry for fifteen year."},
    {id:11,image:require('../Imges/woman.png'),name:"Miss.Sunitha",work:"Video Graphers",description:"I am professional Videographer for 7 years and I have worked as a videographer for over a two hundred weddings and Has experience working as cinematographer for more then 10 short films"},
    {id:10,image:require('../Imges/man.png'),name:"Mr.Deepak",work:"Photo Graphers",description:"I am professional photographer. I have been in the industry for five years and have photographed over 100 Weddings"},
    {id:12,image:require('../Imges/woman.png'),name:"Miss.Harini",work:"Photo Graphers",description:"I am viscom Student and accomplished Photographer. I have been in the industry last one year and have photographed over 20 weddings "},
    {id:9,image:require('../Imges/man.png'),name:"Mr.Rahul",work:"Hair Specialist",description:"I have five year experience for in this field .Also I have experience working as hair stylist for top celebrities"},
    {id:13,image:require('../Imges/woman.png'),name:"Miss.Lashmi",work:"Beautician",description:"I am famous and experienced beautician in this field and I have a own beauty parlour in madurai.I have with working as a beautician for top celebrities"},
]
const Profile_card=()=>{
    const arrowStyle = {
        background: "#fff",
        border: 0,
        color: "red",
      };
    const CustomRight = ({ onClick }) => (
        <button className="homepage_arrow right" onClick={onClick} style={arrowStyle}>
          <ArrowForwardIcon style={{ fontSize: "25px" }} />
        </button>
      );
      const CustomLeft = ({ onClick }) => (
        <button className="homepage_arrow left" onClick={onClick} style={arrowStyle}>
          <ArrowBackIcon style={{ fontSize: "25px" }} />
        </button>
      );
      
      
      const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 1500, min: 992},
          items: 3
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
    <div className="col-10 col-sm-4 col-lg-3"id="profile_title">
            <h2>Experts's Profile</h2>
    </div>
    <div className=""id="designerCard">
        <Carousel responsive={responsive} customRightArrow={<CustomRight />} customLeftArrow={<CustomLeft />}>
            {Details.map((item)=>(
                <div id="designerCard">
                    <div className="card">
                        <div className="cardImg">
                            <img src={item.image} alt="" />
                        </div>                        
                        <div className="content">
                            <div className="name">
                                <div className="para">  
                                    <p>{item.description}</p>
                                </div>
                                <h4> {item.name}<br/> <span>{item.work}</span></h4>
                            </div>                          
                        </div>
                    </div>
                </div>  
            ))}
        </Carousel>
    </div>
   </>
    )
}
export default Profile_card;