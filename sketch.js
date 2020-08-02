var fixedRectangle;
var movingRectangle;
function setup() {
  createCanvas(800,400);
 fixedRectangle= createSprite(400, 200, 50, 50);
 movingRectangle=createSprite(200,200,80,80);
}

function draw() {
  background(0);  
  movingRectangle.x=mouseX;
  movingRectangle.y=mouseY;
  if(movingRectangle.x-fixedRectangle.x<=movingRectangle.width/2+fixedRectangle.width/2 &&
     fixedRectangle.x-movingRectangle.x<=fixedRectangle.width/2+movingRectangle.width/2&&
     movingRectangle.y-fixedRectangle.y<=movingRectangle.height/2+fixedRectangle.height/2 &&
      fixedRectangle.y-movingRectangle.y<=fixedRectangle.height/2+movingRectangle.height/2){
    fixedRectangle.shapeColor="red";
    movingRectangle.shapeColor="red"
  }
  else{
  fixedRectangle.shapeColor="green";
  movingRectangle.shapeColor="green";
  }
  drawSprites();
}