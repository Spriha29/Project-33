const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var backgroundImg;
var girl, girl_img;

var snow = [];
var snowflakes = 100;

function preload(){ 
  backgroundImg = loadImage("snow1.jpg"); 
  girl_img = loadAnimation("snow girl_1.png","snow girl_2.png","snowGirl_3.png"); 
}
function setup() {
    createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
    girl = createSprite(displayWidth/2, 
    displayHeight/2, 50, 150); girl.addAnimation("girl walking", girl_img); 
    for(var i=0; i<snowflakes; i++){ 
    snow.push(new Snow(random(0,400), random(0,400)));
  }
}

function draw(){ 
  Engine.update(engine); 
  background(backgroundImg); 
  for(var i = 0; i<snowflakes; i++){ 
      snow[i].updateY(); snow[i].showSnow();
    } 
  drawSprites();
} 