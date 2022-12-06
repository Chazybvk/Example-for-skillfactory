window.onload = function(){

var prev = document.querySelector('.previous');
var next = document.querySelector('.next');
var alternateprev = document.querySelector('.alternatearrowleft');
var alternatenext = document.querySelector('.alternatearrowright');

var imageChange = document.querySelector('.rightblockimage');
var imageChangeAlternate = document.querySelector('.alternateblock')

var switchText1 = document.querySelector('.switchText1');
var switchText2 = document.querySelector('.switchText2');
var switchText3 = document.querySelector('.switchText3');

var switchTextT1 = document.querySelector('.switchTextT1');
var switchTextT2 = document.querySelector('.switchTextT2');
var switchTextT3 = document.querySelector('.switchTextT3');

var tT1 = document.querySelector('.TT1');
var tT2 = document.querySelector('.TT2');
var tT3 = document.querySelector('.TT3');

var dot1 = document.querySelector("#dotfirst");
var dot2 = document.querySelector("#dotsecond");
var dot3 = document.querySelector("#dotthird");

var i1 = document.querySelector("#firsti");
var i2 = document.querySelector("#secondi");
var i3 = document.querySelector("#thirdi");

var itterationCount = 1;
	
	function changeCount(){
		if (itterationCount < 1) {
			itterationCount = 3;
		}
		else if (itterationCount > 3) {
			itterationCount = 1;
		}
		else {
			itterationCount = itterationCount;
		}
		count();
	}

function count(){
	if (itterationCount == 1) {
		imageChange.style = 'background: url("img/rightblocksecondpage.png") center / cover no-repeat;';
		imageChangeAlternate.style = 'background: url("img/rightblocksecondpage.png") center / cover no-repeat;';
		dot1.style = 'background: url("img/Dotonclick.png") center / cover no-repeat;';
		dot2.style = 'background: url("img/Dot.png") center / cover no-repeat;';
		dot3.style = 'background: url("img/Dot.png") center / cover no-repeat;';
		
		switchText1.style = "display: inline;";
		switchText2.style = "display: none;";
		switchText3.style = "display: none;";

		switchTextT1.style = "display: inline;";
		switchTextT2.style = "display: none;";
		switchTextT3.style = "display: none;";

		tT1.style = "display: inline;";
		tT2.style = "display: none;";
		tT3.style = "display: none;";

		i1.classList.add('active');
		i2.classList.remove('active');
		i3.classList.remove('active');
	}
	else if (itterationCount == 2) {
		imageChange.style = 'background: url("img/rightblocksecondpage2.png") center / cover no-repeat;';
		imageChangeAlternate.style = 'background: url("img/rightblocksecondpage2.png") center / cover no-repeat;';
		dot1.style = 'background: url("img/Dot.png") center / cover no-repeat;';
		dot2.style = 'background: url("img/Dotonclick.png") center / cover no-repeat;';
		dot3.style = 'background: url("img/Dot.png") center / cover no-repeat;';
		
		switchText1.style = "display: none;";
		switchText2.style = "display: inline;";
		switchText3.style = "display: none;";

		switchTextT1.style = "display: none;";
		switchTextT2.style = "display: inline;";
		switchTextT3.style = "display: none;";

		tT1.style = "display: none;";
		tT2.style = "display: inline;";
		tT3.style = "display: none;";

		i1.classList.remove('active');
		i2.classList.add('active');
		i3.classList.remove('active');
	}
	else if (itterationCount == 3) {
		imageChange.style = 'background: url("img/rightblocksecondpage3.png") center / cover no-repeat;';
		imageChangeAlternate.style = 'background: url("img/rightblocksecondpage3.png") center / cover no-repeat;';
		dot1.style = 'background: url("img/Dot.png") center / cover no-repeat;';
		dot2.style = 'background: url("img/Dot.png") center / cover no-repeat;';
		dot3.style = 'background: url("img/Dotonclick.png") center / cover no-repeat;';
		
		switchText1.style = "display: none;";
		switchText2.style = "display: none;";
		switchText3.style = "display: inline;";
		
		switchTextT1.style = "display: none;";
		switchTextT2.style = "display: none;";
		switchTextT3.style = "display: inline;";

		tT1.style = "display: none;";
		tT2.style = "display: none;";
		tT3.style = "display: inline;";

		i1.classList.remove('active');
		i2.classList.remove('active');
		i3.classList.add('active');	
	}
}

function previousSlide(){
	itterationCount = itterationCount -1;
	changeCount();
}	

function nextSlide(){
	itterationCount = itterationCount +1;
	changeCount();
}

prev.addEventListener('click', function () {
	previousSlide();
}
);

alternateprev.addEventListener('click', function () {
	previousSlide();
}
);

next.addEventListener('click', function () {
	nextSlide();
}
);

alternatenext.addEventListener('click', function () {
	nextSlide();
}
);

i1.addEventListener('click', function(){
itterationCount = 1;
count();
});
i2.addEventListener('click', function(){
itterationCount = 2;
count();
});
i3.addEventListener('click', function(){
itterationCount = 3;
count();
});

dot1.addEventListener('click', function(){
itterationCount = 1;
count();
});

dot2.addEventListener('click', function(){
itterationCount = 2;
count();
});

dot3.addEventListener('click', function(){
itterationCount = 3;
count();
});

count();
}
