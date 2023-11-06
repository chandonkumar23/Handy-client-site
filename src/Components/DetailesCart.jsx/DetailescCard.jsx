import { useContext } from "react";
import { MdLocationPin } from "react-icons/md";

import { useLoaderData} from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";



const DetailescCard = () => {
    const SingleData = useLoaderData()
    const { _id,service_provider_location,service_image,service_description,service_name,service_provider_image,service_provider_name,service_price,service_area}= SingleData;
    const {user} = useContext(AuthContext)
 
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
          <div className="flex gap-2">
          
           <label htmlFor="my_modal_6" className="btn bg-orange-400">Book</label>    
           <div>
          <p className="font-bold"> Price: ${service_price}</p>
           <p className="font-bold">Area: {service_area}</p>
          </div>    
          </div>
           </div>     
            </div>

            

          
{/* The button to open modal */}


{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
 
  <form className="card-body">
        <div className="flex gap-2">
        <div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Name</span>
          </label>
          <input type="text" defaultValue={service_name} readOnly className="input input-bordered input-warning w-[200px] max-w-xs" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Image</span>
          </label>
          <input type="text" defaultValue={service_image} className="input input-bordered input-warning w-[200px] max-w-xs" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Provider E-mail</span>
          </label>
          <input type="text" placeholder="Type here" className="input input-bordered input-warning w-[200px] max-w-xs" />
        </div>
        </div>
      <div>
      <div className="form-control">
          <label className="label">
            <span className="label-text">User E-mail</span>
          </label>
          <input type="text" defaultValue={user.email} readOnly className="input input-bordered input-warning w-[200px] max-w-xs" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Taking Date</span>
          </label>
          <input type="date" placeholder="Type here" className="input input-bordered input-warning w-[200px] max-w-xs" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" defaultValue={service_price} readOnly className="input input-bordered input-warning w-[200px] max-w-xs" />
        </div>
      </div>   
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-orange-400">Purchase </button>
        </div>
      </form>
    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn">Close!</label>
    </div>
  </div>
</div>











        </div>
    );
};

export default DetailescCard;