module.exports = {
    HTML:function(music_title, videolinkcode, playlist){
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
                                <iframe width="550" height="320"  src="https://www.youtube.com/embed/${videolinkcode}?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </div>
                            <div id="Side-panel">
                                <div style="position: relative;">
                                    <input style="color: black; font-size: 20px; text-align: center;" type="text" placeholder="Search for track">
                                </div>
                                <div id="playlist">
                                    ${playlist}
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
                


        `
    }
}