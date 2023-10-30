

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const axios = require('axios');
const dotenv = require('dotenv');
const app = express();
const PORT = process.env.PORT || 3001;

dotenv.config();

app.get('/api/game', async (req, res) => {
  const id = req.query.id;
  const apiUrl = `https://www.freetogame.com/api/game?id=${id}`;

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_API_HOST,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

const MONGO_URI = 'mongodb://127.0.0.1:27017/user-website';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const dbConnection = mongoose.connection;

dbConnection.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

dbConnection.once('open', () => {
  console.log('Connected to MongoDB database.');
});

// Routes
const userRoutes = require('./routes/api/userRoutes');
app.use('/api', userRoutes);

app.listen(PORT, () => console.log(`Now listening on localhost:${PORT}`));
