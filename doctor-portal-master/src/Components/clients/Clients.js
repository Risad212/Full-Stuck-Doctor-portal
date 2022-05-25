import React from 'react';
import quote from '../../Media/icons/quote.svg';
import Client1 from '../../Media/images/people1.png';
import './Client.scss';


const Clients = () => {
    const ClientCardStyle = [
        {
          disc: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
          img: Client1,
          name: 'Winson Herry',
          from: 'California',
        },
        {
            disc: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: Client1,
            name: 'Winson Herry',
            from: 'California',
          },
          {
            disc: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: Client1,
            name: 'Winson Herry',
            from: 'California',
          },
    ]
    return (
        <div id="clients">
          <div className="container">
             <div className="client-head">
                 <div>
                    <h4>Testimonial</h4>
                     <h2>What Our Patients Says</h2>
                 </div>
                 <img src={quote} alt="" />
             </div>
             <div className="row mt-5">
              {
               ClientCardStyle.map(elem => {
                   return (
                       <>
                        <div className="col-lg-4">
                          <div className="clientCard">
                             <p>{elem.disc}</p>
                              <div className='d-flex'>
                              <img src={elem.img} alt="" />
                               <div className='ms-2'>
                                   <h4>{elem.name}</h4>
                                   <span>{elem.from}</span>
                               </div>
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

export default Clients;