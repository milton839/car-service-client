import React from 'react';

const AllOrderDetails = ({order}) => {
    const {bookingData,paymentId,orderTime} = order;
    return (
        <tr>
            <td>{bookingData.name}</td>
            <td>{bookingData.email}</td>
            <td>{bookingData.title}</td>
            <td>{bookingData.price}</td>
            <td>{paymentId}</td>
            <td>{orderTime}</td>
        </tr>
    );
};

export default AllOrderDetails;