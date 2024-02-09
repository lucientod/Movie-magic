const router = require('express').Router()
const movieService = require('../services/movieService.js')

router.get('/create', (req, res) => {
    res.render('create')
})

router.post('/create', async (req, res) => {
    const newMovie = req.body
    try {
      await  movieService.create(newMovie)        
      res.redirect('/')
    } catch (error) {
        console.log(error.message);
        res.redirect('/create')
        window.alert('Wrong inputs')
    }
})

router.get('/details/:movieID', (req, res) => {
    const movieID = req.params.movieID
    const movie = movieService.getOne(movieID)
    // movie.rating = new Array(Number(movie.rating)).fill(true); ??????????????
    if (typeof movie.rating !== 'number')
        movie.rating = Number(movie.rating)
    movie.ratingArr = new Array(movie.rating).fill(true)
    res.render('details', { movie })
})
module.exports = router