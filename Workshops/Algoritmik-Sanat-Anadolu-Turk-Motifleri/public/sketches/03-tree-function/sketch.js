function setup() {
  createCanvas(800, 800);
}

function draw() {
  background('#efe2c2');
  drawTree(width / 2, height / 2 + 180, 1);
}

function drawTree(x, y, s) {
  push();
  translate(x, y);
  scale(s);

  stroke('#242018');
  strokeWeight(8);
  noFill();

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

  line(0, 0, -55, 50);
  line(0, 0, 55, 50);

  pop();
}
