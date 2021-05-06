const mongoose = require("mongoose");

const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
            })
            console.log("Database connected successfully")
    }
   
    catch(err){
        console.log(err)
    }
}

module.exports = connectDB