var rectm
var recf
var rect1,rect2;


function setup() {
  createCanvas(800,700);
  rectm=createSprite(200, 200,50, 50);
  rectf=createSprite(200,500,50,50);
  rect1=createSprite(400,500,50,50);
  rect2=createSprite(600,500,50,50);
  rectm.shapeColor="green"
  rectf.shapeColor="blue"
  rect1.shapeColor="pink"
  rect2.shapeColor="grey"

  rect1.velocityX=1
  rect2.velocityX=-1
}

function draw() {
  background(0);  
rectm.y=mouseY
rectm.x=mouseX

if ( isTouching(rect2,rectm)){

rectm.shapeColor="red";
rect2.shapeColor="red";

}else {
  rectm.shapeColor="blue";
  rect2.shapeColor="grey";
} 

bounceOff(rect1,rect2);
bounceOff(rectf,rect1);



  drawSprites();

}





