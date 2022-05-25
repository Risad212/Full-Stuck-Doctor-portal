import React, { useContext } from 'react';
import Modal from 'react-modal';
import { userData } from '../../DataStorge/DataStorge';
import { useNavigate } from 'react-router-dom';


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '25rem',
      padding:'2rem',
    },
  };

Modal.setAppElement('#root');

const AppoinmentForm = ({modalIsOpen,closeModal,appoinmentOn}) => {
    const [userInfo, setUserInfo] = useContext(userData);
    
    const date = userInfo.toLocaleString().split(',')[0]
    
    const {serviceName, time} = appoinmentOn

    const allInfo = {
      date: date,
      name: '',
      phone: '',
      email: '',
      time: time,
      serviceName: serviceName,
    }


    const handleBlur = (e) => {
        let isFormValid
        if(e.target.name === 'name'){
           isFormValid = e.target.value;
           allInfo.name = isFormValid
        }
        if(e.target.name === 'phone'){
          isFormValid = e.target.value;
          allInfo.phone = e.target.value
        }
        if(e.target.name === 'email'){
          isFormValid = e.target.value;
          allInfo.email = e.target.value
        }
    }

    const navigate = useNavigate()

    const handleSubmit = (e) => {
      e.preventDefault()
       setUserInfo(allInfo)
       if(allInfo){
        sendDataToServer(allInfo)
         navigate('/dashboard')
       }
    }

    // send to server all information
   const sendDataToServer = (allData) => {
    fetch('http://localhost:5000/sendData', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({allData})
    })
    .then(res => res.json())
    .catch(error => console.log(error))
 }


    return (
        <div id="appoinmentForm">
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <h3 className='text-center font-weight-bold mb-3' style={{color: '#19D3AE'}}>{serviceName}</h3>
            <form  onSubmit={handleSubmit}>

            <div class="mb-3">
              <label for="exampleInputName" class="form-label">Full Name</label>
              <input type="text" name="name" class="form-control" placeholder='Full Name' onBlur={handleBlur}/>
            </div>

            <div class="mb-3">
              <label for="exampleInputNumber" class="form-label">Phone Number</label>
              <input type="text" name="phone" class="form-control" placeholder='Number' onBlur={handleBlur}/>
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail" class="form-label">Email</label>
              <input type="email" name="email" class="form-control" placeholder='Email' onBlur={handleBlur}/>
            </div>

            <input type="submit" class="btn btn-primary" onClick={handleSubmit}/>
          </form>
          </Modal> 
        </div>
    );
};

export default AppoinmentForm;



