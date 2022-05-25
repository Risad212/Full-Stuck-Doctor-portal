import React from 'react';
import './Appoinment.scss';
import doctorSmall from '../../Media/images/doctor-small.png';
import { Link } from 'react-router-dom';

const Appoinment = () => {
    return (
        <div id="appoinment">
           <div className="container">
              <div className="row">
                 <div className="col-lg-6">
                    <img src={doctorSmall} alt="" />
                 </div>
                 <div className="col-lg-6 appoinment-content">
                     <h4>Appointment</h4>
                     <h2>Make an appointment Today</h2>
                     <p>It is a long established fact that a reader will be distracted by 
                         the readable content of a page when looking at its layout. 
                         The point of using Lorem Ipsumis that it has a more-or-less 
                         normal distribution of letters,as opposed to using 'Content here, 
                         content here', making it look like readable English. Many desktop 
                         publishing packages and web page</p>
                         <button><Link to="/">Get Started</Link></button>
                 </div>
              </div>
           </div>
        </div>
    );
};

export default Appoinment;