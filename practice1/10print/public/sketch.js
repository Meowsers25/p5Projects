//This brought back a lot of memories!! 

var x = 0;
var y = 0;
var spacing = 20;

function setup() {
  // put setup code here
  createCanvas(600, 600);
  background(120, 106, 189);
}

function draw() {
  stroke(255);
  strokeWeight(4);
  if (random(1) < 0.5) {
    line(x, y, x + spacing, y + spacing);
  } else {
    line(x, y + spacing, x + spacing, y);
  }
  x = x + spacing;
  if (x > width) {
    x = 0;
    y = y + spacing;
  }
}
