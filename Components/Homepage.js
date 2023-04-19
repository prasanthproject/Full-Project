import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Homepage.css';
import Homepage_header from './Homepage_header'
import Blog from './Blog'
import Categories from './Categories';
import Footer from './Footer';
import BackToTopScroll from '../BackToTopScroll'
import Profile_card from './Profile_card'
function Homepage(){
    return(
            <div id="homepage">
                <Homepage_header/>
                <Blog/>
                <Profile_card/>
                <BackToTopScroll/>
                <Categories/>          
                <Footer/>
            </div>
    );
}
export default Homepage;