import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import swal from "sweetalert";


const Navbar = () => {

  const {user , logOut} = useContext(AuthContext)

  const handleLogOut= ()=>{
    logOut()
    .then(swal({
        title: "Log Out ",
        icon: "success",
        button:"ok"
      }))
    .catch()
  }

    return (
        <div>
        <div className="navbar bg-white  px-5  shadow-lg ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to={'/'}>Home</Link></li>
        <li>
          <a>Dashboard</a>
          <ul className="p-2">
           <li ><Link to={'/addService'}>Add Services</Link></li>
            <li><Link to={'/manageProduct'}>Manage Services</Link></li>
            <li><Link to={'/myshedule'} >My Shedules</Link></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
  <div className="flex items-center ">
    <img className="border-4 rounded-full border-orange-400" src="https://i.postimg.cc/mrL4C4yg/resizew.png" alt="" />
<h1 className="text-3xl text-orange-400 font-bold">Handy</h1>
  </div>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 gap-3">

    
   <li className="text-xl"> <NavLink  to="/"
                        className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-400 underline " : ""
                        }>
                            Home
          </NavLink></li>

    <li className="text-xl"> <NavLink  to="/services"className={({ isActive, isPending }) =>
 isPending ? "pending" : isActive ? "text-red-400 underline " : ""
                        }>
                            Service
          </NavLink></li>


    {
    user ? 

   <li className="text-xl"> <Link onClick={handleLogOut}> Logout </Link> </li>
    :
    <li className="text-xl"> <Link to={'/login'}>Login</Link></li>
              
 }        
            
    <li tabIndex={0}>
    {
      user ?
      <details className="px-5">
          <summary className="bg-orange-400 rounded-sm text-xl">Dashboard</summary>
          <ul className="">
          

           <li className=""> <NavLink  to="/addService"className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-400 underline " : ""
                        }>
                            Add Services
          </NavLink></li>

           

            <li className=""> <NavLink  to="/manageProduct"className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-400 underline " : ""
                        }>
                            Manage Services
          </NavLink></li>

           

            <li className=""> <NavLink  to="/myshedule"className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-400 underline " : ""
                        }>
                           My Shedule
          </NavLink></li>


          </ul>
        </details> : <Link></Link>
        
    }
      </li> 
      <li>    
      
            </li>

    </ul>
  </div>
</div>
        </div>
    );
};

export default Navbar;