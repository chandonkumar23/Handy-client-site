import { useEffect, useState } from "react";
import ServcesCart from "./ServcesCart";
import { Link } from "react-router-dom";

const HomeServices = () => {
      
    const [services,setServices]=useState([]);
    useEffect(()=>{

        fetch('https://assignment-11-server-side-beta.vercel.app/AddServices')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <div className="sm:block lg:p-5 bg-slate-100 mx-9 rounded-md">
                <h1 className="text-5xl font-extrabold text-center"> <span className="text-orange-500">Popular</span> services </h1>
                <div className=" gap-4  w-4/5 mx-auto p-7   ">
                    {
                        services.slice(0,4).map(service =><ServcesCart key={service._id} service={service}></ServcesCart>)
                    }
                </div>
                <button className="bg-orange-400 p-2 flex justify-center mx-auto "><Link to={'/services'}>See More</Link></button>
            </div>
         
           

        </div>
    );
};

export default HomeServices;