import React from 'react';
import banner4 from '../../../images/banner-04.jpg';

const About = () => {
    return (
        <section className="abou pt-5" >
            <div className="about-content">
                <h2 className="text-center py-5" style={{color:'#2D2741'}}>ABOUT OUR GARAGE</h2>
                <div className="row">
                    <div className="col-md-4 col-xl-4 col-sm-12 col-xs-10 col-lg-4 col-10 mx-5">
                        <img src={banner4} className="img-fluid" style={{height:'400px'}} alt=""/>
                    </div>
                    <div className="col-md-6 col-xl-6 col-lg-6 col-sm-12 col-xs-12 col-10 align-self-center me-5">
                        <h3 className="text-uppercase" style={{color:'#2D2741'}}>We’re Certified & Expert Car Servicing Agency</h3>
                        <p className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse ut quasi maxime, labore eius perspiciatis dolorem blanditiis quae voluptatem quia rem iste vitae quaerat necessitatibus suscipit tempore cum et ad! Quae quis sit id asperiores natus hic iure vitae temporibus?</p>
                        <button className="btn btn-primary">LEARN MORE</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;