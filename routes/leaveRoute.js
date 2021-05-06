const router = require("express").Router();


const {showLeave} = require("../config/leaveConfig");
const {postLeave} = require("../config/leaveConfig");

router.get("/leave", showLeave);
router.post("/leave", postLeave);




module.exports = router