import React, { useEffect, useState } from 'react';
import './Services.css';
import ServiceDetails from '../ServiceDetails/ServiceDetails';



const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://car-service-839.herokuapp.com/services',)
        .then(response => response.json())
        .then(data => setServices(data))
    },[]);
    return (
        <section className="services_container mt-5 py-5" style={{backgroundColor:'#fcf9f9'}}>
            <div className="text-center">
                <h2 className="" style={{ color:'#2D2741' }}>OUR SERVICES</h2>
                <p className="text-secondary fs-5 title-description">Our professionals will perform diagnostic tests, fluid flush and fills, engine replacement, oil changes, and total vehicle overhauls.</p>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row mx-5 mt-5 pt-5">
                    {
                        services.map(service =><ServiceDetails service={service} key={service._id}></ServiceDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;