const express = require('express')

function config(app) {
    app.use(express.static('./src/public'))
    app.use(express.urlencoded({extended: false}))
    return app
}

module.exports = config