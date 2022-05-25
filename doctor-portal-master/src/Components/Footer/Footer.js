import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer>
          <div className="container">
             <div className="row">
                 <div className="col-lg-4 col-md-6">
                     <h4>Service</h4>
                      <ul>
                          <li>Emargency CheckUp</li>
                          <li>Monthly Checkup</li>
                          <li>Weekly Checkup</li>
                          <li>Deep Checkup</li>
                      </ul>
                 </div>
                 <div className="col-lg-4 col-md-6">
                     <h4>ORAL HEALTH</h4>
                      <ul>
                          <li>Fluoride Treatment</li>
                          <li>Cavity Filling</li>
                          <li>Teath Whitening</li>
                      </ul>
                 </div>
                 <div className="col-lg-4 col-md-6">
                     <h4>OUR ADDRESS</h4>
                      <ul>
                          <li>New York - 101010 Hudson</li>
                      </ul>
                 </div>
             </div>
             <p className='text-center pt-5'>Copyright 2022 All Rights Reserved</p>
          </div>
        </footer>
    );
};

export default Footer;