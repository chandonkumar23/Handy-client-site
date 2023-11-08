import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import swal from "sweetalert";


const AddService = () => {
  const {user} = useContext(AuthContext)


  const handleAdd = event=>{
    event.preventDefault();
    const form = event.target;
    const name =form.name.value;
    const image = form.image.value;
    const usermail = form.usermail.value;
    const userName = form.userName.value;
    const price = form.price.value;
    const area = form.area.value;
    const YourImage = form.YourImage.value;
    const description = form.description.value;
    const AddData = {
      name,usermail,userName,price,image,area,description,YourImage
    }
    console.log(AddData);

    fetch('http://localhost:5000/AddServices',{
      method: 'POST',
      headers : {
        'content-type' : 'application/json'
      },
      body : JSON.stringify(AddData)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data)
      if(data.insertedId){
        swal("thank You", "Add Successfully ","success")
    }
    })

  }

    return (
        <div className="w-3/4 mx-auto bg-slate-50 m-7 rounded-xl">
            <div className="hero min-h-screen ">
    <div className="card flex-shrink-0 w-full max-w-md border-2  ">
      <form onSubmit={handleAdd} className="card-body">
      <div className=" sm:block lg:flex gap-3">
      <div>

      <div className="form-control">
          <label className="label">
            <span className="label-text"> Service Picture URL</span>
          </label>
         <input className="border-2  border-orange-400 rounded-sm" required name="image" type="text" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Name</span>
          </label>
         <input className="border-2  border-orange-400  rounded-sm" required name="name" type="text" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
         <input className="border-2   border-orange-400 rounded-sm" defaultValue={user.displayName} readOnly name="userName" type="text" />
        </div>
        {/* <div className="form-control">
          <label className="label">
            <span className="label-text">Your Photo</span>
          </label>
         <input className="border-2 required  border-orange-400 rounded-sm"  name="YourImage" type="text" />
        </div> */}
      </div>
       <div>
       <div className="form-control">
          <label className="label">
            <span className="label-text">Your E-mail</span>
          </label>
         <input className="border-2  border-orange-400  rounded-sm" defaultValue={user.email} readOnly name="usermail" type="email" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
         <input className="border-2  border-orange-400  rounded-sm" required name="price" type="text" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Area</span>
          </label>
         <input className="border-2 border-orange-400  rounded-sm"  required name="area" type="text" />
        </div>
       </div>
      </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
         <input className="border-2  border-orange-400  rounded-sm" required name="description" type="" />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-orange-400">Add</button>
        </div>
      </form>
    </div>
  </div>
</div>
            
        
    );
};

export default AddService;