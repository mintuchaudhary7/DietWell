import DietitionNavbar from "./DietitionNavbar"
import QuestionMenu from "./QuestionMenu"
import { ToastContainer } from "react-toastify";

const DietitionPage = ()=>{
    return (
        <div>
            <ToastContainer/>
            <DietitionNavbar></DietitionNavbar>
            <QuestionMenu></QuestionMenu>
        </div>
    )
}
export default DietitionPage