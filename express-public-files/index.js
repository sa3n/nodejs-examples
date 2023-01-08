const express = require('express')

const PORT = 3000

const app = express()

// serve index.html for / by default
app.use(express.static('public'))
// or explicitly:
// app.use(express.static('public', {index: 'index.html'}))

app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`)
})