import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="p-5">
           <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.postimg.cc/9FCkyWJr/ronnie-george-9g-Gv-NWBe-Oq4-unsplash.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <div className="mb-5 text-5xl font-bold mt-4 "><h1 className="text-5xl font-bold">Han<span className="">dy</span></h1></div>
      <p className="mb-5 ">We are providing all home services.Lte's start now</p>
      <Link to={'/signup'} className=" bg-orange-500 text-black px-6 p-3 ">Sign up now</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;