//declare all variables
var path, runner, pathImage, runner_running;
var leftBoundary, rightBoundary;

function preload(){
  //pre-load images
  pathImage = loadImage ("path.png");
  runner_running = loadAnimation ("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas (400,400);
  //create background 
  path = createSprite (200,200);
  path.addImage ("path", pathImage);
  path.velocityY = 4;
  path.scale = 1.2;
  path.y = path.height/2;

  //create runner
  runner = createSprite (200,200,20,20);
  runner.addAnimation("runner", runner_running);
  runner.scale = 0.1;

  //create left invisible boundary
  leftBoundary = createSprite (34,20,20,800);
  leftBoundary.visible = false;

  //create right invisible boundary
  rightBoundary = createSprite (365,20,20,800);
  rightBoundary.visible = false;
}

function draw() {
  background("white");

  if (path.y>400){
    path.y = height/2;
  }

  //Make the runner move with the mouse
  runner.x = World.mouseX;

  //Make runner collide with Boundaries
  runner.collide(leftBoundary);
  runner.collide(rightBoundary);

  drawSprites ();
}
