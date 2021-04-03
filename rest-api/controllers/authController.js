const router = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

router.get('/:userId', (req, res) =>{

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
       
    })
    await user.save()
    res.send(user)

   

});

// router.post('/login', (req, res) => {
//     res.send({
//       token: 'test123'
//     });
//   });

router.post('/login', (req, res, next) => {
    const { email, password} = req.body; 
    
    User.findOne({'email': email}, {'password': password})
            .then(user => {
                let token = jwt.sign({
                    _id: user._id,
                    password: user.password,
                }, 'SALTKAMYK', { expiresIn: '1h'});
                console.log(user);

                res.status(200).json({
                    _id: user._id,
                    password: user.password,
                    token
                })
            })
            .catch(err => {
                next({status: 404, message: 'No such user or password!', type: 'ERROR'})
            })
});

module.exports = router;