var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var randomRange = require('./randomRange');

var app = express();
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname)))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.post('/array', (req, res) => {
    var arrLength = req.body.arrayLength;
    var arr = randomRange(arrLength);

    res.send({
        data: arr
    })
})

app.listen(9876, function() {
    console.log('app listening on 9876')
})