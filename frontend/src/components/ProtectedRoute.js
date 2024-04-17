import { useEffect } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
// imort useNavigate
const ProtectedRoute = ({children})=>{
    const nevigate = useNavigate();
    const protectedRoute = async()=>{
        const response = await fetch(
            "http://localhost:2000/protected",
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
              credentials: "include",
              // body: JSON.stringify(),
            }
        );
        const result = await response.json()
        if(!response.ok){
            toast.error(result.message,{position:"top-center"});
            nevigate('/login');
            return
            

        }else{
            return;
        }

    }
    useEffect(() => {
        protectedRoute();
      }, []);
    return children
}
export default ProtectedRoute;