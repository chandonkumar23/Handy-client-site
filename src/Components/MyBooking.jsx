/* eslint-disable react/prop-types */


const MyBooking = ({book}) => {
    const {name,image,Date,price} = book;
    return (
        <div className="py-8">
            <div className="flex items-center gap-10 border-2 rounded-md shadow-md">
               <div> <img src={image} alt="" /></div>
               <div>
                <h3 className="text-xl font-bold">{name}</h3>
                <p className="">Price: ${price}</p>
                <p> Date: {Date}</p>
               </div>
            </div>
        </div>
    );
};

export default MyBooking;