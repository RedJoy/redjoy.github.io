var WINDOW_WIDTH = 1024;
var WINDOW_HEIGHT = 768;
var RADIUS = 8;
var MARGIN_TOP = 60;
var MARGIN_LEFT = 30;

// const endTime = new Date(2015,6,23,18,47,52);//表明到2015年7月23日，18点47分52秒的倒计时
// var curShowTimeSeconds = 0;


//倒计时效果
//var endTime = new Date();
//endTime.setTime(endTime.getTime() + 3600*1000)
var curShowTimeSeconds = 0;

var balls = [];
const colors = ["#33B5e5","#81FFE3","#F7D103","#E33EA2","#F71A40","#B41FDE","#27F031","#F2241C","#ED9312","#3439DE"];

window.onload = function(){

    WINDOW_WIDTH = document.body.clientWidth;
    WINDOW_HEIGHT = document.body.clientHeight;

    MARGIN_LEFT = Math.round(WINDOW_WIDTH/10);
    RADIUS = Math.round(WINDOW_WIDTH *4/5/108)-1;

    MARGIN_TOP = Math.round(WINDOW_HEIGHT/5);

	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");

	canvas.width = WINDOW_WIDTH;
	canvas.height = WINDOW_HEIGHT;

	curShowTimeSeconds =  getCurrentShowTimeSeconds();
	setInterval(
		function (){
			render(context);
			update();
		},
		50
	);
}

function update(){

	var nextShowTimeSeconds = getCurrentShowTimeSeconds();

	var nextHours = parseInt(nextShowTimeSeconds/3600);
	var nextMinutes = parseInt((nextShowTimeSeconds - nextHours*3600)/60);
	var nextSeconds = nextShowTimeSeconds%60;

	var curHours = parseInt(curShowTimeSeconds/3600);
	var curMinutes = parseInt((curShowTimeSeconds - curHours*3600)/60);
	var curSeconds = curShowTimeSeconds%60;

	if(nextSeconds != curSeconds){//当当前时间与现在时间不同时
		if(parseInt(curHours/10)!= parseInt(nextHours/10)){
			addBalls(MARGIN_LEFT+0,MARGIN_TOP,parseInt(curHours/10));
		}
		if(parseInt(curHours%10)!=parseInt(nextHours%10)){
			addBalls(MARGIN_LEFT+15*(RADIUS+1),MARGIN_TOP,parseInt(curHours%10));
		}

		if(parseInt(curMinutes/10)!= parseInt(nextMinutes/10)){
			addBalls(MARGIN_LEFT+39*(RADIUS+1),MARGIN_TOP,parseInt(curMinutes/10));
		}
		if(parseInt(curMinutes%10)!=parseInt(nextMinutes%10)){
			addBalls(MARGIN_LEFT+54*(RADIUS+1),MARGIN_TOP,parseInt(curMinutes%10));
		}

		if(parseInt(curSeconds/10)!= parseInt(nextSeconds/10)){
			addBalls(MARGIN_LEFT+78*(RADIUS+1),MARGIN_TOP,parseInt(curSeconds/10));
		}
		if(parseInt(curSeconds%10)!=parseInt(nextSeconds%10)){
			addBalls(MARGIN_LEFT+93*(RADIUS+1),MARGIN_TOP,parseInt(curSeconds%10));
		}


		curShowTimeSeconds = nextShowTimeSeconds;
	}

	updateBalls();

}

function updateBalls(){
	for(var i=0;i<balls.length;i++){

		balls[i].x += balls[i].vx;
		balls[i].y += balls[i].vy;
		balls[i].vy += balls[i].g;

		if(balls[i].y >= WINDOW_HEIGHT-RADIUS){
			balls[i].y = WINDOW_HEIGHT-RADIUS;
			balls[i].vy = -balls[i].vy*0.75;
		}
	}

	var cnt = 0;
	for(var i=0;i<balls.length;i++)
		if(balls[i].x+RADIUS >0 && balls[i].x -RADIUS < WINDOW_WIDTH)
			balls[cnt++] = balls[i];
	while (balls.length >Math.min(300,cnt)){
		balls.pop();
	}

}

function addBalls(x,y,num){//添加小球

	for(var i=0;i<dight[num].length;i++)
		for(var j=0;j<dight[num][i].length;j++)
			if(dight[num][i][j] ==1){
				var aBall = {
					x:x+j*2*(RADIUS+1)+(RADIUS+1),
					y:y+i*2*(RADIUS+1)+(RADIUS+1),
					g:1.5+Math.random(),//生成一个0-1之间的随机数
					vx:Math.pow(-1,Math.ceil(Math.random()*1000))*4,
					//在0-1000之间取随机数，并使用ceil取整，再进行平方，vx:为+4或者-4
					vy:-5,
					color:colors[Math.floor(Math.random()*colors.length)]
					//取一个0-1之间的随机数。再向下取整，随机取颜色
				}
				balls.push(aBall);
			}
}

function getCurrentShowTimeSeconds(){
	var curTime = new Date();
	//倒计时效果
	// var ret = endTime.getTime() - curTime.getTime();//获得现在时间到设置的最终时间的一共的毫秒数
	// ret = Math.round(ret/1000);//将毫秒数转化为秒
	// return ret >= 0 ?ret:0;//判断ret是否为0，不为0返回ret，为0返回0；

    //时钟效果
    var ret = curTime.getHours()*3600 +curTime.getMinutes()*60 +curTime.getSeconds();
    return ret;
	
}

function render(cxt){

	cxt.clearRect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT);//在整个屏幕进行刷新

	var hours = parseInt(curShowTimeSeconds/3600);
	var minutes = parseInt((curShowTimeSeconds - hours*3600)/60);
	var seconds = curShowTimeSeconds%60;

	renderDight(MARGIN_LEFT,MARGIN_TOP,parseInt(hours/10),cxt);//小时十位数字
	renderDight(MARGIN_LEFT+15*(RADIUS+1),MARGIN_TOP,parseInt(hours%10),cxt);//小时个位数字
	renderDight(MARGIN_LEFT+30*(RADIUS+1),MARGIN_TOP,10,cxt);//冒号
	renderDight(MARGIN_LEFT+39*(RADIUS+1),MARGIN_TOP,parseInt(minutes/10),cxt);//分钟十位数字
	renderDight(MARGIN_LEFT+54*(RADIUS+1),MARGIN_TOP,parseInt(minutes%10),cxt);//分钟个位数字
	renderDight(MARGIN_LEFT+69*(RADIUS+1),MARGIN_TOP,10,cxt);//冒号
	renderDight(MARGIN_LEFT+78*(RADIUS+1),MARGIN_TOP,parseInt(seconds/10),cxt);//秒钟十位数字
	renderDight(MARGIN_LEFT+93*(RADIUS+1),MARGIN_TOP,parseInt(seconds%10),cxt);//秒钟个位数字

	for(var i=0;i<balls.length;i++){
		cxt.fillStyle = balls[i].color;
		cxt.beginPath();
		cxt.arc(balls[i].x,balls[i].y,RADIUS,0,2*Math.PI,true);
		cxt.closePath();

		cxt.fill();
	}
}

function renderDight(x,y,num,cxt){

	cxt.fillStyle = "#F22439";

	for(var i=0;i<dight[num].length;i++)
		for(var j=0;j<dight[num][i].length;j++)
			if(dight[num][i][j] ==1){
				cxt.beginPath();
				cxt.arc(x+j*2*(RADIUS+1)+(RADIUS+1),y+i*2*(RADIUS+1)+(RADIUS+1),RADIUS,0,2*Math.PI);
				cxt.closePath();

				cxt.fill();
			}
}