import React from 'react';
import './Sidebar.css';
import {Link} from 'react-router-dom';
import { FaPlus,FaBorderAll,FaUser,FaClipboardList } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-6 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="">
                    <li>
                        <Link to="/addService" className="text-white">
                        <FaPlus /> <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/orderList" className="text-white">
                             <FaClipboardList /> <span>Order List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/makeAdmin" className="text-white" >
                             <FaUser /> <span>Make Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="manageService" className="text-white" >
                             <FaBorderAll /> <span>Manage service</span>
                        </Link>
                    </li>
            </ul>
        </div>
    );
};

export default Sidebar;