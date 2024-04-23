const Contact = require('../models/contactSchema')
const MarkasSolved = async (req,res)=>{
    try {
        const id = req.params.id
        console.log(id);
        const updatedData = await Contact.findByIdAndUpdate({_id:id},{Status:"solved"},{new:true})
        if(!updatedData){
            return res.status(401).json({
                success:false,
                message:"Error in Solving the query",
            });

        }
        return res.status(200).json({
            success:true,
            message:"Marked as solved",
            data:updatedData
        })
      } catch (error) {
        return res.status(401).json({
            success:false,
            message:"Error in Solving the query",
        });
      }
}
module.exports = MarkasSolved