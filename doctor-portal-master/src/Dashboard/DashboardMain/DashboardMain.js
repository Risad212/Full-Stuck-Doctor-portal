import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import MyAppoinment from '../MyAppoinment/MyAppoinment';
import './DashboardMain.scss';

const DashboardMain = () => {
    return (
        <div className="dashboardMain">
           <div className="row">
              <div className="col-2">
                 <Sidebar />
              </div>
              <div className="col-10">
                 <MyAppoinment />
              </div>
           </div>
        </div>
    );
};

export default DashboardMain;