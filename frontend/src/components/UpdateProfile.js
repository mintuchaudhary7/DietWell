import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
const UpdateProfile = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phoneno: "",
    age: "",
    height: "",
    weight: "",
    gender: "",
    activity: "",
    dietpreference: "",
    bmr: "",
    allergy: "",
    disease: "",
    Hairtexture: "",
    hairtype: "",
    damagecount: "",
    skintype: "",
    stressdescription: "",
  });
  const nevigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };
  const firstRender = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(
      "http://localhost:2000/profile/updateprofile",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
        //   body: JSON.stringify(),
      }
    );
    const result = await response.json();
    if (!response.ok) {
      toast.error(result.message, {
        position: "top-center",
      });
      // console.log(result);
      return;
    }
    // for intant updating the data
    if (response.ok) {
      setProfile({
        name: result.data.Name,
        email: result.data.Email,
        phoneno: result.data.ContactNo,
        dietpreference: result.data.Dietpreference,
        age: result.data.Age,
        height: result.data.Height,
        weight: result.data.Weight,
        gender: result.data.Gender,
        activity: result.data.Activity,
        bmr: result.data.BMR,
        allergy: result.data.Allergy,
        disease: result.data.Disease,
        Hairtexture: result.data.Hairtexture,
        hairtype: result.data.Hairtype,
        damagecount: result.data.DamageCount,
        skintype: result.data.SkinType,
        stressdescription: result.data.Stressdescription,
      });
      //   console.log(result.data.Name);
      // toast.success(result.message,{
      //   position:"top-center"
      // })
      return;
    }
  };
  useEffect(() => {
    firstRender();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    // You can handle form submission here
    var addUser = { profile };
    const response = await fetch(
      "http://localhost:2000/profile/updateprofile",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
        body: JSON.stringify(addUser),
      }
    );
    const result = await response.json();
    if (!response.ok) {
      // setIslogin();
      // console.log(result);
      toast.error(result.message, {
        position: "top-center",
      });
      // console.log("singh");
      return;
    }
    if (response.ok) {
      // setIslogin(false);
      // console.log(result);
      // console.log("sahil");
      nevigate("/profile");
      toast.success(result.message, {
        position: "top-center",
      });
      return;
    }
  };

  return (
    <div className="bg-[#233037] pt-24 pb-4">
      <h1 className="text-white text-3xl font-bold text-center pl-5 mb-8">
        Update Your Profile{" "}
      </h1>
      <div className="bg-[#4a5976] max-w-md mx-auto p-4 rounded-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="mt-1 p-2 border rounded-md w-full "
              value={profile.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
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
              className="block text-sm font-medium text-white"
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
              className="block text-sm font-medium text-white"
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
              className="block text-sm font-medium text-white"
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
              className="block text-sm font-medium text-white"
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
              className="block text-sm font-medium text-white"
            >
              Gender
            </label>
            <select
              name="gender"
              id="gender"
              className="mt-1 p-2 border rounded-md w-full"
              value={profile.gender}
              onChange={handleChange}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="User Specified">User Specified</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="activity"
              className="block text-sm font-medium text-white"
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
              className="block text-sm font-medium text-white"
            >
              Diet Preference
            </label>
            <select
              name="dietpreference"
              id="dietpreference"
              className="mt-1 p-2 border rounded-md w-full"
              value={profile.dietpreference}
              onChange={handleChange}
            >
              <option value="Veg">Veg</option>
              <option value="Non-veg">Non-veg</option>
              <option value="Vegan">Vegan</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="BMR"
              className="block text-sm font-medium text-white"
            >
              BMR:
            </label>
            <input
              type="text"
              name="BMR"
              id="BMR"
              className="mt-1 p-2 border rounded-md w-full"
              value={profile.bmr}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="allergy"
              className="block text-sm font-medium text-white"
            >
              Allergy
            </label>
            <input
              type="text"
              name="allergy"
              id="allergy"
              className="mt-1 p-2 border rounded-md w-full"
              value={profile.allergy}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="disease"
              className="block text-sm font-medium text-white"
            >
              Disease
            </label>
            <input
              type="text"
              name="disease"
              id="disease"
              className="mt-1 p-2 border rounded-md w-full"
              value={profile.disease}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="Hairtexture"
              className="block text-sm font-medium text-white"
            >
              Hair-Texture
            </label>
            <input
              type="text"
              name="Hairtexture"
              id="Hairtexture"
              className="mt-1 p-2 border rounded-md w-full"
              value={profile.Hairtexture}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="hairtype"
              className="block text-sm font-medium text-white"
            >
              Hair-Type
            </label>
            <input
              type="text"
              name="hairtype"
              id="hairtype"
              className="mt-1 p-2 border rounded-md w-full"
              value={profile.hairtype}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="damagecount"
              className="block text-sm font-medium text-white"
            >
              Damage-Count
            </label>
            <input
              type="text"
              name="damagecount"
              id="damagecount"
              className="mt-1 p-2 border rounded-md w-full"
              value={profile.damagecount}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="skintype"
              className="block text-sm font-medium text-white"
            >
              Skin-Type
            </label>
            <input
              type="text"
              name="skintype"
              id="skintype"
              className="mt-1 p-2 border rounded-md w-full"
              value={profile.skintype}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="stressdescription"
              className="block text-sm font-medium text-white"
            >
              Stress-Description
            </label>
            <input
              type="text"
              name="stressdescription"
              id="stressdescription"
              className="mt-1 p-2 border rounded-md w-full"
              value={profile.stressdescription}
              onChange={handleChange}
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-xl font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default UpdateProfile;
