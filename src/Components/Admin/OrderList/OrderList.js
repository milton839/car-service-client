import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AdminHeader from '../AdminHeader/AdminHeader';
import AllOrderDetails from '../AllOrderDetails/AllOrderDetails';
import Sidebar from '../Sidebar/Sidebar';

const OrderList = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
        .then(response => response.json())
        .then(data => setOrders(data))
    }, []);
    return (
        <section className="">
            <AdminHeader></AdminHeader>
            <div className="row">
                <div className="col-md-5">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8 me-5 p-5 mt-5 " style={{ position: "absolute",right:'0', backgroundColor: "#F4FDFB" }}>
                    <h5 className="text-brand text-center pb-3">Orders List</h5>
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Service</th>
                            <th>Price</th>
                            <th>Payment Id</th>
                            <th>OrderTime</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(order => <AllOrderDetails order={order} key={order._id}></AllOrderDetails>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default OrderList;