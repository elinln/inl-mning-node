const express = require('express');
const server = express();
const port = 5000
const path = require('path')
server.use(express.json());

let todos = []

server.get('/api/todo', (req, res) => {

    try {
        res.json(todos)
    } catch (err) {
        res.json({ status: "Something went wrong..." })
    }
})

server.post('/api/todo', (req, res) => {
    console.log(req.body)

    try {
        todos.push(req.body.todo)
        console.log(todos)
        res.json({ status: "Save went well!" })

    } catch (err) {
        res.json({ status: "Something went wrong when saving..." })
    }
})

server.listen(port, () => console.log(`Servern kör på port ${port}`))


server.use(express.static(path.join(__dirname, 'public')))
