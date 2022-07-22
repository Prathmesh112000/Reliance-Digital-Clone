const mongoose=require("mongoose")
const express=require("express")
const cartModel=require("./models/cartmodel")
const userModel=require("./models/usermodel")
const productModel=require("./models/productmodel")
const crypto=require("crypto")
// const Redis=require("ioredis")
// const client=new Redis()
const jwt=require("jsonwebtoken")
const cors=require("cors")
const { createClient } = require('redis')

// const client = createClient();

const app=express()

const port=8080
const dburl="mongodb+srv://prathmeshnerle:pgglLAZLiT6V9Sx4@cluster0.hneyh.mongodb.net/?retryWrites=true&w=majority"
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
const connectionparams={
    useNewUrlParser:true,
    useUnifiedTopology:true
}
mongoose.connect(dburl,connectionparams).then(()=>{
    console.log("connected to db");
}).catch((er)=>{
    console.log(er)
})



// app.get("/insert",(req,res)=>{
//     const products=new productModel({
//     img: "https://www.reliancedigital.in/medias/Oppo-K10-Smartphones-492849760-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w4MzkzfGltYWdlL2pwZWd8aW1hZ2VzL2gzNi9oOWYvOTgwMzg4MTA4NzAwNi5qcGd8NGVhN2NmMmYzMGI3NDg0YzlhNjBmOTVmZGZlOWFmMzY2NWFkNGQyODQwNDBhMjM0OGMwY2EzYzJlZWViOTU4Mg",
//     name: "Oppo K10 128 GB, 6 GB RAM, Blue Fame, Mobile Phone",
//     price: "14,990.00",
//     mrp: "18,999.00",
//     save: "21%(₹4,009)"
//         })
//     products.save((err,data)=>{
//             if(err){
//                 console.log(err)
//             }
//         })
//         res.end("data send")
        
//     })

app.get("/products",async(req,res)=>{
    const {category}=req.body
    const data=await productModel.find({category:category})
   res.end(JSON.stringify(data))
})

app.post("/signup",async(req,res)=>{
    const {name,email,password,mobile}=req.body
    try {
        const hash=crypto.pbkdf2Sync(password,"SECRETKEY",60,64,"sha256").toString("hex")
      const user=await userModel({
        name,
        mobile,
        email,
        password:hash,
        "order":[]
      })
      await user.save()
      res.end("user add success fully")
      }
      catch(err) {
        res.end("user exist")
      }
})

app.post("/login",async(req,res)=>{
    const {email,password}=req.body
   
   try {
        const data=await userModel.findOne({email})
        const hash=crypto.pbkdf2Sync(password,"SECRETKEY",60,64,"sha256").toString("hex")
       
        if(data.password==hash){
            const token=jwt.sign({"email":email},"SECRETKEY",{expiresIn:"90000ms"})
            console.log(token)
           
            // client.set("token",token,"ex",6000000)
            // const d=client.get("token")
          
            
            res.end("log in success")
        }
        else{
            res.end("Invalid password")
        }
   } catch (error) {
        res.end("invalid credentials")
   }
})

app.post("/checkout",async(req,res)=>{
  
    try {
        const {token}=req.headers
        const {productslist}=req.body
        const decode=jwt.verify(token,"SECRETKEY")
        if(decode){
           await userModel.updateOne({"email":decode.email},{ $push: { orders: { $each: [ ...productslist ] } } })
           res.end("order added successfully")
        }
        else{
            res.end("error occred")
        }

       
        

    } catch (error) {
        res.end("please login first")
    }

})



// app.get("/insert",(req,res)=>{
//     const cart=new cartModel({
//         userid:"abc12345hjj",
//         products:["abcd","defg"],
//         price:2100
//     })
//     cart.save((err,data)=>{
//         if(err){
//             console.log(err)
//         }
//     })
//     res.end("data send")
    
// })


app.listen(port,()=>{
    console.log("listening at 8080");
})
