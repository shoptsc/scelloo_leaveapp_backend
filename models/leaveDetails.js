const mongoose = require("mongoose");

const leaveSchema = mongoose.Schema({
    leave: {
        type: String,
        required: true,
        trim: true
    },
    details:{
        type: String,
        required: true,
        trim: true
    },
    start:{
        type: Date,
        required: true,
        trim: true
    },
    end: {
        type: Date,
        required: true,
        trim: true
    },
    days:{
        type:Number,
        required: true,
        trim: true,
        max: 14,
        min: 0
    },
    allowance: {
        type: String,
        required: true,
        trim: true
    },
    delegate:{
        type: String,
        required: true,
        trim: true
    }
})


module.exports = mongoose.model("LeaveDetail", leaveSchema);