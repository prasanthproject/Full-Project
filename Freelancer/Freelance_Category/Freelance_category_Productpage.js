import React from 'react'
import Freelance_category_NavBar from './Freelance_category_NavBar';
import { Link, useParams } from 'react-router-dom';
import './Freelance_category.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { catering_freelance, photography_freelance, Beautician_freelance, Invitation_Freelance, Boutique_Freelance, HairStylist_Freelance, Mehandi_Freelance, Videographer_Freelance } from '../freelance_data'
import IMAGES from '../../Imges/Image'
import StarIcon from '@mui/icons-material/Star';
import BackToTopScroll from '../../BackToTopScroll'


const Freelance_category_Productpage = () => {
    return (
        <>

        </>
    )
}
export default Freelance_category_Productpage;

// **********************************  FREELANCE CATERING PRODUCTPAGE   **************************
export const Freelance_catering_Productpage = () => {

    const params = useParams();
    const item = catering_freelance.find((element) => element.id === parseInt(params.id));

    return (
        <>
            <Freelance_category_NavBar />
            <div className="container" id="freelance_productpage">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="my-2">
                            <img id="profile" src={item.profile} alt="" />
                            <label> {item.name}</label>
                        </div>
                        <div className="col-lg-5 my-2" id="icon"> <StarIcon id="star_icon" /> <label>{item.star} </label></div>
                        <div className="col-lg-11" >
                            <img src={IMAGES.catering2} width="90%" height="400px" alt="" />
                        </div>
                        <div id="description">
                            <h3>Description: </h3>
                            <p>
                                I have Four year experience  in this field. I have been working in Freelance  for two Years and all my team members are well experienced and Skilled
                            </p>
                        </div>
                        <div id="detail">
                            <h3> Details:</h3>
                            <h4> {item.name}</h4>
                            <p> {item.category} {' - '} {item.work}</p>
                            <div className="row">
                                <div id="icons">
                                    <a href={item.insta} target="_blank"> <InstagramIcon /> </a>
                                    <a href={item.fb} target="_blank"> <FacebookIcon /> </a>
                                    <p id="phoneno">{item.phone} </p>
                                </div>
                            </div>
                            <div id="address">
                                <h3>Address:</h3>
                                <p>{item.address}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div id="card">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h4 id="price"> &#8377;{item.price}</h4>
                                </div>
                                <div className="col-lg-6">
                                    <h4 id="name"> {item.name}</h4>
                                </div>
                            </div>
                            <div>
                                <button className="btn-success"> Booking Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BackToTopScroll/>
        </>
    )
}
// **********************************  FREELANCE PHOTOGRAPHY PRODUCTPAGE   **************************

export const Freelance_photography_Productpage = () => {

    const params = useParams();
    const item = photography_freelance.find((element) => element.id === parseInt(params.id));

    return (
        <>
            <Freelance_category_NavBar />
            <div className="container" id="freelance_productpage">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="my-2">
                            <img id="profile" src={item.profile} alt="" />
                            <label> {item.name}</label>
                        </div>
                        <div className="col-lg-5 my-2" id="icon"> <StarIcon id="star_icon" /> <label>{item.star} </label></div>
                        <div className="col-lg-11" >
                            <img src={IMAGES.photo1} width="90%" height="400px" alt="" />
                        </div>
                        <div id="description">
                            <h3>Description: </h3>
                            <p>
                                I am professional photographer and I am viscom Student and accomplished Photographer.  I have been in the industry for five years  and I have been in the working freelancers for in this industry last one year and have photographed over 20 weddings
                            </p>
                        </div>
                        <div id="detail">
                            <h3> Details:</h3>
                            <h4> {item.name}</h4>
                            <p> {item.category} {' - '} {item.work}</p>
                            <div className="row">
                                <div id="icons">
                                    <a href={item.insta} target="_blank"> <InstagramIcon /> </a>
                                    <a href={item.fb} target="_blank"> <FacebookIcon /> </a>
                                    <p id="phoneno">{item.phone} </p>
                                </div>
                            </div>
                            <div id="address">
                                <h3>Address:</h3>
                                <p>{item.address}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div id="card">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h4 id="price"> &#8377;{item.price}</h4>
                                </div>
                                <div className="col-lg-6">
                                    <h4 id="name"> {item.name}</h4>
                                </div>
                            </div>
                            <div>
                                <button className="btn-success"> Booking Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BackToTopScroll/>

        </>
    )
}
// **********************************  FREELANCE BEAUTICIAN PRODUCTPAGE   **************************

export const Freelance_beautician_Productpage = () => {

    const params = useParams();
    const item = Beautician_freelance.find((element) => element.id === parseInt(params.id));

    return (
        <>
            <Freelance_category_NavBar />
            <div className="container" id="freelance_productpage">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="my-2">
                            <img id="profile" src={item.profile} alt="" />
                            <label> {item.name}</label>
                        </div>
                        <div className="col-lg-5 my-2" id="icon"> <StarIcon id="star_icon" /> <label>{item.star} </label></div>
                        <div className="col-lg-11" >
                            <img src={IMAGES.beautician2} width="90%" height="400px" alt="" />
                        </div>
                        <div id="description">
                            <h3>Description: </h3>
                            <p>
                                I am famous and experienced beautician in this field and I have a own beauty parlour in {item.address}.I have with working as a beautician for top
                            Wedding Events and Other Functions
                            </p>
                        </div>
                        <div id="detail">
                            <h3> Details:</h3>
                            <h4> {item.name}</h4>
                            <p> {item.category} {' - '} {item.work}</p>
                            <div className="row">
                                <div id="icons">
                                    <a href={item.insta} target="_blank"> <InstagramIcon /> </a>
                                    <a href={item.fb} target="_blank"> <FacebookIcon /> </a>
                                    <p id="phoneno">{item.phone} </p>
                                </div>
                            </div>
                            <div id="address">
                                <h3>Address:</h3>
                                <p>{item.address}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div id="card">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h4 id="price"> &#8377;{item.price}</h4>
                                </div>
                                <div className="col-lg-6">
                                    <h4 id="name"> {item.name}</h4>
                                </div>
                            </div>
                            <div>
                                <button className="btn-success"> Booking Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BackToTopScroll/>

        </>
    )
}
// **********************************  FREELANCE INVITATION PRODUCTPAGE   **************************

export const Freelance_invitation_Productpage = () => {

    const params = useParams();
    const item = Invitation_Freelance.find((element) => element.id === parseInt(params.id));

    return (
        <>
            <Freelance_category_NavBar />
            <div className="container" id="freelance_productpage">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="my-2">
                            <img id="profile" src={item.profile} alt="" />
                            <label> {item.name}</label>
                        </div>
                        <div className="col-lg-5 my-2" id="icon"> <StarIcon id="star_icon" /> <label>{item.star} </label></div>
                        <div className="col-lg-11" >
                            <img src={IMAGES.invitation2} width="90%" height="400px" alt="" />
                        </div>
                        <div id="description">
                            <h3>Description: </h3>
                            <p>
                                I have Four year experience  in this field. I have been working in Thandunane for two Years and all my team members are well experienced and Skilled
                    </p>
                        </div>
                        <div id="detail">
                            <h3> Details:</h3>
                            <h4> {item.name}</h4>
                            <p> {item.category} {' - '} {item.work}</p>
                            <div className="row">
                                <div id="icons">
                                    <a href={item.insta} target="_blank"> <InstagramIcon /> </a>
                                    <a href={item.fb} target="_blank"> <FacebookIcon /> </a>
                                    <p id="phoneno">{item.phone} </p>
                                </div>
                            </div>
                            <div id="address">
                                <h3>Address:</h3>
                                <p>{item.address}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div id="card">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h4 id="price"> &#8377;{item.price}</h4>
                                </div>
                                <div className="col-lg-6">
                                    <h4 id="name"> {item.name}</h4>
                                </div>
                            </div>
                            <div>
                                <button className="btn-success"> Booking Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BackToTopScroll/>

        </>
    )
}
// **********************************  FREELANCE BOUTIQUE PRODUCTPAGE   **************************

export const Freelance_boutique_Productpage = () => {

    const params = useParams();
    const item = Boutique_Freelance.find((element) => element.id === parseInt(params.id));

    return (
        <>
            <Freelance_category_NavBar />
            <div className="container" id="freelance_productpage">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="my-2">
                            <img id="profile" src={item.profile} alt="" />
                            <label> {item.name}</label>
                        </div>
                        <div className="col-lg-5 my-2" id="icon"> <StarIcon id="star_icon" /> <label>{item.star} </label></div>
                        <div className="col-lg-11" >
                            <img src={IMAGES.a3} width="90%" height="400px" alt="" />
                        </div>
                        <div id="description">
                            <h3>Description: </h3>
                            <p>
                                I am famous and  experienced in this field for more then four years.I have with working as a costume designers  for top Wedding Function.I have been working for freelance for last one year in Thandunane's Freelancers and I have designed more then hundred dresses
                            </p>
                        </div>
                        <div id="detail">
                            <h3> Details:</h3>
                            <h4> {item.name}</h4>
                            <p> {item.category} {' - '} {item.work}</p>
                            <div className="row">
                                <div id="icons">
                                    <a href={item.insta} target="_blank"> <InstagramIcon /> </a>
                                    <a href={item.fb} target="_blank"> <FacebookIcon /> </a>
                                    <p id="phoneno">{item.phone} </p>
                                </div>
                            </div>
                            <div id="address">
                                <h3>Address:</h3>
                                <p>{item.address}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div id="card">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h4 id="price"> &#8377;{item.price}</h4>
                                </div>
                                <div className="col-lg-6">
                                    <h4 id="name"> {item.name}</h4>
                                </div>
                            </div>
                            <div>
                                <button className="btn-success"> Booking Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BackToTopScroll/>

        </>
    )
}
// **********************************  FREELANCE HAIRSTYLIST PRODUCTPAGE   **************************

export const Freelance_hairstylist_Productpage = () => {

    const params = useParams();
    const item = HairStylist_Freelance.find((element) => element.id === parseInt(params.id));

    return (
        <>
            <Freelance_category_NavBar />
            <div className="container" id="freelance_productpage">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="my-2">
                            <img id="profile" src={item.profile} alt="" />
                            <label> {item.name}</label>
                        </div>
                        <div className="col-lg-5 my-2" id="icon"> <StarIcon id="star_icon" /> <label>{item.star} </label></div>
                        <div className="col-lg-11" >
                            <img src={IMAGES.beautician3} width="90%" height="400px" alt="" />
                        </div>
                        <div id="description">
                            <h3>Description: </h3>
                            <p>
                                I have five year experience for in this field .I have own shallon Shop in {item.address} Also I have experience working as hair stylist for more then Hundred wedding events and Parties.and Also i have worked for freelancer for last Two years
                            </p>
                        </div>
                        <div id="detail">
                            <h3> Details:</h3>
                            <h4> {item.name}</h4>
                            <p> {item.category} {' - '} {item.work}</p>
                            <div className="row">
                                <div id="icons">
                                    <a href={item.insta} target="_blank"> <InstagramIcon /> </a>
                                    <a href={item.fb} target="_blank"> <FacebookIcon /> </a>
                                    <p id="phoneno">{item.phone} </p>
                                </div>
                            </div>
                            <div id="address">
                                <h3>Address:</h3>
                                <p>{item.address}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div id="card">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h4 id="price"> &#8377;{item.price}</h4>
                                </div>
                                <div className="col-lg-6">
                                    <h4 id="name"> {item.name}</h4>
                                </div>
                            </div>
                            <div>
                                <button className="btn-success"> Booking Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BackToTopScroll/>

        </>
    )
}
// **********************************  FREELANCE MEHANDI PRODUCTPAGE   **************************

export const Freelance_mehandi_Productpage = () => {

    const params = useParams();
    const item = Mehandi_Freelance.find((element) => element.id === parseInt(params.id));

    return (
        <>
            <Freelance_category_NavBar />
            <div className="container" id="freelance_productpage">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="my-2">
                            <img id="profile" src={item.profile} alt="" />
                            <label> {item.name}</label>
                        </div>
                        <div className="col-lg-5 my-2" id="icon"> <StarIcon id="star_icon" /> <label>{item.star} </label></div>
                        <div className="col-lg-11" >
                            <img src={IMAGES.mehandi2} width="90%" height="400px" alt="" />
                        </div>
                        <div id="description">
                            <h3>Description: </h3>
                            <p>
                                I'm an experienced mehandi designer. I have been working in this industry for five years and I have put above thousands of designs.I have been working  for freelancer for last  two years in Thandunanne's freelancer.
                            </p>
                        </div>
                        <div id="detail">
                            <h3> Details:</h3>
                            <h4> {item.name}</h4>
                            <p> {item.category} {' - '} {item.work}</p>
                            <div className="row">
                                <div id="icons">
                                    <a href={item.insta} target="_blank"> <InstagramIcon /> </a>
                                    <a href={item.fb} target="_blank"> <FacebookIcon /> </a>
                                    <p id="phoneno">{item.phone} </p>
                                </div>
                            </div>
                            <div id="address">
                                <h3>Address:</h3>
                                <p>{item.address}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div id="card">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h4 id="price"> &#8377;{item.price}</h4>
                                </div>
                                <div className="col-lg-6">
                                    <h4 id="name"> {item.name}</h4>
                                </div>
                            </div>
                            <div>
                                <button className="btn-success"> Booking Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BackToTopScroll/>

        </>
    )
}

export const Freelance_vidoegrapher_Productpage = () => {

    const params = useParams();
    const item = Videographer_Freelance.find((element) => element.id === parseInt(params.id));

    return (
        <>
            <Freelance_category_NavBar />
            <div className="container" id="freelance_productpage">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="my-2">
                            <img id="profile" src={item.profile} alt="" />
                            <label> {item.name}</label>
                        </div>
                        <div className="col-lg-5 my-2" id="icon"> <StarIcon id="star_icon" /> <label>{item.star} </label></div>
                        <div className="col-lg-11" >
                            <img src={IMAGES.photo4} width="90%" height="400px" alt="" />
                        </div>
                        <div id="description">
                            <h3>Description: </h3>
                            <p>
                                I am professional Videographer for 7 years and I have worked as a videographer for over a two hundred weddings and Has experience working as cinematographer for more then 10 short films and also working for Freelancer.
                            </p>
                        </div>
                        <div id="detail">
                            <h3> Details:</h3>
                            <h4> {item.name}</h4>
                            <p> {item.category} {' - '} {item.work}</p>
                            <div className="row">
                                <div id="icons">
                                    <a href={item.insta} target="_blank"> <InstagramIcon /> </a>
                                    <a href={item.fb} target="_blank"> <FacebookIcon /> </a>
                                    <p id="phoneno">{item.phone} </p>
                                </div>
                            </div>
                            <div id="address">
                                <h3>Address:</h3>
                                <p>{item.address}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div id="card">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h4 id="price"> &#8377;{item.price}</h4>
                                </div>
                                <div className="col-lg-6">
                                    <h4 id="name"> {item.name}</h4>
                                </div>
                            </div>
                            <div>
                                <button className="btn-success"> Booking Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BackToTopScroll/>

        </>
    )
}