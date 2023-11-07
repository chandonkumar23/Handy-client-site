const Testimonial = () => {
    return (
        <div className="w-11/12 mx-auto pt-8 p-5">
                <h1 className="text-5xl font-extrabold text-center"> <span className="text-orange-500">Testi</span>monial</h1>
            <div className="grid lg:grid-cols-3 gap-3 p-4 pt-8 ">
            <div className="border-l-4  border-orange-500 mx-3 shadow-lg rounded-lg">
           <div className="flex">
           <img className="h-[80px] w-[80px] rounded-full mx-2 border-black"  src="https://i.postimg.cc/6pzXGwyw/edward-cisneros-H6wpor9mjs-unsplash.jpg" alt="" />
           <div>
           <h2 className="text-slate-400">Alisha</h2>
            <p className="text-slate-400">New Yourk,USA</p>
           </div>
           </div>
                <p className="mx-2">The website was user-friendly and made it incredibly easy to find the exact service I needed. Booking an
                  appointment was a breeze, and I appreciated the quick response from their team. The professionals they connected
                  </p>
                 
            </div>
            <div className="border-l-4  border-orange-500 mx-3 shadow-lg rounded-lg">
                <p>The website was user-friendly and made it incredibly easy to find the exact service I needed. Booking an
                  appointment was a breeze, and I appreciated the quick response from their team. The professionals they connected
                  </p>
            </div>
            <div className="border-l-4 border-orange-500 mx-3 shadow-lg rounded-lg">
                <p>The website was user-friendly and made it incredibly easy to find the exact service I needed. Booking an
                  appointment was a breeze, and I appreciated the quick response from their team. The professionals they connected
                  .</p>
            </div>
            
            </div>
        </div>
    );
};

export default Testimonial;