import React from 'react';

const ChooseDetails = ({choose}) => {
    return (
        <div className="col-md-4 col-lg-4 col-xl-4 col-sm-12 col-xs-12 col-12 text-center">
            <img src={choose.image} className="img-fluid" style={{height:'200px'}} alt=""/>
            <h3 className="pt-3">{choose.title}</h3>
            <p className="text-secondary">{choose.description}</p>
        </div>
    );
};

export default ChooseDetails;