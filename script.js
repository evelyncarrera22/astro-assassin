document.addEventListener("DOMContentLoaded", function () {
    var tagline = document.querySelector("p.tagline");
    //tagline.innerText = "From Cloud9 IDE!";
});









function evaluate(evt) {
    var evelyn = evt.target.getAttribute('id');
    if (evelyn === currentPlanetName) {
        
        if (score === 9 ) {
            window.location.href="close.html";
        }
        
        incrementScore();
        destroyPlanet();
        currentPlanetName = "";
        playSound("ShinyDing");
    } 
}  

var score = 0;
function incrementScore(){
    score++;
    $("#timeboard").text(score);
    
}



    
    

$(document).ready(function(){
    $(".token").click(function(evt){
        evaluate(evt);
    });
    $("#timeboard").text(score);
});








function playSound(sound) {
    var audioElement = document.getElementById(sound); 
    audioElement.play();
}








    