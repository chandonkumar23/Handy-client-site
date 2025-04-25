import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import swal from "sweetalert";
import Navbar from "../Navbar/Navbar";


const AddService = () => {
  const { user } = useContext(AuthContext)
  // const userPhoto = (user.photoURL)

  const handleAdd = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const image = form.image.value;
    const rating = form.rating.value;
    const research = form.research.value;
    const date = form.date.value;
    const sports = form.sports.value;
    const description = form.description.value;
    const AddData = {
      name, rating, research, date, image, sports, description
    }
    console.log(AddData);

    fetch('https://assignment-11-server-side-beta.vercel.app/AddServices', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(AddData)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          swal("thank You", "Add Successfully ", "success")
        }
      })

  }

  return (

    <div className="w-3/4 mx-auto bg-slate-50 m-7 rounded-xl">
      <Navbar />
      <div className="hero min-h-screen ">
        <div className="card flex-shrink-0 w-full max-w-md border-2  ">
          <form onSubmit={handleAdd} className="card-body">
            <div className=" sm:block lg:flex gap-3">
              <div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text"> College image URL</span>
                  </label>
                  <input className="border-2  border-orange-400 rounded-sm" required name="image" type="text" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">College Name</span>
                  </label>
                  <input className="border-2  border-orange-400  rounded-sm" required name="name" type="text" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">College Rating</span>
                  </label>
                  <input className="border-2   border-orange-400 rounded-sm" name="rating" type="number" />
                </div>
                {/* <div className="form-control">
          <label className="label">
            <span className="label-text">Your Photo</span>
          </label>
         <input className="border-2 required  border-orange-400 rounded-sm"  name="YourImage" type="text" />
        </div> */}
              </div>
              <div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Total Research</span>
                  </label>
                  <input className="border-2  border-orange-400  rounded-sm" name="research" type="number" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Addmission date</span>
                  </label>
                  <input className="border-2  border-orange-400  rounded-sm" required name="date" type="date" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Event</span>
                  </label>
                  <input className="border-2 border-orange-400  rounded-sm" required name="sports" type="text" />
                </div>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input className="border-2  border-orange-400  rounded-sm" required name="description" type="" />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-orange-400">Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
};

export default AddService;