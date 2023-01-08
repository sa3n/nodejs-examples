const express = require('express')
const { Router } = express

const app = express()

const PORT = 3000

const commonRouter = Router()
const authRouter = Router()
const usersRouter = Router()

commonRouter
    .get('/', (req, res, next) => {
        res.send('Index Page')
    })
    .get('/about', (req, res, next) => {
        res.send('About Us Page')
    })

authRouter
    .get('/register', (req, res, next) => {
        res.send('Register Page')
    })
    .get('/login', (req, res, next) => {
        res.send('Login Page')
    })

usersRouter
    .get('/:id', (req, res, next) => {
        const { id } = req.params
        res.send(`User ${id}`)
    })

app.use('/', commonRouter)
app.use('/auth', authRouter)
app.use('/users', usersRouter)

app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`)
})