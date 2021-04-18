import React from 'react';
import './Sidebar.css';
import {Link} from 'react-router-dom';
import { FaPlus,FaBorderAll,FaUser,FaClipboardList } from 'react-icons/fa';
import { UserContext } from '../../../App';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://car-service-839.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, []);
    return (
        <div className="sidebar d-flex flex-column justify-content-between px-4 py-5" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                    {isAdmin && <div>
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
                            <Link to="/manageService" className="text-white" >
                                <FaBorderAll /> <span>Manage service</span>
                            </Link>
                        </li>
                    </div> 
                    }
            </ul>
        </div>
    );
};

export default Sidebar;