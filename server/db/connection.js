const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
    await mongoose.connect('mongodb+srv://blog:blog@cluster0.rxqpjvi.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to database');
  } catch (error) {
    console.log('Error connecting to database:', error.message);
  }
};

module.exports = connectToDatabase;
