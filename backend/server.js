const express = require('express')
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')

//ACCESS - CONTROL - ALLOW - ORIGIN
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    ;
    next();
});

// IMPORTS
const postsRoute = require('./routes/posts')

// DOTENV
dotenv.config()

// CONNECT TO MONGODB
mongoose.set('useUnifiedTopology', true)

mongoose.connect(process.env.MONGODB_URI || process.env.DB_CONNECT,
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