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
    createCanvas(1080, 1080);

    angleMode(DEGREES);

    noLoop();
}

function draw() {
    background(colors.ivory);

    var numFig = 23;
    var cx = 0;
    var cy = height;
    push();

    for (let j = 0; j < 8; j++) {
        cy = height - 80 * (2 * j + 1) + 105;

        if (j % 2 == 0) {
            cx = 91;
        } else {
            cx = 0;
        }

        for (let i = 0; i < numFig; i++) {
            push();

            if (i % 2 == 0) {
                translate(cx, cy);
                scale(0.3);
                rotate(0);
            } else {
                translate(cx, cy - 30);
                scale(0.17);
                rotate(180);
            }
            cx = cx + 90;
            hayatAgaci();
            pop();
        }
    }

    pop();
}

function hayatAgaci() {
    push();

    // Döngüsel ağaç

    translate(-width * 0.5, -height * 0.5);

    let numBranch = 3;

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

function keyPressed() {
    if (key === "s") {
        save("hayat-agaci.jpg");
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
