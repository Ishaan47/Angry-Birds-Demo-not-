const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, ground, pig1 ,pig2, log1, log2, log3, log4, bird1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(150,310,50,50);
    box2 = new Box(300,310,50,50);
    box3 = new Box(200,250,50,50);
    box4 = new Box(240,250,50,50);
    box5 = new Box(220,200,50,50);
    
    ground = new Ground(200,height,400,20)

    pig1 = new Pig(220,300)
    pig2 = new Pig(220,250)

    log1 = new Log(220,270,320,PI/2);
    log2 = new Log(220,230,320,PI/2);
    log3 = new Log(150,90,100,PI/7);
    log4 = new Log(220,90,100,-PI/7);

    bird1 = new Bird(10,200)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird1.display();
}