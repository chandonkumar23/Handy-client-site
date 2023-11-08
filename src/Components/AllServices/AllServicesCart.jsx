/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const AllServicesCart = ({ Aservice}) => {
    const { _id,name,userName,price,image,area,description,YourImage}= Aservice || {};
    const sliceDescription = description.slice(0,100);
  
    return (
        <div className="py-5 ">
            <div className="border-2 bg-white rounded-md p-2 shadow-md"> 
            <div className=" ">
           <img className="h-[300px] w-full" src={image} alt="" />      
            <div className="flex justify-between">
            <h1 className=" font-bold text-xl">{name}</h1>  
            <p className="font-bold"> price: ${price}</p>
            </div>
            <p>{sliceDescription}...</p>         
           <div className="flex items-center gap-4">
            <img className="h-[60px] w-[60px] rounded-full border-4 border-orange-400" src={YourImage} alt="" />
           <div>
           <div className="flex gap-5">
           <div>
           <h3 className="font-bold">{userName}</h3>
           <p>{area}</p>
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