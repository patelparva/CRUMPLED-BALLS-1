var paper,ground,b1,b2,b3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	paper=new Paper(100,200,40);
	ground = new Ground(width/2,680,width,20);
	b1=new Dustbin(880,630,20,80);
	b2=new Dustbin(950,660,120,20);
	b3=new Dustbin(1000,630,20,80);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  ground.display();
  b1.display();
  b2.display();
  b3.display();

  keyPressed();
}

function keyPressed() {
	if (keyDown("up")) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:38,y:-38});
	}	
}
