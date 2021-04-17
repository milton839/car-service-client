import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="row">
            <nav class="navbar navbar-expand-lg col-sm-12 col-md-12 col lg-12 col-xl-12 col-12">
                <div class="container-fluid">
                    <Link class="navbar-brand text-white ms-5" to="/home">CAR SERVICE</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link me-5 text-white active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link me-5 text-white" to="/">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link me-5 text-white" to="/bookingList">Dashboard</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link me-5 text-white" to="/admin">Admin</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link me-5 text-white" to="/">Contact Us</Link>
                            </li>
                        </ul>
                        <button style={{ backgroundColor:'tomato',padding:'5px 15px',border:'0',marginLeft:'30px',borderRadius:'5px' }} className="fs-5 fw-bold"><Link style={{ textDecoration:'none',color:'white' }} to="/login">Log In</Link></button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;