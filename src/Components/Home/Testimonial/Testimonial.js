import React from 'react';
import { FaStar } from 'react-icons/fa';

const Testimonial = (props) => {
    const {quote,name,from ,img} = props.testimonial;
    return (
        <div className="card shadow-sm col-md-4 col-lg-4 col-xl-4 col-sm-12 col-xs-12 col-12">
            
            <div className="card-footer d-flex  align-items-center">
                <img className="mx-3" src={img} alt="" width="60"/>
                <div>
                    <h6 className="text-primary">{name}</h6>
                    <p className="m-0">{from}</p>
                </div>
            </div>
            <div className="card-body">
                <p className="card-text text-center">{quote}</p>
                <p className="text-center">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </p>
            </div>
       </div>
    );
};

export default Testimonial;