require("dotenv/config");
const mongoose = require("mongoose");
const leaveData = require("./data/leaveData");
const Leave = require("./models/leaveDetails");
const connectDB = require("./db");

connectDB();


const importData = async () =>{
    try{
       await Leave.deleteMany()

       await Leave.insertMany(leaveData)

       console.log("Data Imported!")
       process.exit()
    }catch(error){
        console.error(`${error}`)
        process.exit(1)
    } 
}


const destroyData = async () =>{
    try{
       await Leave.deleteMany()
       console.log("Data Destroyed!")
       process.exit()
    }catch(error){
        console.error(`${error}`)
        process.exit(1)
    } 
}

if(process.argv[2] === "-d"){
    destroyData()
}else{
    importData()
}