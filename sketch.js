var PLAY = 1;
var END = 0;
var gameState = PLAY;

var bg, bgImage;
var deer, deerImage;
var hunter, hunterImage


function preload(){

  bgImage = loadImage("Images/Bg2.jpeg");

  deerImage = loadAnimation("Images/Deer1.png", "Images/Deer2.png", "Images/Deer3.png", "Images/Deer4.png", "Images/Deer5.png", "Images/Deer6.png")

  hunterImage = loadImage("Images/HunterImage.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  bg = createSprite(windowWidth/2, windowHeight/2);
  bg.addImage(bgImage);
  bg.scale = 1.85;
  bg.velocityX = -2;

  deer = createSprite(windowWidth/1.5, windowHeight-100);
  deer.addAnimation("deer_running", deerImage);
  deer.scale = 2;

 hunter = createSprite(windowWidth/8, windowHeight-125);
 hunter.addImage("hunter", hunterImage);
 hunter.scale = 0.3;
}

function draw(){
  background("green");

 if(bg.x < 200){
   bg.x = width/2;
 }

  drawSprites();

}