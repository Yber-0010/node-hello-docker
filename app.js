console.log('init')
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(3000)
console.log('ejecutado en el puerto 3000')