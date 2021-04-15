import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-3 text-center">
            <img style={{ height:'50px' }} src={service.image} alt=""/>
            <h5 className="my-4 fs-5">{service.partsName}</h5>
            <p className="text-secondary">{service.description}</p>
        </div>
    );
};

export default ServiceDetail;