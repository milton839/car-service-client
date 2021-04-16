import React from 'react';

const PartsGalleryView = ({parts}) => {
    return (
        <div className="col-md-4 col-lg-4 col-xl-4 col-sm-6 col-xs-6 col-6 pt-4">
            <img src={parts.image} className="img-fluid w-100" style={{height:'300px',}} alt=""/>
        </div>
    );
};

export default PartsGalleryView;