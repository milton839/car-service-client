import React from 'react';
import './Header.css';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';

const Header = () => {
    return (
        <div>
            <div className="navbar-content">
                <Navbar></Navbar>
            </div>
            <div className="banner">
                <Banner></Banner>
            </div>
        </div>
    );
};

export default Header;