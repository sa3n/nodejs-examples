const http = require('node:http')

const PORT = 3000

function handleRequest(req, res) {
    if (req.url == '/currenttime') {
        res.statusCode = 200
        return res.end(`
            <h1>
                ${new Date().toUTCString()}
            </h1>
        `)
    } else if (req.url == '/') {
        res.statusCode = 200
        return res.end('<h1>Hello World!</h1>')
    } else {
        res.statusCode = 404
        return res.end('<h1>404</h1>')
    }
}

const server = http.createServer(handleRequest)

server.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`)
})