var firework;


function setup() {
  // put setup code here
  createCanvas(400, 300);
  stroke(255);
  strokeWeight(4);
  firework = new Particle(random(width), height);
}

function draw() {
  background(51);
  firework.update();
  firework.show();

}
