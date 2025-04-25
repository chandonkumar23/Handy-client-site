import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import MyBooking from "./MyBooking";
import Navbar from "../Navbar/Navbar";


const MyShedule = () => {
    const { user } = useContext(AuthContext);

    const [booking, setBooking] = useState([]);
    const BookingsData = `https://assignment-11-server-side-beta.vercel.app/bookings?usermail=${user.email}`;
    useEffect(() => {
        fetch(BookingsData)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [])

    return (
        <div>
            <Navbar />
            <div className="11/12 p-10">
                <div className="grid lg:grid-cols-2 justify-around ">
                    <div className="p-7">
                        <h2 className="text-3xl font-bold">My College</h2>
                        {
                            booking.length === 0 ? (
                                <p className=""></p>
                            )


                                : (
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

                                )
                        }
                    </div>

                    <div>
                        <div className="p-7">
                            <h2 className="text-3xl font-bold"></h2>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyShedule;