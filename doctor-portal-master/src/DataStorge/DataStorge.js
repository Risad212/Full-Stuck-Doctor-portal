import React, { createContext, useState } from 'react';
import Router from '../Router/Router';

export const userData = createContext()

const DataStorge = () => {
    const [userInfo, setUserInfo] = useState({})
    return (
        <userData.Provider value={[userInfo, setUserInfo]}>
           <Router />
        </userData.Provider>
    );
};

export default DataStorge;