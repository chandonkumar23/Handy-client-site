import { MdLocationPin } from "react-icons/md";

import { useLoaderData} from "react-router-dom";


const DetailescCard = () => {
    const SingleData = useLoaderData()
    const { _id,service_provider_location,service_image,service_description,service_name,service_provider_image,service_provider_name,service_price,service_area}= SingleData;
   
 
    return (
        <div className="w-3/5 mx-auto py-8 ">
             <h1 className="text-5xl font-bold">{service_name}</h1>
            <div className="flex items-center p-2"> 
            <img className="h-[60px] w-[60px]  border-4 border-orange-400 rounded-full " src={service_provider_image} alt="" />
           <div className="flex ">
           <div>
           <h1>{service_provider_name}</h1>
            <p className="flex items-center"><MdLocationPin></MdLocationPin> {service_provider_location}</p>
           </div>
           </div>
            </div>
            <div className="sm:block lg:flex gap-5">
            <img className="h-[300px] w-[600px] rounded-md" src={service_image} alt="" />
           <div>        
           <p className="text-gray-500">{service_description}</p>
           <br />
           <p className="font-bold"> Price: ${service_price}</p>
           <p className="font-bold">Area: {service_area}</p>
           <button className="btn bg-orange-400">Book</button>           
           </div>     
            </div>
        </div>
    );
};

export default DetailescCard;