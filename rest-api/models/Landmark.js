const mongoose = require('mongoose');

const landmarkSchema = new mongoose.Schema({
    
  title: {
    type: String,
    required: true,
    unique:true,

},
description: {
    type:String,
    required: true,
    maxlength: 1000
},
imageUrl: {
    type: String,
    required:true,
    validate: /^https?/,
},
 likes : String,
});

module.exports = mongoose.model('Landmark', landmarkSchema);