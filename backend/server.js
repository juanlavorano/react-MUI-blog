const express = require('express')
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')

// IMPORTS
const postsRoute = require('./routes/posts')

// DOTENV
dotenv.config()

// CONNECT TO MONGODB
mongoose.set('useUnifiedTopology', true)

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://juanlavorano:juanlavorano@cluster0.zjw2k.mongodb.net/<dbname>?retryWrites=true&w=majority",
    { useNewUrlParser: true }
    , () => console.log('Connected to DB'))

// ROUTES MIDDLEWARES
app.use(express.json())

//ROUTES
app.get('/', (req, res) => {
    res.send('This is the home route')
});
app.use('/posts', postsRoute)


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Connected to ${port}`)
});