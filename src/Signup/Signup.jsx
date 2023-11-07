import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import swal from "sweetalert";
import GoogleLoing from "../Components/Login/GoogleLoing";


const Signup = () => {
  const {createUser} = useContext(AuthContext)
  const [sinuperror , setSignupError] =useState('');
  const handleSignup = e=>{
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const email = form.get('email');
    const password = form.get('password');
    console.log(name,email,password);
    if(password.length < 6){
      setSignupError("password must be 6 characters")
      return;
    }
    else if (!/[A-Z]/.test(password)){
      setSignupError("Don't have a capital character")
      return
  }
  else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)){
    setSignupError("Don't have a special character")
    return
  }
  setSignupError('')
  createUser(email,password)
  .then(result =>{
    console.log(result.user)
    if(createUser){
      swal("thank You", "Successfully Registered","success")

    }
  })
  .catch(error =>{
    console.error(error)
    console.error(error)
    setSignupError(error.message)
  })
}

    return (   <div className="p-8 h-[900px]">
    <div className="hero min-h-screen bg-gradient-to-r from-purple-500 to-pink-500">
     <div className=""></div>
     <div className="hero-content text-center text-neutral-content">
       <div className="max-w-md">
       
       <div className="hero min-h-screen ">
     <div className="hero-content flex-col lg:flex-row-reverse">
       <div className="text-center lg:text-left">
       </div>
       <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
       <img className="h-[70px] w-[70px] flex justify-center mx-auto" src="https://i.ibb.co/ZGHsBbp/Untitled-design-12.png" alt="" />
       <h3 className="text-xl text-orange-500">Sign up</h3>
         <form onSubmit={handleSignup} className="card-body">
           <div className="form-control">
             <label className="label">
               <span className="label-text">Name</span>
             </label>
             <input type="name" name="name" placeholder="name" className="input input-bordered" required />
           </div>
           <div className="form-control">
             <label className="label">
               <span className="label-text">Email</span>
             </label>
             <input type="email"name="email" placeholder="email" className="input input-bordered" required />
           </div>
           <div className="form-control">
             <label className="label">
               <span className="label-text">Password</span>
             </label>
             <input type="password" name="password" placeholder="password" className="input input-bordered" required />
             <label className="label">
              <p></p>
             </label>
           </div>
           <div className="form-control mt-6">
             <button className="btn bg-orange-400">Signup</button>
           </div>
         
            {
             sinuperror && <p className="text-red-500">{sinuperror}</p>
            }
          
           <div>
            <p className="text-center">or</p>
            <hr />
            <p className="text-orange-500">Already have an account<Link to={'/login'}> <span className="text-primary">Log in</span></Link></p>
        </div>
        <GoogleLoing></GoogleLoing>
         </form>
       </div>
     </div>
   </div>
       </div>
     </div>
   </div>
               
           </div>
       );
   };
export default Signup;