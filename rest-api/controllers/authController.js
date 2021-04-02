const router = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

router.get('/:userId', (req, res) =>{
console.log(req.params);
    User.find({_id: req.params.userId})
    .then(userId =>{
        res.json(userId)
    })  
})

router.get('/', (req, res) => {
    
    User.find({})
        .then(user => {
            res.json(user);
           console.log();
        });
});

router.post('/register', async (req, res) => {
    // TODO: Check if user exists

    const user = new User({

        email: req.body.email,
        password: req.body.password,
        repeatPassword: req.body.repeatPassword,
    })
    await user.save()
    res.send(user)

   

});

router.post('/login', (req, res, next) => {
    const {login: username, password} = req.body; 

    User.where({username, password})
        .findOne()
            .then(user => {
                let token = jwt.sign({
                    _id: user._id,
                    username: user.username,
                }, 'SOMESUPERSECRET', { expiresIn: '1h'});

                res.status(200).json({
                    _id: user._id,
                    username: user.username,
                    token
                })
            })
            .catch(err => {
                next({status: 404, message: 'No such user or password!', type: 'ERROR'})
            })
});

module.exports = router;