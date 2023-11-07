/* eslint-disable no-unused-vars */
import swal from "sweetalert";
import { FcGoogle  } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const GoogleLoing = () => {
    const { googleLogin} = useContext(AuthContext)

    const handleGoolein = (google) =>{
        google()  
        .then(result =>{
            if(google){
                swal("Done","","success");
            }    
        })
    }
    return (
        <div>
             <button onClick={()=>handleGoolein(googleLogin)} className="btn  bg-slate-300 opacity-50 outline-1 flex justify-center mx-auto"> <FcGoogle className="text-xl"></FcGoogle> Login with Google</button>
        </div>
    );
};

export default GoogleLoing;