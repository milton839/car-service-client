import React from 'react';
import chooseIcon1 from '../../../images/choose-icon-01.png';
import chooseIcon2 from '../../../images/choose-icon-02.png';
import chooseIcon3 from '../../../images/choose-icon-03.png';
import ChooseDetails from '../ChooseDetails/ChooseDetails';

const chooseData = [
    {
        image:chooseIcon1,
        title:'EVERY JOB IS PERSONAL',
        description:'If you want the quality you would expect from the dealership, but with a more personal and friendly atmosphere, you have found it.',
    },
    {
        image:chooseIcon2,
        title:'BEST MATERIALS',
        description:'We have invested in all the latest specialist tools and diagnostic software that is specifically tailored for the software in your vehicle.',
    },
    {
        image:chooseIcon3,
        title:'PROFESSIONAL STANDARD',
        description:'Our auto repair shop is capable of servicing a variety of models. We only do the work that is needed to fix your problem.',
    }
]

const ChooseReason = () => {
    return (
        <section  style={{backgroundColor:'#fcf9f9'}} className="py-5">
            <div className="container pt-5">
                <h2 className="text-center pb-2" style={{ color:'#2D2741' }}>WHY <u>CHOOSE</u> US?</h2>
                <p className="text-secondary text-center title-description pb-3">We are one of the leading auto repair shops serving customers in Tucson.All mechanic services are performed by highly qualified mechanics.</p>
                <div className="row">
                    {
                        chooseData.map(choose => <ChooseDetails choose={choose} key={choose.image}></ChooseDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ChooseReason;