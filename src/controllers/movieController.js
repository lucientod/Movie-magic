const router = require('express').Router()

router.get('/create', (req, res) => {
    res.render('create')
})

router.post('/create', (req, res) => {
    res.send('creating.......')
    console.log('did it');
})

module.exports = router