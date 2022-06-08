
var number_of_instruments = $(".drum").length;

   
var w = 'sounds/tom-1.mp3';
var a = 'sounds/tom-2.mp3';
var s = 'sounds/tom-3.mp3';
var d = 'sounds/tom-4.mp3';
var j = 'sounds/snare.mp3';
var k = 'sounds/crash.mp3';
var l = 'sounds/kick-bass.mp3';



$(".drum").click("click", function(){
        
        checkAndPlay($(this).html());
        buttonAnimation($(this).html());
    });



$(document).keypress(function(event){
        checkAndPlay(event.key);
        buttonAnimation(event.key);
})




function checkAndPlay(event){
    var x;
    // buttonAnimation()
        if(event == 'w')
            x = w;
        else if(event == 'a')
            x = a;
        else if(event == 's')
            x = s;
        else if(event == 'd')
            x = d;
        else if(event == 'j')
            x = j;
        else if(event == 'k')
            x = k;
        else if(event == 'l')
            x = l;
        
        playMusic(x);

}

function playMusic(element){
    var adios = new Audio(element);
            adios.play();
}


function buttonAnimation(key){
        $("."+key).addClass("pressed");

        setTimeout(function(){
            $("."+key).removeClass("pressed");
        }, 90);
}