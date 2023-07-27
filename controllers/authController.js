const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const saltRounds =10;

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "Invalid email or password" });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }      
    if(isPasswordMatch){
        console.log("password matched")
    }
      const userResponse = {
        _id: user._id,
        name: user.name,
        email: user.email,
        // Add any other relevant information you want to return to the client
    };
      res.status(200).json(userResponse);
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.signupUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hashPassword = await bcrypt.hash(password, saltRounds);
    const data = { name, email, password: hashPassword };

    const user = await User.create(data);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
