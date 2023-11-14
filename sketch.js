
var trex ,trex_running;
var edges
var ground, ground_image


function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png")
ground_image = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(50, 180, 10, 30)
 trex.addAnimation("run",trex_running)
 trex.scale = 0.4
 
ground = createSprite(300,180,600,10)
ground.addImage(ground_image)

  edges = createEdgeSprites()
}

function draw(){
  background("grey")

  if (keyDown("space")){
  trex.velocityY=-10
  
  
  }
  ground.velocityX=-2

  if(ground.x<0){
    ground.x=ground.width/2
  }
  trex.velocityY+=0.5
trex.collide(ground)

  drawSprites()

}
