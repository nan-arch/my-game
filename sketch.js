const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

let engine;
let world;

var tree,stone,ground;
var mango;
var mango1,mango2,mango3,mango4,mang5,mango6,mango7;
var elastic;
var boy;

function preload(){
  boy = loadImage('boy.png');
  tree = loadImage('tree.png');
  mango = loadImage('mango.png');
  stone = loadImage('stone.png');
}
function setup() {
  createCanvas(1300,600);
  engine = Engine.create();
  world = engine.world;
  
  mango1 = new Mango(1100,100,30);
  mango2 = new Mango(1000,100,30);
  mango3 = new Mango(1000,200,30);
  mango4 = new Mango(1200,130,30);
  mango5 = new Mango(1100,200,30);
  mango6 = new Mango(1250,200,30);
  mango7 = new Mango(900,340,30);

  stone = new Stone(200,340,30);
  tree = new Tree(1050,580);
  ground = new Ground(width/2,600,width,20);
  elastic = new Elastic(stone.body,{x:235,y:420});

  Engine.run(engine); 
}


function draw() 
{
  background(230);
  Engine.update(engine);

  image(boy,200,340,200,300);

  elastic.display();
  tree.display();
  stone.display();
  ground.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  detectColiision(stone,mango1);
  detectColiision(stone,mango2);
  detectColiision(stone,mango3);
  detectColiision(stone,mango4);
  detectColiision(stone,mango5);
  detectColiision(stone,mango6);
  detectColiision(stone,mango7);

  textSize(20);
  text('Press space to get another chance to play',50,50,400);
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY}); 
}

function detectColiision(stone,mango){
  mangoBodyPosition = mango.body.position;
  stoneBodyPosition = stone.body.position;

  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangBodyPosition.x,mangoBodyPosition.y);
  if(distance <= mango.r*stone.r){
    Matter.Body.setStatic(mango.body,false);
  }
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:235,y:420});
    elastic.attach(stone.body);
  }
}