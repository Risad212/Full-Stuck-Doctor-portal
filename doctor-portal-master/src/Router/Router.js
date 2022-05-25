import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppoinmentPage from '../AppoinmentComponents/AppoinmentHome/AppoinmentPage';
import HomePage from '../Components/HomePage/HomePage';
import DashboardMain from '../Dashboard/DashboardMain/DashboardMain';
import LoginPage from '../LoginPage/LoginPage';
import PrivetRoute from '../PrivetRoute/PrivetRoute';


const Router = () => {
    return (
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<HomePage />}/>
              <Route path='/appoinmentPage' element={<AppoinmentPage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/dashboard' element={<PrivetRoute><DashboardMain /></PrivetRoute>} />
          </Routes>
        </BrowserRouter>
    );
};

export default Router;

