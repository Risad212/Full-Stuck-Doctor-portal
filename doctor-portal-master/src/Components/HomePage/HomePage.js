import React from 'react';
import Appoinment from '../Appoinment/Appoinment';
import Banner from '../Banner/Banner';
import BusinessCard from '../BusinessCard/BusinessCard';
import Clients from '../clients/Clients';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Service from '../Service/Service';
import Terms from '../TermsAndCondition/Terms';

const HomePage = () => {
    return (
        <div>
          <Navbar />
          <Banner />
          <BusinessCard />
          <Service />
          <Terms />
          <Appoinment />
          <Clients />
          <Contact />
          <Footer />
        </div>
    );
};

export default HomePage;