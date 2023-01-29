console.log('hello world')

const http = require('http')
const express = require('express');
const morgan = require('morgan');


const app = http.createServer((req, res) => {
    console.log('\tServer created')
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Hello World')
})

const PORT = 8080
app.listen(PORT)
console.log(`Server running on port ${PORT}`)