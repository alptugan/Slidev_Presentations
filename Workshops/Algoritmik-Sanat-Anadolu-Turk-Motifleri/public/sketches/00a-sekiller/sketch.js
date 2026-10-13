// Temel şekiller
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('#efe2c2');
  stroke('#242018');
  fill('#8b0000');

  strokeWeight(12);
  point(40, 40);                          // x, y
  strokeWeight(4);
  line(80, 30, 180, 90);                  // x1, y1, x2, y2
  rect(220, 30, 140, 70);                 // x, y, genişlik, yükseklik
  circle(80, 190, 90);                    // x, y, çap
  ellipse(270, 190, 160, 80);             // x, y, genişlik, yükseklik
  triangle(30, 360, 90, 260, 150, 360);   // 3 köşe
  quad(210, 270, 330, 255, 370, 360, 230, 370); // 4 köşe
}
