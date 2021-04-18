import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';



const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch('https://car-service-839.herokuapp.com/reviews',)
        .then(response => response.json())
        .then(data => setTestimonials(data))
    },[]);
    return (
       <section className="testimonials my-5 pt-5">
           <div className="container">
               <div className="section-header">
                   <h2 className="text-center text-uppercase" style={{ color:'#2D2741' }}>Testimonial</h2>
                   <p className="text-center text-secondary title-description">Our professionals will perform diagnostic tests, fluid flush and fills, engine replacement, oil changes, and total vehicle overhauls.</p>
               </div>
               <div className="card-deck mt-5 row">
                    {
                        testimonials.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial._id}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;