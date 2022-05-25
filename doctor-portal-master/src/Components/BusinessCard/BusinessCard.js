import React from 'react';
import './BusinessCard.scss'
import clock from '../../Media/images/clock.png';
import teets from '../../Media/images/teets.png';
import phone from '../../Media/images/phone.png';

const BusinessCard = () => {
    const BusinessCardStyle = [
        {
            icon: clock,
            title: 'Opening Hours',
            disc: 'Lorem Ipsum is simply dummy text of',
            bgColor: '#19D3AE',
        },
        {
            icon: teets,
            title: 'Visit our location',
            disc: 'Brooklyn, NY 10036, United States',
            bgColor: '#3A4256',
        },
        {
            icon: phone,
            title: 'Contact us now',
            disc: '+000 123 456789',
            bgColor: '#19D3AE',
        },

    ]

    return (
        <div id="BusinessCard">
           <div className="container">
              <div className="row my-5">
                 {
                  BusinessCardStyle.map((elem) => {
                      return (
                          <>
                           <div className="col-lg-4 col-md-6 col-sm-12">
                              <div className="single-card d-flex" style={{background: elem.bgColor}}>
                               <img src={elem.icon} alt="" />
                              <div className="cardContent py-2">
                                  <h3>{elem.title}</h3>
                                  <p>{elem.disc}</p>
                              </div>
                              </div>
                           </div>
                          </>
                       )
                     })
                   }
              </div>
           </div>
        </div>
    );
};

export default BusinessCard;