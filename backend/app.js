
// app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const deviceRoutes = require('./routes/deviceRoutes');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection

mongoose.connect('mongodb://localhost:27017/deviceatlas')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Routes
app.use('/', deviceRoutes);

const PORT = 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
 