import React, { useState } from 'react'
import './planner.css'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from 'react-router-dom';

const styles = {
    menu: {
        color: '#2b8b0e',
        fontSize: '20px',
        fontWeight: 'bold'
    }

}
const Planner_navbar =  () => {

    const [navbar, setNavbar] = useState(false);
    const changeBg2 = () => {
        if (window.scrollY >= 450) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };
    window.addEventListener("scroll", changeBg2);
    return (
        <div>
            <nav className={navbar ? "navbar Planner_scroll navbar-expand-sm  fixed-top" : "navbar navbar-expand-sm fixed-top"} id="planner_navbar">
                <div className="container-fluid">
                    <a className="navbar-brand text-danger ml-5" href="#">BooKing</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end mx-5" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link to="/homepage">
                                    <a className="nav-link" aria-current="page" href="#" style={styles.menu}>Home</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Freelance">
                                    <a className="nav-link" aria-current="page" style={styles.menu}>Freelencers</a>
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link to="/planpackage">
                                    <button className="btn" aria-current="page"><ExitToAppIcon id="homeicon" /></button>
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

}
export default Planner_navbar;