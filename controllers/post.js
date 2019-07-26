const moment = require('moment');

const Post = require('../models/post');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.createPost = function (req, res) {
    const post = new Post(
        {
            text: req.body.text,
            createdAt: moment().unix()
        }
    );

    post.save(function (err) {
        if (err) {
            return next(err);
        }
        return res.status(200).send({
            message: "Success"
        })
    })
};

exports.getPosts = function (req, res) {
    Post.find({}, function (err, docs) {
        if (err) {
            return next(err);
        }

        return res.status(200).send({
            message: "Success",
            data: docs
        })
    })
}

exports.updateUpvotes = function (req, res) {
    const id = req.body.id;

    Post.findOneAndUpdate({ id }, { $inc: {upvotes : 1} } ,  function (err, docs) {
        if (err) {
            return next(err);
        }

        return res.status(200).send({
            message: "Success"
        })
    })
}

