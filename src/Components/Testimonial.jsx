import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
    return (
        <div className="w-11/12 mx-auto pt-8 p-5">
                <h1 className="text-5xl font-extrabold text-center"> <span className="text-orange-500">Testi</span>monial</h1>
            <div className="grid lg:grid-cols-3 gap-3 p-8 pt-16  ">
            <div className="border-l-4  border-orange-500 mx-3 shadow-lg rounded-lg">
           <div className="flex">
           <img className="h-[80px] w-[80px] rounded-full mx-2 border-4 border-black"  src="https://i.postimg.cc/6pzXGwyw/edward-cisneros-H6wpor9mjs-unsplash.jpg" alt="" />
           <div>
           <h2 className="text-slate-400">Alisha</h2>
            <p className="text-slate-400">New Yourk,USA</p>
            <div className="flex text-yellow-500">  
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                 </div>
           </div>
           </div>
                <p className="mx-2 text-slate-500 italic">❝The website was user-friendly and made it incredibly easy to find the exact service I needed. Booking an
                  appointment was a breeze, and I appreciated the quick response from their team. The professionals they connected❞
                  </p>
                
            </div>
            <div className="border-l-4  border-orange-500 mx-3 shadow-lg rounded-lg">
           <div className="flex">
           <img className="h-[80px] w-[80px] rounded-full mx-2 border-4 border-black"  src="https://i.postimg.cc/jSRT5CqZ/charlie-green-3-Jmf-ENc-L24-M-unsplash.jpg" alt="" />
           <div>
           <h2 className="text-slate-400">Jhon Lio</h2>
            <p className="text-slate-400">Califonia,USA</p>
            <div className="flex text-yellow-500">  
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                 </div>
            
           </div>
           </div>
                <p className="mx-2 text-slate-500 italic"> ❝The website was user-friendly and made it incredibly easy to find the exact service I needed. Booking an
                  appointment was a breeze, and I appreciated the quick response from their team. The professionals they connected❞
                  </p>
                 
            </div>
            <div className="border-l-4  border-orange-500 mx-3 shadow-lg rounded-lg">
           <div className="flex">
           <img className="h-[80px] w-[80px] rounded-full mx-2 border-4 border-black"  src="https://i.postimg.cc/tCQyK2K0/meritt-thomas-ao-Q4-DYZLE-E-unsplash.jpg" alt="" />
           <div>
           <h2 className="text-slate-400">Jeshika </h2>
            <p className="text-slate-400">Rome,Italy</p>
            <div className="flex text-yellow-500">  
                  <AiFillStar ></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                 </div>
           </div>
           </div>
                <p className="mx-2 text-slate-500 italic">❝The website was user-friendly and made it incredibly easy to find the exact service I needed. Booking an
                  appointment was a breeze, and I appreciated the quick response from their team. The professionals they connected❞
                  </p>         
            </div>             
            </div>
        </div>
    );
};

export default Testimonial;