

const Faq = () => {
    return (
        <div className="w-11/12 mx-auto p-10 my-10 ">
          <div className="sm:block lg:flex justify-center mx-auto ">
          <div>
                <img className="rounded-md h-[400px]" src="https://i.postimg.cc/qvZNzNq8/change-management-checklist-13-1.webp" alt="" />
           </div>
          <div className="w-3/4">
           <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200">
  <div className="collapse-title text-xl font-medium">
  What types of home services do you offer?
  </div>
  <div className="collapse-content"> 
    <p>We offer a wide range of home services, including plumbing, electrical work, HVAC repair, home cleaning, landscaping, pest control, and more. You can find a comprehensive list on our Services page.
**2. How do I request a service?

To request a service, simply visit our website and click on the Request Service button. Fill out the required details, and our team will get in touch with you to schedule the service at a convenient time for you.</p>
  </div>
</div><div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200">
  <div className="collapse-title text-xl font-medium">
  Are your service providers licensed and insured?
  </div>
  <div className="collapse-content"> 
    <p>Yes, all our service providers are thoroughly vetted, licensed, and insured to ensure your peace of mind and the highest quality of service.</p>
  </div>
</div><div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200">
  <div className="collapse-title text-xl font-medium">
  What is the cost of your services?
  </div>
  <div className="collapse-content"> 
    <p>The cost of our services varies depending on the type of service you require and the scope of the work. You can request a free quote by filling out the service request form, and our team will provide you with an estimate.</p>
  </div>
</div>
<div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200">
  <div className="collapse-title text-xl font-medium">
  How quickly can I get a service appointment?
  </div>
  <div className="collapse-content"> 
    <p>We aim to schedule service appointments as quickly as possible, typically within 24-48 hours of your request. However, availability may vary depending on the type of service and your location</p>
  </div>
</div>
           </div>
          
          </div>
        </div>
    );
};

export default Faq;