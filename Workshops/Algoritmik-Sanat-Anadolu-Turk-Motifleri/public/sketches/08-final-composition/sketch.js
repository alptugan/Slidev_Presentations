// 08 - Final kompozisyon: hayat ağaçları + eli belinde halkası + serpiştirme
// randomSeed sayesinde her çalıştırmada aynı sonuç çıkar; seed'i değiştirerek yeni varyasyonlar üretin.

let bg = '#efe2c2';
let ink = '#242018';
let accent = '#8b3d2e';
let seed = 20260914;

function setup() {
  createCanvas(1000, 1000);
  randomSeed(seed);
  angleMode(RADIANS);
  noLoop();
}

function draw() {
  background(bg);

  drawBorder();
  drawLifeTrees();
  drawEliBelindeRing();
  drawScatter();
}

function drawBorder() {
  noFill();
  stroke(ink);
  strokeWeight(8);
  rect(35, 35, width - 70, height - 70);
}

function drawLifeTrees() {
  for (let i = 0; i < 8; i++) {
    let a = i * TWO_PI / 8;
    let r = 265;
    let x = width / 2 + cos(a) * r;
    let y = height / 2 + sin(a) * r;

    push();
    translate(x, y);
    rotate(a + HALF_PI);
    scale(random(0.45, 0.7));
    drawTree(ink);
    pop();
  }
}

function drawEliBelindeRing() {
  push();
  translate(width / 2, height / 2);

  for (let i = 0; i < 12; i++) {
    push();
    rotate(i * TWO_PI / 12);
    eliBelinde(0, -165, 0.1, accent);
    pop();
  }

  pop();
}

function drawScatter() {
  for (let i = 0; i < 45; i++) {
    push();
    translate(random(100, width - 100), random(100, height - 100));
    rotate(random(TWO_PI));
    eliBelinde(0, 0, random(0.03, 0.07), ink);
    pop();
  }
}

function drawTree(col) {
  stroke(col);
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
}

function eliBelinde(x, y, s, renk) {
  push();
  translate(x, y);
  scale(s);
  noStroke();
  fill(renk);

  // 1. KAFA: beşgen
  beginShape();
  vertex(-63, -432);
  vertex(63, -432);
  vertex(130, -313);
  vertex(0, -238);
  vertex(-130, -313);
  endShape(CLOSE);

  // 2. BOYUN
  rect(-23, -252, 46, 28);

  // 3. OMUZ
  rect(-183, -224, 366, 35);

  // 4. GÖVDE: ters yamuk
  quad(-120, -189, 120, -189, 34, -40, -34, -40);

  // 5-6. SOL KOL + SOL EL
  kol();

  // 7-8. SAĞ KOL + SAĞ EL: aynı kol, x ekseninde aynalanır
  push();
  scale(-1, 1);
  kol();
  pop();

  // 9. BEL
  rect(-34, -40, 68, 45);

  // 10. BACAKLAR / ETEK
  quad(-34, 5, 34, 5, 281, 433, -281, 433);

  // 11-14. ETEK MOTİFLERİ: aynı üçgen 4 kez aşağı kaydırılır
  fill(bg);
  for (let i = 0; i < 4; i++) {
    let dy = i * 85;
    triangle(0, 20 + dy, -84, 167 + dy, 84, 167 + dy);
  }

  pop();
}

// Kol ve el tek bir çokgen: omuzdan aşağı iner, bele doğru kıvrılır
function kol() {
  beginShape();
  vertex(-183, -224);
  vertex(-283, -49);
  vertex(-147, 30);
  vertex(-92, -67);
  vertex(-232, -67);
  vertex(-162, -189);
  vertex(-183, -189);
  endShape(CLOSE);
}
