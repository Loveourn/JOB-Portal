import userSchema from "../Models/userSchema.js";

export const updateUserController = async (req,res,next)=> {
    const {name,email,lastName,password} = req.body

    if (!name || !email || !lastName || !location) {
        next("Please Provide All Fields");
      }
      const user = await userSchema.findOne({ _id: req.user.userId });
      user.name = name;
      user.lastName = lastName;
      user.email = email;
      user.location = location;
    
      await user.save();
      const token = user.createJWT();
      res.status(200).json({
        user,
        token,
      });



}