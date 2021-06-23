const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine,world;
var ground;
var ball1,ball2;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  
  var ground_options= {
    isStatic: true
  }
  ground=Bodies.rectangle(200,380,50,50,ground_options);
  var ball_options= {
    restitution: 1
  }
  ball2=Bodies.circle(100,200,50,ball_options);
  World.add(world,ground);
  World.add(world,ball2);
  console.log(ground);

  // ball1=createSprite(20,20,20,20);
  // ball1.shapeColor="black"
 
  
}

function draw() {
  background("lightblue"); 
  Engine.update(engine); 
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,40);
  ellipseMode(RADIUS);
  ellipse(ball2.position.x,ball2.position.y,50,50);
 // drawSprites();
}
