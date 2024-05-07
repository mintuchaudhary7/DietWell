import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import NotificationCard from "./NotificationCard";

const Notificationbar = () => {
    const [menu, setMenu] = useState([]);

    const getNotification = async () => {
        const response = await fetch("http://localhost:2000/notification", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include", // Ensure the backend supports credentials (cookies)
        });

        const result = await response.json();
        console.log(result);

        if (!response.ok) {
            toast.error(result.message, {
                position: "top-center"
            });
        }

        if (response.ok) {
            toast.success(result.message, {
                position: "top-center"
            });
            setMenu(result.data); // Assuming 'data' contains the array of notifications
        }
    };

    useEffect(() => {
        getNotification();
    }, []);

    return (
        <div>
            <h2>Notifications</h2>
            {menu.map((item, index) => (
                // Key should ideally be a unique identifier from your data
                <NotificationCard key={index} question={item.Question} answer={item.Answer} />
            ))}
        </div>
    );
};

export default Notificationbar;
