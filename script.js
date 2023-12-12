var character=document.getElementById("lion");
var block=document.getElementById("block");
function jump(){
    if(character.classList != "jump"){
        character.classList.add("jump"); 
    }
    setTimeout(function(){
        character.classList.remove("jump"); 
    },500)
}
var checkDead=setInterval(function()  {
  var characterTop=  parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  var blockleft=  parseInt(window.getComputedStyle(block).getPropertyValue("left"));

  if(blockleft<30 && blockleft>0 && characterTop>=130){
     block.style.amination="none";
     block.style.amination="none";
     alert("You Lose.");


     
  }
},10);

// var Score=document.getElementById("displayScore");
//  var score=0;
//  function showScore(){
//     score++;
//     displayScore.innerText="Score:"+ score + "m";
// }

// setInterval(showScore, 100);