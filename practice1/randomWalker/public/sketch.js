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
  this.pos = createVector(width/2, height/2);
  this.vel = createVector(0,0);
  this.acc = p5.Vector.fromAngle(random(TWO_PI));
  this.acc.setMag(0.2);
  //this.x = width/2;
  //this.y = height/2

  //change .walk to .update
  this.update = function() {
    // var mouse = createVector(mouseX, mouseY);
    // this.acc = p5.Vector.sub(mouse, this.pos);
    // this.acc.normalize();
    // this.acc.mult(0.5);

    // this.acc = createVector(random(-1, 1), random(-1, 1));
    // this.acc.mult(0.1);
    //added vector math; replaces lines 27&28; use .add()
    this.acc.rotate(0.1);
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
