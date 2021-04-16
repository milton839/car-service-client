import React, { useEffect, useState } from 'react';
import AdminHeader from '../AdminHeader/AdminHeader';
import ManageServiceDetail from '../ManageServiceDetail/ManageServiceDetail';
import Sidebar from '../Sidebar/Sidebar';

const ManageService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services',)
        .then(response => response.json())
        .then(data => setServices(data))
    },[]);
    return (
        <section className="">
            <AdminHeader></AdminHeader>
            <div className="row">
                <div className="col-md-5">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8 me-5 p-5 mt-5" style={{ position: "absolute",right:'0', backgroundColor: "#F4FDFB" }}>
                    <h5 className="text-brand">Manage Services</h5>
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Product Image</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                services.map(service => <ManageServiceDetail service={service} key={service._id}></ManageServiceDetail>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default ManageService;