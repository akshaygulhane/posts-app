const mongoose = require('mongoose');
const uuidv4 = require('uuid/v4');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    id: {type: String, default: uuidv4() },
    text: { type: String, required: true },
    upvotes: { type: Number, default: 0 },
    createdAt: { type: Number }
});

// Export the model
module.exports = mongoose.model('Post', PostSchema);