import React from 'react';
import './Contact.css';
import { FaMapMarker,FaPhone,FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" class="contact-area  py-5" >
                <div class="container">
                    <h2 className="text-center" style={{ color:'#2D2741' }}>INFORMATION</h2>
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-6 col-xl-6 col-sm-12 col-xs-12 col-12">
                            <div class="section-title">
                                <h2>Contact Information</h2>
                            </div>
                            <div class="contact-content">
                                <p className="pb-3">Event definition is - somthing that happens occurre How evesnt sentence. Synonym when an unknown printer took a galley.</p>
                                <h5 className="pb-3">OFFICE IN <span>DHAKA, BANGLADESH</span></h5>
                                <div class="contact-list">
                                    <ul>
                                        <li><FaMapMarker /> <span>Address :</span>Mohammadpur, Dhaka-1207</li>
                                        <li><FaPhone /> <span>Phone :</span>+8801993810095</li>
                                        <li><FaEnvelope /> <span>e-mail :</span>miltonbiswas839@gmail.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-xl-6 col-sm-12 col-xs-12 col-12">
                            <div class="contact-form pt-5 mt-5">
                                <form action="#">
                                    <input type="text" placeholder="your name *"/>
                                    <input type="email" placeholder="your email *"/>
                                    <textarea name="message" id="message" placeholder="your message *"></textarea>
                                    <button class="btn btn-primary">SEND MESSAGE</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Contact;