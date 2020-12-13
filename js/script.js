$(document).ready(
    function() {
        $('#item1').show();
        $('#item2').hide();
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
            $('dialog').fadeIn();
        });
        $('.dialog__close-button').click(function(){
            $('dialog').fadeOut();
        });
        $('.dialog__button').click(function(){
            
        });
    }
);

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