const mongoose=require("mongoose")
const express=require("express")
const cartModel=require("./models/cartmodel")
const productModel=require("./models/productmodel")
const cors=require("cors")
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

//    console.log(data)
   res.end(JSON.stringify(data))
   

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



app.get("/show",async(req,res)=>{
    var a=await cartModel.find()
    res.end(JSON.stringify(a))
})

app.listen(port,()=>{
    console.log("listening at 8080");
})
