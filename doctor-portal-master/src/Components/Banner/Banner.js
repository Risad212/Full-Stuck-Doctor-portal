import React from 'react';
import { Link } from 'react-router-dom';
import Chair from '../../Media/images/chair.png'
import './Banner.scss';

const Banner = () => {
    return (
        <div id="banner">
          <div className="container">
             <div className="row">
                <div className="col-lg-6 col-md-12">
                   <div className="banner-content">
                       <h2>Your New Smile Starts Here</h2>
                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                          Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                         <button><Link to="/">Get Started</Link></button>
                   </div>
                </div>
                <div className="col-lg-6 col-md-12">
                   <div className="chariImg">
                      <img src={Chair} alt="" />
                   </div>
                </div>
             </div>
          </div>
       </div>
    );
};

export default Banner;