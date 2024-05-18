import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    height: "",
    weight: "",
    gender: "",
    dietPreference: "",
    activityLevel: "",
    email: "",
    phoneno: "",
    bmr:"",
    allergy:"",
    disease:"",
    Hairtexture:"",
    hairtype:"",
    damagecount:"",
    skintype:"",
    stressdescription:""
  });
  const firstRender = async () => {
    const token = localStorage.getItem('token')
    const response = await fetch("http://localhost:2000/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`,
      },
      credentials: "include",
    });
    const result = await response.json();
    if (!response.ok) {
      console.log(result);
      toast.info(result.message,{
        position:"top-center"
      })
      return;
    }
    if (response.ok) {
      console.log(result)
      setProfile({
        name: result.data.Name,
        email: result.data.Email,
        phoneno: result.data.ContactNo,
        dietPreference: result.data.Dietpreference,
        age: result.data.Age,
        height: result.data.Height,
        weight: result.data.Weight,
        gender: result.data.Gender,
        activityLevel: result.data.Activity,
        bmr:result.data.BMR,
        allergy:result.data.Allergy,
        disease:result.data.Disease,
        Hairtexture:result.data.Hairtexture,
        hairtype:result.data.Hairtype,
        damagecount:result.data.DamageCount,
        skintype:result.data.SkinType,
        stressdescription:result.data.Stressdescription
      });
      toast.success(result.message,{
        position:"top-center"
      })
      //   console.log(result.data.Name);
      return;
    }
  };
  useEffect(() => {
    firstRender();
  }, []);
  return (
    <div className="bg-[#233037] min-h-screen  pt-24  ">
      <h1 className="text-white text-3xl font-bold pl-5 mb-8">Welcome {profile.name}</h1>
      <div className="bg-[#4a5976] mx-5 p-4 rounded-md  grid grid-cols-1 md:grid-cols-2 gap-4">
        <div >
          <label className="text-white font-semibold">Name:</label>
          <div className="border border-gray-400 bg-white p-2 w-full rounded-md">
            {profile.name}
          </div>
        </div>
        <div >
          <label className="text-white font-semibold">Email:</label>
          <div className="border border-gray-400 bg-white p-2 w-full overflow-hidden rounded-md">
            {profile.email}
          </div>
        </div>
        <div >
          <label className="text-white font-semibold">Contact No.:</label>
          <div className="border border-gray-400 bg-white p-2 w-full rounded-md">
            {profile.phoneno}
          </div>
        </div>
        <div >
          <label className="text-white font-semibold">Age:</label>
          <div className="border border-gray-400 bg-white p-2 w-full rounded-md">
            {profile.age}
          </div>
        </div>
        <div >
          <label className="text-white font-semibold">Height:</label>
          <div className="border border-gray-400 bg-white p-2 w-full rounded-md">
            {profile.height}
          </div>
        </div>
        <div >
          <label className="text-white font-semibold">Weight:</label>
          <div className="border border-gray-400 bg-white p-2 w-full rounded-md">
            {profile.weight}
          </div>
        </div>
        <div >
          <label className="text-white font-semibold">Gender:</label>
          <div className="border border-gray-400 bg-white p-2 w-full rounded-md">
            {profile.gender}
          </div>
        </div>
        <div >
          <label className="text-white font-semibold">Diet Preference:</label>
          <div className="border border-gray-400 bg-white p-2 w-full rounded-md">
            {profile.dietPreference}
          </div>
        </div>
        <div > 
          <label className="text-white font-semibold">Activity Level:</label>
          <div className="border border-gray-400 bg-white p-2 w-full rounded-md">
            {profile.activityLevel}
          </div>
        </div>
        <div >
          <label className="text-white font-semibold">BMR:</label>
          <div className="border border-gray-400 bg-white p-2 w-full rounded-md">
            {profile.bmr}
          </div>
        </div>
        <div >
          <label className="text-white font-semibold">Allergy:</label>
          <div className="border border-gray-400 bg-white p-2 w-full rounded-md">
            {profile.allergy}
          </div>
        </div>
        <div >
          <label className="text-white font-semibold">Disease:</label>
          <div className="border border-gray-400 bg-white p-2 w-full rounded-md">
            {profile.disease}
          </div>
        </div>
        <div >
          <label className="text-white font-semibold">Hair-Texture</label>
          <div className="border border-gray-400 bg-white p-2 w-full rounded-md">
            {profile.Hairtexture}
          </div>
        </div>
        <div >
          <label className="text-white font-semibold">Hair-Type</label>
          <div className="border border-gray-400 bg-white p-2 w-full rounded-md">
            {profile.hairtype}
          </div>
        </div>
        <div >
          <label className="text-white font-semibold">Damage-Count</label>
          <div className="border border-gray-400 bg-white p-2 w-full rounded-md">
            {profile.damagecount}
          </div>
        </div>
        <div >
          <label className="text-white font-semibold">Skin-Type</label>
          <div className="border border-gray-400 bg-white p-2 w-full rounded-md">
            {profile.skintype}
          </div>
        </div>
        <div >
          <label className="text-white font-semibold">Stress-description</label>
          <div className="border border-gray-400 bg-white p-2 w-full rounded-md">
            {profile.stressdescription}
          </div>
        </div>
      </div>

      <NavLink to="/profile/updateprofile">
        <button className="bg-green-500 m-5 h-10 rounded-md text-white font-semibold p-2 hover:bg-green-700">
          UPDATE PROFILE
        </button>
      </NavLink>
    </div>
  );
};
export default Profile;