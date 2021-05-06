const leaveDetail = require("../models/leaveDetails");

exports.showLeave = async (req, res)=>{
   
    try{
        const leaveDetails = await leaveDetail.find({});
        if(leaveDetails) return res.status(200).json({
            leaveDetails
        })

    }
    catch(err){
            console.log(err)
    }
}

exports.postLeave = async (req, res)=>{
   
    try{
        const {leave, days, start, end, delegate, allowance, details} = req.body;
        datas = {leave, days, start, end, delegate, allowance, details}
        const newDetails = await new leaveDetail(datas)
        const postDetails = await newDetails.save();
        if(postDetails) return res.status(200).json({
            message: "Data Posted successsfully"
        })
        
    }
    catch(err){
            console.log(err)
    }
}

