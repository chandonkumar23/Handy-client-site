/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const AllServicesCart = ({ Aservice}) => {
    const { _id,service_image,service_description,service_name,service_provider_image,service_provider_name,service_price,service_area}= Aservice || {};
    const sliceDescription = service_description.slice(0,100);
  
    return (
        <div className="py-5 ">
            <div className="border-2 bg-white rounded-md p-2 shadow-md"> 
            <div className=" ">
           <img className="h-[300px] w-full" src={service_image} alt="" />      
            <div className="flex justify-between">
            <h1 className=" font-bold text-xl">{service_name}</h1>  
            <p className="font-bold"> price: ${service_price}</p>
            </div>
            <p>{sliceDescription}...</p>         
           <div className="flex items-center gap-4">
            <img className="h-[60px] w-[60px] rounded-full border-4 border-orange-400" src={service_provider_image} alt="" />
           <div>
           <div className="flex gap-5">
           <div>
           <h3 className="font-bold">{service_provider_name}</h3>
           <p>{service_area}</p>
           </div>  
           <div><button className="btn bg-orange-400"><Link to={`/services/${_id}`}>Detailes</Link></button></div>
           </div>
           </div>
           </div>
            </div>                        
            </div>           
        </div>
    );
};

export default AllServicesCart;