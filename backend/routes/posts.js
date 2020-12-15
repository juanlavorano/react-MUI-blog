const express = require('express')
const app = express()
const router = express.Router()
var bodyParser = require('body-parser')
const Post = require('../models/Post')
const { findOneAndDelete } = require('../models/Post')

app.use(bodyParser.json())

router.get('/', (req, res) => {
    res.send('This is the posts route')
})

// CREATE A NEW POST
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

// GET A SINGLE POST
router.get('/user/:id', async (req, res) => {

    const post = await Post.findById(req.params.id)
    res.send(post)
})

// GET LAST POST TO DISPLAY IN MAIN IMAGE
router.get('/get-latest-posts', async (req, res) => {
    const latestPost = await Post.find().hint({ $natural: -1 }).limit(1)
    const otherPosts = await Post.find().hint({ $natural: -1 }).limit(2).skip(1)
    res.send([latestPost, otherPosts])
})

// GET POSTS TO FILL THE SUBCARDS
router.get('/all', async (req, res) => {
    const otherPosts = await Post.find().hint({ $natural: -1 }).limit(5).skip(3)
    res.send(otherPosts)
})

// GET ALL POSTS FROM A SPECIFIC USER
router.get('/:user/all', async (req, res) => {
    const posts = await Post.find({ author: req.params.user }).hint({ $natural: -1 })
    res.send(posts)
})

// EDIT POST
router.post('/edit/:id', async (req, res) => {
    await Post.updateOne(
        { _id: req.params.id },
        {
            title: req.body.title,
            content: req.body.content
        })
    res.send('Success')
})

// DELETE A POST
router.delete('/delete/:id', async (req, res) => {
    await Post.findOneAndDelete({ _id: req.params.id }, function (err, docs) {
        if (err) {
            res.send(err)
        }
        else {
            res.json('Deleted post: ' + docs);
        }
    });
})

module.exports = router