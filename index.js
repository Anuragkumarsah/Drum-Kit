
var number_of_instruments = document.querySelectorAll(".drum").length;

   
var w = 'sounds/tom-1.mp3';
var a = 'sounds/tom-2.mp3';
var s = 'sounds/tom-3.mp3';
var d = 'sounds/tom-4.mp3';
var j = 'sounds/snare.mp3';
var k = 'sounds/crash.mp3';
var l = 'sounds/kick-bass.mp3';



for (var i =0; i < number_of_instruments; i++) {
    
    document.querySelectorAll(".drum")[i].addEventListener("click", checkAndPlay);
    
}

function checkAndPlay(){
    var x = String(this.innerHTML);
    var y = event.key;
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

document.addEventListener("keypress", checkAndPlay)