const express = require('express')

const PORT = 3000

const app = express()

app.use(express.urlencoded({
    extended: false
}))

app.get('/', (req, res, next) => {
    return res.send(`
        <form 
            action="/user" 
            method="POST"
        >
            <label>Your Name</label>
            <input type="text" name="username"></input>
            <button>Submit</button>
        </form>
    `)
})

app.post('/user', (req, res, next) => {
    // extract only expected fields
    const { username } = req.body
    return res.json({ username })
})

app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`)
})