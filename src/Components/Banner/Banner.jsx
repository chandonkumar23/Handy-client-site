import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="p-5">
           <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.postimg.cc/QxtYD5zx/tierra-mallorca-rg-J1-J8-SDEAY-unsplash.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <div className="mb-5 text-5xl font-bold"><img className="flex justify-center mx-auto" src="https://d2kzpkef14nfxb.cloudfront.net/images/website/logo/logo@3x.svg" alt="" /></div>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <Link className=" bg-orange-500 text-black px-6 p-3">Sign up now</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;