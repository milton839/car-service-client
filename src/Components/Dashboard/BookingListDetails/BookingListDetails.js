import React from 'react';
import moment from 'moment';

const BookingListDetails = ({order}) => {
    return (
        <div className="col-md-5 me-5 mb-5" >
            <div class="card" style={{width: '22rem'}}>
                <div class="card-body" style={{backgroundColor:'#F4FDFB'}}>
                    <h3 class="card-title">{order.bookingData.title}</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <h5 class="card-title">${order.bookingData.price}</h5>
                        </div>
                        <div className="col-md-6">
                            <h5 class="card-title">{order.status}</h5>
                        </div>
                    </div>
                    <h6>Order Time: {moment(order.orderTime).format('DD-MM-YYYY hh:mm:ss A')}</h6>
                </div>
            </div>
        </div>
    );
};

export default BookingListDetails;