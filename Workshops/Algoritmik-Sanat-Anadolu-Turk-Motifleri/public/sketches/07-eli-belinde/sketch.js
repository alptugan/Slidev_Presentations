// 07 - Eli Belinde
// Analiz görsellerindeki parçalar (1-14) sırasıyla koda dönüştürüldü.
// Motifin merkezi (0, 0) noktasıdır; yükseklik ~865 birimdir.
// p5.js 1.x ve 2.x ile aynı şekilde çalışır.

let zemin = '#efe2c2';
let kirmizi = '#8b0000';

function setup() {
  createCanvas(800, 800);
  noLoop();
}

function draw() {
  background(zemin);
  eliBelinde(width / 2, height / 2, 0.8, kirmizi);
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
  fill(zemin);
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
