const express = require('express')

const PORT = 3000

const app = express()

app.get('/', (req, res, next) => {
    res.send('<h1>Index Page</h1>')
})

app.get('/error', (req, res, next) => {
    throw new Error()
})

app.use((req, res, next) => {
    res
        .status(404)
        .send('<h1>404</h1>')
})

app.use((err, req, res, next) => {
    res
        .status(500)
        .send('<h1>500</h1>')
})

app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`)
})