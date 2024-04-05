import { useState } from "react";
const HairAndSkinCare = ()=>{
    const [disease, setDisease] = useState('');
    const [allergy, setAllergy] = useState('');
    const handleSubmit = async(e) => {
        e.preventDefault();
        // Do something with the form data
        console.log(disease);
        console.log(allergy);
    }
    return(
        <div className="container mx-auto mt-10">
      </div>

        
    )
}
export default HairAndSkinCare