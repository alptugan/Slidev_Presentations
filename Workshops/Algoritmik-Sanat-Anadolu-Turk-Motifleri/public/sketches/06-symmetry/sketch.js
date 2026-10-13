function setup() {
  createCanvas(800, 800);
  noLoop();
}

function draw() {
  background('#efe2c2');
  stroke('#242018');
  strokeWeight(5);
  noFill();

  translate(width / 2, height / 2);

  for (let i = 0; i < 8; i++) {
    push();
    rotate(i * TWO_PI / 8);
    translate(0, -80);
    scale(0.55);
    drawTree();
    pop();
  }

  circle(0, 0, 60);
}

function drawTree() {
  line(0, 0, 0, -230);
  line(0, -100, -90, -220);
  line(0, -100, 90, -220);
  line(-90, -220, -145, -285);
  line(-90, -220, -60, -300);
  line(90, -220, 60, -300);
  line(90, -220, 145, -285);

  circle(-150, -300, 35);
  circle(-60, -315, 35);
  circle(60, -315, 35);
  circle(150, -300, 35);
}
