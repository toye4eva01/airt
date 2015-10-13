// JavaScript Document
/*
$("#orangebutton").click(function(){
var email = $("#email").val();
var password = $("#password").val();
alert(email +" "+password);
});
*/


function validateEmail($email) {
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  if( !emailReg.test( $email ) ) {
    return false;
  } else {
    return true;
  }
}

function changeStatus ($id, $title, $category) {
var changeStat =confirm("Do you want to change the status ?");
var id = $id;
var title = $title;
var category = $category;
	if (changeStat == true) {
		//return 1;
	//	alert($title +" " +$id);
	
	$.ajax({
									type: "POST",
									url: "chstatusscript.php",
									data: {id:id, title:title, category:category},
									//dataType: 'json',
																		
									success: function(msg){
									if (msg.success == false) {
									//$("#warn").html("There was an error submitting the form. Please try again.");
									return 0;
									} 
									
									//else if (msg == "done"){
									//return 1;
									//$('#main_section').html('<img src="images/loading.gif" />').load('viewusers.php');
									//}
									else {
									return 1;
									//alert(msg);
																							
									}
													
									}
									
								});
	}
	else {
		
	}
}
						   