import React from "react";

const ShowApplications = ( props ) => {
  const userData = props.userData;
  const { name, email, contactNo, university, graduationYear, experience } =
    userData;
  // const setEmail = props.setEmail;
  // setEmail(email);
  return (
    <div className="bg-[#4a5976] rounded-lg shadow-md p-4 mx-2 mb-4">
      <h2 className="text-xl text-white font-bold mb-2">{name}</h2>
      <p className="text-white font-semibold mb-2">Email: {email}</p>
      <p className="text-white font-semibold mb-2">Contact No: {contactNo}</p>
      <p className="text-white font-semibold mb-2">University: {university}</p>
      <p className="text-white font-semibold mb-2">Graduation Year: {graduationYear}</p>
      <p className="text-white font-semibold mb-2">Experience: {experience}</p>
    </div>
  );
};

export default ShowApplications;
