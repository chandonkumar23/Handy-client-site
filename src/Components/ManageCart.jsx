/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageCart = ({data,manage,setManage,}) => {
     const {_id, name,usermail,userName,price,image,area,description}=data ;
     const sliceDescription = description.slice(0,100);

        const handleDelete = _id =>{
          console.log(_id);
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
             
              fetch(`https://assignment-11-server-side-beta.vercel.app/AddServices/${_id}`,{
                method:'DELETE'
              })
              .then(res => res.json())
              .then(data =>{
                if(data.deletedCount > 0){
                  Swal.fire(
                    "Deleted!",
                     "Your file has been deleted.",
                     "success"
                  )
                  const remainig = manage.filter(del => del._id !== _id);
                  setManage(remainig)
                }
              })
            }
          });
        }


    return (
        <div className="">
            <div className="sm:block lg:flex items-center gap-4 border-2 p-2">
                <img className="h-[250px] w-[350px]" src={image} alt="" />
                <div>
                    <h2 className="text-xl font-bold">{name}</h2>
                    <p>{sliceDescription}</p>
                    <p> <span className="font-bold text-slate-400">Name:</span> {userName}</p>
                    <p><span className="font-bold  text-slate-400">E-mail:</span>  {usermail}</p>
                    <p><span className="font-bold text-slate-400">Area:</span> {area}</p>
                    <p><span className="font-bold text-slate-400">Price: </span>${price}</p>
                    <br />
                    <button><Link to={`/update/${_id}`} className="btn bg-green-400">edit</Link></button>
                      <button>  <Link onClick={()=> handleDelete(_id)} className="btn bg-red-300 p-2">delete</Link></button>
                </div>
            </div>
        </div>
    );
};

export default ManageCart;