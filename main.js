var express = require('express')
var app = express()
var fs = require('fs')
var path = require('path')
var MusicFlexMainPage = require('./lib/mainpage.js')
var MusicFlexMusicPage = require('./lib/musicpage.js')
var compression = require('compression');
app.use(express.static('public'));
app.use(compression())


app.get('/', function(req, res){
    var mainpage = MusicFlexMainPage.HTML();
    res.send(mainpage)
});

app.get('/Rap/:pageId', function(req, res) {
    fs.readdir('./musics', function (err, filelist) {
        var filteredMusic = path.parse(req.params.pageId).base;
        fs.readFile(`musics/Rap/${filteredMusic}.txt`, 'utf8', function (err, data) {
            if( err ) throw err
            var arr = data.split("\r\n")
            var music_title = arr[0]
            var videolinkcode = arr[1]
            var nextlocation = arr[2]
            fs.readFile('musics/Rap/RapMusics', 'utf8', function(err, musics){
                var musicpage = MusicFlexMusicPage.HTML(music_title, videolinkcode, nextlocation, musics)
                res.send(musicpage)
            })
        })
    })
})

app.listen(3000, function() {
    console.log("Example app is running")
})