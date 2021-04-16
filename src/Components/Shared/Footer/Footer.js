import React from 'react';

const Footer = () => {
    return (
        <footer style={{backgroundColor:'#232331'}}>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-3 col-lg-3 col-xl-3 col-sm-12 col-xs-12 col-12 text-white">
                        <h4 className="pb-4"><u>ABOUT US</u></h4>
                        <p>Mohammadpur-1207</p>
                        <p>Dhaka, Bangladesh</p>
                        <p>Mobile: +8801993810095</p>
                        <p>Assistant: +8801793810095</p>
                        <p>Email: miltonbiswas839@gmail.com</p>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3 col-sm-12 col-xs-12 col-12 text-white">
                        <h4 className="pb-4"><u>OUR SERVICE</u></h4>
                        <ul>
                            <li>Engine Diagnostics</li>
                            <li>Lube, Oil and Filters</li>
                            <li>Belts and Hoses</li>
                            <li>Air Conditioning</li>
                            <li>Brake Repair</li>
                            <li>Tire and Wheel Services</li>
                            <li>Other Car Services</li>
                            <li>Brake Repair</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3 col-sm-12 col-xs-12 col-12 text-white">
                        <h4 className="pb-4"><u>POPULAR TAGS</u></h4>
                        <a style={{border:'1px solid gray',padding:'6px 13px',marginRight:'5px',marginBottom:'20px'}}>BELTS</a>
                        <a style={{border:'1px solid gray',padding:'6px 13px',marginRight:'5px',marginBottom:'20px'}}>BRAKES</a>
                        <a style={{border:'1px solid gray',padding:'6px 13px',marginRight:'5px',marginBottom:'20px'}}>ENGINE</a>
                        <br></br>
                        <br></br>
                        <a style={{border:'1px solid gray',padding:'6px 13px',marginRight:'5px',marginBottom:'20px',marginTop:'20px'}}>FILTER</a>
                        <a style={{border:'1px solid gray',padding:'6px 13px',marginRight:'5px',marginBottom:'20px',marginTop:'20px'}}>HEATING</a>
                        <a style={{border:'1px solid gray',padding:'6px 13px',marginRight:'5px',marginBottom:'20px',marginTop:'20px'}}>OILS</a>
                        <br></br>
                        <br></br>
                        <a style={{border:'1px solid gray',padding:'6px 13px',marginRight:'5px'}}>STEERING</a>
                        <a style={{border:'1px solid gray',padding:'6px 13px',marginRight:'5px'}}>SUSPENSION</a>
                        <br/>
                        <br/>
                        <a style={{border:'1px solid gray',padding:'6px 13px',marginRight:'5px'}}>TIRES</a>
                        <a style={{border:'1px solid gray',padding:'6px 13px',marginRight:'5px'}}>GLASS</a>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3 col-sm-12 col-xs-12 col-12 text-white">
                        <h4 className="pb-4"><u>HOURS</u></h4>
                        <ul>
                            <li>Satuarday: 7.30am - 5.30pm</li>
                            <li>Sunday: 7.30am - 5.30pm</li>
                            <li>Monday: 7.30am - 5.30pm</li>
                            <li>Tuesday: 7.30am - 5.30pm</li>
                            <li>Wednesday: 7.30am - 5.30pm</li>
                            <li>Thursday: 7.30am - 2.30pm</li>
                            <li>Friday: Closed</li>
                        </ul>
                    </div>
                </div>
                <div className="copyright text-white pt-5 text-center">
                    <p>Copyright {(new Date()).getFullYear()}:<span className="text-primary"> Azizul Islam Milton</span> All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;