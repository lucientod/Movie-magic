const express = require(`express`)
const handlebars = require('express-handlebars')
const path = require('path')

const app = express()
const port = 5000

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static('./src/public'))

app.get('/', (req,res)=>{
    res.render('home', {layout:false})
})

app.listen(port, ()=>console.log(`The server is listening on port ${port}...`))