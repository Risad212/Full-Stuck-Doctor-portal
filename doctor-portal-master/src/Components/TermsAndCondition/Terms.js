import React from 'react';
import './Terms.scss';
import termsImg from '../../Media/images/treatment.png'
import { Link } from 'react-router-dom';
const Terms = () => {
    return (
        <div id="Terms">
           <div className="container">
               <div className="row">
                  <div className="col-lg-6 text-center">
                      <img src={termsImg} alt="" />
                  </div>
                  <div className="col-lg-6">
                     <div className="term-content">
                     <h2>Exceptional Dental Care, on Your Terms</h2>
                     <p>It is a long established fact that a reader will be distracted by 
                         the readable content of a page when looking at its layout. The point 
                         of using Lorem Ipsumis that it has a more-or-less normal distribution 
                         of letters,as opposed to using 'Content here, content here', making it 
                         look like readable English. Many desktop publishing packages and web page</p>
                         <button><Link to="/">Get Started</Link></button>
                         </div>
                  </div>
               </div>
           </div>
        </div>
    );
};

export default Terms;