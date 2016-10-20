$(document).ready(function($) {
    var track_player = {yt: null, is_playing: true}
    var is_playing = true;
 
    initProfileTrackPlayer();
 
    function initProfileTrackPlayer() {
        $.getScript('http://www.youtube.com/player_api');
        $('#playvideo').click(function() {
            $(this).toggleClass('fa-pause fa-play');
            if(is_playing) {
                track_player.yt.pauseVideo();
            } else {
                trackResume();
            }
            is_playing = !is_playing;
            console.log(is_playing);
        });
 
        $('#adjust_player_volume').change(function() {
            track_player.yt.setVolume($(this).val());
        });
   
    }
 
    window.onYouTubeIframeAPIReady = function() {
        track_player.yt = new YT.Player('player', {
            events: {
                'onReady': trackOnPlayerLoad,
                'onError': trackShowError
            }
        });
    }
 
    function trackOnPlayerLoad() {
        $('#adjust_player_volume').val(track_player.yt.getVolume());
        trackResume();
    displayTrackPlayerData();
    }
 
  function displayTrackPlayerData() {
    video_title = track_player.yt.getVideoData().title
    video_id = track_player.yt.getVideoData().video_id
    $('#playerinfo').html( video_title + '<br><font size="1"><a target="_blank" href="http://www.youtube.com/watch?v=' + video_id + '"><font size="1">Click Here</font></a> to watch on Youtube™</font>');
  }
 
    function trackShowError() {
        $('#playercontrols').html('<strong><font color="#ff0000">Video failed to load!</font></strong>');
    }
 
    function trackResume() {
        track_player.yt.playVideo();
    }
});


var key_audio = new Audio();
var changelogo = document.getElementsByClassName("logo");

var key_1 = 0; //G
var key_2 = 0; //H
var key_3 = 0; //O
var key_4 = 0; //S
var key_5 = 0; //T

var key_6 = 0; //S
var key_7 = 0; //P
var key_8 = 0; //O
var key_9 = 0; //K
var key_10 = 0; //Y
document.addEventListener("keydown", function(event) {
	if(event.key == "g") {
		key_1 = 1;
	} else if(event.key == "h") {
		key_2 = 1;
	} else if(event.key == "o") {
		key_3 = 1;
	} else if(event.key == "s") {
		key_4 = 1;
	} else if(event.key == "t") {
		key_5 = 1;
	} else {
		key_1 = 0;
		key_2 = 0;
		key_3 = 0;
		key_4 = 0;
		key_5 = 0;
	}
	if(event.key == "s") {
		key_6 = 1;
	} else if(event.key == "p") {
		key_7 = 1;
	} else if(event.key == "o") {
		key_8 = 1;
	} else if(event.key == "k") {
		key_9 = 1;
	} else if(event.key == "y") {
		key_10 = 1;
	} else {
		key_6 = 0;
		key_7 = 0;
		key_8 = 0;
		key_9 = 0;
		key_10 = 0;
	}
});

function CheckAllKeys()
{
	if(key_1 == 1 && key_2 == 1 && key_3 == 1 && key_4 == 1 && key_5 == 1) {
		
		key_audio.pause();
		key_audio.currentTime = 0;
		key_audio = new Audio('https://raw.githubusercontent.com/chaos12135/sarp_forum/master/_files/Original%20GhostBusters%20Theme%20Song.mp3');
		key_audio.load();
		key_audio.play();
		
		changelogo[0].innerHTML = '<img alt="San Andreas Roleplay: samp.gta-sarp.com:4500" title="San Andreas Roleplay: samp.gta-sarp.com:4500" src="https://uproxx.files.wordpress.com/2014/10/ghostbusters-2-animated-title-card_columbia-pictures.gif" width="350">';
		
		alert("I'm not afraid of no ghost!");
		
		key_1 = 0;
		key_2 = 0;
		key_3 = 0;
		key_4 = 0;
		key_5 = 0;
		key_6 = 0;
		key_7 = 0;
		key_8 = 0;
		key_9 = 0;
		key_10 = 0;
		
	};
	if(key_6 == 1 && key_7 == 1 && key_8 == 1 && key_9 == 1 && key_10 == 1) {
		
		key_audio.pause();
		key_audio.currentTime = 0;
		key_audio = new Audio('https://raw.githubusercontent.com/chaos12135/sarp_forum/master/_files/Spooky%20Scary%20Skeletons%20(Remix)%20-%20Extended%20Mix.mp3');
		key_audio.load();
		key_audio.play();
		
		changelogo[0].innerHTML = '<img alt="San Andreas Roleplay: samp.gta-sarp.com:4500" title="San Andreas Roleplay: samp.gta-sarp.com:4500" src="http://orig05.deviantart.net/05c8/f/2015/122/2/4/4461483_by_milky_operation-d8rwqqv.gif" height="150">';
		
		alert("Spooky Spooky Skeltons!");
		
		key_1 = 0;
		key_2 = 0;
		key_3 = 0;
		key_4 = 0;
		key_5 = 0;
		key_6 = 0;
		key_7 = 0;
		key_8 = 0;
		key_9 = 0;
		key_10 = 0;
	};
};

setInterval(CheckAllKeys, 500);
