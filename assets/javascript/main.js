
$(document).ready(function() {
    console.log("document loaded");

    // This is called when the Sign In form is submitted
    $("#login-form").submit(function (event){
        event.preventDefault();
        console.log("Sign In Attempt");
        var email = $("#email-input").val();
        var password = $("#password-input").val();
        var rememberMe = $("#dropdownCheck").checked;
        console.log("email = " + email);
        console.log("password = " + password);
        console.log("remember me? " + rememberMe);
    }); 
});
