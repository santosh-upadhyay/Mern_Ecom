// npm i cors dotenv express jsonwebtoken mongoose multer 
// nodemon razorpay stripe validator cloudinary bcrypt 
import express from "express";
import cors from 'cors'
import 'dotenv/config'
import connectDB from "./config/mongodb.js";
import connectCoudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";

//app config
const app = express()

const port = process.env.PORT || 4000
connectDB()
connectCoudinary()

// Middleware
app.use(express.json())
// whatever req we get pass using json
app.use(cors());

// api endpoint
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)

app.get('/',(req,res)=>{
    res.send("API WORKING")
})

app.listen(port,()=>{
    console.log('Server started on PORT :'+ port);
})




