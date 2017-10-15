var w;

function setup() {
  // put setup code here
  createCanvas(640, 360);
  w = new Walker();
}

function draw() {
  background(51);
  w.walk();
  w.display();
}

//constructor function--constructs walker object
function Walker() {
  this.x = width/2;
  this.y = height/2

  this.walk = function() {
    this.x = this.x + random(-10, 10);
    this.y = this.y + random(-10, 10);
  }

  this.display = function() {
    fill(255);
    ellipse(this.x, this.y, 48, 48);
  }
}
