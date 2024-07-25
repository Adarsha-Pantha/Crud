const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors({
  origin: "*"
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/crud')
  .then(() => console.log("Connected to database"))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const post_route = require('./routes/postRoutes');
app.use('/api', post_route);

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
