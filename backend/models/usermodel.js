const mongoose=require("mongoose")

var userSchema = new mongoose.Schema({
    name:{ type: String, required: true},
    email:{ type: String, required: true, index: { unique: true }},
    password: { type: String, required: true },
    mobile:{ type: String, required: true, index: { unique: true }},
    orders:[]
},
{timestamps:true})

const userModel=mongoose.model("user",userSchema)

module.exports=userModel