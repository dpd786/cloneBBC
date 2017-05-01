var letters = /^[A-Za-z]+$/;
$(document).ready(function(){
    $("#topmenu li.fix").siblings().css({"margin-left": "-5px"});
    
    $("#first1, #second").hover(function() {
    	$("#first1 h3").css({'text-decoration': 'underline', 'color': '#1380a1'}); }, function() {
    		$("#first1 h3").css({'text-decoration': 'none', 'color': '#000'});
    });
    
    $("body").on("focusout", function() {
    	$("#bottombarmenu .last-more").removeClass("addmorecolor");
        $("#bottombarmenu .more").css({"text-decoration": "none"});

	   if($("#moredropdown-content").is(":visible")) {			
            $("#moredropdown-content").css({"display": "none"});
		}
		if($("#hiddenBell-content").is(":hidden")) {
			$("#belldiv a").removeClass("addbelldiv");
		} 
		if($("#hiddenMenu-content").is(":hidden")) {
			$("#topMenuDrop a").removeClass("addMenudiv");
        } 
    });

	$("#belldiv a").on('click', function() {
		if($("#moredropdown-content").is(":visible")) {
			$("#bottombarmenu .last-more").removeClass("addmorecolor");
            $("#moredropdown-content").css({"display": "none"});
        }

		$("#topMenuDrop a").removeClass("addMenudiv");

		if($("#hiddenMenu-content").is(":visible") || $("#hiddenSearch-content").is(":visible")) {
			$("#hiddenMenu-content").fadeOut(0.5);
			$("#hiddenSearch-content").fadeOut(0.5);
			$("#hiddenSearch-result").fadeOut(0.5);
    		$("#hiddenBell-content").fadeIn(0.8);
    		$(this).addClass("addbelldiv");
    		$("#hiddenSearch input").val("");
    	} else {
    		$("#hiddenBell-content").delay(200).slideToggle(400);
    		$(this).addClass("addbelldiv");
    	}  
	});


	$("#topMenuDrop a").on('click', function() {
		if($("#moredropdown-content").is(":visible")) {
			$("#bottombarmenu .last-more").removeClass("addmorecolor");
            $("#moredropdown-content").css({"display": "none"});
        }

		$("#belldiv a").removeClass("addbelldiv");

		if($("#hiddenBell-content").is(":visible") || $("#hiddenSearch-content").is(":visible")) {
			$("#hiddenBell-content").fadeOut(0.5);
			$("#hiddenSearch-content").fadeOut(0.5);
			$("#hiddenSearch-result").fadeOut(0.5);
    		$("#hiddenMenu-content").fadeIn(0.8);
    		$(this).addClass("addMenudiv");
    		$("#hiddenSearch input").val("");
    	} else {
    		$("#hiddenMenu-content").delay(200).slideToggle(380);
    		$(this).addClass("addMenudiv");
    	}	
    }); 
    
    
/* code for seach box */
    $("#topsearch input").on("focus", function(){
    	if($("#moredropdown-content").is(":visible")) {
			$("#bottombarmenu .last-more").removeClass("addmorecolor");
            $("#moredropdown-content").css({"display": "none"});
        }

        if($("#hiddenBell-content").is(":hidden") && $("#hiddenMenu-content").is(":hidden")) {
        	$("#belldiv a").removeClass("addbelldiv");
        	$("#topMenuDrop a").removeClass("addMenudiv");
        }   		        
    });

    $("#topsearch").on("keyup", function() {
    	if($("#hiddenBell-content").is(":visible"))  {
    		$("#belldiv a").removeClass("addbelldiv");
    		$("#hiddenBell-content").fadeOut(0.5);
			$("#hiddenSearch-content").fadeIn(0.5);  		
    	} else if($("#hiddenMenu-content").is(":visible")) {
    		$("#topMenuDrop a").removeClass("addMenudiv");
    		$("#hiddenMenu-content").fadeOut(0.5);
			$("#hiddenSearch-content").fadeIn(0.5); 
    	} else {
    		$("#hiddenSearch-content").slideDown();
    	}

        $("#hiddenSearch input").focus();
        $("#topsearch").blur();
        //console.log($("#topsearch input").val());
        $("#hiddenSearch input").val($("#topsearch input").val());
        $("#topsearch input").val("");

        if($("#hiddenSearch input").val().match(letters)) {
        	$("#hiddenSearch-result").css({"display": "block"});
        	/* CALL WHEN CONNECTED TO DATABASE dis(); */
        }
    });

    $("#hiddenSearch .material-icons").on("click", function() {
    	$("#topsearch input").val("");
    	$("#hiddenSearch-content").slideUp();
    	$("#hiddenSearch-result").slideUp();
    })

    
    $("#bottombarmenu .last-more").on("click", function(){
        $("#moredropdown-content").toggle();
    		
        if($("#moredropdown-content").is(":visible")) {
            $(this).addClass("addmorecolor").css({"text-decoration": "none", "outline": "none"});
        	$("#bottombarmenu li .more").css({"text-decoration": "underline"});
        } else {
            $("#bottombarmenu li .more").css({"text-decoration": "none"});
        }
    }); 

    $(window).resize(function() {
        var bWidth = $(window).width();
        if(bWidth < 1000) {
            $('#signindiv a').css({"padding-right": "10px"});
            $('#signindiv span').remove();
            //$('.hiddenMenu-sub ul li:first-child').remove();
        }
    });
        

 /*MAKE ACTIVE WHEN CONNECTED TO DATABASE
    function dis() {
		var xmlhttp = new XMLHttpRequest ();
		xmlhttp.onreadystatechange = function() {
			if(this.readyState == 4 && this.status == 200) {
				document.getElementById("suggestions-results").innerHTML = this.responseText;
			}
		};

		xmlhttp.open("GET", "select.php", true);
		xmlhttp.send();

	}
*/
});