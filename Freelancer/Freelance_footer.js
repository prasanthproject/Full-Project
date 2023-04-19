import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';


const Freelance_footer=()=>{
    return(
    <div id="freelance_footer">
    <div className="container-fluid mt-5" id="footer_detail">     
        <div id="personal_details"className="row">
                <div className="col-md-4 col-12" >
                <h3 className="mx-4 mt-3 "> Address:</h3>
                        <div className="text-center mx-4 mt-4">
                            <h6 className="text-start">NO:6</h6>
                            <h6 className="text-start">Gandhi Street</h6>
                            <h6 className="text-start">Aruppukkotai - 626101</h6>
                            <h6 className="text-start">Virudhunagar, TamilNadu, India</h6>                                  
                        </div>  
                
                </div>
                <div className="col-md-4 col-12">
                    <h3 className="mx-4 mt-3">Contact</h3>
                            <div className="text-center mx-4 mt-4">
                           <h6 className="text-start ml-4"> Phone: 93617 81873 , 84895 02811</h6>
                                 <h6 className="text-start ml-4"> Email:  thandunane@gmail.com </h6>  
                            </div> 
                </div>
                <div className="col-md-4 col-12">
                    <h3 className="mx-4 mt-3">Social Media</h3>
                        <div className="mx-4 mt-3">
                            <ul className="list-group list-group-horizontal" id="logo">
                                <li id="icons" className=""><FacebookIcon  id="facebook"   fontSize="large"/></li>
                                <li id="icons" className=""><InstagramIcon id="instagram"  fontSize="large"/></li>
                                <li id="icons" className=""><YouTubeIcon id="youtube" fontSize="large"/></li>
                                <li id="icons" className=""><TwitterIcon id="twitter" fontSize="large"/></li>

                            </ul> 
                        </div>  
                </div> 
        </div>
        <hr/>
        <div id="other_details"className="row px-2" >
            <div className="col-md-2 col-6">
                <h5 className="text-start mx-4"> About </h5>
                <ul id="about_list">
                    <li className="text-start"><a href="#">About us</a></li>
                    <li className="text-start"><a href="#">Blog</a></li>
                    <li className="text-start"><a href="#">Contect us</a></li>
                    <li className="text-start"><a href="#">Our's History</a></li>
                </ul>
            </div>
            <div className="col-md-2 col-6">
                <h5 className="text-start mx-4"> Help</h5>
                <ul id="help_list">
                    <li className="text-start"><a href="#">Customer Care</a></li>
                    <li className="text-start"><a href="#">FAQ</a></li>
                    <li className="text-start"><a href="#">Payments</a></li>
              </ul>
            </div>
            <div className="col-md-2 col-6">
                <h5 className="text-start mx-4"> Legal</h5>
                <ul id="legal_list">
                    <li className="text-start"><a href="#">Privacy Policy</a></li>
                    <li className="text-start"><a href="#">Terms and condition</a></li>
                    <li className="text-start"><a href="#">Security</a></li>
                </ul>
            </div>
        </div>
   </div>
 </div>
 ) 
}

export default Freelance_footer;
 