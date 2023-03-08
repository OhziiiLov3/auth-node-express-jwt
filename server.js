require("dotenv").config()
const express = require("express")
const app = express()
const morgan = require("morgan")
const {log} = require("mercedlogger")
const cors = require("cors")

const {PORT = 3000} = process.env

/* Middleware */

app.use(cors()) // add cors headers 
app.use(morgan("tiny")) // log request for debugging 
app.use(express.json()) // parse json bodies 


app.get('/', (req,res)=>{
    res.send("Test Route")
})


app.listen(PORT,()=> log.green("Server Status", `Listening on port ${PORT}`))