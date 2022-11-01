// This is javaScript is for only login Validation
var attempt = 3;
$(function(){
    $("#attemptText1").hide();
})
function login(){

var userId=document.getElementById("userEmail").value;
var userPassword=document.getElementById("userpassword").value;
var loginbtn=document.getElementById("Submit");

if((userId=="user123") && (userPassword=="P@ssw0rd123")){
    alert("login successful")
    return false;
    
}
else{
    attempt--;
    $(".attemptNumber").html("<p>Number of attempts left:-</p>"+attempt).css("color","red ");
}
if(attempt==0){
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



