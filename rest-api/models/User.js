const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type:String,
        require: true,
        unique: true
    },


    
    password: {
        type: String,
        required:true,
        minlength: 3,
    },
    repeatPassword: {
        type: String,
        required:true,
        minlength: 3,
    },

});

module.exports = mongoose.model('User', userSchema);