
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllServicesCart from "./AllServicesCart";


const AllServices = () => {

    const sericeData = useLoaderData()
    const [show,setShow] = useState(false)
   
    const [services ,setServices] = useState(sericeData);
    
    return (
        <div className="bg-slate-100 p-5">
            <div className="w-3/4 mx-auto ">

                {
                    show ? services.map((Aservice) =>(<AllServicesCart key={Aservice._id} Aservice={Aservice} services={services} setServices={setServices}></AllServicesCart>))
                    : services.slice(0,6).map((Aservice) =>(<AllServicesCart key={Aservice._id} Aservice={Aservice} services={services} setServices={setServices}></AllServicesCart>))
                }
            </div>
            {
                services.length > 6 && <button className="btn bg-orange-400 p-2 px-5 rounded-sm  flex justify-center mx-auto" onClick={()=>setShow(!show)}>{show?"":"more"}</button>
            }
            
        </div>
    );
};

export default AllServices;