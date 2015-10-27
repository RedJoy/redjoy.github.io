window.onload = function  () {
	var oDiv = document.getElementById("img-box");
	var img = oDiv.getElementsByTagName("ul")[0];
	var li = img.getElementsByTagName("li");
	var prev = document.getElementById("prev");
	var next = document.getElementById("next");
	var heart = document.getElementById("heart");

	img.innerHTML += img.innerHTML;
	img.style.width = (li[0].offsetWidth+20)*li.length + 'px';
	function change(){
		if(img.offsetLeft < -img.offsetWidth/2){
			img.style.left = '0';
		}
		if(img.offsetLeft >0){
			img.style.left = -img.offsetWidth/2 +'px';
		}
		img.style.left = img.offsetLeft-300 +'px';
	}
	var time = setInterval(change,2000);

	oDiv.onmouseover = function(){
		clearInterval(time);
	};
	oDiv.onmouseout = function(){
		time = setInterval(change,3000);
	};
	prev.onmouseover = function(){
		clearInterval(time);
	};
	prev.onmouseout = function(){
		time = setInterval(change,3000);
	};
	next.onmouseover = function(){
		clearInterval(time);
	};
	next.onmouseout = function(){
		time = setInterval(change,3000);
	};
	prev.onclick = function (){
		clearInterval(time);
		if(img.offsetLeft < -img.offsetWidth/2){
			img.style.left = '0';
		}
		if(img.offsetLeft >0){
			img.style.left = -img.offsetWidth/2 +'px';
		}
		img.style.left = img.offsetLeft+300 +'px';
	}
	next.onclick = function (){clearInterval(time);
		change();
	}
	location.userAgent;

	document.onmousemove = function(e){
		var ev = e || window.event;
		var scrTop = document.body.scrollTop || document.documentElement.scrollTop;
		var scrLeft = document.body.scrollLeft || document.documentElement.scrollLeft;
		heart.style.left = ev.clientX + scrLeft +10+"px";
		heart.style.top = ev.clientY + scrTop + 10 +"px";
	};


};