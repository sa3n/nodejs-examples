const fs = require('node:fs')
const path = require('node:path')

const express = require('express')

const PORT = 3000
const FILE_PATH = path.join(__dirname, 'users.json')

const app = express()

app.use(express.urlencoded({
    extended: false
}))

app.get('/', (req, res, next) => {
    res.send(`
        <form action="/users" method="POST">
            <label>Your Name</label>
            <input type="text" name="username"></input>
            <button>Submit</button>
        </form>
    `)
})

app.post('/users', (req, res, next) => {
    const { username } = req.body
    const users  = getUsers(FILE_PATH)
    users.push(username)
    fs.writeFileSync(FILE_PATH, JSON.stringify(users))
    res.send(`<h1>Stored: ${username}</h1>`)
})

app.get('/users', (req, res, next) => {
    const users = getUsers(FILE_PATH)
    const htmlUserListElements = users
        .map(username => `<li>${username}</li>`)
        .join('')
    const htmlUserList = `<ul>${htmlUserListElements}</ul>`
    res.send(htmlUserList)
})

function getUsers(filePath) {
    const users = []
    if (fs.existsSync(filePath)) {
        const fileData = fs.readFileSync(filePath)
        const existingUsers = JSON.parse(fileData)
        if (Array.isArray(existingUsers)) {
            users.push(...existingUsers)
        }
    }
    return users
}

app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`)
})

process.on('SIGINT', () => {
    fs.unlinkSync(FILE_PATH)
    process.exit()
})