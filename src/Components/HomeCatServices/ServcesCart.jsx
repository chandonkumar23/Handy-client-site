/* eslint-disable react/prop-types */

const ServcesCart = ({service}) => {
    const {service_image,service_description,service_name,service_provider_image,service_provider_name}=service;
    const sliceDescription = service_description.slice(0,100);
    return (
        <div className="py-5">
             <div className="border-4 rounded-md border-orange-300 p-5">               
               <div >
                    <img className="h-[400px] w-full mx-auto" src={service_image} alt="" />
                  <div className="pt-5">
                 <div className="flex gap-5 justify-center items-center">
                 <div><h1 className="text-4xl font-bold">{service_name}</h1>
                  <p>{sliceDescription}...</p></div>
                <div className="flex items-center">
                    <img className="h-[50px] w-[50px] rounded-full" src={service_provider_image} alt="" />
                    <p className="font-bold">{service_provider_name}</p>
                </div>
                </div>
                </div>
                 </div>
             </div>           
        </div>
    );
};

export default ServcesCart;