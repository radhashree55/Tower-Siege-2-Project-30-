const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(1350,640);
  engine = Engine.create();
  world = engine.world;

  stand1 = new Stand(705,500,320,10);
  stand2 = new Stand(1050,300,250,10);
  stand3 = new Stand(675,630,1350,20);

  shoot1 = new Aim(580,495,30,40);
  shoot2 = new Aim2(610,495,30,40);
  shoot3 = new Aim(640,495,30,40);
  shoot4 = new Aim2(670,495,30,40);
  shoot5 = new Aim(700,495,30,40);
  shoot6 = new Aim2(730,495,30,40);
  shoot7 = new Aim(760,495,30,40);
  shoot8 = new Aim2(790,495,30,40);
  shoot9 = new Aim(820,495,30,40);

  shoot10 = new Aim3(960,290,30,40);
  shoot11 = new Aim4(990,290,30,40);
  shoot12 = new Aim3(1020,290,30,40);
  shoot13 = new Aim4(1050,290,30,40);
  shoot14 = new Aim3(1080,290,30,40);
  shoot15 = new Aim4(1110,290,30,40);
  shoot16 = new Aim3(1140,290,30,40);

  shoot19 = new Aim(610,470,30,40);
  shoot20 = new Aim2(640,470,30,40);
  shoot21 = new Aim(670,470,30,40);
  shoot22 = new Aim2(700,470,30,40);
  shoot23 = new Aim(730,470,30,40);
  shoot24 = new Aim2(760,470,30,40);
  shoot25 = new Aim(790,470,30,40);

  shoot26 = new Aim(640,450,30,40);
  shoot27 = new Aim2(670,450,30,40);
  shoot28 = new Aim(700,450,30,40);
  shoot29 = new Aim2(730,450,30,40);
  shoot30 = new Aim(760,450,30,40);

  shoot17 = new Aim3(990,270,30,40);
  shoot18 = new Aim4(1020,270,30,40);
  shoot31 = new Aim3(1050,270,30,40);
  shoot32 = new Aim4(1080,270,30,40);
  shoot33 = new Aim3(1110,270,30,40);

  shoot34 = new Aim3(1020,250,30,40);
  shoot35 = new Aim4(1050,250,30,40);
  shoot36 = new Aim3(1080,250,30,40);

  shoot37 = new Aim3(1050,230,30,40);

  shoot38 = new Aim(670,430,30,40);
  shoot39 = new Aim2(700,430,30,40);
  shoot40 = new Aim(730,430,30,40);

  shoot41 = new Aim(700,410,30,40);

  polygon = new Polygon(300,400,50);

  slingShot = new Slingshot(polygon.body,{x:300,y:400});

}

function draw() {
  background(0,140,255);
  Engine.update(engine);
  strokeWeight(2);

  stand1.display();
  stand2.display();
  stand3.display();
  shoot1.display();
  shoot2.display();
  shoot3.display();
  shoot4.display();
  shoot5.display();
  shoot6.display();
  shoot7.display();
  shoot8.display();
  shoot9.display();
  shoot10.display();
  shoot11.display();
  shoot12.display();
  shoot13.display();
  shoot14.display();
  shoot15.display();
  shoot16.display();
  shoot19.display();
  shoot20.display();
  shoot21.display();
  shoot22.display();
  shoot23.display();
  shoot24.display();
  shoot25.display();
  shoot26.display();
  shoot27.display();
  shoot28.display();
  shoot29.display();
  shoot30.display();
  shoot17.display();
  shoot18.display();
  shoot31.display();
  shoot32.display();
  shoot33.display();
  shoot34.display();
  shoot35.display();
  shoot36.display();
  shoot37.display();
  shoot38.display();
  shoot39.display();
  shoot40.display();
  shoot41.display();
  polygon.display();
  slingShot.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingShot.fly();
}
function keyPressed() {
  if(keyCode === 32){
      Matter.Body.setPosition(polygon.body, {x: 300 , y: 400});
      slingShot.attatch(polygon.body);
  }
}