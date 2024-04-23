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
        var count  = {
            solvedQueries :0,
            pendingQueries:0,
            allQueries :0
        }
        const ans = await Queries.find(query);
        count.solvedQueries =  await Queries.find({Status:"solved"}).count();
        count.pendingQueries = await Queries.find({Status:"pending"}).count();
        count.allQueries  = await Queries.find({}).count();
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
            data:ans,
            count:count
        })
        
      } catch (error) {
        return res.status(401).json({
            success:false,
            message:"Error in fetching queries",
        });
      }
}
module.exports = FetchQueries