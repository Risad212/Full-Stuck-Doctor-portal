import React from 'react';
import './Service.scss';
import whiting from '../../Media/images/whitening.png';
import CavityFilling from '../../Media/images/cavity.png'
import floride from '../../Media/images/fluoride.png'
const Service = () => {
    const serviceCardStyle = [
        {
          icon: floride,
          title: 'Fluoride Treatment',
          disc: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            icon: CavityFilling,
            title: 'Cavity Filling',
            disc: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
          },
          {
            icon: whiting,
            title: 'Teeth Whitening',
            disc: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
          },
    ]
    return (
        <div id="Service">
           <div className="container">
               <div className="service-head text-center">
                 <h4>our service</h4>
                 <h2>service we provide</h2>
              </div>
               <div className="row">
                  {
                   serviceCardStyle.map(elem => {
                       return (
                           <>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                               <div className="serviceSingleCard">
                                   <img src={elem.icon} alt="" />
                                    <h4>{elem.title}</h4>
                                    <p>{elem.disc}</p>
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

export default Service;