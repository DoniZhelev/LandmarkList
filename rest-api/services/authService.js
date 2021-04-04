const User = require('../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../config/config');

const login = async (email, password) => {
    let user = await User.findOne({email});
    if(!user) throw {message: 'Email should be at least 5 characters', status: 404};
    
    let areEqual = await bcrypt.compare(password, user.password);
    if(!areEqual) throw {message: 'Invalid password', status: 404};

        let token = jwt.sign({_id: user._id, email: user.email }, 'SALTKAMYK');
            return token ;
};
  


module.exports = {

    login
}
