import React from 'react';

const ChooseDetails = ({choose}) => {
    return (
        <div className="col-md-4 text-center">
            <img src={choose.image} className="img-fluid" style={{height:'200px'}} alt=""/>
            <h3>{choose.title}</h3>
            <p className="text-secondary">{choose.description}</p>
        </div>
    );
};

export default ChooseDetails;