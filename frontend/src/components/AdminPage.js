import AdminNavbar from "./AdminNavbar";
import { Routes, Route } from "react-router";
import Dashboard from "./Dashboard";
import { useEffect,useState } from "react";
import Users from "./Users";
import Dietition from "./Dietition";
import { useContext } from "react";
import { UserContext } from "../App";
import { ToastContainer } from "react-toastify";
import Queries from "./Queries";
import FetchApplyDoctor from "./FetchApplyDoctor";

const AdminPage = () => {
  const user = useContext(UserContext);
  const logauth = user.logauth;
  useEffect(() => {
    logauth();
   }, []);
  return (
    <div>
      <ToastContainer></ToastContainer>
      <Routes>
        <Route
          path="/"
          element={
            <div>
             
              <Dashboard></Dashboard>
            </div>
          }
        />
        {/* <Route path="/" element={<Dashboard></Dashboard>}/> */}

        <Route path="/users" element={<Users></Users>} />
        <Route path="/dietition" element={<Dietition></Dietition>} />
        <Route path="/queries" element={<Queries></Queries>} />
        <Route path="/fetchapplydoctor" element={<FetchApplyDoctor></FetchApplyDoctor>} />
      </Routes>
      {/* this is home dash board */}
    </div>
  );
};
export default AdminPage;
