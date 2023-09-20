const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");

const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies?.jwtoken; // Assuming your token is stored in cookies
    if (!token) {
      return res.status(401).send("Unauthorized: No token provided");
    }

    // Verify the token using your SECRET_KEY
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

    // Find the user using the token and _id
    const rootUser = await User.findOne({
      _id: verifyToken._id,
      token: token,
    });

    if (!rootUser) {
      throw new Error('User Not Found');
    }

    // Attach token, rootUser, and userID to the request object
    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;

    next(); // Move to the next middleware
  } catch (err) {
    res.status(401).send("Unauthorized: Invalid token");
    console.log(err);
  }
};

module.exports = authenticate;