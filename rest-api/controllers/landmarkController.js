const router = require('express').Router();
const Landmark = require('../models/Landmark');


router.get('/', (req, res) => {
    
    Landmark.find({})
        .then(landmark => {
            res.json(landmark);
           console.log();
        });
});

router.post("/",   (req, res) => {

    const landmark = new Landmark(req.body)
    
     landmark.save(function(err, doc) {
    if (err) return console.error(err);
    console.log("Document inserted succussfully!");
  }); 
   
  });


router.get('/details/:landmarkId', (req, res) =>{

    Landmark.find({_id: req.params.landmarkId})
    .then(landmark =>{
        res.json(landmark)
  
       
    })

})
router.get('/:category', (req, res) =>{
   
    Landmark.find({category: req.params.category})
    .then(landmark =>{
        res.json(landmark)
    
       
    })

})


module.exports = router;