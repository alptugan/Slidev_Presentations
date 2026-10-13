// fill · noFill · stroke · noStroke · strokeWeight
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('#efe2c2');

  // 1. sadece dolgu
  noStroke();
  fill('#8b0000');
  rect(40, 40, 130, 130);

  // 2. sadece çizgi
  noFill();
  stroke('#242018');
  strokeWeight(2);
  rect(230, 40, 130, 130);

  // 3. dolgu + çizgi
  fill('#e2a72e');
  stroke('#242018');
  strokeWeight(2);
  rect(40, 230, 130, 130);

  // 4. kalın çizgi
  fill('#2e6b6b');
  stroke('#242018');
  strokeWeight(12);
  rect(230, 230, 130, 130);
}
