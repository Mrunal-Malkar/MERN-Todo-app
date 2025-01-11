import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import { config as configDotenv } from "dotenv"

const app=express()
app.use(cors())
app.use(express.json())

try{
configDotenv()
}catch(error){
    console.log("env file configuration error:",error);    
}

// const DB_connect=async()=>{
//     try{
    
//     if(mongoose.connection.readyState===1||mongoose.connection.readyState===2){
//     console.log("Database already connected")
//     return null;
//     }
//     else{
//     await mongoose.connect(`mongodb+srv://mrunalpmalkar:${process.env.DB_password}@cluster0.qrgc1.mongodb.net/${process.env.Database_name}`)
//     console.log("Database connected")
//     }

//     }catch(error){

//         console.log("database connection error:",error)
//         process.exit(1)
    
//     }
// }

// DB_connect()

app.listen(process.env.Database_port,()=>{
    console.log("server is running on port:",`${process.env.Database_port}`)
})

app.get("/start",(req,res)=>{
    res.send("hello buddy lets be the best more best from what you already are")
})