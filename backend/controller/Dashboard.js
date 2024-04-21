const user = require('../models/schema');
const Dashboard = async(req,res)=>{
    try{
        const data = {
            AllUsers:0,
            Dietition:0,
            User:0,
            underWeight:0,
            overWeight:0,
            fit:0
        }
        data.AllUsers =await user.find({}).count();
        data.Dietition = await user.find({Role:"Dietiton"}).count();
        data.User = await user.find({Role:"user"}).count();
        const underWeightQuery = { BMR: { $lt: 1400 }};
        data.underWeight = await user.find(underWeightQuery).count();
        const fitquery = { BMR: { $gte: 1400, $lte: 1700 } };
        data.fit = await user.find(fitquery).count();
        const overWeightQuery = { BMR: { $gte: 1700} };
        data.overWeight = await user.find(overWeightQuery).count();

         return res.status(200).json({
            success:true,
            messesge:"all user are fetched successfully",
            data:data
        })
    }
    catch(error){
        return res.status(400).json({
            success:false,
            message:"Error in fetching user"
        })
    }
}
module.exports = Dashboard;