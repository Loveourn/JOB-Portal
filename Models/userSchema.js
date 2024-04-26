import mongoose from "mongoose";
import validator from "validator";

// making schema 
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is Required"]
    },
    lastName:{
        type:String
    },
    email:{
        type:String,
        unique:true,
        required: [true, " Email is Require"],
        validate:validator.isEmail
    },
    password: {
        type: String,
        required: [true, "password is require"],
        minlength: [6, "Password length should be greater than 6 character"],
        select: true,
      },
      location: {
        type: String,
        default: "India",
      },
    },
      {timestamps:true}
    );


// exports
export default mongoose.model('User',userSchema); 