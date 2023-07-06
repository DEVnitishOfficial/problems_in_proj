const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is required'],
        trim:true,
        maxLength:[20,'Name is less then 20 charecter'],
    },
    email:{
        type:String,
        required:[ture,'Email is required'],
        unique:true
    }
})

module.exports = mongoose.model("user",userSchema)