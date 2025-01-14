// server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

// Import and use routes
const bookRouter = require('./Routes/routes');
app.use('/api/v1/book', bookRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
