var kusercheck = false;
var kpasscheck = false;
var userok = false;
var passok = false;
var emailcheck = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;


$(document).ready(function(){
	$(document).on("keypress", "form", function(event) { 
    	return event.keyCode != 13;
	});	
	$("#signinform").on("submit", function() {
		if(userok && passok) {
			console.log("form ok");
			return true;
		} else {
			return false;
		}
	});

	$("input").on("keyup", function() {
		if($(this).attr("id") == "username" && kusercheck == false) {
			kusercheck = true
			console.log(kusercheck);
		} else if($(this).attr("id") == "password" && kpasscheck == false) {
			kpasscheck = true;
			console.log(kpasscheck);
		}
		if($(this).attr("id") == "password" && $("#password").val().length > 5) {
    		$("#password").siblings(".errormess").css("display", "none");
    		$("#password").siblings(".errorbar").css("display", "none");
    		console.log("check password length");
    		passok = true;
    	} else if($(this).attr("id") == "username" && $("#username").val().indexOf("@") != -1) {
    		if((emailcheck.test($("#username").val()))) {	
    			$("#username").siblings('#errormess2').css("display", "none");
		    	$("#username").siblings(".errormess").css("display", "none");
		    	$("#username").siblings(".errorbar").css("display", "none");
		    	userok = true;
		    }
	    	console.log("valid email");
	    } else if( $(this).attr("id") == "username" && $("#username").val().length > 1) {
    		$("#username").siblings("#errormess2").css("display", "none");
    		$("#username").siblings(".errormess").css("display", "none");
    		$("#username").siblings(".errorbar").css("display", "none");
    		console.log("check username length");
    		userok = true;
    	}
	});
	

    $("input").on('blur', function(){
    	var a = $(this).attr("id");
    	var l = $(this).val().length;
    	//hasAmp = patt1.test($("#username").val());

    	if(l === 0 && a == "username" && kusercheck)  {
			$("#username").siblings("#errormess2").text("Something's missing. Please check and try again.").css("display", "block");
			$("#username").siblings(".errormess").css("display", "none");
			$("#username").siblings(".errorbar").css("display", "block");
			console.log("check blur kusercheck");
			userok = false;
		} else if(l === 0 && a == "password" && kpasscheck) {  		
			$("#password").siblings(".errormess").css("display", "block");
			$("#password").siblings(".errorbar").css("display", "block"); 
			console.log("check blur kpasscheck");
			passok = false;
    	} else if(a == "username" && $("#username").val().indexOf("@") != -1) {
    		if(!(emailcheck.test($("#username").val()))) {
	    		$("#username").siblings("#errormess2").text("Sorry, that doesn't look right. Please check it's a proper email.").css("display", "block");
	    		$("#username").siblings(".errormess").css("display", "none");
	    		$("#username").siblings(".errorbar").css("display", "block");
	    		console.log("blur not valid email");
	    		userok = false;
    		} else {
    			console.log("blur valid email");
    			userok = true;
    		}
    	} else if(l == 0) {
    		//do nothing
    	} else if(l == 1) {
    		if(a == "username") {
	    		$("#username").siblings('#errormess2').css("display", "none");
	    		$("#username").siblings(".errormess").css("display", "block");
	    		$("#username").siblings(".errorbar").css("display", "block");
	    		console.log("blur display username field if length 1")
	    		userok = false;
	    	} else {	    		
    			$("#password").siblings(".errormess").css("display", "block");
    			$("#password").siblings(".errorbar").css("display", "block");
    			console.log("blur display password field on length 1");
    			passok = false;
	    	}
	    } else if(l < 6 && a == "password") {
	    	$("#password").siblings(".errormess").css("display", "block");
    		$("#password").siblings(".errorbar").css("display", "block");
    		console.log("blur display password error if length less than 6");
    		passok = false;
	    } 	
    });    	
});