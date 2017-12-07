function checkPhone() {
    var phone = $('#phone').val();
    if (!(/^1(3|4|5|7|8)\d{9}$/.test(phone))) {
        $('.PhoneWarning').css("display", "block");
        return false;
    } else {
        $('.PhoneWarning').css("display", "none");
        return true;
    }
}

function checkPassword() {
    var password = $('#password').val();
    if (!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(password))) {
        $('.PasswordWarning').css("display", "block");
        return false;
    } else {
        $('.PasswordWarning').css("display", "none");
        return true;
    }
}

function registSubmit() {
    var phone = $('#phone').val();
    var password = $('#password').val();
    var repassword = $('#repassword').val();
    if (!(repassword == password)) {
        $('.RePasswordWarning').css("display", "block");
        return false;
    } else {
        $('.RePasswordWarning').css("display", "none");
        $.ajax({
            type: "post",
            url: "http://localhost:9090/regist",
            dataType: "json",
            data: { username: phone, password: password, repassword: repassword },
            success: function(result) {
                if (result.code === 1) {
                    alert('注册成功！3s后自动跳转到登录界面...')
                    setTimeout(function() {
                        window.location.href = "regist";
                    }, 3000);
                } else {
                    alert('注册失败，请稍后重试!');
                }
            },
            error: function(result) {}
        });
    }
}