import { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import UserCard from "./UserCard";
// UserCard
const Dietition = () => {
  const [dietition, setdietition] = useState({});
  const [respgot,setRespgot] = useState(false);
  const fetchUsers = async (e) => {
    // const data = { islogin };
    const response = await fetch("http://localhost:2000/dietition", {
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
      setdietition(result.users);
      //   console.log(result)
      setRespgot(true)
    //   console.log(dietition);
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
      {respgot ? <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {dietition.map((diet) => (
          <UserCard key={diet._id} user={diet} />
        ))}
      </div>: <div>Loading...</div> }
     
    </div>
  );
};
export default Dietition;
