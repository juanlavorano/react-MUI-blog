const express = require('express')
const app = express();
app.get('/', (req, res) => {
    res.send('Welcome to learn backend with express!')
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Connected to ${port}`)
});