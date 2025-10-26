const express = require('express');
const phones = require('./phones.json');
const app = express();
const port = 3200;


app.get('/', (req, res) => {
    res.send('My Full Info are Coming Soon')
})

app.get('/phones', (req, res) => {
    req.send(phones)
})

app.get('/phones/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log('i need data for id: ', id)
    const phone = phones.find(phone => phone.id === id) || {}
    res.send(phone)
})

app.listen(port, () => {
    console.log(`My Phone server is Running on port: ${port}`)
})
