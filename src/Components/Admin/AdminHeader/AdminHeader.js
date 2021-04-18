import React from 'react';
import { useContext } from 'react';
import {Link} from 'react-router-dom';
import { UserContext } from '../../../App';

const AdminHeader = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <nav class="navbar navbar-light py-3" style={{backgroundColor:'#0073B2',}}>
            <div class="container-fluid ms-4">
                <Link class="navbar-brand text-white" to="/home">Car Service</Link>
                <Link class="navbar-brand text-white" to="/">{loggedInUser.email}</Link>
            </div>
        </nav>
    );
};

export default AdminHeader;