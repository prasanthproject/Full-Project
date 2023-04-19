import React from 'react'
import Freelance_category_NavBar from './Freelance_category_NavBar';
import IMAGES from '../../Imges/Image'
import { catering_freelance, photography_freelance, Beautician_freelance,Invitation_Freelance, Boutique_Freelance, HairStylist_Freelance, Mehandi_Freelance, Videographer_Freelance } from '../freelance_data'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import StarIcon from '@mui/icons-material/Star';
import {useNavigate } from 'react-router-dom';
import './Freelance_category.css'
const Freelance_catering = () => {
  const navigate =useNavigate();
    return (
        <>

            <Freelance_category_NavBar />
            <div id="freelance_category_title">
                <h3> Catering Services {'&'} Hotals </h3>
            </div>
            <div className="container" id="freelance_card">
                <div className="row justify-content-around">
                    {catering_freelance.map((item) => (
                        <div className="col-lg-3 mx-4">
                            <div id="card" role="button" onClick={()=>navigate(`/freelance/catering/productpage/${item.id}` )}>
                                <div id="img">
                                    <img src={IMAGES.catering2} alt="" />
                                </div>
                                <div id="card-body">
                                    <div className="row">
                                        <div className="col-lg-9">
                                            <h4> {item.name}</h4>
                                            <p> {item.category}</p>
                                        </div>
                                        <img id="profile" className="col-lg-3" src={item.profile} alt="" />
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <h5 id="address">{item.address} </h5>
                                        </div>
                                        <div className="col-lg-5" id="icon"> <StarIcon id="star_icon" /> <label>{item.star} </label></div>
                                    </div>
                                </div>
                                <div id="card-footer" className="">
                                    <div className="row">
                                        <div className="col-lg-7" id="icons">
                                            <a href={item.insta} target="_blank"> <InstagramIcon /> </a>
                                            <a href={item.fb} target="_blank"> <FacebookIcon /> </a>
                                        </div>
                                        <div className="col-lg-5 " id="price">
                                            <div>
                                                <label>Start at </label><p> &#8377;{item.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Freelance_catering;

// **********************************************************    FREELANCE PHOTOGRAPHY    ***************************************************

export const Freelance_Photography = () => {
    const navigate =useNavigate();
    return (
        <>
            <Freelance_category_NavBar />
            <div id="freelance_category_title">
                <h3> Photographer Freelancers {' & '} Photo Studio </h3>
            </div>
            <div className="container" id="freelance_card">
                <div className="row justify-content-around">
                    {photography_freelance.map((item) => (
                        <div className="col-lg-3 mx-4">
                            <div id="card" role="button" onClick={()=>navigate(`/freelance/photpgraphy/productpage/${item.id}` )}>
                                <div id="img">
                                    <img src={IMAGES.photo1} alt="" />
                                </div>
                                <div id="card-body">
                                    <div className="row">
                                        <div className="col-lg-9">
                                            <h4> {item.name}</h4>
                                            <p> {item.category} {' - '} {item.work}</p>
                                        </div>
                                        <img id="profile" className="col-lg-3" src={item.profile} alt="" />
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <h5 id="address">{item.address} </h5>
                                        </div>
                                        <div className="col-lg-5" id="icon"> <StarIcon id="star_icon" /> <label>{item.star} </label></div>
                                    </div>
                                </div>
                                <div id="card-footer" className="">
                                    <div className="row">
                                        <div className="col-lg-7" id="icons">
                                            <a href={item.insta} target="_blank"> <InstagramIcon /> </a>
                                            <a href={item.fb} target="_blank"> <FacebookIcon /> </a>
                                        </div>
                                        <div className="col-lg-5 " id="price">
                                            <div>
                                                <label>Start at </label><p> &#8377;{item.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

// **********************************************************    FREELANCE MAKEUP    ***************************************************

export const Freelance_Makeup = () => {
    const navigate =useNavigate();
    return (
        <>
            <Freelance_category_NavBar />
            <div id="freelance_category_title">
                <h3> Beauticians {'&'}Beauty Parlour Shopes </h3>
            </div>
            <div className="container" id="freelance_card">
                <div className="row justify-content-around">
                    {Beautician_freelance.map((item) => (
                        <div className="col-lg-3 mx-4">
                            <div id="card"  role="button" onClick={()=>navigate(`/freelance/makeup/productpage/${item.id}` )}>
                                <div id="img">
                                    <img src={IMAGES.beautician2} alt="" />
                                </div>
                                <div id="card-body">
                                    <div className="row">
                                        <div className="col-lg-9">
                                            <h4> {item.name}</h4>
                                            <p> {item.category}{' - '} {item.work}</p>
                                        </div>
                                        <img id="profile" className="col-lg-3" src={item.profile} alt="" />
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <h5 id="address">{item.address} </h5>
                                        </div>
                                        <div className="col-lg-5" id="icon"> <StarIcon id="star_icon" /> <label>{item.star} </label></div>
                                    </div>
                                </div>
                                <div id="card-footer" className="">
                                    <div className="row">
                                        <div className="col-lg-7" id="icons">
                                            <a href={item.insta} target="_blank"> <InstagramIcon /> </a>
                                            <a href={item.fb} target="_blank"> <FacebookIcon /> </a>
                                        </div>
                                        <div className="col-lg-5 " id="price">
                                            <div>
                                                <label>Start at </label><p> &#8377;{item.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

// **********************************************************    FREELANCE INVITATIONS    ***************************************************

export const Freelance_Invite = () => {
    const navigate =useNavigate();
    return (
        <>
            <Freelance_category_NavBar />
            <div id="freelance_category_title">
                <h3> Invitation Cards Shopes </h3>
            </div>
            <div className="container" id="freelance_card">
                <div className="row justify-content-around">
                    {Invitation_Freelance.map((item) => (
                        <div className="col-lg-3 mx-4">
                            <div id="card" role="button" onClick={()=>navigate(`/freelance/invite/productpage/${item.id}` )}>
                                <div id="img">
                                    <img src={IMAGES.invitation2} alt="" />
                                </div>
                                <div id="card-body">
                                    <div className="row">
                                        <div className="col-lg-9">
                                            <h4> {item.name}</h4>
                                            <p> {item.category} {' - '} {item.work}</p>
                                        </div>
                                        <img id="profile" className="col-lg-3" src={item.profile} alt="" />
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <h5 id="address">{item.address} </h5>
                                        </div>
                                        <div className="col-lg-5" id="icon"> <StarIcon id="star_icon" /> <label>{item.star} </label></div>
                                    </div>
                                </div>
                                <div id="card-footer" className="">
                                    <div className="row">
                                        <div className="col-lg-7" id="icons">
                                            <a href={item.insta} target="_blank"> <InstagramIcon /> </a>
                                            <a href={item.fb} target="_blank"> <FacebookIcon /> </a>
                                        </div>
                                        <div className="col-lg-5 " id="price">
                                            <div>
                                                <label>Start at </label><p> &#8377;{item.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

// **********************************************************    FREELANCE BOUTIQUE   ***************************************************

export const Freelance_Boutique = () => {
    const navigate =useNavigate();
    return (
        <>

            <Freelance_category_NavBar />
            <div id="freelance_category_title">
                <h3>  Boutique Shop {' & '}Costume Designers  </h3>
            </div>
            <div className="container" id="freelance_card">
                <div className="row justify-content-around">
                    {Boutique_Freelance.map((item) => (
                        <div className="col-lg-3 mx-4">
                            <div id="card" role="button" onClick={()=>navigate(`/freelance/boutique/productpage/${item.id}` )}>
                                <div id="img">
                                    <img src={IMAGES.a3} alt="" />
                                </div>
                                <div id="card-body">
                                    <div className="row">
                                        <div className="col-lg-9">
                                            <h4> {item.name}</h4>
                                            <p> {item.category}{' - '} {item.work}</p>
                                        </div>
                                        <img id="profile" className="col-lg-3" src={item.profile} alt="" />
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <h5 id="address">{item.address} </h5>
                                        </div>
                                        <div className="col-lg-5" id="icon"> <StarIcon id="star_icon" /> <label>{item.star} </label></div>
                                    </div>
                                </div>
                                <div id="card-footer" className="">
                                    <div className="row">
                                        <div className="col-lg-7" id="icons">
                                            <a href={item.insta} target="_blank"> <InstagramIcon /> </a>
                                            <a href={item.fb} target="_blank"> <FacebookIcon /> </a>
                                        </div>
                                        <div className="col-lg-5 " id="price">
                                            <div>
                                                <label>Start at </label><p> &#8377;{item.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

// **********************************************************    FREELANCE HAIRSTYLIST    ***************************************************

export const Freelance_Hairstylist = () => {
    const navigate =useNavigate();
    return (
        <>
            <Freelance_category_NavBar />

            <div id="freelance_category_title">
                <h3> HairStylist Freelancers {'&'} Shaloon </h3>
            </div>
            <div className="container" id="freelance_card">
                <div className="row justify-content-around">
                    {HairStylist_Freelance.map((item) => (
                        <div className="col-lg-3 mx-4">
                            <div id="card" role="button" onClick={()=>navigate(`/freelance/hairstylist/productpage/${item.id}` )}>
                                <div id="img">
                                    <img src={IMAGES.beautician3} alt="" />
                                </div>
                                <div id="card-body">
                                    <div className="row">
                                        <div className="col-lg-9">
                                            <h4> {item.name}</h4>
                                            <p> {item.category}{' - '} {item.work}</p>
                                        </div>
                                        <img id="profile" className="col-lg-3" src={item.profile} alt="" />
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <h5 id="address">{item.address} </h5>
                                        </div>
                                        <div className="col-lg-5" id="icon"> <StarIcon id="star_icon" /> <label>{item.star} </label></div>
                                    </div>
                                </div>
                                <div id="card-footer" className="">
                                    <div className="row">
                                        <div className="col-lg-7" id="icons">
                                            <a href={item.insta} target="_blank"> <InstagramIcon /> </a>
                                            <a href={item.fb} target="_blank"> <FacebookIcon /> </a>
                                        </div>
                                        <div className="col-lg-5 " id="price">
                                            <div>
                                                <label>Start at </label><p> &#8377;{item.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

// **********************************************************    FREELANCE MEHANDI   ***************************************************

export const Freelance_Mehandi = () => {
    const navigate =useNavigate();
    return (
        <>
            <Freelance_category_NavBar />
            <div id="freelance_category_title">
                <h3> Mehandi Designer {'&'} Freelancers  </h3>
            </div>
            <div className="container" id="freelance_card">
                <div className="row justify-content-around">
                    {Mehandi_Freelance.map((item) => (
                        <div className="col-lg-3 mx-4">
                            <div id="card" role="button" onClick={()=>navigate(`/freelance/mehandi/productpage/${item.id}` )}>
                                <div id="img">
                                    <img src={IMAGES.mehandi2} alt="" />
                                </div>
                                <div id="card-body">
                                    <div className="row">
                                        <div className="col-lg-9">
                                            <h4> {item.name}</h4>
                                            <p> {item.category}{' - '} {item.work}  </p>
                                        </div>
                                        <img id="profile" className="col-lg-3" src={item.profile} alt="" />
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <h5 id="address">{item.address} </h5>
                                        </div>
                                        <div className="col-lg-5" id="icon"> <StarIcon id="star_icon" /> <label>{item.star} </label></div>
                                    </div>
                                </div>
                                <div id="card-footer" className="">
                                    <div className="row">
                                        <div className="col-lg-7" id="icons">
                                            <a href={item.insta} target="_blank"> <InstagramIcon /> </a>
                                            <a href={item.fb} target="_blank"> <FacebookIcon /> </a>
                                        </div>
                                        <div className="col-lg-5 " id="price">
                                            <div>
                                                <label>Start at </label><p> &#8377;{item.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

// **********************************************************    FREELANCE VIDEOGRAPHERS    ***************************************************

export const Freelance_Videographers = () => {
    const navigate =useNavigate();
    return (
        <>
            <Freelance_category_NavBar />
            <div id="freelance_category_title">
                <h3> Videographer Freelancers {'&'} Studio <span>or</span> Shopes </h3>
            </div>
            <div className="container" id="freelance_card">
                <div className="row justify-content-around">
                    {Videographer_Freelance.map((item) => (
                        <div className="col-lg-3 mx-4">
                            <div id="card" role="button" onClick={()=>navigate(`/freelance/videographer/productpage/${item.id}` )}>
                                <div id="img">
                                    <img src={IMAGES.photo4} alt="" />
                                </div>
                                <div id="card-body">
                                    <div className="row">
                                        <div className="col-lg-9">
                                            <h4> {item.name}</h4>
                                            <p> {item.category}{' - '} {item.work}</p>
                                        </div>
                                        <img id="profile" className="col-lg-3" src={item.profile} alt="" />
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <h5 id="address">{item.address} </h5>
                                        </div>
                                        <div className="col-lg-5" id="icon"> <StarIcon id="star_icon" /> <label>{item.star} </label></div>
                                    </div>
                                </div>
                                <div id="card-footer" className="">
                                    <div className="row">
                                        <div className="col-lg-7" id="icons">
                                            <a href={item.insta} target="_blank"> <InstagramIcon /> </a>
                                            <a href={item.fb} target="_blank"> <FacebookIcon /> </a>
                                        </div>
                                        <div className="col-lg-5 " id="price">
                                            <div>
                                                <label>Start at </label><p> &#8377;{item.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
