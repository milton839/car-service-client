import React from 'react';
import airCool from '../../../images/air-cool-service.png';
import brake from '../../../images/brake-service.png';
import automotiveParts from '../../../images/automotive-service.png';
import electricParts from '../../../images/electrical-service.png';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const servicesData =[
    {
        partsName: 'AIR CONDITIONING',
        description:'We provide top-notch service for import and domestic car repairs. Servicing Brakes, Tune Ups, Engine Repairs',
        image:airCool
    },
    {
        partsName: 'BRAKE REPAIR',
        description:'We provide top-notch service for import and domestic car repairs. Servicing Brakes, Tune Ups, Engine Repairs',
        image:brake
    },
    {
        partsName: 'AUTOMOTIVE FILTERS',
        description:'We provide top-notch service for import and domestic car repairs. Servicing Brakes, Tune Ups, Engine Repairs',
        image:automotiveParts
    },
    {
        partsName: 'ELECTRICAL SYSTEM',
        description:'We provide top-notch service for import and domestic car repairs. Servicing Brakes, Tune Ups, Engine Repairs',
        image:electricParts
    }
]

const Services = () => {
    return (
        <section className="services_container mt-5 pt-5">
            <div className="text-center">
                <h2 className="" style={{ color:'#2D2741' }}>OUR SERVICES</h2>
                <p className="text-secondary fs-5" style={{padding:'0px 250px'}}>Our professionals will perform diagnostic tests, fluid flush and fills, engine replacement, oil changes, and total vehicle overhauls.</p>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row mx-5 mt-5 pt-5">
                    {
                        servicesData.map(service =><ServiceDetails service={service}></ServiceDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;