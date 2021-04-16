import React from 'react';
import {Link} from 'react-router-dom';

const AdminHeader = () => {
    return (
        <nav class="navbar navbar-light py-3" style={{backgroundImage: 'linear-gradient(40deg, #1E1E1E,#1E1E1E)'}}>
            <div class="container-fluid ms-4">
                <Link class="navbar-brand text-white" to="/home">Car Service</Link>
            </div>
        </nav>
    );
};

export default AdminHeader;