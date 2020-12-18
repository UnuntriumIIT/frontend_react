$(document).ready(
    function() {
        $('#item1').show();
        $('#item2').hide();
        $('.dia-back').hide();
        $('dialog').hide();
        $('.dot__right').click(function(){
            slideRight(); 
        });

        $('.dot__left').click(function(){ 
            slideLeft();
        });
        var f = false;
        setInterval(slide, 5000);

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
            alert('Congratulations!');
        });
    }
);

function OffScroll() {
    var winScrollTop = $(window).scrollTop();
    $(window).bind('scroll',function () {
      $(window).scrollTop(winScrollTop);
    });
}
    

function closeModal(){
    $('.dia-back').fadeOut('fast');
    $('.dialog').fadeOut('fast');
    document.getElementById("login").value = "";
    document.getElementById("pswd").value = "";
    $(window).unbind('scroll');
}

function slideRight(){
    $('#item1').fadeOut();
    sleep(500);
    $('#item2').fadeIn();
    document.getElementsByClassName('dot__left')[0].style.background='#264160';
    document.getElementsByClassName('dot__right')[0].style.background='#346491';
}

function slideLeft(){
    $('#item2').fadeOut();
    sleep(500);
    $('#item1').fadeIn();
    document.getElementsByClassName('dot__left')[0].style.background='#346491';
    document.getElementsByClassName('dot__right')[0].style.background='#264160';
}

var next = false;
function slide(){
    if (next){
        slideRight();
    }
    else{
        slideLeft();
    }
    next = !next;
}

function sleep(ms) {
    ms += new Date().getTime();
    while (new Date() < ms){}
} 