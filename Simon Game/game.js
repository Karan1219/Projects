var gamePattern = [];
var buttonColors = ["red", "blue", "green" ,"yellow"];
var userClickedPattern = [];
var level=0;

$(document).on("keypress",function(){
    if(level===0){
         nextSequence();
     }
 });
$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animateColor(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});
function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    // $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100);
    playSound(randomChosenColor);
    animateColor(randomChosenColor);
    level++;
    $("h1").text("Level "+level);
}
function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
        console.log("success");
        if(gamePattern.length===userClickedPattern.length){
            userClickedPattern=[];
            setTimeout(nextSequence,1000);
        }
    }
    else{
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
        console.log("wrong");
    }
}
function startOver(){
    level=0;
    gamePattern=[];
    userClickedPattern=[];
}
// nextSequence();
function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}
function animateColor(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    },100);
}


// nextSequence();

