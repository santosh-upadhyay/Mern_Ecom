// npm i cors dotenv express jsonwebtoken mongoose multer 
// nodemon razorpay stripe validator cloudinary bcrypt 
import express from "express";
import cors from 'cors'

// import 'dotenv/config'
import connectDB from "./config/mongodb.js";
import connectCoudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import dotenv from "dotenv"
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
dotenv.config({
    path: './.env'
})

//app config
const app = express()

const port = process.env.PORT || 4000
connectDB()
await connectCoudinary()

// Middleware
app.use(express.json())
// whatever req we get pass using json

const corsConfig = {
    origin:"*",
    credential:true,
    methods:["GET","POST","PUT","DELETE"];
}
app.use(cors(corsConfig));
// api endpoint
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order',orderRouter)
app.get('/',(req,res)=>{
    res.send("API WORKING")
})

app.listen(port,()=>{
    console.log('Server started on PORT :'+ port);
})




