const mongoose = require('mongoose');
const mongoURL = 'mongodb://localhost:27017/hotels'
mongoose.connect(mongoURL)

const db = mongoose.connection;
db.on('connected',()=>{
    console.log("Connected to Mongodb Server")
})
db.on('error',(err)=>{
    console.error("Connected to Mongodb Server",err)
})
db.on('disconnected',()=>{
    console.log("Disconnected to Mongodb Server")
})
