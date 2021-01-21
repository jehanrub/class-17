var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var surivialTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
    
  ground=createSprite(200,390,1000,20)
  ground.velocityX=-2
  monkey=createSprite(20,350,100,100)
  monkey.addAnimation('runningMonkey',monkey_running)
  monkey.scale=0.1
  
}


function draw() {
background('lime') 
if(ground.x<0){
   ground.x=ground.width/2
  console.log(ground.x)
   }
  if(keyDown('space')){
    monkey.velocityY=-10
     }
   monkey.velocityY=monkey.velocityY+0.8
  monkey.collide(ground)
  food()
  
  
  stroke('black')
  textSize(20)
  fill('black')
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival time :"+ survivalTime,100,100)
drawSprites()
  

}
function food(){
  if(frameCount%80===0)
  {
    banana=createSprite(400,random(200,350),10,10)
    banana.addImage(bananaImage)
    banana.scale=0.1
    banana.velocityX=-3
  }

    
  
  
  
}





