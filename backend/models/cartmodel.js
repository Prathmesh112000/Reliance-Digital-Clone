const mongoose=require("mongoose")

const cartSchema=new mongoose.Schema({
    userid:String,
    products:[],
    price:Number
    
})

const cartModel=mongoose.model("cart",cartSchema)

module.exports=cartModel