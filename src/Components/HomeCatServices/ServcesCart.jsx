/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ServcesCart = ({service}) => {
    const {_id, name,userName,price,image,description,YourImage}=service;
    const sliceDescription = description.slice(0,100);
    return (
        <div className="py-5">
             <div className="sm:block lg:border-4 rounded-md bg-white shadow-md p-5">               
               <div >
                    <img className="sm:block lg:h-[400px] w-full mx-auto" src={image} alt="" />
                    <p><span className="font-bold">Price</span> ${price}</p>
                  <div className="pt-5">
                 <div className=" sm:block lg:flex gap-2">
                 <div className="">
                    <img className="h-[50px] w-[50px] border-4 border-orange-400 rounded-full" src={YourImage} alt="" />
                    <p className="font-bold text-slate-400">{userName}</p>
                 </div>
                 <button className="btn bg-orange-300"><Link to={`/services/${_id}`}>view detailse</Link></button>              
                 </div>
                 <div className=" gap-5 justify-center items-center">
                 <div><h1 className="text-xl lg:text-4xl font-bold">{name}</h1>
                  <p>{sliceDescription}</p>
                  </div>
              
                </div>
                </div>
                 </div>
             </div>           
        </div>
    );
};

export default ServcesCart;