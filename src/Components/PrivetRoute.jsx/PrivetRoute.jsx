import { Children, useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({children}) => {
    const {user,load} =useContext(AuthContext);
    const location = useLocation()
    console.log(location.pathname)
    if(load){
        return <span className="loading loading-spinner text-accent flex justify-center mx-auto text-5xl"></span>
    }
    if(user){
        return children;
    }
    
    return (
        <Navigate state={location.pathname}to="/login"></Navigate>
    );
};

export default PrivetRoute;