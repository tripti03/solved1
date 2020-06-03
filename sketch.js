//var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
//var packageBody,
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ball1, ground;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//create a Ground
	ground = new Ground(width/2,690,800,10)

	ball1 = new Ball(100, 100)


	
}


function draw() {
  
  background(225);
  rectMode(CENTER);
  Engine.update(engine);
  

  ground.display();

  ball1.display();
 
}