$(document).ready(
    function() {
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
        
        var text_max = 151;
        var text_length = 0
        $('#counter').html('Символов: ' + text_length + '/' + text_max);
        $('#txarea').keyup(function() {
            text_length = $('#txarea').val().length;
            $('#counter').html('Символов: ' + text_length + '/' + (text_max-1));
            if (text_length >= text_max){
                $('#counter').css({
                    "color" : "red"

                });
                $('.middle-part__submit').disabled = false ;
            }
            else {
                $('#counter').css({
                    "color" : "#D0C9D6"
                });
                $('.middle-part__submit').disabled = true ;
            }
        });

        $(".middle-part__submit").click(function (){
            text_length = $('#txarea').val().length;
            if (text_length < text_max && text_length > 0){
                alert('успех')
            }
            else {
                alert('ошибка')
            }
            
        });

        $('#delete').click(function(){
            $('#img_two').css('display', 'none');
            $('#delete').css('display', 'none');
            $('#kek').text('');
            $('input[type=file]').val('');
        });
        }
    );

function onFileSelected(event){
    var selectedFile = event.target.files[0];
    var reader = new FileReader();
    var imgtag = document.getElementById("img_two");
    reader.onload = function(event) {
        var image = new Image();
        image.src = reader.result;
        image.onload = function() {
            var width = image.width;
            var height = image.height;
            console.log(width + " " + height);
            if(width == 270 && height == 270){
                imgtag.src = event.target.result;
                $('#kek').css('color', 'black');
                $('#kek').text($('input[type=file]').val().split('\\').pop());
                $('#img_two').css('height', '34px');
                $('#img_two').css('width', '34px');
                $('#img_two').css('display', 'flex');
                $('#delete').css('display', 'flex');
            }
            else{
                $('#kek').text('Неверный формат изображения!!1!!!');
                $('#kek').css('color', 'red');
            }
        };
    };

    reader.readAsDataURL(selectedFile);
}

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

