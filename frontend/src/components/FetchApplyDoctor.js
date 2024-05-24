import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import { toast } from "react-toastify";
import ShowApplications from "./ShowApplications";

const FetchApplyDoctor = () => {
  const [menu, setMenu] = useState([]);
  const [resp, setResp] = useState(false);
  const [pending, setPending] = useState("pending");

  const fetchApplications = async () => {
    try {
      const token = sessionStorage.getItem("token");
      const response = await fetch(`http://localhost:2000/data/${pending}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
      });
      if (!response.ok) {
        const result = await response.json();
        toast.error(result.message, {
          position: "top-center",
        });
        return;
      }
      const result = await response.json();
      setMenu(result.data);
      setResp(true);
    } catch (error) {
      console.error("Error fetching applications:", error);
      toast.error("Failed to fetch applications", {
        position: "top-center",
      });
    }
  };

  useEffect(() => {
    fetchApplications();
  }, [pending]);

  const approveDoctor = async (email) => {
    try {
      const data = { email };
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:2000/approvedoctor", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const result = await response.json();
        toast.error(result.message, {
          position: "top-center",
        });
        return;
      }
      const result = await response.json();
      toast.success(result.message, {
        position: "top-center",
      });
      fetchApplications(); // Refresh application list after approval
    } catch (error) {
      console.error("Error approving doctor:", error);
      toast.error("Error approving doctor", {
        position: "top-center",
      });
    }
  };

  return (
    <div>
      <AdminNavbar />
      <h1 className="text-white font-bold text-2xl text-center pt-4">
        Apply Doctor
      </h1>
      <div className="flex flex-col md:flex-row justify-center md:justify-start">
        <button
          className="ml-2 mr-2 md:ml-10 mt-4 mb-4 text-white font-semibold py-2 px-4 bg-yellow-500 rounded-md hover:bg-yellow-600 transition duration-300"
          onClick={() => setPending("pending")}
          disabled={pending === "pending"}
        >
          Pending
        </button>
        <button
          className="ml-2 mr-2 md:ml-10 mt-4 mb-4 text-white font-semibold py-2 px-4 bg-green-500 rounded-md hover:bg-green-600 transition duration-300"
          onClick={() => setPending("approved")}
          disabled={pending === "approved"}
        >
          Approved
        </button>
      </div>

      {resp ? (
        menu.map((userData, index) => (
          <div key={index}>
            <ShowApplications userData={userData} />
            {userData.status === "pending" && (
              <button
                className="ml-2 mr-2 md:ml-10 mt-4 mb-4 text-white font-semibold py-2 px-4 bg-green-500 rounded-md hover:bg-green-600 transition duration-300"
                onClick={() => approveDoctor(userData.email)}
              >
                Approve Request
              </button>
            )}
          </div>
        ))
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default FetchApplyDoctor;
