import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import AppoinmentTable from '../AppoinmentTable/AppoinmentTable';
import './MyAppoinment.scss';

const MyAppoinment = () => {
    return (
        <div>
           <Navbar />
             <div className="appoinmentContainer">
               <div className="container">
                 <div className='header'>
                    <h2>My Appoinment</h2>
                    <input type="date" />
                 </div>
                 <div className="row">
                    <AppoinmentTable />
                 </div>
               </div>
            </div>
        </div>
    );
};

export default MyAppoinment;