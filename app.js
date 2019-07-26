require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const postRouter = require('./routes/post');

const app = express();
app.use(cors());
app.use(express.static('public'))

// Set up mongoose connection

const mongoDB = process.env.MONGODB_URI;

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/post', postRouter);

const port = process.env.PORT;

db.once('open', function() {
    console.log('Connected!');
    app.listen(port, () => {
        console.log('Server is up and running on port numner ' + port);
    });
});