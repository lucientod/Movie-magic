const router = require('express').Router()

const movieService = require('../services/movieService.js')
const castService = require('../services/castService.js')
const { isAuth } = require('../middlewares/authMiddleware.js')

router.get('/create', isAuth, (req, res) => {
    res.render('create')
})

router.post('/create', isAuth, async (req, res) => {
    const newMovie = { ...req.body, owner: req.user._id }
    console.log(newMovie);
    try {
        await movieService.create(newMovie)
        res.redirect('/')
    } catch (error) {
        console.log(error.message);
        res.redirect('/create')
    }
})

router.get('/details/:movieID', async (req, res) => {
    const movieID = req.params.movieID
    const movie = await movieService.getOne(movieID).lean()
    // movie.rating = new Array(Number(movie.rating)).fill(true); ??????????????
    const isOwner = movie.owner == req.user?._id

    if (typeof movie.rating !== 'number')
        movie.rating = Number(movie.rating)
    movie.rating = new Array(movie.rating).fill(true)
    res.render('details/details', { movie, isOwner })
})

router.get('/details/:movieId/attach', isAuth, async (req, res) => {
    const movie = await movieService.getOne(req.params.movieId).lean()
    const casts = await castService.getAll().lean()
    res.render('details/attach', { ...movie, casts })
})

router.post('/details/:movieId/attach', isAuth, async (req, res) => {
    console.log(req.body);
    const castId = req.body.cast;
    const movieId = req.params.movieId
    await movieService.attach(movieId, castId)
    res.redirect(`/details/${movieId}/attach`)
})

router.get('/details/:movieId/edit', isAuth, async (req, res) => {
    const movie = await movieService.getOne(req.params.movieId).lean()
    res.render('details/edit', { movie })
})

router.post('/details/:movieId/edit', isAuth, async (req, res) => {
    const editedMovie = req.body
    await movieService.edit(req.params.movieId, editedMovie)
    res.redirect(`/details/${req.params.movieId}`)
})

router.get('/details/:movieId/delete', isAuth, async(req,res)=>{
    await movieService.delete(req.params.movieId)
    res.redirect('/')
})

module.exports = router