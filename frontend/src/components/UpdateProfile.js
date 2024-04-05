import { useState,useEffect } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
const UpdateProfile = () => {
  const [profile, setProfile] = useState({
    name:"",
    email:"",
    phoneno:'',
    age: "",
    height: "",
    weight: "",
    gender: "",
    activity: "",
    dietpreference:""
  });
  const nevigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };
  const firstRender=async()=>{
    const response = await fetch("http://localhost:2000/profile/updateprofile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    //   body: JSON.stringify(),
    });
    const result = await response.json();
    if (!response.ok) {
      toast.error(result.message,{
        position:"top-center"
      })
      // console.log(result);
      return;
    }
    // for intant updating the data
    if (response.ok) {
        setProfile({name:result.data.Name, email:result.data.Email,phoneno:result.data.ContactNo,dietpreference:result.data.Dietpreference,age:result.data.Age,height:result.data.Height,weight:result.data.Weight,gender:result.data.Gender,activity:result.data.Activity})
    //   console.log(result.data.Name);
    // toast.success(result.message,{
    //   position:"top-center"
    // })
      return;
    }
  }
  useEffect(() => {
   firstRender();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can handle form submission here
    var addUser = {profile};
    const response = await fetch("http://localhost:2000/profile/updateprofile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(addUser),
    });
    const result = await response.json();
    if (!response.ok) {
      // setIslogin();
      // console.log(result);
      toast.error(result.message,{
        position:"top-center"
      });
      // console.log("singh");
      return;
    }
    if (response.ok) {
      // setIslogin(false);
      // console.log(result);
      // console.log("sahil");
      nevigate("/profile");
      toast.success(result.message,{
        position:"top-center"
      })
      return;
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <form onSubmit={handleSubmit} className="space-y-6">
      <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="mt-1 p-2 border rounded-md w-full"
            value={profile.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="mt-1 p-2 border rounded-md w-full"
            value={profile.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="phoneno"
            className="block text-sm font-medium text-gray-700"
          >
            Contact No.
          </label>
          <input
            type="number"
            name="phoneno"
            id="phoneno"
            className="mt-1 p-2 border rounded-md w-full"
            value={profile.phoneno}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="age"
            className="block text-sm font-medium text-gray-700"
          >
            Age
          </label>
          <input
            type="text"
            name="age"
            id="age"
            className="mt-1 p-2 border rounded-md w-full"
            value={profile.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="height"
            className="block text-sm font-medium text-gray-700"
          >
            Height (in cm)
          </label>
          <input
            type="text"
            name="height"
            id="height"
            className="mt-1 p-2 border rounded-md w-full"
            value={profile.height}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="weight"
            className="block text-sm font-medium text-gray-700"
          >
            Weight (in kg)
          </label>
          <input
            type="text"
            name="weight"
            id="weight"
            className="mt-1 p-2 border rounded-md w-full"
            value={profile.weight}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="gender"
            className="block text-sm font-medium text-gray-700"
          >
            Gender
          </label>
          <input
            type="text"
            name="gender"
            id="gender"
            className="mt-1 p-2 border rounded-md w-full"
            value={profile.gender}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="activity"
            className="block text-sm font-medium text-gray-700"
          >
            Activity
          </label>
          <input
            type="text"
            name="activity"
            id="activity"
            className="mt-1 p-2 border rounded-md w-full"
            value={profile.activity}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="dietpreference"
            className="block text-sm font-medium text-gray-700"
          >
            Diet-Preference
          </label>
          <input
            type="text"
            name="dietpreference"
            id="dietpreference"
            className="mt-1 p-2 border rounded-md w-full"
            value={profile.dietpreference}
            onChange={handleChange}
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};
export default UpdateProfile;
