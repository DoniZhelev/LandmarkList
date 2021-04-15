const router = require('express').Router();
const Landmark = require('../models/Landmark');


router.get('/', (req, res) => {
    
    Landmark.find({})
        .then(landmark => {
            res.json(landmark);
           console.log();
        });
});

router.post('/', async (req, res) => {
    // TODO: Check if user exists

    const landmark = new Landmark({

        title: req.body.title,
        description: req.body.description,
        imageURL: req.body.imageURL
       
    })
    await landmark.save()
    res.status(201).send(landmark)

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