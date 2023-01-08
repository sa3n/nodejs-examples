const fs = require('node:fs/promises')
const path = require('node:path')

const filePath = path.join(__dirname, 'data.txt');

(async () => {
    // Option #1: fs.readFile()
    const content1 = await fs.readFile(filePath)
    console.log(1, content1.toString().slice(0, 50))
    // Option #2: fileHandle.read()
    const fileHandle = await fs.open(filePath)
    const content2 = await fileHandle.read()
    console.log(2, content2.buffer.toString().slice(0, 50))
})()