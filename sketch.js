var mic;

function setup() {
  createCanvas(500, 500);

  // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  mic.start();
}

function draw() {
  background(200);

  // Get the overall volume (between 0 and 1.0)
  var vol = mic.getLevel();
  ellipse(250,250,vol * 200);

}
