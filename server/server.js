

const cookieParser = require('cookie-parser');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

//  MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/user-website', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const dbConnection = mongoose.connection;

dbConnection.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

dbConnection.once('open', () => {
  console.log('Connected to MongoDB database.');

  // Express server 
  app.listen(PORT, () => console.log(`Now listening on localhost: ${PORT}`));
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());


