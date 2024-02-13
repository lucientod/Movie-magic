const router = require('express').Router()

const homeController = require('./controllers/homeController.js')
const movieController = require('./controllers/movieController.js')
const castController = require('./controllers/castController.js')
const authController = require('./controllers/authController.js')

router.use(homeController)
router.use(movieController)
router.use('/cast', castController)
router.use('/auth', authController)

router.get('*', (req, res) => {
    res.redirect('/404')
})

module.exports = router
