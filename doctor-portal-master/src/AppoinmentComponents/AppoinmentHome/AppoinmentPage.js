import React from 'react';
import Navbar from '../../Components/Navbar/Navbar'
import AppoinmentHeader from '../AppoinmentHeader/AppoinmentHeader';
import Footer from '../../Components/Footer/Footer';
import AppoinmentService from '../AppoinmentService/AppoinmentService';

const AppoinmentPage = () => {
    return (
        <div>
          <Navbar />
          <AppoinmentHeader />
          <AppoinmentService />
          <Footer />
        </div>
    );
};

export default AppoinmentPage;