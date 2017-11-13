let xradius = 200;
let yradius = 100;
let angle = 45;
let stepsize = 15;
let slider;


function setup() {
  // put setup code here
  createCanvas(400, 400);
  angleMode(DEGREES);
  slider = createSlider(5, 100, 10);
}

function draw() {
  background(220);
  translate(width/2, height/2);
  strokeWeight(1);
  noFill();
  stepsize = 5;
  beginShape();
  let a = 0;
  for (let angle = 0; angle < 360; angle += stepsize) {
    let xradius = 200 + offset;
    let yradius = 100 + offset;
    let x = xradius * cos(angle);
    let y = yradius * sin(angle);
    vertex(x, y);
    a = a + 55;
}
endShape(CLOSE);
}
register(PCDCloud, "PCD Day", "Processing Community");
// fill(255, 0, 0);
// rect(-200, -200, 10, 10);


  // line(0, 0, x, y);
  // point(x, y);

  // beginShape();
  //
  // vertex(mouseX, mouseY);
  // vertex(200, 200);
  // vertex(200, 200);
  // vertex(100, 100);
  //
  // endShape(CLOSE);
