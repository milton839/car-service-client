import React from 'react';
import './Banner.css';
import banner2 from '../../../images/banner-02.jpg';
import banner8 from '../../../images/banner-08.jpg';
import banner12 from '../../../images/banner-12.jpg';

const Banner = () => {
    return (
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" style={{marginTop:'-20px'}}>
                <div class="carousel-inner">
                    <div class="carousel-item active banner-item">
                        <div className="banner-image">
                            <img src={banner2} class="d-block img-fluid w-100" style={{height:'600px'}} alt=""/>
                        </div>
                        <div className="banner-text">
                            <h1>QUALITY SERVICE FOR YOUR CAR</h1>
                            <h6 className="py-3">We provide top-notch service for import and domestic car repairs. Servicing Brakes, Tune Ups,Engine Repairs,Electrical and A.C System. </h6>
                            <button className="btn btn-primary">GET APPOINTMENT</button>
                        </div>
                    </div>
                    <div class="carousel-item banner-item">
                        <div className="banner-image">
                            <img src={banner8} class="d-block img-fluid w-100" style={{height:'600px'}} alt=""/>
                        </div>
                        <div className="banner-text">
                            <h1>MAKE YOUR CAR LAST LONGER</h1>
                            <h6 className="py-3">We provide top-notch service for import and domestic car repairs. Servicing Brakes, Tune Ups,Engine Repairs,Electrical and A.C System. </h6>
                            <button className="btn btn-primary">GET APPOINTMENT</button>
                        </div>
                    </div>
                    <div class="carousel-item banner-item">
                        <div className="banner-image">
                            <img src={banner12} class="d-block img-fluid w-100" style={{height:'600px'}} alt=""/>
                        </div>
                        <div className="banner-text">
                            <h1>CARE SERVICE FOR TOUR CAR</h1>
                            <h6 className="py-3">We provide top-notch service for import and domestic car repairs. Servicing Brakes, Tune Ups,Engine Repairs,Electrical and A.C System. </h6>
                            <button className="btn btn-primary">GET APPOINTMENT</button>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
    );
};

export default Banner;