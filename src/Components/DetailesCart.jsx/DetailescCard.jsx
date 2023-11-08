import { useContext } from "react";
import { MdLocationPin } from "react-icons/md";

import { useLoaderData} from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import swal from "sweetalert";



const DetailescCard = () => {
    const SingleData = useLoaderData()
    const {_id, service_provider_location,service_image,service_description,service_name,service_provider_image,service_provider_name,service_price,service_area}= SingleData;
    const {user} = useContext(AuthContext)

    const handleBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const userEmail = form.userEmail.value;
        const providerEmail = form.providerEmail.value;
        const Date = form.Date.value;
        const price = form.price.value;
        const book = {

            name,
            image,
            userEmail,
            providerEmail,
            Date,
            price,
            service_id: _id
            
        }
        console.log(book)

        fetch('http://localhost:5000/bookings',{
            method: 'POST',
            headers:{
              'content-type': 'application/json'
            },
            body: JSON.stringify(book)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                swal("thank You", "Book Successfully               ","success")
            }
        })



    }
 
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
 
 <div className="form">

 <form onSubmit={handleBooking} className="card-body">
        <div className="flex gap-2">
        <div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Name</span>
          </label>
          <input type="text" name="name" defaultValue={service_name} readOnly className="input input-bordered input-warning w-[200px] max-w-xs" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Image</span>
          </label>
          <input type="text" name="image" defaultValue={service_image} readOnly className="input input-bordered input-warning w-[200px] max-w-xs" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Provider E-mail</span>
          </label>
          <input type="text" name="providerEmail" defaultValue={user.email} readOnly placeholder="Type here" className="input input-bordered input-warning w-[200px] max-w-xs" />
        </div>
        </div>
      <div>
      <div className="form-control">
          <label className="label">
            <span className="label-text">User E-mail</span>
          </label>
          <input type="text" name="userEmail" defaultValue={user.email} readOnly className="input input-bordered input-warning w-[200px] max-w-xs" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Taking Date</span>
          </label>
          <input type="date" name="Date" placeholder="Type here" className="input input-bordered input-warning w-[200px] max-w-xs" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" name="price" defaultValue={service_price} readOnly className="input input-bordered input-warning w-[200px] max-w-xs" />
        </div>
      </div>   
      
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Instration</span>
          </label>
          <input type="text" name="price" defaultValue={service_description}  className="input input-bordered input-warning w-full max-w-xs" />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-orange-400" >Purchase </button>
        </div>
      </form>
    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn">Close!</label>
    </div>
 </div>
  </div>
</div>











        </div>
    );
};

export default DetailescCard;