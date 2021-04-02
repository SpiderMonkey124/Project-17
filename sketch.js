var Sea, seapng, Boat, boatimg, boatimg2


function preload(){
seapng = loadImage("sea.png");
  
  boatimg = loadAnimation("ship-1.png", "ship-2.png");
  
  boatimg2 = loadAnimation("ship-3.png", "ship-4.png");
  
}

function setup(){
  createCanvas(400,400);
  
  //sea
  Sea = createSprite(400, 300);
  Sea.addImage("sea", seapng);
  Sea.scale = 0.4;
  
  //Boat
  Boat = createSprite(125, 270);
  Boat.addAnimation("Boat", boatimg);
  Boat.scale = 0.3;
}



function draw() {
  background("blue");
  
  Sea.velocityX = -5;
  
  //infinite Background
  if(Sea.x < 0){
    Sea.x = Sea.width/8;
    
  }
  
  if(keyWentDown("space")){
    Boat.addAnimation("Boat", boatimg2);
  }
  
    if(keyWentUp("space")){
    Boat.addAnimation("Boat", boatimg);
  }
  
   drawSprites();
}