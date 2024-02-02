const express = require(`express`)

const app = express()
const port = 5000

app.get('/', (req,res)=>{
    res.send(`<h1>Hello there</h1>`)
})

app.listen(port, ()=>console.log(`The server is listening on port ${port}...`))