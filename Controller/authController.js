import userSchema from "../Models/userSchema.js"


export const registerController = async (req,res,next) => {
    
        const {name,email,password} = req.body
        // validate
        if(!name){
            next('Name is Required')
            
        }
        if(!email){
            next('Email is Required')
            
        }
        if(!password){
            next ('Password is required')
        }
        const exisitingUser = await userSchema.findOne({ email });
        if (exisitingUser) {
          next("Email Already Register Please Login");
        }

        const user = await userSchema.create({ name, email, password });
        // token 
        const token  = user.createJWT()
        res.status(201).send({
          sucess: true,
          message: "User Created Successfully",
          user:{
            name:user.name,
            lastName:user.lastName,
            email:user.email,
            location:user.location,
          },
          token,
        });           
};
export const loginController = async (req, res, next) => {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      next("Please Provide All Fields");
    }
    //find user by email
    const user = await userSchema.findOne({ email }).select("+password");
    if (!user) {
      next("Invalid Useraname or password");
    }
    //compare password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      next("Invalid Useraname or password");
    }
    user.password = undefined;
    const token = user.createJWT();
    res.status(200).json({
      success: true,
      message: "Login SUccessfully",
      user,
      token,
    });
  };
