function checkPassword() {
    var password = $("#password-input").val();
    var checkPasswordHaveNumber = /\d/;
    var checkPasswordHaveCharacter = /[a-z]/;
    var checkPasswordHaveSpecialChar = /[!@#$%^&*(),.?":{}|<>~]/;
    var checkPasswordHaveUpperCase = /[A-Z]/;
    var re_password = $("#re-password-input").val();

    if (password.length >= 6) {
        if (
            checkPasswordHaveNumber.test(password) &&
            checkPasswordHaveCharacter.test(password) &&
            checkPasswordHaveSpecialChar.test(password) &&
            checkPasswordHaveUpperCase.test(password)
        ) {
            $("#security").css("background-color", "green");
            $("#security").text("Độ bảo mật: mạnh");
        } else {
            $("#security").css("background-color", "yellow");
            $("#security").text("Độ bảo mật: trung bình");
        }
    } else {
        $("#security").css("background-color", "#ccc");
        $("#security").text("Độ bảo mật: yếu");
    }
}
function checkInputValid()
{
    var lastName = $("#last-name-input").val();
    var firstName = $("#first-name-input").val();
    var numberPhone = $("#phone-input").val();
    numberPhone = Number(numberPhone);
    var numberTextPhone =  $("#phone-input").val();
    var testNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/
    var re_password = $("#re-password-input").val();
    var password = $("#password-input").val();

    if(lastName == "")
    {
        $("#last-name-input").focus();
        $("#last-name-input").addClass("focus");
    }
    else if(firstName == "")
    {
        $("#first-name-input").focus();
        $("#first-name-input").addClass("focus");
    }
    else if(!Number.isInteger(numberPhone) || numberTextPhone == "" || !testNumber.test(numberTextPhone))
    {
        $("#phone-input").focus();
        $("#phone-input").addClass("focus");
    }
    else if(re_password == "" || 
    password != re_password)
    {
        console.log(password);
        console.log(re_password);
        $("#re-password-input").addClass("focus");
    }
    else {
        $("#phone-input").removeClass("focus");
        $("#last-name-input").removeClass("focus");
        $("#first-name-input").removeClass("focus");
        $("#re-password-input").removeClass("focus");
    }    
}
