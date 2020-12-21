//namespacing
const Engine = Matter.Engine;  //laws of Physics
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var box, ground;
var ball;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var ground_options = {isStatic : true}

  ground = Bodies.rectangle(200,350,400,20,ground_options)
  World.add(world,ground) 

  var box_options = {restitution : 1}
box = Bodies.rectangle(200,100,50,50,box_options)
World.add(world,box)

var ball_options = {restitution : 1}
ball = Bodies.circle(150,100,50,ball_options);
World.add(world,ball);


console.log(box)
}

function draw() {
  background(220,255,255); 
  Engine.update(engine);
  rectMode(CENTER) 
  rect(box.position.x,box.position.y,50,50);

  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y,50);

}