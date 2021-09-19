var tank1;
var tankImg1;

var background;
var bg,bg2,bg3,bg4;

var ground; 





function preload(){

  bg = loadImage("./bg.jpg");
  bg1 = loadImage("./bg2.jpg");
  bg2 = loadImage("./bg3.jpg");
  bg3 = loadImage("./bg4.jpg");

  tankImg1 = loadImage("./tank1.png");
  tankImg2 = loadImage("./tank3.png");


}
function setup() {
  createCanvas(1700,850);

  var tank1= createSprite(200,790,20,20);
  tank1.addImage(tankImg1)
  
  var ground= createSprite(850,840,1700,5);
  

  

}

function draw() {
  background(bg); 
  

  spawnTanks();

  drawSprites();
  


}



function spawnTanks() {
  if(frameCount%1400 === 0) {
    tank1 = createSprite(400,790,20,20);
    tank1.addImage(tankImg1);
    tank1.velocityX = 2;
  }
}