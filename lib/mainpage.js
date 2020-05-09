module.exports = {
    HTML:function(){
        return `
        <!DOCTYPE html>
        <html lang="en" dir="ltr">
        <head>
            <meta charset="utf-8">
            <title>MusicFlex</title>
        
        </head>
        <body>
            <div class="maincontainer">
                <div class = "Logo">
                    <a href="/">MusicFlex</a>
                </div>
                <div id="Music-player">
                    <div id="Main-panel">
                        <div class="no_video">
                            No Video
                        </div>
                    </div>
                    <div id="Side-panel">
                        <div style="position: relative;">
                            <input style="color: black; font-size: 20px; text-align: center;" type="text" placeholder="Search for track">
                        </div>
                        <div id="playlist">
                            <div class="Music"><a href="/"><span>🎧 </span> Jack Hallow - What's popin'</a> </div>
                            <div class="Music"><a href="/"><span>🎧 </span> Emenem - Godzilla</a></div>
                            <div class="Music"><a href="/"><span>🎧 </span> Eminem - Rap God</a></div>
                            <div class="Music"><a href="/"><span>🎧 </span> NF - Time</a></div>
                            <div class="Music"><a href="/"><span>🎧 </span> NF - When I Grow Up</a></div>
                            <div class="Music"><a href="/"><span>🎧 </span> Lil Nas X - Old Town Road</a></div>
                            <div class="Music"><a href="/"><span>🎧 </span> Ayo & Teo - Rolex</a></div>
                            <div class="Music"><a href="/"><span>🎧 </span> Eminem - Lose Yourself</a></div>
                            <div class="Music"><a href="/"><span>🎧 </span> Eminem - Not Afraid</a></div>
                            <div class="Music"><a href="/"><span>🎧 </span> Future - Life Is Good</a></div>
                            <div class="Music"><a href="/"><span>🎧 </span> Eminem, Logic - Homicide</a></div>
                            <div class="Music"><a href="/"><span>🎧 </span> </a></div>
                        </div>
                    </div>
                    <div id="Type-panel">
                        <div id="Types">
                            <div class="Type"><a href="/Rap" id=""><span>▶</span> Rap</a></div>
                            <div class="Type"><a href="/Rap" id=""><span>▶</span> Rap</a></div>
                            <div class="Type"><a href="/Rap" id=""><span>▶</span> Rap</a></div>
                            <div class="Type"><a href="/Rap" id=""><span>▶</span> Rap</a></div>
                            <div class="Type"><a href="/Rap" id=""><span>▶</span> Rap</a></div>
                            <div class="Type"><a href="/Rap" id=""><span>▶</span> Rap</a></div>
                            <div class="Type"><a href="/Rap" id=""><span>▶</span> Rap</a></div>
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
        <link rel="stylesheet" href="index.css">
        </html>

        `
    }
}