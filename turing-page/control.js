window.onload = function  () {
	var oDiv =document.getElementById("month");
	var aLi = oDiv.getElementsByTagName("li");
	var oShow = document.getElementById("text");
	var oDate = new Date;
	var aYear = oDate.getFullYear();
	var aMonth = oDate.getMonth();
	var yearShow = document.getElementById("year");
	var p = [
		"新年的开始,我们总习惯祝福未来,期待美好1在这月份,我们大可暂别江湖的刀光剑影和人世的纷繁,恬静并感恩着,一切都变得那么柔和温情。",
		"中国最隆重的节日--春节.都会在2月份.这个月在国人眼里永远都是一派祥和!祥和很多时候就是和谐的代名词。",
		"总有人说，三月不减肥，四月、五月徒伤悲。",
		"春天刚过，夏天还没真正来临．在这没有多少季节特色的月份里，气温不高，但人心却最容易臊动。",
		"面包!面包!我们要面包!",
		"人的无助经常出现于万般无奈时任凭体内有涌动的能量就是找不到发泄机会．6月在名义上是进入夏季，但由于气温还不是火热得足以撩起人们的热情，在这季节人们只能慢慢消化孤独和无奈。",
		"火热容易让人联想火焰，的确，烘烘燃烧的火焰具有催梏拉朽，经常不考虑后果也不理会影响．它的灵魂永远标榜——轰轰烈烈。",
		"气温升高，骄阳肆无忌惮．对于一些人或一些事利好的外部环境或者本身优越的内部环境势必让它们显得与众不同．志得意满．你能察觉它们的自信之外还能感受到其些许跋扈．这才显得真实而合乎情理．再低迷的东西也有其扬眉吐气之时。",
		"大家都习惯将一年中的9月份叫“金秋”，“收获季节”然，9月并没那么漂亮：原本绿衣满身的树木开始凋零，漫山遍野的红花已落土为肥。9月的那抹落日总是容易让人联想到生命的迟暮，一切的一切都可视为死寂。",
		"很多我们以为一辈子都不会忘记的事情，就在我们念念不忘的日子里，被我们遗忘了。",
		"一个人总要走陌生的路，看陌生的风景，听陌生的歌，然后在某个不经意的瞬间，你会发现，原本费尽心机想要忘记的事情真的就这么忘记了。 ",
		"终于盼到12月，冬天进入尾声，春天还远吗？让人类能有不锲动力向前冲的根本原因：就是前方有模糊的目标，这目标或许精彩也许残酷．但正是宁信其好不信其坏的思想让我们一直不离不弃，一直翘首以待！"
	];
	yearShow.innerHTML = aYear;
	for(var i=0; i<aLi.length;i++){
		aLi[i].index = i;
		aLi[aMonth].className ="active";
		oShow.innerHTML = "<h3>"+(aMonth+1)+"月心情</h3>"+"<p>&nbsp;&nbsp;"+p[aMonth]+"</p>";
		aLi[i].onmouseover = function(){
			for(var i=0;i<aLi.length;i++){
				aLi[i].className="";
			}
			this.className ="active";
			oShow.innerHTML = "<h3>"+(this.index+1)+"月心情</h3>"+"<p>&nbsp;&nbsp;"+p[this.index]+"</p>";

		};
	}

	// var yearLi = yearShow.getElementsByTagName("li");
	// for(var i=0;i<yearLi.length;i++){
	// 	if(i=0){
	// 		var a =Math.pow(10,(yearLi.length-i-1));
	// 		alert(a);
	// 	}
	// 	// else{
	// 	// 	var a=Math.pow(10,(yearLi.length-i));
	// 	// 	var b =parseInt(aYear%a);
	// 	// 	var c = parseInt(b/a/10);
	// 	// 	// console.log(c);
	// 	// }
	// 	// alert(2015%1000);
	// }
	
};
var curIndex=1;// 控制变量从1开始，以便拼接转换ID

	function next(){//下一个按钮函数
		if(curIndex == 8)//当翻到最后一个时，停止向后翻动
			return;

		var curPage=document.getElementById("page"+curIndex);//
		curPage.style.transform="rotateX(270deg)";
		curPage.style.webkitTransform="rotateX(270deg)";
		curPage.style.msTransform="rotateX(270deg)";
		curPage.style.oTransform="rotateX(270deg)";
		curPage.style.mozTransform="rotateX(270deg)";

		curIndex ++;
		var nextPage=document.getElementById("page"+curIndex);
		nextPage.style.transform="rotateX(0deg)";
		nextPage.style.webkitTransform="rotateX(0deg)";
		nextPage.style.msTransform="rotateX(0deg)";
		nextPage.style.mozTransform="rotateX(0deg)";
		nextPage.style.oTransform="rotateX(0deg)";
	}

	function prev(){//上一张按钮函数
		if( curIndex ==1)//当翻到第一个时，停止向前翻动
			return;

		var curPage=document.getElementById("page"+curIndex);
		curPage.style.transform="rotateX(-90deg)";
		curPage.style.webkitTransform="rotateX(-90deg)";
		curPage.style.mozTransform="rotateX(-90deg)";
		curPage.style.msTransform="rotateX(-90deg)";
		curPage.style.oTransform="rotateX(-90deg)";

		curIndex --;
		var prevPage=document.getElementById("page"+curIndex);
		prevPage.style.transform="rotateX(0deg)";
		prevPage.style.webkitTransform="rotateX(0deg)";
		prevPage.style.msTransform="rotateX(0deg)";
		prevPage.style.oTransform="rotateX(0deg)";
		prevPage.style.mozTransform="rotateX(0deg)";

	}
// var rotate = (function() {  
//     switch (UA.core) {  
//     case 'trident' :  
//         return UA.ie < 9 ? return function(dom, angle) {  
//             var rad = angle * (Math.PI / 180),  
//             filter = dom.filters.item('DXImageTransform.Microsoft.Matrix');  
//             filter.Dx = (1 - Math.cos(Math.PI / 4 + rad) / Math.cos(Math.PI / 4)) * 0.5 * (dom.offsetWidth - 1);  
//             filter.Dy = (1 - Math.sin(Math.PI / 4 + rad) / Math.cos(Math.PI / 4)) * 0.5 * (dom.offsetHeight - 1);  
//             filter.M11 = Math.cos(rad);  
//             filter.M12 = -1 * Math.sin(rad);  
//             filter.M21 = Math.sin(rad);  
//             filter.M22 = filter.M11;  
//             filter.Enabled = true;  
//         } : return function(dom, angle) {  
//             dom.style.msTransform = 'rotateX(' + angle + 'deg)';  
//         };  
//     case 'webkit' :  
//         return function(dom, angle) {  
//             dom.style.webkitTransform = 'rotateX(' + angle + 'deg)';  
//         };  
//     case 'gecko' :  
//         return function(dom, angle) {  
//             dom.style.MozTransform = 'rotateX(' + angle + 'deg)';  
//         };  
//     case 'presto' :  
//         return function(dom, angle) {  
//             dom.style.OTransform = 'rotateX(' + angle + 'deg)';  
//         };  
//     default:  
//         return function(dom, angle) {  
//             dom.style.transform = 'rotateX(' + angle + 'deg)';  
//         };  
//     }  
// })();  
