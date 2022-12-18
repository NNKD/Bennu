function showMenu() {
	document.getElementById("subRightNav").style.display = 'block';
	document.getElementById("showIcon").style.visibility = 'hidden';
}

function closeMenu() {
	document.getElementById("subRightNav").style.display = 'none';
	document.getElementById("showIcon").style.visibility = 'visible';
}

// function showSearch() {

// 	if(document.getElementById("searchInput").style.visibility === 'visible') {
// 		document.getElementById("searchInput").style.visibility = 'hidden';
// 	}else{
// 		document.getElementById("searchInput").style.visibility = 'visible';
// 	}

// }

var index = 1;
var count = 0;
autoChangeImg = function () {
	imgs = [ "resources/ai/ai16.jpg", "resources/ai/ai1.jpg", "resources/ai/ai12.jpg", "resources/ai/anh3.jpg"];
	count++;
	document.getElementById("img").src = imgs[index];
	index++;
	if (index == 4) {
		index = 0;
	}
	if (count == 4) {
		count = 0;
	}
	
	if(count == 1){
		document.getElementById("check1").checked = false;
		document.getElementById("check2").checked = true;
		document.getElementById("check3").checked = false;
		document.getElementById("check4").checked = false;
	}
	else if(count == 2){
		document.getElementById("check1").checked = false;
		document.getElementById("check2").checked = false;
		document.getElementById("check3").checked = true;
		document.getElementById("check4").checked = false;
	}else if (count == 3) {
		document.getElementById("check1").checked = false;
		document.getElementById("check2").checked = false;
		document.getElementById("check3").checked = false;
		document.getElementById("check4").checked = true;
	}else{
		document.getElementById("check1").checked = true;
		document.getElementById("check2").checked = false;
		document.getElementById("check3").checked = false;
		document.getElementById("check4").checked = false;
	}
}

setInterval(autoChangeImg, 5000);

function check1() {
	document.getElementById("img").src = "resources/ai/ai1.jpg"; 
	document.getElementById("check1").checked = true;
	document.getElementById("check2").checked = false;
	document.getElementById("check3").checked = false;
	document.getElementById("check4").checked = false;
}

function check2() {
	document.getElementById("img").src = "resources/ai/ai12.jpg"; 
	document.getElementById("check1").checked = false;
	document.getElementById("check2").checked = true;
	document.getElementById("check3").checked = false;
	document.getElementById("check4").checked = false;
}

function check3() {
	document.getElementById("img").src = "resources/ai/anh3.jpg"; 
	document.getElementById("check1").checked = false;
	document.getElementById("check2").checked = false;
	document.getElementById("check3").checked = true;
	document.getElementById("check4").checked = false;
}

function check4() {
	document.getElementById("img").src = "resources/ai/ai16.jpg"; 
	document.getElementById("check1").checked = false;
	document.getElementById("check2").checked = false;
	document.getElementById("check3").checked = false;
	document.getElementById("check4").checked = true;
}

const ai = document.getElementById("ai");
window.addEventListener("scroll", appearOnScroll);

function appearOnScroll() {
	 let aiPosition = document.getElementById("ai").getBoundingClientRect().top;
	 let aePosition = document.getElementById("ae").getBoundingClientRect().top;
	 let ptsPosition = document.getElementById("pts").getBoundingClientRect().top;
	let windowHeight = window.innerHeight/1.5;
	
	if (windowHeight>aiPosition) {
		document.getElementById("ai").classList.remove("push-left");
	}else {
		document.getElementById("ai").classList.add("push-left");
	}

	if (windowHeight>ptsPosition) {
		document.getElementById("pts").classList.remove("push-right");
	}else {
		document.getElementById("pts").classList.add("push-right");
	}

	if (windowHeight>aePosition) {
		document.getElementById("ae").classList.remove("push-left");
	}else {
		document.getElementById("ae").classList.add("push-left");
	}
}

function PushUp() {
	document.getElementById("imagePushUp").classList.remove("push-up");
}
setInterval(PushUp, 500);


//Loading
function init () {
	setTimeout(() => {
		document.getElementById("loading").style.height = 0;
		document.getElementById("loader").style.opacity = 0;
		document.getElementById("loader").style.display = 'none';
		
		document.getElementById("loader2").style.opacity = 0;
		document.getElementById("loader2").style.display = 'none';

		document.getElementById("loader3").style.opacity = 0;
		document.getElementById("loader3").style.display = 'none';

		document.getElementById("main").style.display = 'block';
		setTimeout(() => (document.getElementById("main").style.opacity = 1), 50);
	}, 3000);
}

init();