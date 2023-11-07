/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ManageCart = ({data}) => {
     const { name,userEmail,userName,price,image,area,description}=data;
    return (
        <div className="py-3">
            <div className="sm:block lg:flex items-center gap-4 border-2 p-2">
                <img className="h-[250px] w-[350px]" src={image} alt="" />
                <div>
                    <h2 className="text-xl font-bold">{name}</h2>
                    <p>{description}</p>
                    <p> <span className="font-bold text-slate-400">Name:</span> {userName}</p>
                    <p><span className="font-bold  text-slate-400">E-mail:</span>  {userEmail}</p>
                    <p><span className="font-bold text-slate-400">Area:</span> {area}</p>
                    <p><span className="font-bold text-slate-400">Price: </span>${price}</p>
                    <br />
                    <Link className="bg-orange-400 p-2">update</Link> <Link className="bg-orange-400 p-2">delete</Link>
                </div>
            </div>
        </div>
    );
};

export default ManageCart;