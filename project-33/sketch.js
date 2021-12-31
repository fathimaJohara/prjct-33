var backgrnd,backgrndimg
var snowImage
var snow1,snow2,snow3,snow4,snow5,snow6,snow8,snow9,snow10,snow11

function preload(){
  backgrndimg=loadImage("snow3.jpg")
  snowImage=loadAnimation("snow25.png","Snow7.png")

}
  

function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
 snow1=createSprite(100,500,20,20)
 snow1.addAnimation("s",snowImage)
 snow1.scale=0.5
 // snow2=createSprite(200,300,20,20)
 // snow2.addAnimation("s",snowImage)
 // snow2.scale=0.2
 // snow3=createSprite(300,600,20,20)
  // snow3.addAnimation("s",snowImage)
  // snow4=createSprite(600,200,20,20)
  // snow4.addAnimation("s",snowImage)
  // snow5=createSprite(400,800,202,20)
  // snow5.addAnimation("s",snowImage)
  // snow6=createSprite(100,200,20,20)
  // snow6.addAnimation("s",snowImage)
  // snow8=createSprite(300,400,20,20)
  // snow8.addAnimation("s",snowImage)
  // snow9=createSprite(800,400,20,20)
  // snow9.addAnimation("s",snowImage)
  // snow10=createSprite(900,100,20,20)
  // snow10.addAnimation("s",snowImage)
  // snow11=createSprite(100,900,20,20)
  // snow11.addAnimation("s",snowImage)
}

function draw() {
  background(backgrndimg);  
  drawSprites();


  

}