var express = require('express');
var cors = require('cors')
var { between } = require('./utils');
var app = express();

// To prevent Cross-Origin Request Blocked
app.use(cors())

//Serves resources from public folder
app.use(express.static('public'));

app.get('/randomDog', (req, res) => {
    var number = between(1, 4);
    res.setHeader('Content-Type', 'application/json');
    return res.status(200).json({
        url: `http://localhost:3003/dog${number}.jpg`
    })
});

app.get('/randomCat', (req, res) => {
    var number = between(1, 4);
    res.setHeader('Content-Type', 'application/json');
    return res.status(200).json({
        url: `http://localhost:3003/cat${number}.jpg`
    })
});

app.listen(3003);