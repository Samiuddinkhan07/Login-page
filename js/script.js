// This is javaScript is for only login Validation
var attempt = 4;




$(function(){
    $("#attemptText1").hide();
    $(".checkedField").hide();
    $(".errorField").hide();
    
});

function login(){
var userId=document.getElementById("userEmail").value;
var userPassword=document.getElementById("userpassword").value;
var loginbtn=document.getElementById("Submit");

if((userId == "user123") && (userPassword == "P@ssw0rd123")){
    $(".fieldInputUser").css('border','2px solid #00FF00')
    $(".fieldInputPassword").css('border','2px solid #00FF00')
    $(".checkedField").show();
    $(".errorField").hide();
    alert("login successful");
   // return true;
}
else{
    attempt--;
    $(".fieldInputUser").css('border','2px solid #FF0000')
    $(".fieldInputPassword").css('border','2px solid #FF0000')
    $(".checkedField").hide();
    $(".attemptNumber").html("<p>Number of attempts left:-</p>"+attempt).css("color","red ");
    $(".errorField").show();
}

if(attempt==0){
    $(".fieldInputUser").css('border','2px solid #FF0000')
    $(".fieldInputPassword").css('border','2px solid #FF0000')
    $(".attemptNumber").hide();
    $("#attemptText1").show();
    $("#Submit").css('background-color','red')
    userId.disabled=true;
    userPassword.disabled=true;
    loginbtn.disabled=true;
    setTimeout(() => {
        window.location.reload()
    }, 10000);
}
}



