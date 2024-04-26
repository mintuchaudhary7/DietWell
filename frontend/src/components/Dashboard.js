import AdminNavbar from "./AdminNavbar";
import { useEffect, useState } from "react";
import DashboardCard from "./DahboardCard";

const Dashboard = () => {
  const [resp, setResp] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [menu, setMenu] = useState({});
  const [categoryMenu, setcategoryMenu] = useState({});
  const [categoryresp, setcategoryResp] = useState(false);
  const fetchUsers = async (e) => {
    // const data = { islogin };
    const response = await fetch("http://localhost:2000/dashboard", {
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
      setResp(true);
      return;
    }
    if (response.ok) {
      //   console.log("sahil");
      setResp(true);
      setMenu(result.data);
      console.log(result);
      return;
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const UserCategoryMenu = ({ handleCategorySelect }) => {
    const categories = [
      { title: "All Users", description: menu.AllUsers },
      { title: "Users", description: menu.User },
      { title: "Dietitian", description: menu.Dietition },
      { title: "Fit Users", description: menu.fit },
      { title: "Underweight Users", description: menu.underWeight },
      { title: "Overweight Users", description: menu.overWeight },
    ];

    return (
      <div className="flex flex-wrap justify-center mt-8">
        {categories.map((category) => (
          <div
            key={category.title}
            className="max-w-xs rounded overflow-hidden shadow-lg m-4 cursor-pointer"
            onClick={() => handleCategorySelect(category.title)}
          >
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{category.title}</div>
              <p className="text-gray-700 text-base">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  const UserCategoryPage = () => {
    const handleCategorySelect = (category) => {
      setSelectedCategory(category);
      const categoryDetails = async () => {
        const response = await fetch(
          `http://localhost:2000/${category}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(),
          }
        );
        const result = await response.json();
        console.log(result);
        if (!response.ok) {
          setcategoryResp(true);
          
          return;
        }
        if (response.ok) {
          setcategoryMenu(result.data);
          setcategoryResp(true);
        }
      };
      categoryDetails();

      // Implement any action based on the selected category
      // console.log(Selected category: ${category});
    };

    return (
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mt-8 mb-4">
          User Category Menu
        </h1>
        <UserCategoryMenu handleCategorySelect={handleCategorySelect} />
        {selectedCategory && (
          <div className="text-center mt-4">
            <p className="font-bold text-xl">
              Displaying {`${selectedCategory}`}
            </p>
            {categoryresp ? (
              <div>
                {categoryMenu.map((menu) => (
                  <DashboardCard key={menu._id} user={menu} />
                ))}
              </div>
            ) : (
              <div>Loading...</div>
            )}
          </div>
        )}
      </div>
    );
  };
  return (
    <div>
      <AdminNavbar></AdminNavbar>

      <div>
        {resp ? (
          <div>
            <UserCategoryPage />
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};
export default Dashboard;
