const router = require('express').Router()
const homeController = require('./controllers/homeController.js')
const movieController = require('./controllers/movieController.js')
const castController = require('./controllers/castController.js')

router.use(homeController)
router.use(movieController)
router.use('/cast', castController)
router.get('*', (req, res) => {
    res.redirect('/404')
})

module.exports = router
