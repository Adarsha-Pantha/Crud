const express = require('express');
const app = express();
const port = 8000;
const mongoose = require('mongoose');
const postRoutes = require('./routes/postRoutes')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/submission')
    .then(() => {
        console.log("connected to database successfully");
    })
    .catch((err) => {
        console.log("error in connecting to database", err);
    });

    app.use('/api', postRoutes);

app.listen(port, () => {
    console.log(`server is running at ${port}`);
});
