jQuery(function($){

    var j = $.noConflict();

    var button = j("button#submit");
    var email = j("input#email");
    var password = j("input#password");


    function submit(){
       "use strict"
       
        try {
            var emailValue = email.val();
            var passwordValue = password.val();  

            var form = $(".form");
            var check_pass = false,check_email = false;

            var email_validation = $("div#validation-email");
            var password_validation = $("div#validation-password");
            

            //Email verification
            if(emailValue == "")
            {
                email_validation.remove();
                email.after("<div style='color:darkred;margin:4px 0' id='validation-email'>Email field can't be empty</div>");
            }
            else if(!emailValue.match(/[A-Z0-9a-z_.-]+@[A-Z0-9a-z]+\.[A-Za-z]{2,3}(\.[A-Za-z]{2,3})?/gi))
            {
                email_validation.remove();
                email.after("<div style='color:darkred;margin:4px 0' id='validation-email'>Invalid Email format</div>");
            }
            else
            {
                email_validation.remove();
                check_email = true;
            }

            //Password verification
            if(passwordValue.length < 8 || passwordValue.length > 25)
            {
                password_validation.remove();
                password.after("<div style='color:darkred;margin:4px 0' id='validation-password'>Password has to be 8 min - 25 max characters</div>")
            }
            else
            {
                password_validation.remove();
                check_pass = true;
            }


            //last check    
            if(check_pass && check_email)
            {
                form.css("background-color","#01f101");
            }
                
        } catch (error) 
        {
            console.log(error.name);;
        }
    };
    
    button.on("click",function(){
        submit();
    })
})
