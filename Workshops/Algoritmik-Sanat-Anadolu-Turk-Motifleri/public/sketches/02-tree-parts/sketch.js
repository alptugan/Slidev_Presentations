function setup() { createCanvas(800, 800); }

function draw() {
  background('#efe2c2');
  stroke('#242018');
  strokeWeight(8);
  noFill();

  trunk();
  branch(-1, 90, 120);
  branch(1, 90, 120);
  leaf(-150, -160);
  leaf(-70, -190);
  leaf(70, -190);
  leaf(150, -160);
}

function trunk() {
  line(400, 650, 400, 420);
  line(400, 650, 340, 700);
  line(400, 650, 460, 700);
}

function branch(side, dx, dy) {
  line(400, 480, 400 + side * dx, 480 - dy);
  line(400 + side * dx, 480 - dy, 400 + side * (dx + 50), 480 - dy - 60);
  line(400 + side * dx, 480 - dy, 400 + side * (dx - 20), 480 - dy - 80);
}

function leaf(x, y) {
  circle(400 + x, 450 + y, 34);
}
