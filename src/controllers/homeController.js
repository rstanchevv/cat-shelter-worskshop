const router = require('express').Router();
const catManager = require('../managers/catManager')


router.get('/', (req, res) => {
    const search = req.query.search;
    const cats = catManager.getCats(search);
    res.render('home', {cats});
})
router.get('/404', (req,res) => {
    res.render('notFound')
})

module.exports = router;