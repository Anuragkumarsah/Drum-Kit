
var number_of_instruments = document.querySelectorAll(".drum").length;

   
var w = 'sounds/tom-1.mp3';
var a = 'sounds/tom-2.mp3';
var s = 'sounds/tom-3.mp3';
var d = 'sounds/tom-4.mp3';
var j = 'sounds/snare.mp3';
var k = 'sounds/crash.mp3';
var l = 'sounds/kick-bass.mp3';



for (var i =0; i < number_of_instruments; i++) {
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var x = String(this.innerHTML);
        if(x == 'w')
            x = w;
        else if(x == 'a')
            x = a;
        else if(x == 's')
            x = s;
        else if(x == 'd')
            x = d;
        else if(x == 'j')
            x = j;
        else if(x == 'k')
            x = k;
        else if(x == 'l')
            x = l;
        else{
            alert(this.innerHTML);
        }
        playMusic(x);
    });
    
}

function playMusic(element){
    var adios = new Audio(element);
            adios.play();
}