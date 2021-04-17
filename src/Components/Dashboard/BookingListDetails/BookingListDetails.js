import React from 'react';

const BookingListDetails = ({order}) => {
    return (
        <div className="col-md-5 me-5 mb-5" >
            <div class="card" style={{width: '22rem'}}>
                <div class="card-body" style={{backgroundColor:'#F4FDFB'}}>
                    <div className="row">
                        <div className="col-md-6">
                            <h5 class="card-title">${order.bookingData.price}</h5>
                        </div>
                        <div className="col-md-6">
                            <h5 class="card-title">Status</h5>
                        </div>
                    </div>
                    <h3 class="card-title">{order.bookingData.title}</h3>
                </div>
            </div>
        </div>
    );
};

export default BookingListDetails;