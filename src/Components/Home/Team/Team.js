import React from 'react';

const Team = ({team}) => {
    return (
        <div className="col-md-4 col-lg-4 col-xl-4 col-sm-12 col-xs-12 col-12 text-center">
            <div class="card" style={{width: '18rem',borderRadius:'25px'}}>
                <img src={team.image} class="card-img-top" style={{height:'200px'}} alt=""/>
                <div class="card-body">
                    <h3 class="card-title">{team.name}</h3>
                    <h5 class="card-title text-secondary">{team.role}</h5>
                    <p class="card-text text-secondary">{team.about}</p>
                </div>
            </div>
        </div>
    );
};

export default Team;