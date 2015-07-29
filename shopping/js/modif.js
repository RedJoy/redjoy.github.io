// JavaScript Document
//姓名检查
function CheckName(){
        var reg = /^[\u4E00-\u9FA5]+$/; 
		var name=document.getElementById('name'); 	
		if(name.value ==''){
		document.getElementById("nameErr").innerHTML = "<font color='#E01C1C'>不能为空</font>";
		document.myform.name.focus();
		return flase;
	    }//判断姓名填写是否为空*/
	var abc=document.myform.name.value;
	if(!reg.test(abc)){
		document.getElementById("nameErr").innerHTML = "<font color='#E01C1C'>只能为中文字符</font>";
		document.myform.name.focus();
		return flase;
	    } //判断姓名填写是否为非中文字符 或者"·"
		      document.getElementById("nameErr").innerHTML = "";  
  return true;
}
//邮箱检查
function checkMail(){
		var mail=document.getElementById('mail'); 	
		if(mail.value ==''){
		document.getElementById("mailErr").innerHTML = "<font color='#E01C1C'>不能为空</font>";
		document.myform.mail.focus();
		return flase;
	    }//判断邮箱填写是否为空*/
        var myreg = /(\S)+[@]{1}(\S)+[.]{1}(\w)+/;
            if(!myreg.test(mail.value))
            {
		document.getElementById("mailErr").innerHTML = "<font color='#E01C1C'>请输入正确的邮箱格式</font>";
		document.myform.mail.focus();
		return flase;
	    } //判断团体填写是否为正确的格式
		document.getElementById("mailErr").innerHTML = "";		
		return true;

}

//团体名称检查
function organName(){
	    var reg = /^[\u4E00-\u9FA5]+$/;
	   	var organ=document.getElementById('organ');
		if(organ.value ==''){
		document.getElementById("organNameErr").innerHTML = "<font color='#E01C1C'>不能为空</font>";
		document.myform.organ.focus();
		return flase;
	    }//判断团体填写是否为空
	    
		var abc=document.myform.organ.value;
        if(!reg.test(abc)){
		document.getElementById("organNameErr").innerHTML = "<font color='#E01C1C'>只能为中文字符</font>";
		document.myform.organ.focus();
		return flase;
	    } //判断团体填写是否为非中文字符
		        
      document.getElementById("organNameErr").innerHTML = "";  
	  //输入正确后，将上次的错误提示信息清掉
		return true;
}

//密码检查  
function checkPassword1(pwd1) {  
       
      if( strlen(pwd1)<6 || strlen(pwd1)>16 ) {    
            document.getElementById("pwdErr").innerHTML = "<font color='#E01C1C'>密码长度为6-16位，仅可用英文、数字、特殊字符！</font>";  
            myform.pwd.focus()  
            return false;  
      }  
       
      if( strlen2(pwd1) ) {  
            document.getElementById("pwdErr").innerHTML = "<font color='#E01C1C'>您的密码中包含了非法字符，仅可用英文、数字、特殊字符！</font>";  
            myform.pwd.focus()  
            return false;  
      }  
      document.getElementById("pwdErr").innerHTML = "";  
      return true;  
}  
   
//确认密码检查  
function checkPassword2(pwd2) {       
      if( pwd2 =="" ) { 
            document.getElementById("pwd2Err").innerHTML = "<font color='#E01C1C'>请输入密码确认！</font>";  
            myform.pwd2.focus()  
            return false;  
      }  
      if( pwd2 != myform.pwd.value ) {   
            document.getElementById("pwd2Err").innerHTML = "<font color='#E01C1C'>两次密码输入不一致！</font>";  
            myform.pwd2.focus()  
            return false;  
      }  
      document.getElementById("pwd2Err").innerHTML = "";  
      return true;  
}  
function strlen(str){  
      var len;  
      var i;  
      len = 0;  
      for (i=0;i<str.length;i++){  
            if (str.charCodeAt(i)>255) len+=2; else len++;  
      }  
      return len;  
}  
   
function strlen2(str){  
      var len;  
      var i;  
      len = 0;  
      for (i=0;i<str.length;i++){  
            if (str.charCodeAt(i)>255) return true;  
      }  
      return false;  
}  
   
function isSsnString (ssn)  
{  
      var re=/^[0-9a-z][/w-.]*[0-9a-z]$/i;  
      if(re.test(ssn))  
            return true;  
      else  
            return false;  
}  

