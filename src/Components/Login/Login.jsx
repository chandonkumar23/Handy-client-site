/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import swal from "sweetalert";
import GoogleLoing from "./GoogleLoing";


const Login = () => {
  const {SignIN} =useContext(AuthContext);
  const [sinerror , setSinerror]= useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = e =>{
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email,password);
     SignIN(email,password)
    .then(result =>{
      if( SignIN){
        swal("Log In", "", "success");
      }
      navigate(location ?.state ? location.state : '/' );
    })
    .catch(error =>{
      setSinerror(error.message);
    })
  }
    return (
        <div className="p-8 h-[900px]">
 <div className="hero min-h-screen bg-gradient-to-r from-purple-500 to-pink-500">
  <div className=""></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
    
    <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <img className="h-[70px] w-[70px] flex justify-center mx-auto" src="https://i.ibb.co/bg9LQFQ/login-1.png" alt="" />
    <h3 className="text-xl text-orange-500">User Login</h3>
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
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
          <button className="btn bg-orange-500">Login</button>
          {
            sinerror && <p className="text-red-500">{sinerror}</p>
          }
        </div>
        <div>
            <p className="text-center">or</p>
            <hr />
            <p className="text-orange-500"><Link to={'/signup'}>Create a new account </Link></p>
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

export default Login;