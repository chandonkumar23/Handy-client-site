import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import MyBooking from "./MyBooking";


const MyShedule = () => {
    const {user}=useContext(AuthContext);
    const [booking , setBooking] =useState([]);
    const BookingsData=`http://localhost:5000/bookings?userEmail=${user.email}`;
    useEffect ( ()=>{
        fetch(BookingsData)
        .then(res => res.json())
        .then(data => setBooking(data))
    },[])
    
    return (
        <div className="11/12">
         <div className="grid lg:grid-cols-2 justify-around ">
         <div className="p-7">
            <h2 className="text-3xl font-bold">M<span className="text-orange-400">y</span> Shedule<span className="text-orange-400">s</span></h2>

            <div className="p-7 bg-slate-50 rounded-lg">
                <div>
                   {
                    booking?.map(book => <MyBooking
                         key={book._id} 
                         book={book}
                         ></MyBooking>)
                   }
                
                   
                </div>
            </div>
         </div>

         <div>
            <div className="p-7">
            <h2 className="text-3xl font-bold">Panddin<span className="text-orange-400">g</span> Work<span className="text-orange-400">s</span></h2>

            </div>
         </div>
         </div>

        </div>
    );
};

export default MyShedule;