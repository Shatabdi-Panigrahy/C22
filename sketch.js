//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ball,ground;

function setup() {
createCanvas(400,400);
engine =  Engine.create();
world = engine.world;
var option = {
  restitution : 0.8
}
ball = Bodies.circle(200,100,10,option);
World.add(world,ball);
var option2 = {
  isStatic :true
}
ground = Bodies.rectangle (200,380,400,10,option2);
World.add (world,ground);

}

function draw() {
  background("yellow"); 
  Engine.update (engine); 
  ellipseMode (RADIUS);
  ellipse (ball.position.x,ball.position.y,10);


  rectMode (CENTER);
  rect(ground.position.x,ground.position.y,400,10);
}
