import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-3 col-lg-3 col-xl-3 col-sm-12 col-xs-12 col-12 text-center">
            <img style={{ height:'50px' }} src={service.image_url} alt=""/>
            <h5 className="my-4 fs-5">{service.title}</h5>
            <p className="text-secondary">{service.description}</p>
        </div>
    );
};

export default ServiceDetail;