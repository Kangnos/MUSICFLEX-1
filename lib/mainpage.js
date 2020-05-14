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
                        <link rel="shortcut icon" href="#">
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
                                    <div class="Music"><a href="../Rap/Godzilla" class="Music_name"><span>🎧 </span> Eminem - Godzilla</a></div>
                                    <div class="Music"><a href="../Rap/Rap God" class="Music_name"><span>🎧 </span> Eminem - Rap God</a></div>
                                    <div class="Music"><a href="../Rap/What's popin'" class="Music_name"><span>🎧 </span> Jack Hallow - What's popin'</a> </div>
                                    <div class="Music"><a href="../Rap/Time" class="Music_name"><span>🎧 </span> NF - Time</a></div>
                                    <div class="Music"><a href="../Rap/When I Grow Up" class="Music_name"><span>🎧 </span> NF - When I Grow Up</a></div>
                                    <div class="Music"><a href="../Rap/Old Town Road" class="Music_name"><span>🎧 </span> Lil Nas X - Old Town Road</a></div>
                                    <div class="Music"><a href="../Rap/Rolex" class="Music_name"><span>🎧 </span> Ayo & Teo - Rolex</a></div>
                                    <div class="Music"><a href="../Rap/Lose Yourself" class="Music_name"><span>🎧 </span> Eminem - Lose Yourself</a></div>
                                    <div class="Music"><a href="../Rap/Not Afraid" class="Music_name"><span>🎧 </span> Eminem - Not Afraid</a></div>
                                    <div class="Music"><a href="../Rap/Life Is Good" class="Music_name"><span>🎧 </span> Future - Life Is Good  ft.'Drake'</a></div>
                                    <div class="Music"><a href="../Rap/Homicide" class="Music_name"><span>🎧 </span> Eminem, Logic - Homicide</a></div>
                                    <div class="Music"><a href="../Rap/Ransom" class="Music_name"><span>🎧 </span> Lil Tecca - Ransom</a></div>
                                    <div class="Music"><a href="../Rap/Blueberry Faygo" class="Music_name"><span>🎧 Lil Mosey - Blueberry Faygo</span></a></div>
                                    <div class="Music"><a href="../Rap/" class="Music_name"><span>🎧 </span> </a></div>
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