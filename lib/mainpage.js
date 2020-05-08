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
                            <div class="VideoPanel"><iframe width="500" height="281" src="https://www.youtube.com/embed/jDgfG47lTmc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                        </div>
                        <div id="Side-panel">
                            <div class="Music"><a href="/" id="MusicLinkColor"><span>🎧 </span>Mark Pettitt - Something Inside</a></div>
                            <div class="Music"><a href="/" id="MusicLinkColor"><span>🎧 </span>Emenem - Godzilla</a></div>
                        </div>
                    </div>
                </div>
            </body>
            <link rel="stylesheet" href="index.css">
            </html>
        
        `
    }
}