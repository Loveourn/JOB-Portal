import mongoose from "mongoose";
import validator from "validator";
import brcypt from 'bcrypt';
import JWT from 'jsonwebtoken';


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

// middleware
userSchema.pre('save',async function(){
  if(!this.isModified) return;
  const salt = await brcypt.genSalt(10)
  this.password = await brcypt.hash(this.password,salt);
})
// comapre passwords
userSchema.methods.comparePassword = async function(userPassword){
  const isMatch = await brcypt.compare(userPassword,this.password)
  return isMatch;
}

// jsonwebtoken
userSchema.methods.createJWT = function(){
  return JWT.sign({userId:this._id},process.env.JWT_SECRET,{expiresIn:'1d'})
}

// exports
export default mongoose.model('User',userSchema); 