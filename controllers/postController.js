const Post = require('../models/postModel');

const createPost = async (req, res) => {
  try {
    const newPost = new Post({
      title: req.body.title,
      date: req.body.date,
      image: req.file.filename // Use req.file.filename to get the uploaded file name
    });

    const postData = await newPost.save();
    res.status(200).json({ success: true, msg: 'Post created successfully', data: postData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createPost
};
