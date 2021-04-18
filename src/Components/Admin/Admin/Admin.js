import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import AdminHeader from '../AdminHeader/AdminHeader';
import Sidebar from '../Sidebar/Sidebar';

const Admin = () => {
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
        <section>
            <AdminHeader></AdminHeader>
            <div className="row">
                <div className="col-md-4">
                    <Sidebar></Sidebar>
                </div>
                {
                    !isAdmin && <div className="col-md-7 me-5 p-5 mt-5" style={{ position: "absolute",right:'0', backgroundColor: "#F4FDFB" }}>
                    
                     <h2>You are not authorizes this Admin Panel</h2>
                    
                </div>
                }
            </div>
        </section>
    );
};

export default Admin;