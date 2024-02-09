const express = require(`express`)
const mongoose = require('mongoose')

const routes = require('./routes.js')
const configHandlebars = require('./config/configHandlebars.js')
const configExpress = require('./config/configExpress.js')

const app = express()
const port = 5000

configHandlebars(app)
configExpress(app)

app.use(routes)

mongoose.connect(`mongodb://127.0.0.1:27017/magic-movies`)
    .then(() => {
        console.log('DB connected');

        app.listen(port, () => console.log(`The server is listening on port ${port}...`))
    })
    .catch(err => console.log('Cannot connect to db'))