// translate · push · pop
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('#efe2c2');
  noStroke();

  for (let x = 50; x < width; x += 100) {
    push();
    translate(x, 200);      // orijini (0,0) taşı
    fill('#8b0000');
    triangle(0, -40, -35, 30, 35, 30); // hep (0,0) etrafında çiz
    fill('#efe2c2');
    triangle(0, 0, -15, 25, 15, 25);
    pop();                  // orijini geri al
  }
}
