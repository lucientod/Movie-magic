const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')

function config(app) {
    app.use(express.static('./src/public'))
    app.use(express.urlencoded({extended: false}))
    app.use(cookieParser())
    return app
}

module.exports = config