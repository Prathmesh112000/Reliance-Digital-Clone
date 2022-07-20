const mongoose=require("mongoose")

const productSchema=new mongoose.Schema({
    
    img: String,
    name: String,
    price: Number,
    mrp: Number,
    save: String
    
})

const productModel=mongoose.model("product",productSchema)

module.exports=productModel