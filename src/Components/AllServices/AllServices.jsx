
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllServicesCart from "./AllServicesCart";
import Navbar from "../../Navbar/Navbar";




const AllServices = () => {

    const sericeData = useLoaderData()
    const [show,setShow] = useState(false)
   
    const [services ,setServices] = useState(sericeData);
    
    return (
       <div>
     <Navbar/>
         <div className="bg-slate-100 p-5">
            <div className="w-3/4 mx-auto ">

                {
                    show ? services.map((Aservice) =>(<AllServicesCart key={Aservice._id} Aservice={Aservice} services={services} setServices={setServices}></AllServicesCart>))
                    : services.slice(0,6).map((Aservice) =>(<AllServicesCart key={Aservice._id} Aservice={Aservice} services={services} setServices={setServices}></AllServicesCart>))
                }
            </div>
            {
                services.length > 6 && <button className=" p-2 px-5 rounded-sm  flex justify-center mx-auto" onClick={()=>setShow(!show)}>{show?"":"more"}</button>
            }
            
        </div>
       </div>
    );
};

export default AllServices;