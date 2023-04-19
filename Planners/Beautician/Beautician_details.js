import React ,{useState}from 'react';
import './Beautician.css';
// import IMAGES from '../../Imges/Image'
import {Bride_Nails,Bridal_Hairstyle,Bridal_Makeup,Bridel_Lashes,Bride_Facial,Groom_Hairstyle} from './Beautician_data';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const Beautician_details=()=>{
    return(
        <div>
            
        </div>
    )
}

const Groom=()=>{
    const [groomState,setgroomState]=useState(0);
    const groomtoggleTab=(index)=>{
        setgroomState(index);
      
    }

    return(
        <div> 
               <div className=" my-5">
                   <ul className="nav nav-pills justify-content-center "  id="groom_menu">
                   <li className="nav-item col-3 ">
                        <a className={groomState === 1 ? 'nav-link active':'nav-link'} data-toggle="pill" href="#groom1" onClick={()=>groomtoggleTab(1)}>Hairstyle</a>
                    </li>
                    {/* <li className="nav-item col-3">
                       <a className={groomState === 2 ? 'nav-link active':'nav-link'} data-toggle="pill" href="#bride1" onClick={()=>groomtoggleTab(2)}>Makeup</a>
                    </li> */}
                   </ul>
                  
                </div>
                <div className="tab-content" >
                        <div id="groom1"  className={groomState === 1 ? "container tab-pane  active col-md-12":"container tab-pane fade "}>
                                 <div className="row">
                                     <div className="col-3">

                                     </div>
                                     <div className="col-9">
                                        {Groom_Hairstyle.map((value)=> (
                                                <div className=" row my-2 " id="beauty_card">
                                                    <div className="col-3" id="part1">
                                                        <img src={value.image} alt="" />                                                
                                                    </div>
                                                    <div className="col-6" id="part2">
                                                        <p  id="name"> {value.name}</p>          
                                                        <label id="price"> <span>&#8377;</span>{value.price} - </label>   <label id="mins">45 mins </label>                                                     
                                                    </div>
                                                    <div className="col-3" id="part3">
                                                        <input type="checkbox"  id="nail"  className="checkbox"/>
                                                        <label for="nail">
                                                            <button type="button"> Booking Now</button>             
                                                        </label>                                        
                                                    </div> 
                                                </div> 
                                            ))} 
                                     </div>

                                 </div>
                        </div>
                        {/* <div id="bride1"  className={groomState === 2 ? "container tab-pane  active col-md-12":"container tab-pane fade "}>
                                 Makeup
                        </div> */}

                </div>
        </div>
    )
}

const Bride=()=>{
    const [brideState,setbrideState]=useState(0);
    const bridetoggleTab=(index)=>{
        setbrideState(index);
}
    const [nail_lashes_state,setnail_lashes_state]=useState("");
    const nail_lashes_toggleTab=(index)=>{
        setnail_lashes_state(index);
    }
    const [makeup_facial_state,setmakeup_facial_state]=useState('');
    const setmakeup_facial_toggleTab=(index)=>{
        setmakeup_facial_state(index);
    }
    const [readmore,setReadmore]=useState(true);

    return(
        <div>
               <div className=" my-5">
                   <ul className="nav nav-pills justify-content-center "  id="bride_menu">
                   <li className="nav-item col-10 col-md-3 mx-1">
                        <a className={brideState === 1 ? 'nav-link active':'nav-link'} data-toggle="pill" href="#hairstyle" onClick={()=>bridetoggleTab(1)}>Hairstyle</a>
                    </li>
                    <li className="nav-item col-10 col-md-3 mx-1">
                       <a className={brideState === 2 ? 'nav-link active':'nav-link'} data-toggle="pill" href="#makeup_facial" onClick={()=>bridetoggleTab(2)}>Makeup</a>
                    </li>
                    <li className="nav-item col-10 col-md-3 mx-1">
                       <a className={brideState === 3 ? 'nav-link active':'nav-link'} data-toggle="pill" href="#nail_lashes" onClick={()=>bridetoggleTab(3)}>Nails {'&'} Lashes</a>
                    </li>
                   </ul>
                  
                </div>
                <div className="tab-content" >
               
                        <div id="hairstyle"     className={brideState === 1 ? "container tab-pane  active col-md-12":"container tab-pane fade "}>
                              <div className="row">
                                    <div className="col-3">

                                    </div>
                                    <div className="col-9">
                                        
                                        {Bridal_Hairstyle.map((value)=> (
                                            <div className=" row my-2 " id="beauty_card">
                                                <div className="col-3" id="part1">
                                                    <img src={value.image} alt="" />                                                
                                                </div>
                                                <div className="col-6" id="part2">
                                                    <p  id="name"> {value.name}</p>          
                                                    <label id="price"> <span>&#8377;</span>{value.price} - </label>   <label id="mins">45 mins </label>                                                     
                                                </div>
                                                <div className="col-3" id="part3">
                                                        <button type="button"> Booking Now</button>             
                                                    {/* <input type="checkbox"  id="nail"  className="checkbox"/>
                                                    <label for="nail">
                                                    </label>                                         */}
                                                </div> 
                                            </div> 
                                        ))} 
                                    </div>
                              </div>
                                                                  
                        </div>

                        <div id="makeup_facial" className={brideState === 2 ? "container tab-pane  active col-md-12":"container tab-pane fade "}>
                            <div className="row">
                                <div className="col-10 col-md-3">
                                    <ul className="nav nav-pills flex-column " id="nail_lashes">
                                        <li className="nav-item d-block col-12 mb-1">
                                            <a className={makeup_facial_state === 1 ? 'nav-link active':'nav-link'} data-toggle="pill" href="#nail" onClick={()=>setmakeup_facial_toggleTab(1)}>Makeup</a>
                                        </li>
                                        <li className="nav-item d-block col-12 my-2">
                                            <a className={makeup_facial_state === 2 ? 'nav-link active':'nav-link'} data-toggle="pill" href="#lashes" onClick={()=>setmakeup_facial_toggleTab(2)}>Facial</a>
                                        </li>    
                                    </ul>
                                </div>
                                <div className="col-12 col-md-9 ">
                                    <div className="tab-content">
                                        <div id="nail"   className={makeup_facial_state === 1 ? "container tab-pane  active col-12":"container tab-pane fade "}>
                                            <Makeup/>
                                        </div>
                                        <div id="lashes" className={makeup_facial_state === 2 ? "container tab-pane  active col-12":"container tab-pane fade "}>
                                            <Facial/>
                                        </div>
                                     </div>
                                </div>
                            </div>                               
                        </div>
 
                        <div id="nail_lashes" className={brideState === 3 ? "container tab-pane  active col-md-12":"container tab-pane fade "}>
                           <div className="row">
                                <div className="col-10 col-md-3">
                                    <ul className="nav nav-pills flex-column " id="nail_lashes">
                                        <li className="nav-item d-block col-12 mb-1">
                                            <a className={nail_lashes_state === 1 ? 'nav-link active':'nav-link'} data-toggle="pill" href="#nail" onClick={()=>nail_lashes_toggleTab(1)}>Nail</a>
                                        </li>
                                        <li className="nav-item d-block col-12 my-2">
                                            <a className={nail_lashes_state === 2 ? 'nav-link active':'nav-link'} data-toggle="pill" href="#lashes" onClick={()=>nail_lashes_toggleTab(2)}>Lashes</a>
                                        </li>    
                                    </ul>
                                </div>
                                <div className="col-12 col-md-9">
                                    <div className="tab-content">
                                        <div id="nail"   className={nail_lashes_state === 1 ? "container tab-pane  active col-md-12":"container tab-pane fade "}>
                                            <Nails/>
                                        </div>
                                        <div id="lashes" className={nail_lashes_state === 2 ? "container tab-pane  active col-md-12":"container tab-pane fade "}>
                                            <Lashes/>
                                        </div>
                                    </div>
                                </div>
                           </div>
                        </div>        
                </div>
        </div>
    
    )
}
const Makeup=()=>{
    const [readmore,setReadmore]=useState(true);

    return(
        <>
            <div>
                {Bridal_Makeup.map((value,index)=> (
                    <div className=" row my-2 " id="beauty_card">
                        <div className="col-12 col-md-3" id="part1">
                            <img src={value.image} alt="" />                                                
                            {/* <img src={IMAGES.} alt="" /> */}
                        </div>
                        <div className="col-12 col-md-6" id="part2">
                            <p id="name"> {value.name}</p>          
                            <label id="price"> <span>&#8377;</span>{value.price} - </label>   <label id="mins">45 mins </label>                                                     
                                <div onClick={()=>setReadmore(!readmore)}>
                                    <p key={value} id="details" className="text-primary">{readmore ? value.details.slice(0,15): value.details} 
                                        <span className="read-or-hide"> {readmore ? '...Readmoe':'Show Less'}</span>
                                    </p>   
                                </div>
                        </div>
                        <div className="col-12 col-md-3" id="part3">
                                <button type="button"> Booking Now</button>             
                            {/* <input type="checkbox"  id="nail"  className="checkbox"/>
                            <label for="nail">
                            </label>                                         */}
                        </div> 
                    </div> 
                ))} 
            </div>
        </>
    )
}
const Facial=()=>{
    const [readmore,setReadmore]=useState(true);

    return(
        <>
            <div>
                {Bride_Facial.map((value,index)=> (
                    <div className=" row my-2 " id="beauty_card">
                        <div className="col-3" id="part1">
                            <img src={value.image} alt="" />                                                
                        </div>
                        <div className="col-6" id="part2">
                            <p id="name"> {value.name}</p>          
                            <label id="price"> <span>&#8377;</span>{value.price} - </label>   <label id="mins">45 mins </label>                                                     
                                <div onClick={()=>setReadmore(!readmore)}>
                                    <p key={value} id="details" className="text-primary">{readmore ? value.details.slice(0,15): value.details} 
                                        <span className="read-or-hide"> {readmore ? '...Readmoe':'Show Less'}</span>
                                    </p>   
                                </div>
                        </div>
                        <div className="col-3" id="part3">
                                <button type="button"> Booking Now</button>             
                            {/* <input type="checkbox"  id="nail"  className="checkbox"/>
                            <label for="nail">
                            </label>                                         */}
                        </div> 
                    </div> 
                ))} 
            </div>
        
        </>
    )
}

const Nails=()=>{
    return(
        <div>                       
            {Bride_Nails.map((value)=> (
                <div className=" row my-2 " id="beauty_card">
                    <div className="col-3" id="part1">
                        <img src={value.image} alt="" />                                                
                    </div>
                    <div className="col-6" id="part2">
                        <p id="name">  {value.name}</p>          
                        <label id="price"> <span>&#8377;</span>{value.price} - </label>   <label id="mins">45 mins </label>                                                     
                    </div>
                    <div className="col-3" id="part3">
                                <button type="button"> Booking Now</button>             
                        {/* <input type="checkbox"  id="nail"  className="checkbox"/>
                        <label for="nail">
                        </label>                                         */}
                    </div> 
                </div> 
            ))}  
    </div>
    )
}
const Lashes=()=>{
    const arrowStyle = {
        background: "#fff",
        border: 0,
        color: "red",
      };
      const CustomRight = ({ onClick }) => (
        <button className="beautician_arrow right" onClick={onClick} style={arrowStyle}>
          <ArrowForwardIcon style={{ fontSize: "25px",top:"10px" }} />
        </button>
      );
      const CustomLeft = ({ onClick }) => (
        <button className="beautician_arrow left" onClick={onClick} style={arrowStyle}>
          <ArrowBackIcon style={{ fontSize: "25px" }} />
        </button>
      );
    const responsive1 = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 1500, min: 992},
          items: 3
        },
        desktop: {
          breakpoint: { max: 992, min: 768 },
          items: 2
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
            <div id="lashes"> 
                <Carousel responsive={responsive1}  customRightArrow={<CustomRight />} customLeftArrow={<CustomLeft />}>
                        {Bridel_Lashes.map((item1)=>(
                        <div className="my-5 mx-1 py-2" id="lashes_card">
                            <div className="card mx-1">
                                    <img src={item1.image} alt="" className="card-img-top"/>
                            </div>
                            <div className="row mt-2" id="lashes_card_footer">
                                    <div className="col-8">
                                            <button className="btn">Add to Cart <ShoppingCartIcon/> </button>  
                                    </div>
                                    <div className="col-4">
                                        <p className="text-end px-2" id='price'><span>&#8377;</span>{item1.price}</p>    
                                    </div>
                           </div>
                        </div>
                        ))}
                </Carousel>   
            </div>
        </>

    )
}
export {Bride,Groom}
export default Beautician_details;