import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const styles={
    menu:{
        color: '#2b8b0e',
        fontSize: '17px',
        fontWeight:'bold'
    }
}
const Freelance_category_NavBar = () => {
    const [navbar, setNavbar]=useState(false);
    const changeBg =()=>{
        if(window.scrollY>=30){
            setNavbar(true);
        }else{
            setNavbar(false);
        }
    };
    window.addEventListener("scroll",changeBg);
    
    return (
        <>
            <nav className={navbar ? "navbar scroll navbar-expand-sm  fixed-top" : "navbar navbar-expand-sm fixed-top"} id="homapageNavbar">
                <a className="navbar-brand ml-5" href="#">BooKing's Freelancers</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end mx-5" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/Freelance">
                                <a className="nav-link" aria-current="page" href="#" style={styles.menu}>Home</a>
                            </Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link to="/Freelance">
                            <a className="nav-link" style={styles.menu}>Gig</a>
                            </Link>
                        </li> */}
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Freelance_category_NavBar;