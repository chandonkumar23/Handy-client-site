

const MyBooking = ({book}) => {
    const {name,image,userEmail,providerEmail,Date,price} = book;
    return (
        <div className="p-4">
            <div className="flex items-center gap-10 border-2 shadow-md">
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