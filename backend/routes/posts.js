const express = require('express')
const app = express()
const router = express.Router()
var bodyParser = require('body-parser')
const Post = require('../models/Post')

app.use(bodyParser.json())

router.get('/', (req, res) => {
    res.send('This is the posts route')
})

router.post('/create', (req, res) => {
    const post = new Post({
        title: req.body.title,
        author: req.body.author,
        content: req.body.content,
    })

    post.save(error => {
        if (error) {
            res.send(500).json('Error')
        } else {
            res.json('Saved successfully')
        }
    })
})

module.exports = router