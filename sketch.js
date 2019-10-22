var mic;
var incr = 0;
var pos = 0;

function preload(){
  // Create an Audio input
  mic = new p5.AudioIn();
  // start the Audio Input.
}

function setup() {
  createCanvas(500, 500);
  mic.start();

}

function draw() {
  background(200);

  // Get the overall volume (between 0 and 1.0)
  var vol = mic.getLevel();
  console.log(vol);
  ellipse(250, 250, vol * 200);

}

function Blocco(_h) {
  this.x = rand(50, 500);
  this.y = height;
  this.w = rand(50, 300);
  this.h = -_h;
  fill(0);
}
