//控制向下滚动后顶部条的背景颜色变化
$(window).scroll(function() {
            if ($(document).scrollTop() >=300) { 
            	$("#header").css("background-color","#1b1b1b");
            	$(".mid-search").css("display","block");
            	// $(".header-main-menu").css("background","rgba(0,0,0,.9)");
            	// $(".header-main-menu a").css("color","#fff");
            	// $(".arrow").css("color","rgba(0,0,0,.9)");
            }
            else{ 
            	$("#header").css("background","none");
            	$(".mid-search").css("display","none");
            	// $(".header-main-menu").css("background","rgba(255,255,255,.9)");
            	// $(".arrow").css("color","rgba(255,255,255,.9)");
            	// $(".header-main-menu a").css("color","#000");
            }

        });
    //顶部两个触碰显示
    $(function(){
    	$("#meun-nav").hover(function (){
                	$(".header-main-menu").css("display","block");
                	$(".arrow").css("display","block");
                },function(){
                	$(".header-main-menu").css("display","none");
                	$(".arrow").css("display","none");
                });
    	$("#user-show").hover(function (){
                	$(".user-show-detail").css("display","block");
                	$(".arrow1").css("display","block");
                },function(){
                	$(".user-show-detail").css("display","none");
                	$(".arrow1").css("display","none");
                });
        
    });
   
    //分类跳转到当前页面的固定高度
    function bgChange_women(){$("html, body").animate({scrollTop: $("#man").offset().top+400}); }
    function bgChange_man(){ $("html, body").animate({scrollTop: $("#man").offset().top*2+400}); }
    function bgChange_makeup(){$("html, body").animate({scrollTop: $("#man").offset().top*4+450});}
    function bgChange_food(){$("html, body").animate({scrollTop: $("#man").offset().top*5+550});}
    function bgChange_shuma(){$("html, body").animate({scrollTop: $("#man").offset().top*7+500});}
    function bgChange_bag(){$("html, body").animate({scrollTop: $("#man").offset().top*3+500});}
    function bgChange_house(){$("html, body").animate({scrollTop: $("#man").offset().top*6+500});}
	function showLogin(){
        var a=$("#login");
		a.css("display","block");
		a.css("visibility","visible");
		var show=$("#login-iframe");
		show.css("display","block");
		show.css("visibility","visible");
		show.attr("src","login.html");
		$("#zhezhao").css("display","block");
		
	}
	function hidLogin(){
		$("#login").css("display","none");
		$("#login").css("visibility","hidden");
		var show=$("#login-iframe");
		show.css("display","none");
		show.css("visibility","hidden");
		$("#zhezhao").css("display","none");
	}
	function showRegister(){
		var a=$("#login");
		a.css("display","block");
		a.css("visibility","visible");
		var show=$("#login-iframe");
		show.css("display","block");
		show.css("visibility","visible");
		show.attr("src","register.html");
		$("#zhezhao").css("display","block");
	}

// function tanKuang(){
//     easyDialog.open({
//         container : {
//             content : '加入购物车成功'
//         },
//         autoClose : 2000
//     });
// };
// 加入购物车成功弹框	
function successed(){
    $("#zhezhao").css("display","block");
    var abc = $(document).scrollTop();
    // var bcd = document.body.clientWidth();
    // alert(bcd);
    $("#sucessed").css("display","block");
    $("#sucessed").css("top",abc+300);
    // $("#sucessed").css("left",bcd/2);
    setInterval("close()",1500);
}   
function close(){
    $("#zhezhao").css("display","none");
    $("#sucessed").css("display","none");
}