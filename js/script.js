jQuery(document).ready(function ($) {
        $('.dia-back').hide();
        $('dialog').hide();
        $('.top-part__log-in-button').click(function(){
            OffScroll();
            $('.dia-back').show();
            $('.dialog').show();
        });
        $(".dia-back").on('click', function (e) {
            if (e.target == this) closeModal()
        });
        $('.dialog__close-button').click(function(){
            closeModal()
        });
        $('.dialog__button').click(function(){
            let isValidMail = checkEmail();
            if (isValidMail) {
                let isValidPswd = checkPswd();
                if (isValidPswd){
                    window.location.href = 'admin.html';
                }
            }
        });
    }
);

function checkPswd(){
    if (document.getElementById("pswd").value.length > 5){
        return true;
    }
    else {
        alert('Слишком короткий пароль!!!');
        return false;
    }
}

function checkEmail(){
    if (document.getElementById("inputMail").value.length > 4){
        let email = $('#inputMail[type=email]').val();
        
        if (email.length > 0
        && (email.match(/.+?\@.+/g) || []).length !== 1) {
            console.log('invalid');
            alert('Вы ввели некорректный e-mail!');
            return false;
        } else {
            console.log('valid');
            return true;
        }
    }
    else {
        alert('Некорректные данные авторизации!!!');
        return false;
    }
}

function OffScroll() {
    var winScrollTop = $(window).scrollTop();
    $(window).bind('scroll',function () {
      $(window).scrollTop(winScrollTop);
    });
}
    

function closeModal(){
    $('.dia-back').fadeOut('fast');
    $('.dialog').fadeOut('fast');
    $('#inputMail').val('');
    $('#pswd').val('');
    $(window).unbind('scroll');
} 