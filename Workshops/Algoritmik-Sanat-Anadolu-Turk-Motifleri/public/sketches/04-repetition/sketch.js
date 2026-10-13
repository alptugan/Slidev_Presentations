function setup() {
  createCanvas(800, 800);
  noLoop();
}

function draw() {
  background('#efe2c2');
  stroke('#242018');
  strokeWeight(4);
  noFill();

  for (let x = 110; x < width; x += 190) {
    for (let y = 150; y < height; y += 260) {
      drawTree(x, y, 0.45);
    }
  }
}

function drawTree(x, y, s) {
  push();
  translate(x, y);
  scale(s);

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

  pop();
}
