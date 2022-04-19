const express = require('express')
const app=express()
const mongoose = require('mongoose')
const PORT=5000
const {MONGOURI}= require('./keys')

require('./models/user')

mongoose.connect(MONGOURI)
mongoose.connection.on('connected',()=>{
    console.log("connected to mongoose")
})
mongoose.connection.on('error',(err)=>{
    console.log("err connecting",err)
})


app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})