// Anatolian / Turkic motif palette
let zemin = "#efe2c2";
let kirmizi = "#8b0000";

function setup() {
    createCanvas(800, 800);

    angleMode(DEGREES);
}

function draw() {
    background(zemin);

    // Dolguları kapat sadece çizgiler görünsün
    noFill();

    // 1. Kafa
    push();
    translate(width / 2, 110);
    polygon(70, 60, 5);
    pop();

    // 2. Boyun
    push();
    translate(width / 2, 170);
    polygon(22, 15, 4);
    pop();

    // 3. Omuz
    push();
    translate(width / 2, 191);
    polygon(150, 15, 4);
    pop();

    // 4. Gövde
    push();
    translate(width / 2, 241);
    polygon(100, 120, 3);
    pop();

    // 5. Sol Kol
    push();
    translate(width / 2 - 132, 247);
    rotate(120);
    polygon(100, 15, 4);
    pop();

    // 6. Sol El
    push();
    translate(width / 2 - 132, 312);
    rotate(0);
    polygon(50, 20, 3);
    pop();

    // 7. Sağ Kol
    push();
    translate(width / 2 + 132, 247);
    rotate(360 - 120);
    polygon(100, 15, 4);
    pop();

    // 8. Sağ El
    push();
    translate(width / 2 + 132, 312);
    polygon(50, 20, 3);
    pop();

    // 9. Bel
    push();
    translate(width / 2, 340);
    polygon(28, 25, 4);
    pop();

    // 10. Bacaklar
    push();
    translate(width / 2, 522);
    rotate(180);
    polygon(210, 200, 3);
    pop();

    // 11. Ete Desen 01
    push();
    translate(width / 2, 425);
    rotate(180);
    polygon(55, 55, 3);
    pop();

    // 11. Ete Desen 02
    push();
    translate(width / 2, 475);
    rotate(180);
    polygon(55, 55, 3);
    pop();

    // 11. Ete Desen 03
    push();
    translate(width / 2, 525);
    rotate(180);
    polygon(55, 55, 3);
    pop();

    // 11. Ete Desen 04
    push();
    translate(width / 2, 575);
    rotate(180);
    polygon(55, 55, 3);
    pop();
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
