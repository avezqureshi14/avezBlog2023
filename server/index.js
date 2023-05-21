const express = require('express');
const cors = require("cors")
const app = express();
const authRoutes = require('./routes/User')
const blogRoutes = require('./routes/Blog')
const connectToDatabase = require('./db/connection');

// Other middleware and configurations
app.use(cors());
app.use(express.json());
connectToDatabase();

app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes);
// Start the server
app.listen(8800, () => {
  console.log('Server is running on port 8800');
});
