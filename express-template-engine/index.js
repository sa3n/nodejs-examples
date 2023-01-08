// const path = require('node:path')

const express = require('express')

const PORT = 3000

const app = express()

// /views — folder by default
app.set('view engine', 'ejs')
// or set explicitly:
// app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res, next) => {
    res.render('index', { 
        title: 'Index Page'
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`)
})