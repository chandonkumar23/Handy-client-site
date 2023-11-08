import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import ManageCart from "./ManageCart";


const ManageService = () => {

    const {user} = useContext(AuthContext)
    const [manage , setManage] = useState([]);
   

    const ManageData=`http://localhost:5000/AddServices?usermail=${user.email}`;
    // const [service , setService] = useState(ManageData);
   

    useEffect( ()=>{
        fetch(ManageData)
        .then(res => res.json())
        .then(data => setManage(data))
    },[])
  
    return (
        <div className="py-5 ">     
            <h2 className="text-3xl font-bold mx-5">Manage Services</h2>
          <div className="sm:block   lg:w-3/5 mx-auto p-8">
          
          {
              manage?.map(data => <ManageCart
                         key={data._id} 
                         data={data}
                         manage={manage}
                         setManage={setManage}
                         ></ManageCart>)
            }
          </div>
        </div>
    );
};

export default ManageService;