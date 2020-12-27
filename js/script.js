jQuery(document).ready(function ($) {
        $('.dia-back').hide();
        $('dialog').hide();
        document.getElementById('item2').style.visibility='hidden';
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

        var slides = $("#slider #slides").children(".top-part__item");
        var width = $("#slider #slides").width();
        var i = slides.length;
        var offset = i * width + 50;
        i--;

        $("#slider #slides").css('width',offset);
        
        offset = 0;
        $(".dot__right").click(function(){
            document.getElementById('item1').style.visibility='hidden';
            document.getElementById('item2').style.visibility='visible';
            if (offset < width * i) {
                offset += width;
                $(".top-part__item").css("transform","translate3d(-"+offset+"px, 0px, 0px)");
                document.getElementsByClassName('dot__left')[0].style.background='#264160';
                document.getElementsByClassName('dot__right')[0].style.background='#346491';
            }
        });

        $(".dot__left").click(function(){
            document.getElementById('item2').style.visibility='hidden';
            document.getElementById('item1').style.visibility='visible';
            if (offset > 0) {
                offset -= width;
                $(".top-part__item").css("transform","translate3d(-"+offset+"px, 0px, 0px)");
                document.getElementsByClassName('dot__left')[0].style.background='#346491';
                document.getElementsByClassName('dot__right')[0].style.background='#264160';
            }
        });

        function test(){
            offset = 0;
            if (document.getElementById('item2').style.visibility == 'visible'){
                
            }
        }
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