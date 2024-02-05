const router = require('express').Router()
const movieService = require('../services/movieService.js')

router.get('/create', (req, res) => {
    res.render('create')
})

router.post('/create', (req, res) => {
    const newMovie = req.body
    movieService.create(newMovie)
    res.redirect('/')
})

router.get('/details:movieID', (req, res) => {
    const movieID = req.params.movieID
    const movie = movieService.getOne(movieID)
    // movie.rating = new Array(Number(movie.rating)).fill(true);
    res.render('details', { movie })
})
module.exports = router