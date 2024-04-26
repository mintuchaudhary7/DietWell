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
      const response = await fetch(`http://localhost:2000/data/${pending}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
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
      const response = await fetch("http://localhost:2000/approvedoctor", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
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
      <h1>Apply Doctor</h1>
      <div>
        <button
          className="m-10"
          onClick={() => setPending("pending")}
          disabled={pending === "pending"}
        >
          Pending
        </button>
        <button
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
              <button onClick={() => approveDoctor(userData.email)}>
                Approve
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
