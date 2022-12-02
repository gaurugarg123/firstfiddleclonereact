import React from 'react'
import './css/Navbar.css';
import { Link } from "react-router-dom";

export default function Navbar () {
    return (
            <nav className="navbar navbar-expand-md navbar-dark fixed-top">
                <div className="container-fluid">
                        <Link to="/">
                            <img src="https://www.firstfiddle.in/assets/images/ff-logo-02.png" style={{width: "59px"}} className="pcimage" alt='https://www.firstfiddle.in/assets/images/ff-logo-02.png'/>

                                <img src="https://www.firstfiddle.in/assets/images/logo-for-mobile.png" className="mob-logo" alt='https://www.firstfiddle.in/assets/images/logo-for-mobile.png'/>
                                </Link>
                                <button className="navbar-toggler" data-bs-target="#ab" data-bs-toggle="collapse">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="ab">
                                    <ul className="navbar-nav ms-auto">
                                        <li><Link to="/" className="nav-link">HOME</Link></li>
                                        <li><Link to="/about" className="nav-link">ABOUT</Link></li>
                                        <li><Link to="/brands" className="nav-link">BRANDS</Link></li>
                                        <li><Link to="/ourteam" className="nav-link">OUR TEAM</Link></li>
                                        <li><Link to="/pressrelease" className="nav-link">PRESS RELEASE</Link></li>
                                        <li><Link to="/contact" className="nav-link">CONTACT</Link></li>
                                        <li><Link to="/careers" className="nav-link">CAREERS</Link></li>
                                        <button className="btn btn-outline-warning">LOGIN</button>
                                    </ul>
                                </div>

                </div>
            </nav>
    )
}
