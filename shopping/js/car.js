 //返回顶部
    window.onload = function(){
      var oTop = document.getElementById("to_top");
      var screenw = document.documentElement.clientWidth || document.body.clientWidth;
      var screenh = document.documentElement.clientHeight || document.body.clientHeight;
      oTop.style.left = screenw - oTop.offsetWidth +"px";
      oTop.style.top = screenh - oTop.offsetHeight + "px";
      window.onscroll = function(){
        var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
        oTop.style.top = screenh - oTop.offsetHeight + scrolltop +"px";
      }
      oTop.onclick = function(){
        document.documentElement.scrollTop = document.body.scrollTop =0;
      }
    }
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
    // $(function(){
    //   var number=$("#number input").val();
    //   $(".reduce").click(function(){
    //     if(number == 0){
    //       number = 0;
    //       $("#number input").val() = number;
    //     }
    //     else{
    //       number --;
    //       // alert(number);
    //       $("#number input").val(number);
    //     }
    //     return ;
    //     // alert("aaa");
    //   });
      
    // });
   //  function reduce(){
   //    var number=$("#number input").val();
   //    if(number == 0){
   //        number = 0;
   //        $("#number input").val(number);
   //      }
   //      else{
   //        number --;
   //        // alert(number);
   //        $("#number input").val(number);
   //      }
   //  }
   // 