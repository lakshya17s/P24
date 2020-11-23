
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var box1,box2,box3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball = new Ball(100,400);
ground = new Ground(400,600);
box1 = new Box(550,550,10,50);
box2 = new Box(605,570,100,10);
box3 = new Box(650,550,10,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  textSize(10);
  text("OBJECTIVE IS TO MAKE THE PAPER BALL REACH THE DUSTBIN",10,300)
  ball.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  KEYSSS();
  
    drawSprites();
 
}
function KEYSSS(){


if(keyDown("UP_ARROW")){
  Matter.Body.applyForce(ball.body,ball.body.position,{x :2,y :-30});
}
}




