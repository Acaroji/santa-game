

//Presents  animation
var score = 0;
var santaLifes = 3;

function animatePresent(color){
    $(`.${color}Presents`).animate({
        top:500
    }, 10000, function(){
        if(!collision($("#santaClaus"), $(`.${color}Presents`))){
           santaLifes--
           //put this present back to top
        }
        else{
            $(`.${color}Presents`).hide();
        }       
        $(`.${color}Presents`).css({top:"0"},400)
        $(`.${color}Presents`).css({left:Math.floor(Math.random()*window.innerWidth)},400)
        animatePresent("yellow")
        animatePresent("blue")
        animatePresent("purple")
    });
    
//pause buttom 

$( "#btn-pause-game" ).click(function() {
     $(`.${color}Presents`).stop();
  });
 
} 

window.onload = function() {
    var clickStartButton = false;
    var startButton = document.getElementById("btn-start-game");
        startButton.onclick = function() {
            animatePresent("yellow")
            animatePresent("blue")
            animatePresent("purple")
        }
        
}

$("#btn-start-game").click(function() {
    var $randomPresent = $(".yellowPresents"); 
    var $documentWidth = $(document).width();
    var $randomPresentWidth = $randomPresent.width();
    var $widthMax = $documentWidth - $randomPresentWidth;
    $randomPresent.css({

        left: Math.floor( Math.random() * $widthMax )


    });;
    var $randomPresent = $(".bluePresents"); 
    var $documentWidth = $(document).width();
    var $randomPresentWidth = $randomPresent.width();
    var $widthMax = $documentWidth - $randomPresentWidth;
    $randomPresent.css({

        left: Math.floor( Math.random() * $widthMax )
    });;

    var $randomPresent = $(".purplePresents"); 
    var $documentWidth = $(document).width();
    var $randomPresentWidth = $randomPresent.width();
    var $widthMax = $documentWidth - $randomPresentWidth;
    $randomPresent.css({

        left: Math.floor( Math.random() * $widthMax )

    });

});
//a lot of presents


//Santa's move   
var maxLeftForSanta;

$(window).ready(function(){

    var screensize = $("#screen").width();
    var santaWidth = $("#santaClaus").width();
    maxLeftForSanta = screensize - santaWidth; 
    var santa = $("#santaClaus").position();
    
})    
$(document).keydown(function(e){
   var currentSantaPositionLeft = Math.floor($("#santaClaus").position().left);
    
    switch (e.which){
    case 37:  //left arrow key
        if(currentSantaPositionLeft <= 50){
            return false;
        }
        else{
            $("#santaClaus").finish().animate({
                left: "-=50"
            });
        }
       
        break;
        
    case 39:  //right arrow key
        if(currentSantaPositionLeft > maxLeftForSanta){
            return false;    
        }
        else{ 
            $("#santaClaus").finish().animate({
            left: "+=50"
        
            });

        break;
    
       }}
});

//Santa catchs presents and score

var santaCatchs= $("#santaClaus");
var presentCatched = $(".present");
function collision(santaCatchs,present){
    var positionXSanta = santaCatchs.offset().left;
    var positionYSanta = santaCatchs.offset().top;
    var heightSanta = santaCatchs.outerHeight(true);
    var widthSanta = santaCatchs.outerWidth(true);
    var b1 = positionYSanta + heightSanta;
    var r1 = positionXSanta + widthSanta;
    var positionXPresent = present.offset().left;
    var positionYPresent = present.offset().top;
    var heightPresent = present.outerHeight(true);
    var widthPresent =present.outerWidth(true);
    var b2 = positionYPresent + heightPresent;
    var r2 = positionXPresent + widthPresent;

    if(b1 < positionYPresent || positionYSanta > b2 || r1 < positionXPresent || positionXSanta > r2) {
        return false
    }
    else{
    
        return true;
    }
}
window.setInterval(function() {
    if(collision($("#santaClaus"), $('.yellowPresents'))){
        score++
        $('.yellowPresents').hide()
    };
    $('#score-santa').html(score);

}, 200);
    
window.setInterval(function() {
    if(collision($("#santaClaus"), $('.bluePresents'))){
        score++
        $('.bluePresents').hide()
    };
    $('#score-santa').html(score);

}, 200);

window.setInterval(function() {
    if(collision($("#santaClaus"), $('.purplePresents'))){
        score++
        $('.purplePresents').hide()
    };
    $('#score-santa').html(score);

}, 200);

//messeges player's name
var playerName = prompt('player name');
console.log("The player's name is", playerName);

