import React from 'react';
import './PartsGallery';
import parts1 from '../../../images/parts-01.jpg';
import parts2 from '../../../images/parts-02.jpg';
import parts3 from '../../../images/parts-03.jpg';
import parts4 from '../../../images/parts-04.jpg';
import parts5 from '../../../images/parts-05.jpg';
import parts6 from '../../../images/parts-06.jpg';
import PartsGalleryView from '../PartsGalleryView/PartsGalleryView';


const galleryData = [
    {
        image:parts1
    },
    {
        image:parts2
    },
    {
        image:parts3
    },
    {
        image:parts4
    },
    {
        image:parts5
    },
    {
        image:parts6
    },
]

const PartsGallery = () => {
    return (
        <section className="parts pt-5">
            <div className="parts-content">
            <h2 className="text-center" style={{ color:'#2D2741' }}>PARTS GALLERY</h2>
            <p className="text-secondary text-center title-description">Our professionals will perform diagnostic tests, fluid flush and fills, engine replacement, oil changes, and total vehicle overhauls.</p>
            <div className="row me-5 pt-5">
                    {
                        galleryData.map(parts => <PartsGalleryView parts={parts}></PartsGalleryView>)
                    }
            </div>
            </div>
        </section>
    );
};

export default PartsGallery;