
var k = 5 / 8;

function setup() {
  // put setup code here
  createCanvas(400, 400);

}

function draw() {
  background(51);
  translate(width / 2, height / 2);

  beginShape();
  stroke(255);
  noFill();
  for (var i = 0; i < TWO_PI * 8; i += 0.02) {
    var r = 200 * cos(k * i);
    var x = r * cos(i);
    var y = r * sin(i);
    vertex(x, y);
  }
endShape(CLOSE);
}
