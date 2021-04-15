import React from 'react';

const PartsGalleryView = ({parts}) => {
    return (
        <div className="col-md-4 pt-4">
            <img src={parts.image} className="img-fluid w-100" style={{height:'300px',}} alt=""/>
        </div>
    );
};

export default PartsGalleryView;