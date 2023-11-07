/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ServcesCart = ({service}) => {
    const {_id,service_image,service_description,service_name,service_provider_image,service_provider_name}=service;
    const sliceDescription = service_description.slice(0,100);
    return (
        <div className="py-5">
             <div className="border-4 rounded-md bg-white shadow-md p-5">               
               <div >
                    <img className="h-[400px] w-full mx-auto" src={service_image} alt="" />
                  <div className="pt-5">
                 <div className="flex gap-2">
                 <div className="">
                    <img className="h-[50px] w-[50px] border-4 border-orange-400 rounded-full" src={service_provider_image} alt="" />
                    <p className="font-bold text-slate-400">{service_provider_name}</p>
                 </div>
                 <button className="btn bg-orange-300"><Link to={`/services/${_id}`}>view detailse</Link></button>
                 </div>
                 <div className=" gap-5 justify-center items-center">
                 <div><h1 className="text-4xl font-bold">{service_name}</h1>
                  <p>{sliceDescription}...</p></div>
              
                </div>
                </div>
                 </div>
             </div>           
        </div>
    );
};

export default ServcesCart;