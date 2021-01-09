
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var ground;
var stone;
var rope;
var mango1, mango2, mango3;

function preload() {
	boyImg = loadImage("boy.png");
	treeImg = loadImage("tree.png");
}

function setup() {
	createCanvas(1200, 500);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600, 485, 1200, 20);
	stone = new Stone(600, 100, 100);
	rope = new Rope(stone.body, {x: 90, y: 330});
	mango1 = new Mango(925, 250, 50);
	mango2 = new Mango(950, 200, 50);
	mango3 = new Mango(975, 250, 50);

    var render = Render.create({
		element: document.body,   //display all the bodies
		engine: engine,           //display all the functions
		options:{                 //dimension of the render
			width: 1200,
			height: 500,
			wireframes: false
		}
	});
    Engine.run(engine);          //starting the render
	Render.run(render);
}

function draw() {
	background("black");
	Engine.update(engine);

	image(boyImg, 150, 400, 200, 300);
	image(treeImg, 950, 250, 500, 450);

	detectCollision(stone, mango1);
	detectCollision(stone, mango2);
	detectCollision(stone, mango3);
	
	ground.display();
	stone.display();
	rope.display();
	mango1.display();
	mango2.display();
	mango3.display();
}

function mouseDragged() {
	Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}

function mouseReleased() {
	rope.fly();
}

function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position;
	stoneBodyPosition=lstone.body.position;

    var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	  
	if(distance<= lmango.r + lstone.r) {
	    Matter.Body.setStatic(lmango.body, false);
	}
  
}

function keyPressed() {
	if(keyCode === 32) {
		//stone should come back to intial position-600,100
        Body.setPosition(stone.body, {x: 600, y: 100});
		//also the contraint should be set
        rope.attach(stone.body);		
	}
}
