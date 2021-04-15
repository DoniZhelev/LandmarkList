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
imageURL: {
    type: String,
    
    validate: /^https?/,
},
 likes : {
     type:String,
     default: 0
 }
 
});

module.exports = mongoose.model('Landmark', landmarkSchema);