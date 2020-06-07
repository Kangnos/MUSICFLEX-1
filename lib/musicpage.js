module.exports = {
    HTML: function (musics) {
        return `
            <!DOCTYPE html>
            <html lang="en" dir="ltr">
                <head>
                    <meta charset="utf-8">
                    <title id="Pagetitle"></title>      
                </head>
                <link rel="shortcut icon" href="#">
                <body>
                    <div class="maincontainer">
                        <div class = "Logo">
                            <a href="/" >MusicFlex</a>
                        </div>
                        <div id="Music-player">
                            <div id="Main-panel">
                                <div class="no_video">
                                    <div id="player"></div>
                                    <div id="Music_name"></div>
                                </div>
                            </div>
                            <div id="Side-panel">
                                <div style="position: relative;">
                                    <form>
                                        <input style="color: black; font-size: 20px; text-align: center;" type="text" placeholder="Search for track" id="value" onkeyup="filter()">
                                    </form>
                                </div>
                                <div id="playlist">
                                    <div class="Music"><a href="" onclick="Onclick()"><span>🎧 </span> Eminem - Godzilla</a></div>
                                    <div class="Music"><a href="" onclick="Onclick()"><span>🎧 </span> Eminem - RapGod</a></div>
                                    <div class="Music"><a href="" onclick="Onclick()"><span>🎧 </span> Joyner Lucas - ISIS</a></div>
                                </div>
                            </div> 
                            <div id="Type-panel">
                                <div id="Types">
                                    <div class="Type"><a href="../Rap" id=""><span>▶</span> Rap</a></div>
                                    <div class="Type"><a href="../Pop" id=""><span>▶</span> Pop</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </body>
                <link rel="stylesheet" href="/index.css">
                </html>

                <script>
                    var tag = document.createElement('script');
                    tag.src = "http://www.youtube.com/iframe_api";
                    var firstScriptTag = document.getElementsByTagName('script')[0];
                    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            
                    var player;
                    var MusicName = document.getElementById("Music_name");
                    var Pagetitle = document.getElementById("Pagetitle");
                    

                    function onYouTubeIframeAPIReady() {
                        player = new YT.Player('player', {
                            height: '100%',
                            width: '100%',
                            events: {
                                'onReady': onPlayerReady,
                                'onStateChange': onPlayerStateChange
                            }
                        });
                    }
            
                    var videos = [
                        {
                            vid: '9XvXF1LrWgA',
                            artist: "Eminem",
                            musictitle: "Godzilla"
                        },
                        {
                            vid: "S7cQ3b0iqLo",
                            artist: "Eminem",
                            musictitle: "RapGod"
                        },
                        {
                            vid: "duF_-8KfsiQ",
                            artist: "Joyner Lucas",
                            musictitle: "ISIS"
                        }
                    ];
                    var index = 0;

                    function onPlayerReady(event) {
                        MusicName.innerHTML = videos[index].artist + " - " + videos[index].musictitle;
                        Pagetitle.innerHTML = videos[index].musictitle;
                        console.log(videos[index].musictitle);
                        event.target.cueVideoById({
                            videoId: videos[index].vid
                        });
                        event.target.playVideo();
                    }
            
                    function onPlayerStateChange(event) {
                        if (event.data === YT.PlayerState.ENDED) {
                            MusicName.innerHTML = videos[index].artist + " - " + videos[index].musictitle;
                            Pagetitle.innerHTML = videos[index].musictitle;

                            const musictitle = videos[index+1].musictitle;
                            console.log(musictitle);
                            if (index < videos.length - 1) {
                                index++;
                                event.target.loadVideoById({
                                    videoId: videos[index].vid
                                });
                            }
                        }
                    }

                    function Onclick(){
                        
                    }

          
                </script>


                <script>
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