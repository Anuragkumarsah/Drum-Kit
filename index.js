
var number_of_instruments = document.querySelectorAll(".drum").length;

   
var w = 'sounds/tom-1.mp3';
var a = 'sounds/tom-2.mp3';
var s = 'sounds/tom-3.mp3';
var d = 'sounds/tom-4.mp3';
var j = 'sounds/snare.mp3';
var k = 'sounds/crash.mp3';
var l = 'sounds/kick-bass.mp3';



for (var i =0; i < number_of_instruments; i++) {
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        checkAndPlay(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
    
}


document.addEventListener("keypress", function(event){
        checkAndPlay(event.key);
        buttonAnimation(event.key);
})




function checkAndPlay(event){
    var x = event;
    var y = event;
    // buttonAnimation()
        if(x == 'w' || y == 'w')
            x = w;
        else if(x == 'a' || y == 'a')
            x = a;
        else if(x == 's' || y == 's')
            x = s;
        else if(x == 'd' || y == 'd')
            x = d;
        else if(x == 'j' || y == 'j')
            x = j;
        else if(x == 'k' || y == 'k')
            x = k;
        else if(x == 'l' || y == 'l')
            x = l;
        
        playMusic(x);

}

function playMusic(element){
    var adios = new Audio(element);
            adios.play();
}


function buttonAnimation(key){
        var pressedButton = document.querySelector("."+key);
        pressedButton.classList.add("pressed");

        setTimeout(function(){
            pressedButton.classList.remove("pressed");
        }, 120);
}