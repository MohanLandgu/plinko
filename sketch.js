const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine,world;

var particle
var particles =[particle]
var plinkos =[]
var divisions=[]
var line;
 var divisionHeight=200;

 var gameState = "PLAY";


 var count =0;
 var score =0;

function setup() {
  createCanvas(800,400);
  engine =Engine.create();
  world = engine.world; 

 

 
  ground =new  Ground(400,390,800,20)
  
  for(var k =0;k<=width;k=k+90) {
    divisions.push(new Division(k, height-divisionHeight/2,20,divisionHeight));
   }

for (var j=15;j<=width;j = j+45){
plinkos.push(new Plinko(j,85))
}

for (var j=30;j<=width;j = j+45){
  plinkos.push(new Plinko(j,55))
  }

  for (var j=15;j<=width;j = j+45){
    plinkos.push(new Plinko(j,25))
    }
  
    Engine.run(engine)
}


function draw() {
  rectMode(CENTER)
  background("black"); 
  Engine.update(engine);

  textSize(35);
  text("score : "+score,20,40);
  fill(255)


  textSize(35);
  text("500",10,250)
  text("500",100,250)
  text("500",200,250)
  text("100",290,250)
  text("100",370,250)
  text("100",470,250)
 
  text("200",560,250)
  text("200",640,250)
  text("200",730,250)
 
  

 if(gameState=="END"){

    background("black")
    fill("red")
    textSize(100)
    text("Game Over ",200,200)

 }

 for (var j= 0;j<plinkos.length;j++){
  plinkos[j].display();
 }

 ground.display();

 if(particle!=null){


 particle.display();

 if(particle.body.position.y>700)
 {

 if(particle.body.position.x < 300){

 score=score +500
 particle=null
  if(count>=5)gameState ="END"

 }

 else if(particle.body.position.x<600 && particle.body.position.x>301){

 score =score+100
 particle=null
 if(count>5)gameState ="END"


 }

 else if (particle.body.position.x<900 && particle.body.position.x>601){

 score=score+200;
 particle=null
 if(count>5) gameState ="END";


    }

  }

 }

 for(var n = 0;n<divisions.length;n++){
  divisions[n].display();
   }


}

function mousePressed(){

if(gameState!=="PLAY"){

count++;
particle =new Partical(mouseX,mouseY,10,10)

}

}
