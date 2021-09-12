const express = require('express');
const http = require('http');

const app = express();

app.set('view_engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
    res.render('clients.ejs');
});

http.createServer(app).listen(3000,
    function() {
        console.log('Express server listening');
    });
