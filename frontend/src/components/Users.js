import { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import UserCard from "./UserCard";
import SearchUserEmail from "./SearchUserEmail";

// UserCard
const Users = () => {
  const [users, setUsers] = useState({});
  const [respgot,setRespgot] = useState(false);
  const fetchUsers = async (e) => {
    // const data = { islogin };
    const response = await fetch("http://localhost:2000/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      // body: JSON.stringify(),
    });
    const result = await response.json();
    if (!response.ok) {
      console.log(result);
      return;
    }
    if (response.ok) {
      console.log("sahil");
      setUsers(result.users);
      //   console.log(result)
      setRespgot(true)
      console.log(users);
      return;
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  //    console.log(users);
  return (
    <div>
      <AdminNavbar></AdminNavbar>
      <SearchUserEmail route = {"searchuseremail"}></SearchUserEmail>
      {respgot ? <div className="gap-4">
        {users.map((user) => (
          <UserCard reload = {fetchUsers} key={user._id} user={user} />
        ))}
      </div>: <div>Loading...</div> }
     
    </div>
  );
};
export default Users;
