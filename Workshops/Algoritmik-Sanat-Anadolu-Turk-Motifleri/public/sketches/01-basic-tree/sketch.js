function setup() {
  createCanvas(800, 800);
}

function draw() {
  background('#efe2c2');
  stroke('#242018');
  strokeWeight(8);
  noFill();

  // gövde
  line(400, 650, 400, 420);

  // ana dallar
  line(400, 480, 310, 360);
  line(400, 480, 490, 360);

  // küçük dallar
  line(310, 360, 260, 300);
  line(310, 360, 330, 280);
  line(490, 360, 470, 280);
  line(490, 360, 540, 300);

  // yapraklar / meyveler
  circle(250, 290, 30);
  circle(335, 270, 30);
  circle(465, 270, 30);
  circle(550, 290, 30);

  // kök / taban
  line(400, 650, 340, 700);
  line(400, 650, 460, 700);
}
