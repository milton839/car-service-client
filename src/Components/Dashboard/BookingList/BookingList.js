import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import AdminHeader from '../../Admin/AdminHeader/AdminHeader';
import BookingListDetails from '../BookingListDetails/BookingListDetails';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';

const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://car-service-839.herokuapp.com/ordersByEmail?email='+loggedInUser.email)
        .then(response => response.json())
        .then(data => setOrders(data));
    }, []);
    return (
        <section className="">
            <AdminHeader></AdminHeader>
            <div className="row">
                <div className="col-md-5">
                    <DashboardSidebar></DashboardSidebar>
                </div>
                <div className="col-md-8 me-5 p-5 mt-5" style={{ position: "absolute",right:'0',  }}>
                    <div>
                        <h2 className="text-center">Total Order: {orders.length}</h2>
                    </div>
                    <div className="row">
                        {
                            orders.map(order =><BookingListDetails order = {order}></BookingListDetails>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingList;