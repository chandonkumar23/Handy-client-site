import { Link } from "react-router-dom";


const Subscribetion = () => {
    return (
        <div className="p-10 my-10">
            <div className="h-[500px] w-11/12 mx-auto " style={{backgroundImage: 'url(https://i.postimg.cc/vBfzbh4c/jeshoots-com-ZMnefo-I3k-unsplash.jpg)'}}>   
           <div className="hero-overlay bg-opacity-60"></div>
          <div className=" text-center ">
          <div className="-mt-96 py-4">
          <h1 className=" text-5xl font-bold italic  text-orange-500 p-4">Subscribe</h1>
    <div className="flex justify-center items-center mx-auto gap-1">
    <input className="w-3/5 p-2" placeholder="Enter Your E-mail" type="text" /> 
     <Link className="bg-orange-400 p-2" to={'/'}>Subscribe</Link>
    </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Subscribetion;