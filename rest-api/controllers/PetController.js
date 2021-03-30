const router = require('express').Router();
const Pet = require('../models/Pet');
const { isAuth } = require('../middlewares/auth');

router.get('/', (req, res) => {
    
    Pet.find({})
        .then(pet => {
            res.json(pet);
           console.log();
        });
});

router.post("/",   (req, res) => {

    const pet = new Pet(req.body)
    
     pet.save(function(err, doc) {
    if (err) return console.error(err);
    console.log("Document inserted succussfully!");
  }); 
   
  });


router.get('/details/:petId', (req, res) =>{

    Pet.find({_id: req.params.petId})
    .then(pet =>{
        res.json(pet)
  
       
    })

})
router.get('/:category', (req, res) =>{
   
    Pet.find({category: req.params.category})
    .then(pet =>{
        res.json(pet)
    
       
    })

})


module.exports = router;