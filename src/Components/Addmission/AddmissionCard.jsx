/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const AddmissionCard = ({ Aservice }) => {
    const { _id, name, userName, price, image, area, description, YourImage } = Aservice || {};
    const sliceDescription = description.slice(0, 100);
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const Date = form.Date.value;
        const address = form.address.value;
        const phone = form.phone.value;
        const subject = form.subject.value;
        const book = {

            name,
            image,
            email,
            Date,
            address,
            photo,
            phone,
            subject,
            service_id: _id

        }
        console.log(book)

        fetch('https://assignment-11-server-side-beta.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(book)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    swal("thank You", "Apply Successfully               ", "success")
                }
            })
    }

    return (
        <div className="py-5 ">
            <div className="border-2 bg-white rounded-md p-2 shadow-md">
                <div className=" ">
                    <div className="flex justify-between">
                        <h1 className=" font-bold text-xl">{name}</h1>
                        <label htmlFor="my_modal_6" className="text-blue-600 ">Apply</label>
                    </div>
                </div>
            </div>
            {/* The button to open modal */}
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">

                    <div className="form">

                        <form onSubmit={handleBooking} className="card-body">
                            <div className="flex gap-2">
                                <div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Your name</span>
                                        </label>
                                        <input type="text" name="name"  className="input input-bordered input-warning w-[200px] max-w-xs" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Subject</span>
                                        </label>
                                        <input type="text" name="subject"  className="input input-bordered input-warning w-[200px] max-w-xs" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text"> E-mail</span>
                                        </label>
                                        <input type="text" name="email"  placeholder="Type here" className="input input-bordered input-warning w-[200px] max-w-xs" />
                                    </div>
                                </div>
                                <div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Phone number</span>
                                        </label>
                                        <input type="text" name="phone" className="input input-bordered input-warning w-[200px] max-w-xs" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Date of Birth</span>
                                        </label>
                                        <input type="date" name="Date" placeholder="Type here" className="input input-bordered input-warning w-[200px] max-w-xs" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Address</span>
                                        </label>
                                        <input type="text" name="address"  className="input input-bordered input-warning w-[200px] max-w-xs" />
                                    </div>
                                </div>

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Photo</span>
                                </label>
                                <input type="text" name="photo" className="input input-bordered input-warning w-full max-w-xs" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-orange-400" >Apply Now </button>
                            </div>
                        </form>
                        <div className="modal-action">
                            <label htmlFor="my_modal_6" className="btn">Close!</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddmissionCard;