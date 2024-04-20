import AdminNavbar from "./AdminNavbar"
import { Routes, Route } from "react-router"
import Dashboard from "./Dashboard"
import Users from "./Users"
import Dietition from "./Dietition"


const AdminPage = ()=>{
    return (
        <div>
            <Routes>
                <Route path="/" element={<AdminNavbar></AdminNavbar>}/>
                <Route path="/dashboard" element={<Dashboard></Dashboard>}/>
                <Route path="/users" element={<Users></Users>}/>
                <Route path="/dietition" element={<Dietition></Dietition>}/>
            </Routes>
        </div>
        
    )
}
export default AdminPage