require("dotenv/config");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const leaveRoute = require("./routes/leaveRoute");

const connectDB = require("./db")
connectDB();

const app = express();

app.use(morgan('combined'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", leaveRoute);

// Handle production
if (process.env.NODE_ENV === "production") {
    // Static folder
    app.use(express.static(__dirname + "/public"));

    // handle single page application
    app.get(/.*/, (req, res) => {
        res.sendFile(__dirname + "/public/index.html")
    })
}

const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log(`server runing on ${port}`));