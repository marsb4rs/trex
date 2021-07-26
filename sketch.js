var trex, trex_running, edges;
var groundImage, ground, invisibleGround;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  
  // creating trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  ground = createSprite(300,180,600,20);
  ground.addImage(groundImage)
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50
  invisibleGround = createSprite(300,185,600,10)
  invisibleGround.visible = false
}


function draw(){
  //set background color 
  background("white");
  ground.velocityX=-2;
  //logging the y position of the trex
  console.log(trex.y)
  
  //jump when space key is pressed
  if(keyDown("space")&&trex.y>150){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5;
  if(ground.x<0){
    ground.x=ground.width/2
  }


  //stop trex from falling down
  trex.collide(invisibleGround)
  drawSprites();
}