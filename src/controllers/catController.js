const router = require('express').Router();
const breedManager = require('../managers/breedManager')
const catManager = require('../managers/catManager')

router.get('/add-breed', (req, res) => {
    res.render('addBreed');
})

router.post('/add-breed', (req, res) => {
    breedManager.addBreed(req.body.breed);
    res.redirect('/')
})

router.get('/add-cat', (req, res) => {
    const breeds = breedManager.getBreeds();
    res.render('addCat', {breeds})
})

router.post('/add-cat', (req, res) => {
    const {name, description, image, breed} = req.body;
    catManager.addCat(name, description, image, breed);
    res.redirect('/')
})

router.get('/details/:id', (req, res) => {
    const cat = catManager.findCat(req.params.id)
    const breeds = breedManager.getBreeds();
    res.render('editCat', {cat, breeds})
})

router.post('/details/:id', (req, res) => {
    catManager.removeCat(req.params.id)
    const {name, description, image, breed} = req.body;
    catManager.addCat(name, description, image, breed)
    res.redirect('/')
})

router.get('/catShelter/:id', (req, res) => {
    const cat = catManager.findCat(req.params.id);
    res.render('catShelter', cat)
})

router.post('/catShelter/:id', (req, res) => {
    catManager.removeCat(req.params.id);
    catManager.shelterCat(req.params.id);
    res.redirect('/')
})


module.exports = router;