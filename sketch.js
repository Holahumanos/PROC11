var sea_imagen,ship_animation,sea;
function preload(){
  seaImg =loadImage("sea.png");
   ship_animation = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
   
}

function setup(){
  createCanvas(400,400,87,68);
  sea=createSprite(100,350);
  sea.addImage(seaImg);
  sea.scale=0.656565;
 ship=createSprite(300,250,20,50)
 ship.addAnimation("movement",ship_animation); 
  ship.scale= 0.10;
  ship.x= 50;
 
}

function draw() {
  background("skyblue");
 /* if (sea.x <0){
    sea.x=sea.width/2;
  }*/

  drawSprites();
 
}