const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
    
        auto: true,
      },
    name: String,
    description: String,
    imageURL: String,
    category: String,
    likes: Number,
});

module.exports = mongoose.model('Pet', petSchema);