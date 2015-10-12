// Initialize your app
var myApp = new Framework7({
    animateNavBackIcon: true,
    // Enable templates auto precompilation
    precompileTemplates: true,
    // Enabled pages rendering using Template7
	swipeBackPage: false,
	swipeBackPageThreshold: 1,
	swipePanel: "left",
	swipePanelCloseOpposite: true,
	pushState: true,
	pushStateRoot: undefined,
	pushStateNoAnimation: false,
	pushStateSeparator: '#!/',
    template7Pages: true
});


// Export selectors engine
var $$ = Dom7;

// Add main View
var mainView = myApp.addView('.view-main', {
    // Enable dynamic Navbar
    dynamicNavbar: false
});



$(document).on('pageInit', function (e) {
	
	
	
	/*$('.page-content').load('offerslides.php', function() {*/
	$(".swipebox").swipebox();
	/*});*/
	$('#notpage').load('http://www.Rewardsboxnigeria.com/airtelcustomer/mobi/notification.php');
	$('#offerpage').load('http://www.Rewardsboxnigeria.com/airtelcustomer/mobi/promo.php');
	$('#voucherpage').load('http://www.Rewardsboxnigeria.com/airtelcustomer/mobi/voucher.php');
	$('#tranpage').load('http://www.Rewardsboxnigeria.com/airtelcustomer/mobi/transaction.php');
	$('#pointslistpage').load('http://www.Rewardsboxnigeria.com/airtelcustomer/mobi/pointstat.php');
	$('#showprofile').load('http://www.Rewardsboxnigeria.com/airtelcustomer/mobi/profile.php');
	
	$('#mainpage').click (function(){
	window.location.replace('main.html');
	});
	
	
	
$('#showprofile').on('click','#updateprofile', function() {	
var fname = $("#fname").val();
var mname = $("#mname").val();
var lname = $("#lname").val();
var addy = $("#add").val();
var memberid = $("#hmemberid").val();


if (fname == ""){
	alert("Kindly enter your First Name");
	$('#fname').focus();
	return false;
}

else if (lname ==""){
	alert("Kindly enter your last name");
	$('#lname').focus();
	return false;
}

else {
	
	$.ajax({
									type: "POST",
									url: "editprofile.php",
									data: {fname:fname, mname:mname, lname:lname, addy:addy, memberid:memberid},
																		
									success: function(msg){
									if (msg.success == false) {
									$("#warn").html("There was an error submitting the form. Please try again.");
									} else {
									
									alert(msg);
										
									}
													
									}
									
								});
return false;
}
});


	$('#showmerlist').on('click', '.merpage', function() {
		id = $(this).attr('id');
		//alert(id);
		
		$.ajax({
									type: "GET",
									url: "http://www.Rewardsboxnigeria.com/airtelcustomer/mobi/merchantoffers.php",
									data: {id:id},
																		
									success: function(msg){
									if (msg.success == false) {
									$("#warn").html("There was an error submitting the form. Please try again.");
									} else {
									$('#showmerlist').html(msg);	
										
									}
													
									}
									
								});
		return false;
		
		
	});
	//$('.swiper-wrapper').ajaxStop(function() {
        //$(".swipebox").swipebox();
   // });
  		
		
		$("#ContactForm").validate({
		submitHandler: function(form) {
		ajaxContact(form);
		return false;
		}
		});
		
		//change password code
		
$('#chpass').click (function(){
	//alert("chan");
		var npassword = $( "#npassword").val();
var cpassword = $( "#cpassword").val();
var opassword = $( "#opassword").val();

if (opassword ==""){
	alert("Kindly enter your old password");
	$('#opassword').focus();
	return false;
}

else if 	(npassword == ""){
	alert("Kindly enter your new password");
	$('#npassword').focus();
	return false;
	
}

else if (cpassword ==""){
	$('#warn').text("Kindly confirm your new password");
	$('#cpassword').focus();
	return false;
}

else if (npassword.length < 6) {
	alert("Password must be atleast 6 characters");
	$('#npassword').focus();
	return false;	
}

else if (npassword != cpassword){
	alert("Passwords do not match");
	$('#npassword').focus();
	return false;
}
else {
if ($('#loading_image').length == 0) { //is the image on the form yet?
                // add it just before the submit button
	$('.validatebtn').before('<img src="images/loading.gif" style="display: none;" alt="loading" id="loading_image">')
	}
	$('#loading_image').show(); // show the animated image    
    $('.validatebtn').hide(); // disable double submits
		$.ajax({
											type: "POST",
											url: "http://www.Rewardsboxnigeria.com/airtelcustomer/mobi/chpscript.php",
											data: {npassword: npassword, opassword:opassword},
											
											
											success: function(msg){
											if (msg == false) {
											$("#warn").html("There was an error submitting the form. Please try again.");
													$('#loading_image').hide(); // hide the animated image    
    												$('.validatebtn').show(); // enableable double submits
											} else {
												if (msg == "move"){
													alert("Password Changed Successfully");
												window.location.replace('main.html');
												}
												else {
												
												alert(msg);
													$('#loading_image').hide(); // hide the animated image    
    												$('.validatebtn').show(); // enableable double submits
												}													
											}
															
											}
										});
		
		return false;
		
}

		});
		
		
		//gen voucher script
		$('#offerpage, #showmerlist').on('click','.buttongenv',function() {
			//alert("work");
var storeid = $(this).attr('id');
//alert(storeid);
$.ajax({
									type: "POST",
									url: "http://www.Rewardsboxnigeria.com/airtelcustomer/mobi/genvoucher.php",
									data: {storeid:storeid},
																		
									success: function(msg){
									if (msg.success == false) {
									$("#warn").html("There was an error submitting the form. Please try again.");
									} else {
										if(msg ==1001) {
											alert("Voucher Generated Successfully");
											$('#showpoints').load('showpoints.php');
										}
										else if (msg == 2003){
										alert("You have a valid voucher for this store");
										}
										else {
										alert(msg);
										}
									//$('#main_section').html('<img src="images/loading.gif" />');
									//$('#main_section').html(msg);
									//alert(msg);
									//alert("Voucher has been generated successfully");
										
									}
													
									}
									
								});
return false;
});
		
		
		$('#subbutton').click (function() {
			alert("work");
//var contactname = $( "#ContactName").val();
//var contactemail = $( "#ContactEmail").val();
//var contactmessage = $( "#ContactComment").val();
//alert(storeid);
$.ajax({
									type: "POST",
									url: "http://www.Rewardsboxnigeria.com/airtelcustomer/mobi/send.php",
									data: $("#contact").serialize(),
									//data: {contactname:ContactName, contactemail:ContactEmail, contactmessage:ContactComment},
																		
									success: function(msg){
									if (msg.success == false) {
									$("#warn").html("There was an error submitting the form. Please try again.");
									} else {
										if(msg ==success) {
											alert("Message Sent Successfully");
											
										}
										else {
									
										alert(msg);
										}
									//$('#main_section').html('<img src="images/loading.gif" />');
									//$('#main_section').html(msg);
									//alert(msg);
									//alert("Voucher has been generated successfully");
										
									}
													
									}
									
								});
return false;
});
		
		
		$('#twitter').click (function() {
			window.open("http://www.twitter.com/gloprive");
		});
		
		$('#facebook').click (function() {
			window.open("http://facebook.com/pages/Glo-Priv%C3%A9/908268655854350?fref=photo");
		});
		
		
		$('#google').click (function() {
			window.open("http://plus.google.com/b/109286898800305044593/109286898800305044593/posts");
		});
		
		
		$('#instagram').click (function() {
			window.open("http://www.instagram.com/gloprive");
		});
		
		//***end of gen voucher script
		$('a.backbutton').click(function(){
			parent.history.back();
			return false;
		});
		

		$(".posts li").hide();	
		size_li = $(".posts li").size();
		x=4;
		$('.posts li:lt('+x+')').show();
		$('#loadMore').click(function () {
			x= (x+1 <= size_li) ? x+1 : size_li;
			$('.posts li:lt('+x+')').show();
			if(x == size_li){
				$('#loadMore').hide();
				$('#showLess').show();
			}
		});
        

	$("a.switcher").bind("click", function(e){
		e.preventDefault();
		
		var theid = $(this).attr("id");
		var theproducts = $("ul#photoslist");
		var classNames = $(this).attr('class').split(' ');
		
		
		if($(this).hasClass("active")) {
			// if currently clicked button has the active class
			// then we do nothing!
			return false;
		} else {
			// otherwise we are clicking on the inactive button
			// and in the process of switching views!

  			if(theid == "view13") {
				$(this).addClass("active");
				$("#view11").removeClass("active");
				$("#view11").children("img").attr("src","images/switch_11.png");
				
				$("#view12").removeClass("active");
				$("#view12").children("img").attr("src","images/switch_12.png");
			
				var theimg = $(this).children("img");
				theimg.attr("src","images/switch_13_active.png");
			
				// remove the list class and change to grid
				theproducts.removeClass("photo_gallery_11");
				theproducts.removeClass("photo_gallery_12");
				theproducts.addClass("photo_gallery_13");

			}
			
			else if(theid == "view12") {
				$(this).addClass("active");
				$("#view11").removeClass("active");
				$("#view11").children("img").attr("src","images/switch_11.png");
				
				$("#view13").removeClass("active");
				$("#view13").children("img").attr("src","images/switch_13.png");
			
				var theimg = $(this).children("img");
				theimg.attr("src","images/switch_12_active.png");
			
				// remove the list class and change to grid
				theproducts.removeClass("photo_gallery_11");
				theproducts.removeClass("photo_gallery_13");
				theproducts.addClass("photo_gallery_12");

			} 
			else if(theid == "view11") {
				$("#view12").removeClass("active");
				$("#view12").children("img").attr("src","images/switch_12.png");
				
				$("#view13").removeClass("active");
				$("#view13").children("img").attr("src","images/switch_13.png");
			
				var theimg = $(this).children("img");
				theimg.attr("src","images/switch_11_active.png");
			
				// remove the list class and change to grid
				theproducts.removeClass("photo_gallery_12");
				theproducts.removeClass("photo_gallery_13");
				theproducts.addClass("photo_gallery_11");

			} 
			
		}

	});	
	
	document.addEventListener('touchmove', function(event) {
	   if(event.target.parentNode.className.indexOf('navbarpages') != -1 || event.target.className.indexOf('navbarpages') != -1 ) {
		event.preventDefault(); }
	}, false);
	
	// Add ScrollFix
	var scrollingContent = document.getElementById("pages_maincontent");
	new ScrollFix(scrollingContent);
	
	
	var ScrollFix = function(elem) {
		// Variables to track inputs
		var startY = startTopScroll = deltaY = undefined,
	
		elem = elem || elem.querySelector(elem);
	
		// If there is no element, then do nothing	
		if(!elem)
			return;
	
		// Handle the start of interactions
		elem.addEventListener('touchstart', function(event){
			startY = event.touches[0].pageY;
			startTopScroll = elem.scrollTop;
	
			if(startTopScroll <= 0)
				elem.scrollTop = 1;
	
			if(startTopScroll + elem.offsetHeight >= elem.scrollHeight)
				elem.scrollTop = elem.scrollHeight - elem.offsetHeight - 1;
		}, false);
	};
	
		
		
})
