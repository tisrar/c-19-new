var climber,climberImage
var door,doorImage
var ghost,ghostImage
var tower,towerImage
var doorGroup
var climberGroup
var invisibleblock,invisibleblockGroup
var gameState="play"
function preload(){
  climberImage=loadImage("climber.png");
  doorImage=loadImage("door.png");
  ghostImage=loadImage("ghost-standing.png");
  towerImage=loadImage("tower.png");
}
function setup(){
createCanvas(600,600);
  tower=createSprite(300,300,20,20);
  tower.addImage("tower",towerImage);
  ghost=createSprite(300,300,20,20)
  ghost.addImage("ghostImage",ghostImage)
  ghost.scale=0.4
  climberGroup = new Group();
  doorGroup = new Group();
invisibleblockGroup=new Group();
}
function draw(){
  background("black")
  if (gameState==="play"){
  
  tower.velocityY=1;
  if (tower.y>600){
    tower.y = 0
    
  }
  
  if(keyDown("left")){
    ghost.x=ghost.x-2
  }
  if(keyDown("right")){
    ghost.x=ghost.x+2
  }
  if(keyDown("space")){
    ghost.velocityY=-3
  }
  ghost.velocityY=ghost.velocityY + 0.8
  if (climberGroup.isTouching(ghost)){
    
    ghost.velocityY=0
  }
  if (invisibleblockGroup.isTouching(ghost)||ghost.y>600){
    ghost.destroy();
    gameState="end"
  }
    spawnDoors(); 
    drawSprites(); 
   
  }
   if (gameState==="end"){
     
     stroke("yellow");
     fill("yellow");
     textSize(30)
     text("Game Over",270,300)
     
   }
  
 
}
function spawnDoors(){
  if (frameCount %50===0){
  
  door=createSprite(200,-50,20,20)
   door.x= Math.round(random(50,550))
  door.addImage("door",doorImage)
  door.velocityY=2
    door.lifetime = 300
    doorGroup.add(door);
    
    
  climber=createSprite(200,0,20,20)
    climber.x=door.x
  climber.addImage("climber",climberImage)
  climber.velocityY=2
    climber.lifetime = 300
    climberGroup.add(climber);
    ghost.depth =  door.depth 
  ghost.depth=ghost.depth + 1
    invisibleblock = createSprite(200,10,20,2)
    invisibleblock.x = door.x
    invisibleblock.velocityY=2
    invisibleblock.debug = true
    invisibleblockGroup.add(invisibleblock)
    
}
  
  
}