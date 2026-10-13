function setup() {
  createCanvas(800, 800);
  noLoop();
}

function draw() {
  background('#efe2c2');

  for (let x = 100; x < width; x += 140) {
    for (let y = 120; y < height; y += 190) {
      push();
      translate(x, y);
      rotate(random(-0.18, 0.18));
      scale(random(0.45, 0.75));
      drawTree();
      pop();
    }
  }
}

function drawTree() {
  stroke('#242018');
  strokeWeight(7);
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
}
