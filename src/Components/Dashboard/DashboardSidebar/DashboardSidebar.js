import React from 'react';
import './DashboardSidebar.css';
import {Link} from 'react-router-dom';
import { FaPlus,FaBorderAll,FaUser,FaClipboardList } from 'react-icons/fa';

const DashboardSidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between px-4 py-5" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                    <li>
                        <Link to="/" className="text-white">
                        <FaPlus /> <span>Book Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/bookingList" className="text-white">
                             <FaClipboardList /> <span>Booking List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/review" className="text-white" >
                             <FaUser /> <span>Review</span>
                        </Link>
                    </li>
            </ul>
        </div>
    );
};

export default DashboardSidebar;