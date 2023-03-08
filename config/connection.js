require('dotenv').config()
const mongoose = require("mongoose")
const {log} = require("mercedlogger")

// env file
const {DATABASE_URL} = process.env 

// Connect to Mongo 

mongoose.connect = mongoose.connect(DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})

//  Connection Events 

mongoose.connection
.on("open",()=> log.green("DATABASE STATE","Connection Open"))
.on("close",()=> log.magenta("DATABASE STATE","Connection Close"))
.on("error",()=> log.red("DATABASE STATE", error))


module.exports = mongoose
