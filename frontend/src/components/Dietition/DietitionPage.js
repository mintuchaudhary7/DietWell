import DietitionNavbar from "./DietitionNavbar"
import QuestionMenu from "./QuestionMenu"
import { ToastContainer } from "react-toastify";

const DietitionPage = ()=>{
    return (
        <div className="bg-[#233037] min-h-screen ">
            <ToastContainer/>
            <DietitionNavbar></DietitionNavbar>
            
            <div className="pt-8 pl-[2%] text-white">
            <QuestionMenu></QuestionMenu>
            </div>
        </div>
    )
}
export default DietitionPage