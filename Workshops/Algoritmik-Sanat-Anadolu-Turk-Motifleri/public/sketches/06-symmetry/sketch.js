// Anatolian / Turkic motif palette
const colors = {
    madderRed: "#a8322d", // deep brick-red, the classic kilim red (madder root dye)
    indigo: "#1f3a5f", // deep indigo blue, main kilim ground color
    iznikTurquoise: "#2e8b8b", // signature Iznik tile turquoise
    ottomanGold: "#c9962c", // mustard/saffron gold, common in border bands
    oliveGreen: "#5a6b3c", // muted olive-green from vegetable dyes
    mauvePlum: "#6e4c5e", // dusty mauve/plum accent
    burntOrange: "#b65c2e", // warm accent, seen in Kayseri/Malatya kilims
    ivory: "#ede3d0", // cream/ivory field or background
    walnutBrown: "#5b3a29", // deep brown outline/accent color
    charcoal: "#2b2420", // near-black, used for outlines & motif definition
};

function setup() {
    createCanvas(800, 800);

    angleMode(DEGREES);
}

function draw() {
    background(colors.ivory);

    // Merkez
    push();
    translate(width / 2, height / 2 - 20);
    scale(0.26);
    //hayatAgaci();
    pop();

    var sx = width / 2;
    var sy = height / 2;

    var rad = 240;

    //rad += sin(millis()*0.021) * 45;

    var numFig = 7;

    push();
    translate(sx, sy);
    rotate(frameCount * 0.04);
    for (let i = 0; i < numFig; i++) {
        var angle = (360 / numFig) * i;
        push();
        let cx = cos(angle) * rad;
        let cy = sin(angle) * rad;

        let rotVal = atan2(cy, cx);

        translate(cx, cy);
        rotate(rotVal + 90);

        scale(0.35);

        hayatAgaci();
        pop();
    }
    pop();
}

function hayatAgaci() {
    push();

    // Döngüsel ağaç

    translate(-width * 0.5, -height * 0.5);

    let numBranch = 6;

    for (let i = 0; i < numBranch; i++) {
        push();
        translate(0, 115 * (numBranch - 2) - i * 115);
        dal();
        pop();
    }

    push();
    translate(0, -115 * 2); // Buraya dikkat
    dal(false); // Fonksiyonu parametrik hale getir. Böylece fonksiyon parametrelere göre değişen modüler bir hale gelir

    // *** Yerini ayarla sonra tepe kısmını çiz
    push();
    noFill();
    stroke(colors.madderRed);
    strokeWeight(9);
    translate(width / 2, height / 2 - 75);
    rotate(45);
    polygon(20, 20, 4);
    pop();

    /*// Aşağıya kaydır
  push();
  translate(0, 115 * 2);
  dal();
  pop();

  // Bir üstüne çık
  push();
  translate(0, 115);
  dal();
  pop();

  // Bir üstüne daha çık
  push();
  translate(0, 0);
  dal();
  pop();

  // Bir üstüne daha çık
  push();
  translate(0, -115);
  dal();
  pop();

  // En tep noktasını çiz
  push();
  translate(0, -115 * 2);
  dal(false); // Fonksiyonu parametrik hale getir. Böylece fonksiyon parametrelere göre değişen modüler bir hale gelir

  // *** Yerini ayarla sonra tepe kısmını çiz
  push();
  noFill();
  stroke(colors.madderRed);
  strokeWeight(9);
  translate(width / 2, height / 2 - 75);
  rotate(45);
  polygon(20, 20, 4);
  pop();


  */
    pop();

    pop();
}

// Tek bir dal modülü
function dal(yaprakCiz = true) {
    // dal
    push();
    noFill();
    stroke(colors.madderRed);
    strokeWeight(40);
    translate(width / 2, height / 2 - 50);
    rotate(45);
    polygon(100, 100, 4);
    pop();

    // Maske
    push();
    fill(colors.ivory);
    noStroke();
    translate(width / 2, height / 2 - 120);
    polygon(190, 100, 4);
    pop();

    // ön orta küçük parça
    push();
    noFill();
    stroke(colors.madderRed);
    strokeWeight(18);
    translate(width / 2, height / 2);
    rotate(45);
    polygon(30, 30, 4);
    pop();

    // Dal üstü yapraklar
    //
    if (yaprakCiz === true) {
        push();
        noFill();
        stroke(colors.madderRed);
        strokeWeight(9);
        translate(width / 2 - 98, height / 2 - 75);
        rotate(45);
        polygon(20, 20, 4);
        pop();

        push();
        noFill();
        stroke(colors.madderRed);
        strokeWeight(9);
        translate(width / 2 + 98, height / 2 - 75);
        rotate(45);
        polygon(20, 20, 4);
        pop();
    }
}

function polygon(rx, ry, npoints) {
    let angle = 360 / npoints;
    let offset = npoints === 4 ? angle / 2 : 0;
    push();
    beginShape();
    for (let a = 0; a < 360; a += angle) {
        let sx = cos(90 + a + offset) * rx;
        let sy = sin(90 + a + offset) * ry;
        vertex(sx, sy);
    }
    endShape(CLOSE);
    pop();
}
