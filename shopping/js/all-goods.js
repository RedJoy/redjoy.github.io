// 加入购物车成功弹框	
function successed(){
    $("#zhezhao").css("display","block");
    var abc = $(document).scrollTop();
    // var bcd = document.body.clientWidth();
    // alert(bcd);
    $("#sucessed").css("display","block");
    $("#sucessed").css("top",abc+300);
    // $("#sucessed").css("left",bcd/2);
    setInterval("close()",2000);
}   
function close(){
    $("#zhezhao").css("display","none");
    $("#sucessed").css("display","none");
}