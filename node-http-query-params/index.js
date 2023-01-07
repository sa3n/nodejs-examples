const http = require('node:http')
const url = require('node:url')

const PORT = 3000

function handleRequest(req, res) {
    res.statusCode = 200
    // parseQueryString
    // false = query as string (default)
    // true = qeury as parsed object
    const URL = url.parse(req.url, parseQueryString = true)
    // console.log(URL)
    return res.end('Query params: ' + JSON.stringify(URL.query))
}

const server = http.createServer(handleRequest)

server.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`)
})