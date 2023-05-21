const User = require('../models/User');
const jwt = require("jsonwebtoken")
// Create a new registration
exports.registerUser = async (req, res) => {
    try {
      const { username, password, bio } = req.body;
  
      // Check if the username already exists
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ error: 'Username already exists' });
      }
  
      // Create a new user
      const user = new User({ username, password, bio });
      const savedUser = await user.save();
      res.json(savedUser);
    } catch (error) {
        console.log(error)
      res.status(500).json({ error: 'Failed to register user' });
    }
  };

  
exports.loginUser = async (req, res) => {
    try {
      const { username, password } = req.body;
  
      // Authenticate user
      const user = await User.findOne({ username, password });
      if (!user) {
        return res.status(401).json({ error: "Invalid username or password" });
      }
  
      // Generate and send JWT token
      const token = jwt.sign({ userId: user._id }, "secretKey");
      res.json({ token });
    } catch (error) {
      console.error(error); // Log the error
      res.status(500).json({ error: "An error occurred" });
    }
  };
  
  exports.logoutUser = async (req, res) => {
    try {
      const token = req.headers.authorization.split(" ")[1]; // Extract the token from the Authorization header
  
      // Implement your logout logic here
      // For example, you can remove the token from the server-side session or blacklist it
  
      // Clear the token from the client-side storage
      localStorage.removeItem("token");
  
      res.json({ message: "User logged out successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred during logout" });
    }
  };
  
  
  exports.authenticateToken = (req, res, next) => {
    const token = req.headers.authorization;
  
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  
    jwt.verify(token, 'secretKey', (err, user) => {
      if (err) {
        return res.status(403).json({ error: 'Token verification failed' });
      }
  
      req.loggedInUserId = user.userId;
      next();
    });
  };
  
  