const bodyParser = require('body-parser');
const express = require('express');
const routes = express.Router();
const path = require('path');
const multer = require('multer');

// Middleware setup
routes.use(bodyParser.json());
routes.use(bodyParser.urlencoded({ extended: true }));
routes.use(express.static('public'));

// Multer storage setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/uploads'));
  },
  filename: function (req, file, cb) {
    const name = Date.now() + "-" + file.originalname;
    cb(null, name);
  }
});

const upload = multer({ storage: storage });

// Controller import
const postController = require('../controllers/postController');

// Routes setup
routes.post('/create-postt', upload.single('image'), postController.createPost);

module.exports = routes;