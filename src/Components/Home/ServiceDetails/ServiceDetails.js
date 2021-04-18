import React from 'react';
import './ServiceDetails.css';
import {Link} from 'react-router-dom';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-3 col-lg-3 col-xl-3 col-sm-12 col-xs-12 col-12 text-center service-item">
            <img style={{ height:'50px' }} src={service.image_url} alt=""/>
            <h6 className="my-4 fs-5">${service.price}</h6>
            <h5 className="my-4 fs-5">{service.title}</h5>
            <p className="text-secondary">{service.description}</p>
            <Link to={`/bookService/${service._id}`}>
                <button className="btn btn-primary">Book Now</button>
            </Link>
        </div>
    );
};

export default ServiceDetail;