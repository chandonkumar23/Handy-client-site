import { useEffect, useState } from "react";
import ServcesCart from "./ServcesCart";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const HomeServices = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(swal({
                title: "Log Out ",
                icon: "success",
                button: "ok"
            }))
            .catch();
    };

    const [services, setServices] = useState([]);
    const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query

    useEffect(() => {
        fetch('https://handy-server-site.vercel.app/AddServices')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    // Filter the services based on the search query
    const filteredServices = services.filter(service =>
        service.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <div>
                <div className="navbar bg-white border-b-2 border-orange-400 shadow-red-300 px-5 p-5 shadow-lg">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to={'/'}>Home</Link></li>
                                
                            </ul>
                        </div>
                        <div className="flex items-center">
                            <img className="border-4 rounded-full border-orange-400 h-[60px]" src="" alt="" />
                            <h1 className="text-3xl text-orange-500 font-bold">Col<span className="text-black">ly</span></h1>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-3">
                            <li className="text-xl">
                                <NavLink
                                    to="/"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-red-400 underline " : ""
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li className="text-xl">
                                <NavLink
                                    to="/services"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-red-400 underline " : ""
                                    }
                                >
                                    College
                                </NavLink>
                            </li>
                            <li className="text-xl">
                                <NavLink
                                    to="/services"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-red-400 underline " : ""
                                    }
                                >
                                    My College
                                </NavLink>
                            </li>
                            <li className="text-xl">
                                <NavLink
                                    to="/addmission"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-red-400 underline " : ""
                                    }
                                >
                                    Addmission
                                </NavLink>
                            </li>
                            {user ? (
                                <li className="text-xl">
                                    <Link onClick={handleLogOut}> Logout </Link>
                                </li>
                            ) : (
                                <li className="text-xl">
                                    <Link to={"/login"}>Login</Link>
                                </li>
                            )}

                         

                            {/* Search Input Field */}
                            <li>
                                <input
                                    type="text"
                                    placeholder="Search by service name..."
                                    className="input input-bordered w-48 max-w-xs"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
                                />
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="sm:block lg:p-5 bg-slate-100 mx-9 rounded-md">
                <h1 className="text-5xl font-extrabold text-center">
                    <span className="text-orange-500">Popular</span> college
                </h1>
                <div className="gap-4 w-4/5 mx-auto p-7">
  {/* Display only 3 filtered services */}
  {filteredServices.length > 0 ? (
    filteredServices.slice(0, 3).map(service => (
      <ServcesCart key={service._id} service={service} />
    ))
  ) : (
    <p className="text-center text-xl">No services found</p>
  )}
</div>

                <button className="bg-orange-400 p-2 flex justify-center mx-auto">
                    <Link to={'/services'}>See More</Link>
                </button>
            </div>
        </div>
    );
};

export default HomeServices;
