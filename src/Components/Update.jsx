import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";



const Update = () => {
  const data = useLoaderData()
  const {id}=useParams();

  const findProduct = data?.find(product=>product._id===id)
  console.log(findProduct)
 const {_id, name,userEmail,userName,price,image,area,description} = findProduct;

  const handleUpdate = event=>{
        event.preventDefault();
        const form = event.target;
        const name =form.name.value;
        const userEmail = form.userEmail.value;
        const userName = form.userName.value;
        const area = form.area.value;
        const price = form.price.value;
        const description = form.description.value;
        const allUpdate = {
            name,userEmail,userName,price,image,area,description
        }
        console.log(allUpdate);

        fetch(`https://assignment-11-server-side-beta.vercel.app/AddServices/${_id}`,{
            method:'PUT',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(allUpdate)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount > 0){
            
                    swal("thank You", "Updated Successfully  ","success")
                
            }
                
        })   

        }

    return (
        <div className="w-3/4 mx-auto bg-slate-50 m-7 rounded-xl">
        <div className="hero min-h-screen ">
<div className="card flex-shrink-0 w-full max-w-md border-2  ">
  <form onSubmit={handleUpdate} className="card-body">
  <div className=" sm:block lg:flex gap-3">
  <div>

  <div className="form-control">
      <label className="label">
        <span className="label-text">Picture URL</span>
      </label>
     <input className="border-2  border-orange-400 rounded-sm"name="image" defaultValue={image} type="text" />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Service Name</span>
      </label>
     <input className="border-2 border-orange-400 rounded-sm" name="name" defaultValue={name} type="text" />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Your Name</span>
      </label>
     <input className="border-2  border-orange-400 rounded-sm" defaultValue={userName} name="userName" type="text" />
    </div>
  </div>
   <div>
   <div className="form-control">
      <label className="label">
        <span className="label-text">E-mail</span>
      </label>
     <input className="border-2 border-orange-400  rounded-sm" defaultValue={userEmail}  name="userEmail" type="email" />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Price</span>
      </label>
     <input className="border-2 border-orange-400  rounded-sm" defaultValue={price} name="price" type="text" />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Area</span>
      </label>
     <input className="border-2 border-orange-400  rounded-sm" name="area" defaultValue={area} type="text" />
    </div>
   </div>
  </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Description</span>
      </label>
     <input className="border-2 border-orange-400  rounded-sm" defaultValue={description} name="description" type="" />
    </div>
    <div className="form-control mt-6">
      <button className="btn bg-orange-400">update</button>
    </div>
  </form>
</div>
</div>
</div>
    );
};

export default Update;