import React, { useContext, useState } from 'react';
import AppoinmentForm from '../AppoinmentForm/AppoinmentForm';
import './AppoinmentService.scss';
import Modal from 'react-modal';
import { userData } from '../../DataStorge/DataStorge';

const AppoinmentService = () => {
  const [userInfo, setUserInfo] = useContext(userData);
  const [treatment, setTreatment] = useState({})
  
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal(serviceName,time) {
    setIsOpen(true);
    setTreatment({serviceName,time})
  }
 
 
  
  function closeModal() {
    setIsOpen(false);
  }

    const serviceName = [
        {
          id: 1,
          name: 'Teeth Orthodontics',
          time: '8:00 AM - 9:00 AM',
        },
        {
            id: 2,
            name: 'Cosmetic Dentistry',
            time: '10:05 am - 11:30 am',

          },
          {
            id: 3,
            name: 'Teeth Cleaning',
            time: '8:00 AM - 9:00 AM',
          },
          {
            id: 4,
            name: 'Cavity Protection',
            time: '8:00 AM - 9:00 AM',
          },
          {
            id: 5,
            name: 'Pediatric Dental',
            time: '8:00 AM - 9:00 AM',
          },
          {
            id: 6,
            name: 'Oral Surgery',
            time: '8:00 AM - 9:00 AM',
          },
    ]

    
    return (
        <div id="AppoinmentService">
           <div className="container">
           <h2>Available Services on {userInfo.toLocaleString().split(',')[0]}</h2>
           <h4>Please select a service.</h4>
           <div className="row mt-5">
              {
                  serviceName.map((elem) => {
                      return (
                          <>
                           <div className="col-lg-4 mb-5">
                              <div className="singleService">
                              <h3>{elem.name}</h3>
                               <p className='mt-2'>{elem.time}</p>
                               <button onClick={() => openModal(elem.name,elem.time)}>Book An Appoinment</button>
                               <AppoinmentForm modalIsOpen={modalIsOpen} closeModal={closeModal} appoinmentOn={treatment}/>
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

export default AppoinmentService;