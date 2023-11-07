import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const AddService = () => {
  const {user} = useContext(AuthContext)
    return (
        <div className="w-3/4 mx-auto bg-slate-50 m-7 rounded-xl">
            <div className="hero min-h-screen ">
    <div className="card flex-shrink-0 w-full max-w-md border-2  ">
      <form className="card-body">
      <div className=" sm:block lg:flex gap-3">
      <div>

      <div className="form-control">
          <label className="label">
            <span className="label-text">Picture URL</span>
          </label>
         <input className="border-2 border-orange-400 rounded-sm" type="text" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Name</span>
          </label>
         <input className="border-2 border-orange-400  rounded-sm" type="text" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
         <input className="border-2  border-orange-400 rounded-sm" defaultValue={user.name} type="text" />
        </div>
      </div>
       <div>
       <div className="form-control">
          <label className="label">
            <span className="label-text">Your E-mail</span>
          </label>
         <input className="border-2 border-orange-400  rounded-sm" defaultValue={user.email} readOnly type="email" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
         <input className="border-2 border-orange-400  rounded-sm" type="text" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Area</span>
          </label>
         <input className="border-2 border-orange-400  rounded-sm" type="text" />
        </div>
       </div>
      </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
         <input className="border-2 border-orange-400  rounded-sm" type="" />
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