var express = require('express')
var app = express()
var fs = require('fs')
var MusicFlexMainPage = require('./lib/mainpage.js')
var MusicFlexMusicPage
var compression = require('compression');
app.use(express.static('public'));
app.use(compression())


app.get('/', function(req, res){
    var mainpage = MusicFlexMainPage.HTML();
    res.send(mainpage)
});
app.get('/:pageId', function(req, res){
    var mainpage = MusicFlexMusicPage.HTML();
    res.send(mainpage)
});

app.listen(3000, function() {
    console.log("Example app is running")
})