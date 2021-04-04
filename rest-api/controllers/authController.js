const router = require('express').Router();
const authService = require('../services/authService')
const User = require('../models/User');
const { COOKIE_NAME} = require('../config/config')



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

router.post('/login', (req, res) => {
    res.send({
      token: 'test123'
    });
  }); 

// router.post('/login', (req, res) => {
//     const { email, password} = req.body;
   
//    const token = authService.login(email, password)  
//     .then(token => {

//         res.status(200);


//     })
//     .catch(err => 
//         res.render('login',  {message: 'email or password are incorect!'}))
    
//         res.send(token)
// });


module.exports = router;