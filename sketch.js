const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26, ground;
var ball, rope;
var stand1,stand2
var score=0;
function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);
stand1=new Ground(390,300,250,10)
stand2=new Ground(700,200,200,10)
  box1 = new Box(300, 275, 30, 40);
  box2 = new Box(330, 275, 30, 40);
  box3 = new Box(360, 275, 30, 40);
  box4 = new Box(390, 275, 30, 40);
  box5 = new Box(420, 275, 30, 40);
  box6 = new Box(450, 275, 30, 40);
  box7 = new Box(480, 275, 30, 40);
  box8 = new Box(330, 235, 30, 40);
  box9 = new Box(360,  235, 30, 40);
  box10 = new Box(390,  235, 30, 40);
  box11 = new Box(420,  235, 30, 40);
  box12 = new Box(450,  235, 30, 40);
  box13 = new Box(360, 195, 30, 40);
  box14 = new Box(390, 195, 30, 40);
  box15 = new Box(420, 195, 30, 40);
  box16 = new Box(390, 155, 30, 40);
  box17=new Box(640,175,30,40)
  box18=new Box(670,175,30,40)
  box19=new Box(700,175,30,40)
  box20=new Box(730,175,30,40)
  box21=new Box(760,175,30,40)
  box22=new Box(790,175,30,40)
  box23=new Box(670,135,30,40)
  box24=new Box(700,135,30,40)
  box25=new Box(730,135,30,40)
  box26=new Box(700,95,30,40)


  ball = new Ball(50, 200, 80, 80);
  rope = new Rope(ball.body, { x: 100, y: 200 });

}

function draw() {
  background(180);
  Engine.update(engine);
  text("Score:"+score,750,40);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()
  box18.display()
  box19.display()
  box20.display()
  box21.display()
  box22.display()
  box23.display()
  box24.display()
  box25.display()
  box26.display()
  ball.display();
  rope.display();
  stand1.display();
  stand2.display();
  box1.score();
  box2.score();
  box3.score();
  box4.score()
  box5.score()
  box6.score()
  box7.score()
  box8.score()
  box9.score()
  box10.score()
  box11.score()
  box12.score()
  box13.score()
  box14.score()
  box15.score()
  box16.score()
  box17.score()
  box18.score()
  box19.score()
  box20.score()
  box21.score()
  box22.score()
  box23.score()
  box24.score()
  box25.score()
  box26.score()


}


function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}
function mouseReleased() {
  rope.fly();
}

function keyPressed() {
  if(keyCode===32){
  rope.attach(ball.body);
  }
}
