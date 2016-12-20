$(document).ready(function() {
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
