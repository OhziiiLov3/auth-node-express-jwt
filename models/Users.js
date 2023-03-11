const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    username:{type: String, unique: true, require: true},
    password:{type: String, require: true}
})


// User Model 
const User = model("User", userSchema)

module.exports = User;
