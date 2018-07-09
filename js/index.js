$(function(){
    $(".login .btn-primary").click(function(){
        var username=$("input[type=text]").val();
        var password=$("input[type=password]").val();

        if(username.trim().length==0){
            $(".alert-danger").removeClass("hidden");
            return;
        }

        if(password.trim().length==0){
            $(".alert-danger").removeClass("hidden");
            return;
        }

        if(username=="windfrees" && password=="wuxue" ){
            window.location.href="./login.html";
        }else{
            $(".alert-danger").removeClass("hidden");
        }
    })



})