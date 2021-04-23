var movingRect , fixedRect;
var gameObject1 , gameObject2, gameObject3,gameObject4;

function setup() {
  createCanvas(800,400);
   fixedRect =  createSprite(200, 200, 50, 50);
   movingRect = createSprite(400,200,80,30);

   fixedRect.shapeColor = ("green");
   movingRect.shapeColor = ("green");
   fixedRect.velocityX = 3;
   movingRect.velocityX = -3;

   fixedRect.debug = true;
   movingRect.debug = true;
}

function draw() {
  background(255,255,255); 
  // movingRect.x = World.mouseX;
  // movingRect.y = World.mouseY;
  if(isTouching(gameObject1,movingRect)){
    gameObject1.shapeColor= ("red");
    movingRect.shapeColor = "red"
  }
  else{
    gameObject1.shapeColor= ("green");
    movingRect.shapeColor = "green"
  }
  
  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x -object2.x < object1.width/2 + object2.width/2 &&
    object2.x - object1.x < object1.width/2 + object2.width/2 &&
    object2.y - object1.y <object1.height/2 +object2.height/2&&
    object1.y - object2.y < object1.height/2 + object2.height/2 ){
      return true;
  }
  else{
    return false;
  }
}
function bounceOff(){
if(movingRect.x - fixedRect.x < movingRect.width/2 +fixedRect.width/2){
  fixedRect.velocityX = fixedRect.velocityX*(-1);
  movingRect.velocityX = movingRect.velocityX*(-1);
}
}