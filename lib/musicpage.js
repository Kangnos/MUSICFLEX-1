module.exports = {
    HTML: function (music_title, videolinkcode, nextlocation, musics, page_url) {
        return `
            <!DOCTYPE html>
            <html lang="en" dir="ltr">
                <head>
                    <meta charset="utf-8">
                    <title>${music_title}</title>
                
                </head>
                <link rel="shortcut icon" href="#">
                <body>
                    <div class="maincontainer">
                        <div class = "Logo">
                            <a href="/">MusicFlex</a>
                        </div>
                        <div id="Music-player">
                            <div id="Main-panel">
                                <div class="no_video">
                                    <div id="player"></div>
                                    <div id="Music_name">${music_title}</div>
                                </div>
                            </div>
                            <div id="Side-panel">
                                <div style="position: relative;">
                                    <form>
                                        <input style="color: black; font-size: 20px; text-align: center;" type="text" placeholder="Search for track" id="value" onkeyup="filter()">
                                    </form>
                                </div>
                                <div id="playlist">
                                    ${musics}
                                </div>
                            </div> 
                            <div id="Type-panel">
                                <div id="Types">
                                    <div class="Type"><a href="../Rap/Godzilla" id=""><span>▶</span> Rap</a></div>
                                    <div class="Type"><a href="../Pop/Blinding Lights" id=""><span>▶</span> Pop</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </body>
                <link rel="stylesheet" href="/index.css">
                </html>
                <script src="http://www.youtube.com/player_api"></script>
                <script>
                var player;
                    function onYouTubeIframeAPIReady() {
                        player = new YT.Player('player', {
                            height: '100%',
                            width: '100%',
                            playerVars: {
                                'autoplay': 1
                            },
                            videoId: '${videolinkcode}',
                            events: {
                                'onReady': onPlayerReady,
                                'onStateChange': onPlayerStateChange
                            }
                        });
                    }
                    
                    function onPlayerReady(event) {
                        event.target.playVideo();
                    }
                    
                    
                    function onPlayerStateChange(event) {
                        if (event.data === 0) {
                            window.close();
                            window.open("${nextlocation}")
                            player = new YT.Player('player', {
                                height: '100%',
                                width: '100%',
                                videoId: '${videolinkcode}',
                                events: {
                                    'onReady': onPlayerReady,
                                    'onStateChange': onPlayerStateChange
                                }
                            });
                        }
                    }

                    function filter(){

                        var value, name, item, i;

                        value = document.getElementById("value").value.toUpperCase();
                        item = document.getElementsByClassName("Music");

                        for(i=0;i<item.length;i++){
                            name = item[i].getElementsByClassName("Music_name");
                            if(name[0].innerHTML.toUpperCase().indexOf(value) > -1){ 
                            item[i].style.display = "grid";
                            }else{
                            item[i].style.display = "none";
                            }
                        }
                    }
                </script>
        `
    }
}