module.exports = {
    HTML:function(Music_iframe){
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
                            <div class="Novideo">${Music_iframe}</div>
                        </div>
                        <div id="Side-panel">
                            <div class="Music"><a href="/꿈속에 너" id="MusicLinkColor">🎧 꿈속에 너</a></div>
                            <div class="Music"><a href="/조금 취했어" id="MusicLinkColor">🎧 조금 취했어</a></div>
                        </div>
                    </div>
                </div>
            </body>
            <link rel="stylesheet" href="index.css">
            </html>
            
        
        `
    }
}