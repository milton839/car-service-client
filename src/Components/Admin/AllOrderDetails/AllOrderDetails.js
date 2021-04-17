import React from 'react';
import moment from 'moment';

const AllOrderDetails = ({order}) => {
    const {bookingData,paymentId,orderTime} = order;
    return (
        <tr>
            <td>{bookingData.name}</td>
            <td>{bookingData.email}</td>
            <td>{bookingData.title}</td>
            <td>{bookingData.price}</td>
            <td>{paymentId}</td>
            <td>{moment(order.orderTime).format('DD-MM-YYYY hh:mm:ss A')}</td>
        </tr>
    );
};

export default AllOrderDetails;