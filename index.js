const express = require('express');
const app = express();
const port = 3200;


app.get('/', (req, res) => {
    res.send('My Full Info are Coming Soon')
})

app.get('/first', (req, res) => {
    res.send('Okay Lets See')
})

app.listen(port, () => {
    console.log(`My Phone server is Running on port: ${port}`)
})
