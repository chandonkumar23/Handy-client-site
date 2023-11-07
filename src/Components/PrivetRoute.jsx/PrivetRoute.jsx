/* eslint-disable react/prop-types */
import {  useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({children}) => {
    const {user,load} =useContext(AuthContext);
    const location = useLocation()
    console.log(location.pathname)
    if(load){
        return <span className="loading loading-spinner text-error flex justify-center mx-auto"></span>
    }
    if(user){
        return children;
    }
    
    return (
        <Navigate state={location.pathname}to="/login"></Navigate>
    );
};

export default PrivetRoute;