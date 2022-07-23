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

const port=8080 || process.env.port 
const dburl="mongodb+srv://prathmeshnerle:pgglLAZLiT6V9Sx4@cluster0.hneyh.mongodb.net/?retryWrites=true&w=majority"
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors({origin:[]}))






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
   res.json({
    data
   })
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
      res.json({
        message:"user add success fully"
      })
      }
      catch(err) {
        if(err.code){
            res.json({
                "message":"user already exisit"
            })
        }
        else{
            res.json({
                "message":"Incomplete credentials"
            })
        }
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
          const payload={
            id:data.id,
            name:data.name,
            email:data.email,
            token:token
          }
            
            res.json({data:payload})
        }
        else{
            res.json({
                message:"Invalid password"
            })
        }
   } catch (message) {
        res.json({
            message:"invalid credentials"
        })
   }
})

app.post("/cart",async(req,res)=>{
  
    try {
        const {token}=req.headers
        const {products}=req.body
        const decode=jwt.verify(token,"SECRETKEY")
        if(decode){
           await userModel.updateOne({"email":decode.email},{ $push: { orders: products } })
           res.json({
            message:"order added successfully"
           })
        }
        else{
            res.json({
                message:"message occred"
            })
        }

    } catch (message) {
        res.json({
            message:"please login first"
        })
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
