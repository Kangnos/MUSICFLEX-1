module.exports = {
    HTML:function(music_title, videolinkcode, nextlocation){
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
                                </div>
                            </div>
                            <div id="Side-panel">
                                <div style="position: relative;">
                                    <input style="color: black; font-size: 20px; text-align: center;" type="text" placeholder="Search for track">
                                </div>
                                <div id="playlist">
                                    <div class="Music"><a href="../Rap/Godzilla"><span>🎧 </span> Emenem - Godzilla</a></div>
                                    <div class="Music"><a href="../Rap/Rap God"><span>🎧 </span> Eminem - Rap God</a></div>
                                    <div class="Music"><a href="../Rap/What's popin'"><span>🎧 </span> Jack Hallow - What's popin'</a> </div>
                                    <div class="Music"><a href="../Rap/Time"><span>🎧 </span> NF - Time</a></div>
                                    <div class="Music"><a href="../Rap/When I Grow Up"><span>🎧 </span> NF - When I Grow Up</a></div>
                                    <div class="Music"><a href="../Rap/Old Town Road"><span>🎧 </span> Lil Nas X - Old Town Road</a></div>
                                    <div class="Music"><a href="../Rap/Rolex"><span>🎧 </span> Ayo & Teo - Rolex</a></div>
                                    <div class="Music"><a href="../Rap/Lose Yourself"><span>🎧 </span> Eminem - Lose Yourself</a></div>
                                    <div class="Music"><a href="../Rap/Not Afraid"><span>🎧 </span> Eminem - Not Afraid</a></div>
                                    <div class="Music"><a href="../Rap/Life Is Good"><span>🎧 </span> Future - Life Is Good</a></div>
                                    <div class="Music"><a href="../Rap/Homicide"><span>🎧 </span> Eminem, Logic - Homicide</a></div>
                                </div>
                            </div> 
                            <div id="Type-panel">
                                <div id="Types">
                                <div class="Type"><a href="../Rap/Godzilla" id=""><span>▶</span> Rap</a></div>
                                <div class="Type"><a href="/Rap" id=""><span>▶</span> Rap</a></div>
                                <div class="Type"><a href="/Rap" id=""><span>▶</span> Rap</a></div>
                                <div class="Type"><a href="/Rap" id=""><span>▶</span> Rap</a></div>
                                <div class="Type"><a href="/Rap" id=""><span>▶</span> Rap</a></div>
                                <div class="Type"><a href="/Rap" id=""><span>▶</span> Rap</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </body>
                <link rel="stylesheet" href="/index.css">
                </html>
                <script>
                    for (let x = 0; x < myObj.Rapyoutubevideolink.length; x++) {
                        var myObj, i
                        myObj = {
                            "Rapyoutubevideolink":["nbqMIBYJlvk", "XbGs_qK2PQA", "hFqgStUhNZc"],
                        };
                        var element = myObj.Rapyoutubevideolink
                        var player;
                        function onYouTubePlayerAPIReady() {
                            player = new YT.Player('player', {
                                videoId: element[x],
                                width: '640',
                                height: '390',
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
                                window.location = '${nextlocation}';
                            }
                        }
                    }
                </script>
        `
    }
}