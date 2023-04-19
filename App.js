import './App.css';
import Customer_Details from './Components/Customer_Details';
import Homepage from './Components/Homepage';
import Login_From from './Components/Login_Form';
import Login from './Components/Login';
// import Login from './Components/Login1';
// import Register from './Components/Register'
import Package from './package/Package';
import Planpackage from './Planners/Planpackage';
import Package_Vendor from './package/Vendor';
import Package_Catering from './package/Catering';
import Package_Boutique from './package/Boutique';
import Package_Mehandi from './package/Mehandi';
import Package_Beautician from './package/Beautician';
import Package_Invitations from './package/Invitation';
import Package_photo_video from './package/Photo_video_graphers';
import MenuItems from './Planners/Cateting/Menu_items';

import Vendor from './Planners/Vendor/Vendor';
import Catering from './Planners/Cateting/Catering';
import Boutique from './Planners/Boutique/Boutique';
import Mehandi from './Planners/Mehandi/Mehandi';
import Beautician from './Planners/Beautician/Beautician';
import Invitation from './Planners/Invitation/Invitation';
import Photo_video_grapher from './Planners/Photo_Video_grapher/Photo_Video_grapher';

import Vendor_Productpage from './Planners/Vendor/Vendor_Productpage'
import Invite_ProductPage from './Planners/Invitation/Invite_ProductPage';
import Boutique_ProductPage from './Planners/Boutique/Boutique_ProductPage';
import { Boutiques_shoe_ProductPage, Top_Groom_Collection, Top_Bride_Collection } from './Planners/Boutique/Boutique_ProductPage';

import Freelance_Homepage from './Freelancer/Freelance_Homepage';
import Freelance_catering from './Freelancer/Freelance_Category/Freelance_catering'
import { Freelance_Photography, Freelance_Makeup, Freelance_Invite, Freelance_Boutique, Freelance_Hairstylist, Freelance_Mehandi, Freelance_Videographers } from './Freelancer/Freelance_Category/Freelance_catering'
import {Freelance_catering_Productpage,Freelance_photography_Productpage,Freelance_beautician_Productpage,Freelance_invitation_Productpage,Freelance_boutique_Productpage,Freelance_hairstylist_Productpage,Freelance_mehandi_Productpage,Freelance_vidoegrapher_Productpage} from './Freelancer/Freelance_Category/Freelance_category_Productpage';

import Invitation_CartList from './Planners/Invitation/Invitation_CartList';
import AOS from "aos";
import 'aos/dist/aos.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.js';
// import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

AOS.init();

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/homepage" element={<Homepage />} />
                   <Route path="/" element={<Login_From />} />

                    <Route path="/register" element={<Login/>} />
                    <Route path="/customer_details" element={<Customer_Details/>} />
                  
                  
                    {/* <Route path="/" element={<Login />} />

                    <Route path="/register" element={<Register />} />
                     */}
                    <Route path="/package" element={<Package />} />
                    <Route path="/planpackage" element={<Planpackage />} />

                    <Route path="/package/vendor" element={<Package_Vendor />} />
                    <Route path="/package/catering" element={<Package_Catering />} />
                    <Route path="/package/catering/menu_items" element={<MenuItems />} />

                    <Route path="/package/boutique" element={<Package_Boutique />} />
                    <Route path="/package/mehandi" element={<Package_Mehandi />} />
                    <Route path="/package/beautician" element={<Package_Beautician />} />
                    <Route path="/package/invitation" element={<Package_Invitations />} />
                    <Route path="/package/photo_video_graphers" element={<Package_photo_video />} />

                    <Route path="/planpackage/vendors" element={<Vendor />} />
                    <Route path="/planpackage/catering" element={<Catering />} />
                    <Route path="/planpackage/boutique" element={<Boutique />} />
                    <Route path="/planpackage/mehandi" element={<Mehandi />} />
                    <Route path="/planpackage/beautician" element={<Beautician />} />
                    <Route path="/planpackage/invitation" element={<Invitation />} />
                    <Route path="/planpackage/photo_video_graphers" element={<Photo_video_grapher />} />

                    <Route path="/planpackage/invite/productpage/:id" element={<Invite_ProductPage />} />
                    <Route path="/planpackage/boutique/productpage/:id" element={<Boutique_ProductPage />} />
                    <Route path="/planpackage/boutique/shoe_productpage/:id" element={<Boutiques_shoe_ProductPage />} />
                    <Route path="/planpackage/boutique/top_groom_productpage/:id" element={<Top_Groom_Collection />} />
                    <Route path="/planpackage/boutique/top_bride_productpage/:id" element={<Top_Bride_Collection />} />
                    <Route path="/planpackage/vendor/productpage/:id" element={<Vendor_Productpage/>}/>

                    <Route path="/planpackage/invitation/cartlist" element={<Invitation_CartList />} />

                    <Route path="/freelance" element={<Freelance_Homepage />} />
                    <Route path="/freelance/catering" element={<Freelance_catering />} />
                    <Route path="/freelance/photpgraphy" element={<Freelance_Photography />} />
                    <Route path="/freelance/makeup" element={<Freelance_Makeup />} />
                    <Route path="/freelance/invite" element={<Freelance_Invite />} />
                    <Route path="/freelance/boutique" element={<Freelance_Boutique />} />
                    <Route path="/freelance/hairstylist" element={<Freelance_Hairstylist />} />
                    <Route path="/freelance/mehandi" element={<Freelance_Mehandi />} />
                    <Route path="/freelance/videographer" element={<Freelance_Videographers />} />
                    
                    <Route path="/freelance/catering/productpage/:id" element={<Freelance_catering_Productpage />} />
                    <Route path="/freelance/photpgraphy/productpage/:id" element={<Freelance_photography_Productpage />} />
                    <Route path="/freelance/makeup/productpage/:id" element={<Freelance_beautician_Productpage />} />
                    <Route path="/freelance/invite/productpage/:id" element={<Freelance_invitation_Productpage />} />
                    <Route path="/freelance/boutique/productpage/:id" element={<Freelance_boutique_Productpage />} />
                    <Route path="/freelance/hairstylist/productpage/:id" element={<Freelance_hairstylist_Productpage />} />
                    <Route path="/freelance/mehandi/productpage/:id" element={<Freelance_mehandi_Productpage />} />
                    <Route path="/freelance/videographer/productpage/:id" element={<Freelance_vidoegrapher_Productpage />} />
                    



                </Routes>
            </Router>
         
        </div>

    );
}

export default App;
