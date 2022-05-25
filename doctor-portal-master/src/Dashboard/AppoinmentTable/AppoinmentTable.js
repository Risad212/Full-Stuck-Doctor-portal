import React, {useContext, useEffect, useState } from 'react';
import { userData } from '../../DataStorge/DataStorge';
import './AppoinmentTable.scss';

const AppoinmentTable = () => {
    const [getNewData, setGetNewdData] = useState()
    const [userInfo, setUserInfo] = useContext(userData)

    // call user data from server
    useEffect(() => {
     fetch('http://localhost:5000/getdata')
     .then(res => res.json())
     .then(data => setGetNewdData(data))
    },[userInfo])

    // sessionStorage.clear()
    return (
        <div className='appoinmentTable'>
           <table>
               <tr>
                   <th>Phone</th>
                   <th>Name</th>
                   <th>Service</th>
                   <th>Time</th>
               </tr>
               {
                  getNewData ? (
                    getNewData.map((element) => {
                        return (
                            <tr>
                             <td>{element?.phone}</td>
                             <td>{element?.name}</td>
                             <td>{element?.serviceName}</td>
                             <td>{element?.time}</td>
                            </tr>
                        )
                    })
                  )
                  :
                  ''
                 }
           </table>
        </div>
    );
};

export default AppoinmentTable;