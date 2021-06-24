
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}
var dustbin,paper
var ground
function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;
	
	
	
	
	ground = new Ground (500,480,1000,20);
	dustbin = new Dustbin(650,450);
	paper = new Paper(200,450,50);
    

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  
  ground.display();
  dustbin.display();
  paper.display();
  
  
}
function keyPressed(){
	if(keyCode === UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{
	x:200,y:-210
})
	}
}



