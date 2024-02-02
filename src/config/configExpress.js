const express = require('express')

function config(app) {
    app.use(express.static('./src/public'))

    return app
}

module.exports = config