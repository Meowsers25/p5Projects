var w;

function setup() {
  // put setup code here
  createCanvas(640, 360);
  w = new Walker();
}

function draw() {
  background(51);
  w.update();
  w.display();
}

//constructor function--constructs walker object
function Walker() {
  //create vector-line 18 replaces lines 19, 20
  //must add .pos (vector object) to the x and y positions
  this.pos = createVector(width/2, 0);
  this.vel = createVector(0,0);
  this.acc = createVector(0, 0.1);
  //this.x = width/2;
  //this.y = height/2

  //change .walk to .update
  this.update = function() {
    //added vector math; replaces lines 27&28; use .add()
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    // this.pos.x = this.pos.x + random(-10, 10);
    // this.pos.y = this.pos.y + random(-10, 10);
  }

  this.display = function() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 48, 48);
  }
}
