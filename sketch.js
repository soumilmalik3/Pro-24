
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var leftBox, rightBox, bottomBox;

var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400,690,800,20); 

	leftBox = new Box(470, 625, 10, 100);
	rightBox = new Box(670, 625, 10, 100)
	bottomBox = new Box(570, 675, 200, 10);

	Engine.run(engine);
  
	paper = new Paper(100, 200, 40);
}

function draw() {
  rectMode(CENTER);
  background("black");
  
  drawSprites();

leftBox.display();
rightBox.display();
bottomBox.display();

paper.display();

ground.display()

}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position,{x:230, y:-230});
	}
}


