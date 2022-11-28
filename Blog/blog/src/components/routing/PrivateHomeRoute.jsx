import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import {useContext} from 'react';
import { Context } from '../../context/Context';


const PrivateHomeRoute = (props) => {
    const {user} = useContext(Context);// determine if authorized, from context or however you're doing it

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return user ? <Navigate to="/" /> : <Outlet />;
}

export default PrivateHomeRoute;