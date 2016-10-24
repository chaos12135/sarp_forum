$( document ).ready(function() {
	var key_audio = new Audio();
	var changelogo = document.getElementsByClassName("logo");
	
	var key_ROLL = 0;
	var key_FLIP = 0;
	var key_1 = 0; //B
	var key_2 = 0; //A
	var key_3 = 0; //R
	var key_4 = 0; //R
	var key_5 = 0; //E
	var key_6 = 0; //L
	var key_7 = 0; //R
	var key_8 = 0; //O
	var key_9 = 0; //L
	var key_10 = 0; //L

	function ClearVariablesS()
	{
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
	
	function BarrelRollRotate()
	{
		key_ROLL = (key_ROLL + 1);
		if(key_ROLL != 360){
			setTimeout(BarrelRollRotate, 1);
		} else {
			key_ROLL = 0;
		}
		document.body.style.setProperty("-moz-transform", "rotate("+ key_ROLL +"deg)", null);
		document.body.style.setProperty("-webkit-transform", "rotate("+ key_ROLL +"deg)", null);
		document.body.style.setProperty("-o-transform", "rotate("+ key_ROLL +"deg))", null);
		document.body.style.setProperty("transform", "rotate("+ key_ROLL +"deg)", null);
	};
	
	document.addEventListener("keydown", function(event) {
		if(event.key == "b") {
			key_1 = 1; //B
		} else if(event.key == "a") {
			key_2 = 1; //A
		} else if(event.key == "r") {
			if(key_3 == 0){
				key_3 = 1; //R
			} else if(key_4 == 0){
				key_4 = 1; //R
			} else if(key_7 == 0){
				key_7 = 1; //R
			}
		} else if(event.key == "e") {
			key_5 = 1; //E
		} else if(event.key == "l") {
			if(key_6 == 0){
				key_6 = 1; //L
			} else if(key_9 == 0){
				key_9 = 1; //L
			} else if(key_10 == 0){
				key_10 = 1; //L
			}
		} else if(event.key == "o") {
			key_8 = 1; //O
		} else {
			ClearVariablesS();
		}
	});
	
	function CheckAllKeys()
	{
		/*
		//GHOST
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

		//SPOKY
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
		//FLIPME
		if(key_F == 1 && key_L == 1 && key_I == 1 && key_P == 1 && key_M == 1 && key_E == 1) {
			if(key_FLIP == 0){
				key_FLIP = 1;
				document.body.style.setProperty("-moz-transform", "scaleX(-1)", null);
				document.body.style.setProperty("-webkit-transform", "scaleX(-1)", null);
				document.body.style.setProperty("-o-transform", "scaleX(-1)", null);
				document.body.style.setProperty("transform", "scaleX(-1)", null);
			} else if(key_FLIP == 1){
				key_FLIP = 0;
				document.body.style.setProperty("-moz-transform", "scaleX(1)", null);
				document.body.style.setProperty("-webkit-transform", "scaleX(1)", null);
				document.body.style.setProperty("-o-transform", "scaleX(1)", null);
				document.body.style.setProperty("transform", "scaleX(1)", null);
			}
			ClearVariablesS()
		};
		*/
		
		//barrel roll
		if(key_1 == 1 && key_2 == 1 && key_3 == 1 && key_4 == 1 && key_5 == 1 && key_6 == 1 && key_7 == 1 && key_8 == 1 && key_9 == 1 && key_10 == 1) {
			
			key_audio.pause();
			key_audio.currentTime = 0;
			key_audio = new Audio('https://raw.githubusercontent.com/chaos12135/sarp_forum/master/_files/Do%20A%20Barrel%20Roll!.mp3');
			key_audio.load();
			key_audio.play();
			
			setTimeout(BarrelRollRotate, 100);
			ClearVariablesS()
		};
	};
	
	setInterval(CheckAllKeys, 500);
	//setInterval(ClearVariablesS, 2500);
});


/*
$( document ).ready(function() {
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
	}
});
*/
