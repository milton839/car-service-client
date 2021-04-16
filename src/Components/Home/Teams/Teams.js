import React from 'react';
import team1 from '../../../images/team-01.jpg';
import team2 from '../../../images/team-02.jpg';
import team3 from '../../../images/team-03.jpg';
import Team from '../Team/Team';

const teams = [
    {
        image:team1,
        name:"MARK WHILBERG",
        role:'CO-FOUNDER',
        about:'Primus elite lectus tical at node. Porta commodo terminal forks sande. Nulla novum at novelle.'
    },
    {
        image:team2,
        name:"PHILIP BROWER",
        role:'MANAGER',
        about:'Primus elite lectus tical at node. Porta commodo terminal forks sande. Nulla novum at novelle.'
    },
    {
        image:team3,
        name:"CURTIS GREENE",
        role:'CT-OFFICER',
        about:'Primus elite lectus tical at node. Porta commodo terminal forks sande. Nulla novum at novelle.'
    }
]

const Teams = () => {
    return (
        <section style={{backgroundColor:'#fcf9f9'}}>
            <div className="container  py-5" style={{backgroundColor:'#fcf9f9'}}>
                <h2 className="pb-2 text-center" style={{ color:'#2D2741' }}>OUR TEAMS</h2>
                <p className="text-secondary text-center title-description pb-5">Our professionals will perform diagnostic tests, fluid flush and fills, engine replacement, oil changes, and total vehicle overhauls.</p>
                <div className="row">
                    {
                        teams.map(team => <Team team = {team} key ={team.name}></Team>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Teams;