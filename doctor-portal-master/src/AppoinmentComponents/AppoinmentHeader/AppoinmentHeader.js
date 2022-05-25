import React, { useContext, useEffect, useState } from 'react';
import './AppoinmentHeader.scss';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import chairImg from  '../../Media/images/chair.png';
import { userData } from '../../DataStorge/DataStorge';

const AppoinmentHeader = () => {
    const [userInfo, setUserInfo] = useContext(userData);
    const [date, setDate] = useState(new Date())

    useEffect(() => {
      setUserInfo(date)
    },[date])

    return (
        <div id="AppoinmentHeader">
           <div className="container">
               <div className="row">
                   <div className="col-6">
                      <Calendar onChange={setDate} value={date} />
                   </div>
                   <div className="col-6">
                      <img src={chairImg} alt="" />
                   </div>
               </div>
           </div>
        </div>
    );
};

export default AppoinmentHeader;