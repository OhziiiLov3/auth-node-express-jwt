const mongoose = require("mongoose")



const todoSchema = new mongoose.Schema({
    username: {type:String, require: true},
    reminder: {type:String, required: true},
    isCompleted: {type:Boolean, required: true, default: false}
})



const Todo = modle("Todo",todoSchema)

module.exports = Todo;
