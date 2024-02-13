const router = require('express').Router()
const authService = require('../services/authService.js')

router.get('/register', (req, res) => {
    res.render('auth/register')
})

router.post('/register', async (req, res) => {
    const userData = req.body
    await authService.register(userData)
    res.redirect('/auth/login')
})

router.get('/login', (req, res) => {
    res.render('auth/login')
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body
    try {
        const token = await authService.login(email, password)
        res.cookie('auth', token)
        res.redirect('/')
    } catch (error) {
        res.redirect('/auth/login')
        console.log(error);
    }

})

router.get('/logout', (req,res)=>{
    res.clearCookie('auth')
    res.redirect('/')
})

module.exports = router