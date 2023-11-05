import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Dasborad = () => {
    return (
        <div className="w-11/12 mx-auto">
           <div><Navbar></Navbar></div> 
            <div>
                <main className="">
                    <div className="grid py-5 grid-cols-12 min-h-screen">
                        <div className="bg-orange-100 col-span-3 h-full flex flex-col ">
                            <NavLink to={'/dasborad/addproduct'} className="p-2 my-3 border border-stone-400 w-full">Add Product</NavLink>
                            <NavLink className="p-2 my-3 border border-stone-400 w-full">Manage Product</NavLink>
                            <NavLink className="p-2 my-3 border border-stone-400 w-full">Add Catagory</NavLink>
                            <NavLink className="p-2 my-3 border border-stone-400 w-full">Manage Catagory</NavLink>
                           

                        </div>
                        <div className="bg-orange-200 col-span-9 h-full">
                            <Outlet></Outlet>
                        </div>
                    </div>

                </main>
            </div>
           <div className=""> <Footer></Footer></div>
        </div>
    );
};

export default Dasborad;