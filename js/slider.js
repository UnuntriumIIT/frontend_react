var isPaused = false;
$(document).ready(
    function() {
        $('#item1').show();
        $('#item2').hide();
        $('.dot__right').click(function(){
            isPaused = true;
            slideRight();  
            setInterval(resume, 5000);
        });

        $('.dot__left').click(function(){ 
            isPaused = true;
            slideLeft();
            setInterval(resume, 5000);
        });
        var f = false;
        setInterval(slide, 5000);
    }
);

function resume(){
    isPaused = false;
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
    if (isPaused){
        if (next){
            slideRight();
        }
        else{
            slideLeft();
        }
        next = !next;
    }
}

function sleep(ms) {
    ms += new Date().getTime();
    while (new Date() < ms){}
} 