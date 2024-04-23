const Queries = require('../models/contactSchema');
const FetchQueries = async (req,res)=>{
    try {
        const selectedOption = req.params.selectedOption;
        console.log(selectedOption)
        let query = {};
        if(selectedOption === "all"){
            query = {};
        }
        else if(selectedOption === "solved"){
            query = {Status:"solved"}
        }
        else if(selectedOption==="pending"){
            query = {Status:"pending"};
        }
        console.log("hello")
        const ans = await Queries.find(query);
        // console.log(ans.Name)     
        if(!ans){
            return res.status(401).json({
                success:false,
                message:"Error in finding queries"
            })
        }
        return res.status(200).json({
            success:true,
            message:"Queries found Successfully",
            data:ans
        })
        
      } catch (error) {
        return res.status(401).json({
            success:false,
            message:"Error in fetching queries",
        });
      }
}
module.exports = FetchQueries