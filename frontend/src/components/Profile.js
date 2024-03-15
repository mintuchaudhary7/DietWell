import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
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
  });
  const firstRender = async () => {
    const response = await fetch("http://localhost:2000/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const result = await response.json();
    if (!response.ok) {
      console.log(result);
      return;
    }
    if (response.ok) {
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
      });
      //   console.log(result.data.Name);
      return;
    }
  };
  useEffect(() => {
    firstRender();
  }, []);
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Welcome {profile.name}</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label>Name:</label>
          <div className="border border-gray-400 p-2 w-full rounded-md">
            {profile.name}
          </div>
        </div>
        <div>
          <label>Email:</label>
          <div className="border border-gray-400 p-2 w-full rounded-md">
            {profile.email}
          </div>
        </div>
        <div>
          <label>Contact No.:</label>
          <div className="border border-gray-400 p-2 w-full rounded-md">
            {profile.phoneno}
          </div>
        </div>
        <div>
          <label>Age:</label>
          <div className="border border-gray-400 p-2 w-full rounded-md">
            {profile.age}
          </div>
        </div>
        <div>
          <label>Height:</label>
          <div className="border border-gray-400 p-2 w-full rounded-md">
            {profile.height}
          </div>
        </div>
        <div>
          <label>Weight:</label>
          <div className="border border-gray-400 p-2 w-full rounded-md">
            {profile.weight}
          </div>
        </div>
        <div>
          <label>Gender:</label>
          <div className="border border-gray-400 p-2 w-full rounded-md">
            {profile.gender}
          </div>
        </div>
        <div>
          <label>Diet Preference:</label>
          <div className="border border-gray-400 p-2 w-full rounded-md">
            {profile.dietPreference}
          </div>
        </div>
        <div>
          <label>Activity Level:</label>
          <div className="border border-gray-400 p-2 w-full rounded-md">
            {profile.activityLevel}
          </div>
        </div>
      </div>

      <NavLink cla to="/profile/updateprofile">
        <button className="bg-blue-500 m-5 h-10 rounded-sm p-2">
          Update Profile
        </button>
      </NavLink>
    </div>
  );
};
export default Profile;
