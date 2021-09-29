/*jslint browser: true*/
/*global $, jQuery*/

function playVideo1() {
    document.getElementById("video").innerHTML = "<div id='player1'></div>";

    // 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

function playVideo2() {
    document.getElementById("video").innerHTML = "<div id='player2'></div>";

    // 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player1;
var player2;
function onYouTubeIframeAPIReady() {
    player1 = new YT.Player('player1', {
        height: '390',
        width: '640',
        videoId: 'KFstP0C9sVk',
        events: {
            'onReady': onPlayerReady
        }
    });
    player2 = new YT.Player('player2', {
        height: '390',
        width: '640',
        videoId: 'nidDc1qE7s',
        events: {
            'onReady': onPlayerReady
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}