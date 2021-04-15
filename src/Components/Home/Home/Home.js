import React from 'react';
import Header from '../Header/Header';
import About from '../About/About';
import Services from '../Services/Services';
import PartsGallery from '../PartsGallery/PartsGallery';
import Teams from '../Teams/Teams';
import Testimonials from '../Testimonials/Testimonials';
import Contact from '../Contact/Contact';
import Footer from '../../Shared/Footer/Footer';
import ChooseReason from '../ChooseReason/ChooseReason';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <Services></Services>
            <PartsGallery></PartsGallery>
            <ChooseReason></ChooseReason>
            <Testimonials></Testimonials>
            <Teams></Teams>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;