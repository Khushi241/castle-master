

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var cone1;

function setup(){
    var canvas = createCanvas(600,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200, 300, 100, 150);
    box2 = new Box(400, 300, 100, 150);
    box3 = new Box(300, 210, 297, 40);
    box4 = new Box(480, 270, 80, 200);
    box5 = new Box(110, 270, 80, 200);
    box6 = new Box(80, 150, 20, 20);
    box7 = new Box(110, 150, 20, 20);
    box8 = new Box(140, 150, 20, 20);
    box9 = new Box(455, 150, 20, 20);
    box10 = new Box(485, 150, 20, 20);
    box11 = new Box(515, 150, 20, 20);
    box12 = new Box(300, 150, 290, 60);
    box13 = new Box(200, 110, 20, 20);
    box14 = new Box(230, 110, 20, 20);
    box15 = new Box(260, 110, 20, 20);
    box16 = new Box(290, 110, 20, 20);
    box17 = new Box(320, 110, 20, 20);
    box18 = new Box(350, 110, 20, 20);
    box19 = new Box(380, 110, 20, 20);
    box20 = new Box(410, 110, 20, 20);
    box21 = new Box(170, 110, 20, 20);
    
    ground1 = new Ground(200, 380, 900, 30)
}

function draw(){
    background(0);
    Engine.update(engine);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    
    ground1.display();
    
}
