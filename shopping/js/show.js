$(function(){
	var flag=0;
	var o = {
		add:function (id){
			$(id).click(function(){		
				if(flag == 0){
					$(this).css("border","1px solid #e01c1c");
					flag=1;
				} 
				else{
					$(this).css("border","none");
					flag=0;
				}
			});
		}
	}
	o.add(".options");
	
	
});

$(function(){
	// $("li").each(function());
	// alert(a);
	// for(var i=0;i<3;i++){
		// $("li").each(function(){
	// 		$("li").bind("click",function(){

	//         $(this).addClass("select-bar");
	// 		// $(this).previousSibling.css("border-bottom","2px solid #D2D2D2");
			
	// 		alert($(this).nextSibling);
	// 	});
	// });
	// }
	$(".li1").click(function(){
		$(".li1").removeClass("no-select");
        $(this).addClass("select-bar");
        $(".li2").removeClass("select-bar");
        $(".li2").addClass("no-select");
        $(".li3").removeClass("select-bar");
        $(".li3").addClass("no-select");
        $(".good-show").css("display","block");
        $(".trade").css("display","none");
        $(".comment").css("display","none");
        // $(this.nextSibling).addClass("select-bar");
	});
	$(".li2").click(function(){
		$(".li2").removeClass("no-select");
        $(this).addClass("select-bar");
        $(".li1").removeClass("select-bar");
        $(".li1").addClass("no-select");
        $(".li3").removeClass("select-bar");
        $(".li3").addClass("no-select");
        $(".trade").css("display","block");
        $(".comment").css("display","none");
        $(".good-show").css("display","none");
    });
	$(".li3").click(function(){
		$(".li3").removeClass("no-select");
        $(this).addClass("select-bar");
        $(".li1").removeClass("select-bar");
        $(".li1").addClass("no-select");
        $(".li2").removeClass("select-bar");
        $(".li2").addClass("no-select");
        $(".comment").css("display","block");
        $(".good-show").css("display","none");
        $(".trade").css("display","none");
    });

});
//页面加载完毕后执行
        window.onload = function () {

            var objDemo = document.getElementById("show-big-img");
            var objSmallBox = document.getElementById("small-box");
            var objMark = document.getElementById("mark");
            var objFloatBox = document.getElementById("float-box");
            var objBigBox = document.getElementById("big-box");
            var objBigBoxImage = objBigBox.getElementsByTagName("img")[0];

            objMark.onmouseover = function () {
                objFloatBox.style.display = "block"
                objBigBox.style.display = "block"
            }

            objMark.onmouseout = function () {
                objFloatBox.style.display = "none"
                objBigBox.style.display = "none"
            }

            objMark.onmousemove = function (ev) {

                var _event = ev || window.event;  //兼容多个浏览器的event参数模式

                var left = _event.clientX - objDemo.offsetLeft - objSmallBox.offsetLeft - objFloatBox.offsetWidth / 2;
                var top = _event.clientY - objDemo.offsetTop - objSmallBox.offsetTop - objFloatBox.offsetHeight / 2;

                if (left < 0) {
                    left = 0;
                } else if (left > (objMark.offsetWidth - objFloatBox.offsetWidth)) {
                    left = objMark.offsetWidth - objFloatBox.offsetWidth;
                }

                if (top < 0) {
                    top = 0;
                } else if (top > (objMark.offsetHeight - objFloatBox.offsetHeight)) {
                    top = objMark.offsetHeight - objFloatBox.offsetHeight;

                }

                objFloatBox.style.left = left + "px";   //oSmall.offsetLeft的值是相对什么而言
                objFloatBox.style.top = top + "px";

                var percentX = left / (objMark.offsetWidth - objFloatBox.offsetWidth);
                var percentY = top / (objMark.offsetHeight - objFloatBox.offsetHeight);

                objBigBoxImage.style.left = -percentX * (objBigBoxImage.offsetWidth - objBigBox.offsetWidth) + "px";
                objBigBoxImage.style.top = -percentY * (objBigBoxImage.offsetHeight - objBigBox.offsetHeight) + "px";
            }
        }
