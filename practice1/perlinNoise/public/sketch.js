var xoff = 0;


function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(51);

  //var x = random(0, width);
  var x = noise(xoff) * width;

  xoff += 0.05;

  fill(255);
  ellipse(x, 180, 48, 48);

}
