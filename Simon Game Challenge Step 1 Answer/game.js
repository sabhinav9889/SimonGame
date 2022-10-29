var gamePattern=[];

var buttonColours=['red','blue','green','yellow'];

var userClickedPattern=[];

var level=0;

var val=0;

var itr=0,n=gamePattern.length;

function nextSequence(){

    level++;
    
    var val='level '; val+=(level);

    $('#level-title').text(val);

    var randomNumber=Math.floor(Math.random()*4);     // for random number

    var randomChosenColour=buttonColours[randomNumber];  // random colour

    gamePattern.push('#'+randomChosenColour);  
    
    n=gamePattern.length;

    makeSound(randomChosenColour);

    $('#'+randomChosenColour).fadeOut(100).fadeIn(100);  

}


$('.btn').on('click',function(e){

    var useChosenColour='#' + e.target.id;

    makeSound(e.target.id);

    userClickedPattern.push(useChosenColour);

    console.log(gamePattern,itr,gamePattern[itr],useChosenColour);

    if(itr<n&&gamePattern[itr]==useChosenColour){

        itr++;

        if(itr===n){  nextSequence(); itr=0; }
    }
    else{
        itr=0;

        $('h1').text('Game Over, Press Any  Key to Restart');
        
        makeSound('wrong');
        
        gamePattern=[];

        userClickedPattern=[];

        level=0;

        val=0;
    }
})
function animatePress(currentColour){

    function rmv(){

        $(currentColour).removeClass('pressed');

    }

    $(currentColour).addClass('pressed');

    setTimeout(rmv,100);
}
$(document).keypress(function(){    

    if(!val){

      nextSequence();

      val=1;
      
    }

});

function makeSound(itr){

    var audio=new Audio('sounds/'+itr+'.mp3');

    audio.play();
}
function checkAnswer(currentLevel){

    if(itr<n){
        
        if(gamePattern[itr]!=currentLevel){

        }
        else itr++;

    }
    else{  itr=0;  nextSequence(); }
}