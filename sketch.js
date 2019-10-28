//Overlap Point and pixel
//the collisions are not checked against bounding boxes but between
//points or image pixels

//left and right keys to move the sprite
//it's position is adjusted to another sprite's opaque pixels

var triangle;
var platform;
var avatr;
var analyzer;
var mic;
var valore;
var flag = 0;

// Two lines of magic code. The "analyzer" is a sort of "function"
// able to perform measurements on the song and give back values



var GRAVITY = 5;

function preload() {
  avatar = loadImage('assets/Chiara.png');
}

function setup() {
  mic = new p5.AudioIn();
  mic.start();


  createCanvas(windowWidth, windowHeight);

  triangle = createSprite(mouseX, mouseY);
  triangle.addImage(avatar);
  triangle.debug = true;
  triangle.maxSpeed = 20;

  platform = createSprite(320, height);
  platform.addImage(loadImage('assets/Gaga.jpg'));

  //platform.friction = 1;
  triangle.depth = 10;
}

function draw() {
  var vol = mic.getLevel();
  valore = map(vol, 0, 1, 0, 25);
  console.log(vol);
  triangle.friction = 0;
  //background(255, 255, 255);
  triangle.addSpeed(1, 90);
  //if no arrow input set velocity to 0
  //triangle.velocity.x = 0;

  if (keyIsDown(LEFT_ARROW))
    triangle.addSpeed(5, 180);
  if (keyIsDown(RIGHT_ARROW))
    triangle.addSpeed(5, 0);

  triangle.position.y-=valore;
  triangle.position.x+=valore;
  //instead of checking the colliders or bounding box overlaps
  //I can just check a point against a collider
  // if(cloud.overlapPoint(triangle.position.x, triangle.position.y))
  //   cloud.changeAnimation('transformed');

  //Or check a point against the pixels of a sprite animation or image
  //if the bottom of the triangle is not overlapping with the non transparent pixels
  //of the platform make it fall
  // if (platform.overlapPixel(triangle.position.x, triangle.position.y + 20) == false)
  //   triangle.velocity.y += GRAVITY;

  //if the bottom of the triangle is overlapping the non transparent pixels
  //of the platform move it up one pixel until it doesn't overlap anymore
  while (platform.overlapPixel(triangle.position.x, triangle.position.y + 20)) {
    triangle.friction = 0.4;
    triangle.position.y--;
    triangle.velocity.y = 0;
    // if (valore >= 0.5 && valore < 1)
    //   triangle.addSpeed(1, 0);
    // else if (valore < 0.5)
    //   triangle.velocity = 0;
    // else
    //   triangle.addSpeed(valore, -45);

    //
    // if(triangle.getDirection()>90 && triangle.getDirection()<270)
    //   triangle.velocity.x++;
    // else if(triangle.getDirection()<90 || (triangle.getDirection()<360 && triangle.getDirection()>270))
    //   triangle.velocity.x--;
  }

  drawSprites();
}
