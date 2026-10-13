---
layout: section
title: Bölüm 2 · p5.js Temelleri
---

# Bölüm 2
[p5.js Temelleri · Şekil, Renk, Koordinat]{style="font-style: italic; color: grey"}

---
layout: default
title: p5.js Web Editörü
---

# p5.js Web Editörü · [editor.p5js.org](https://editor.p5js.org)

<div class="flex gap-6 mt-2">
<div class="relative w-150 shrink-0">
  <img class="rounded border border-white/10" src="/p5js-editor.jpg" />
  <span v-click="1" class="pin" style="left:2.8%; top:7.2%">1</span>
  <span v-click="2" class="pin" style="left:6.7%; top:7.2%">2</span>
  <span v-click="3" class="pin" style="left:20%; top:7.2%">3</span>
  <span v-click="4" class="pin" style="left:25%; top:30%">4</span>
  <span v-click="5" class="pin" style="left:75%; top:30%">5</span>
  <span v-click="6" class="pin" style="left:25%; top:92%">6</span>
  <span v-click="7" class="pin" style="left:92.5%; top:7.2%">7</span>
  <span v-click="8" class="pin" style="left:5.5%; top:2.2%">8</span>
</div>
<ol class="text-sm leading-6 mt-0">
  <li v-click="1"><b>Play</b>: kodu çalıştır</li>
  <li v-click="2"><b>Stop</b>: durdur</li>
  <li v-click="3"><b>Sketch adı</b>: kalem simgesiyle değiştir</li>
  <li v-click="4"><b>Kod alanı</b>: <code>sketch.js</code></li>
  <li v-click="5"><b>Preview</b>: tuval burada görünür</li>
  <li v-click="6"><b>Console</b>: hata mesajları ve <code>print()</code></li>
  <li v-click="7"><b>p5.js sürümü</b>: bugün 2.x</li>
  <li v-click="8"><b>File → Save / Share</b>: kaydet ve paylaş (giriş yapmalısın)</li>
</ol>
</div>

<style>
.pin {
  position: absolute; transform: translate(-50%, -50%);
  width: 1.6rem; height: 1.6rem; border-radius: 999px;
  background: #ffcc00; color: #000; font-weight: 800; font-size: 0.85rem;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 0 0 4px #ffcc0044;
}
</style>

<!--
Herkes editor.p5js.org'a girsin, Sign up ile hesap açsın (GitHub/Google ile de olur). Kaydetmek için hesap gerekli.
Atölyeden önce: editörün varsayılan sürümü 2.x. Atölyedeki kodlar 1.x ve 2.x'te aynı çalışıyor.
-->

---
layout: two-cols
class: pr-6
title: setup ve draw
---

# Bir sketch'in iskeleti

```js {1-3|5-7|all}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
```

::right::

<v-clicks>

- `setup()`: başta **bir kez** çalışır. Tuvali hazırla.
- `createCanvas(genişlik, yükseklik)`: piksel cinsinden tuval
- `draw()`: saniyede ~60 kez **tekrar tekrar** çalışır
- `background(renk)`: tuvali boya. Gri ton `0–255` ya da `'#efe2c2'` gibi bir hex rengi
- `noLoop()`: `draw()` yalnızca bir kez çalışsın (durağan kompozisyonlar için)

</v-clicks>

---
layout: two-cols
class: pr-6
title: Koordinat sistemi
---

# Koordinat sistemi

<v-clicks>

- `(0, 0)` noktası **sol üst** köşe
- `x` sağa doğru büyür
- `y` **aşağı** doğru büyür (matematikteki gibi yukarı değil!)
- `width` ve `height`: tuvalin boyutları
- Merkez: `(width / 2, height / 2)`

</v-clicks>

::right::

<svg viewBox="-40 -40 480 480" width="380" height="380" class="mt-4 mx-auto block">
  <rect x="0" y="0" width="400" height="400" fill="#efe2c2" />
  <g stroke="#ffcc00" stroke-width="3" fill="#ffcc00">
    <line x1="0" y1="0" x2="380" y2="0" /><polygon points="380,-8 400,0 380,8" />
    <line x1="0" y1="0" x2="0" y2="380" /><polygon points="-8,380 0,400 8,380" />
  </g>
  <text x="372" y="-14" fill="#ffcc00" style="font-size:22px">x</text>
  <text x="-30" y="392" fill="#ffcc00" style="font-size:22px">y</text>
  <circle cx="0" cy="0" r="7" fill="#8b0000" />
  <text x="10" y="28" fill="#242018" style="font-size:18px">(0, 0)</text>
  <circle cx="200" cy="200" r="7" fill="#8b0000" />
  <text x="212" y="196" fill="#242018" style="font-size:18px">(200, 200)</text>
  <circle cx="300" cy="100" r="7" fill="#2e6b6b" />
  <line x1="300" y1="0" x2="300" y2="100" stroke="#2e6b6b" stroke-dasharray="6 6" />
  <line x1="0" y1="100" x2="300" y2="100" stroke="#2e6b6b" stroke-dasharray="6 6" />
  <text x="310" y="96" fill="#242018" style="font-size:18px">(300, 100)</text>
  <text x="300" y="392" fill="#242018" style="font-size:16px">(400, 400)</text>
</svg>

---
layout: two-cols
class: pr-4
title: Temel şekiller
---

# Temel şekiller

<<< @/public/sketches/00a-sekiller/sketch.js js {11-19}{lines:true,maxHeight:'380px'}

::right::

<div class="flex flex-col items-center mt-12">
<Embed src="sketches/00a-sekiller/index.html" :w="400" :h="400" :size="340" />
</div>

---
layout: default
title: Serbest şekil
---

# Serbest şekil: `beginShape()`

<div class="grid grid-cols-2 gap-6">
<div>

```js
beginShape();
vertex(-63, -432);
vertex(63, -432);
vertex(130, -313);
vertex(0, -238);
vertex(-130, -313);
endShape(CLOSE);
```

</div>
<div>

<v-clicks>

- Köşeleri (`vertex`) **sırayla** ver
- `endShape(CLOSE)`: son köşeyi ilkine bağla
- Üçgen ve dörtgenle çizilemeyen her çokgen için
- Bu kod, eli belinde motifinin **kafası** (beşgen). Birazdan göreceğiz!

</v-clicks>

</div>
</div>

---
layout: two-cols
class: pr-4
title: fill ve stroke
---

# Dolgu ve çizgi

<<< @/public/sketches/00b-renk/sketch.js js {all|9-12|14-18|20-24|26-30}{lines:true,maxHeight:'400px'}

::right::

<div class="flex flex-col items-center mt-6">
<Embed src="sketches/00b-renk/index.html" :w="400" :h="400" :size="300" />
</div>

<div class="text-sm mt-4 leading-6">

| | |
|---|---|
| `fill(renk)` / `noFill()` | iç dolgu açık / kapalı |
| `stroke(renk)` / `noStroke()` | kontur açık / kapalı |
| `strokeWeight(px)` | kontur kalınlığı |

</div>

<!--
Önemli: bu fonksiyonlar bir "durum" ayarlar. Sonraki tüm şekiller bu ayarla çizilir, ta ki yeniden değiştirene kadar.
Renk: tek sayı (gri), üç sayı (r, g, b) ya da '#8b0000' gibi hex. Kilim paleti: kök boya kırmızısı, lacivert, sarı, krem.
-->

---
layout: default
title: Kilim paleti
---

# Bir kilim paleti

<div class="grid grid-cols-5 gap-3 mt-8 text-center text-sm">
  <div><div class="h-24 rounded" style="background:#8b0000"></div><code>'#8b0000'</code><br/>kök boya kırmızı</div>
  <div><div class="h-24 rounded" style="background:#242018"></div><code>'#242018'</code><br/>is siyahı</div>
  <div><div class="h-24 rounded" style="background:#efe2c2"></div><code>'#efe2c2'</code><br/>yün kremi</div>
  <div><div class="h-24 rounded" style="background:#2e6b6b"></div><code>'#2e6b6b'</code><br/>çivit-yeşil</div>
  <div><div class="h-24 rounded" style="background:#e2a72e"></div><code>'#e2a72e'</code><br/>cehri sarısı</div>
</div>

```js
let kirmizi = '#8b0000';   // değişken: rengi bir isimle sakla
fill(kirmizi);
```

<p class="text-xs opacity-50 mt-2">Renkler temsilîdir; gerçek kök boya tonları bölgeye ve boyaya göre değişir.</p>

---
layout: two-cols
class: pr-4
title: translate
---

# `translate()` · `push()` · `pop()`

<<< @/public/sketches/00c-translate/sketch.js js {all|10|11-12|13-16|17}{lines:true}

::right::

<div class="flex flex-col items-center mt-8">
<Embed src="sketches/00c-translate/index.html" :w="400" :h="400" :size="300" />
</div>

<v-clicks class="text-sm mt-4">

- `translate(x, y)`: **kâğıdı** kaydırır, kalemi değil
- Motifi hep `(0, 0)` etrafında çiz, sonra istediğin yere taşı
- `push()` … `pop()`: ayarları kaydet / geri yükle

</v-clicks>

---
layout: center
class: p-0
title: translate simülatörü
---

<Embed src="sim/translate.html" :w="1180" :h="760" :size="800" />

<!--
Simülatörde sayıları sürükleyerek translate'in koordinat sistemini nasıl taşıdığını gösterin. push/pop olmadan dönüşümlerin birikmesine dikkat.
-->

---
layout: two-cols
class: pr-6
title: rotate ve scale
---

# `rotate()` · `scale()`

```js
push();
translate(200, 200);   // 1. merkeze taşı
rotate(QUARTER_PI);    // 2. 45° döndür
scale(0.5);            // 3. yarıya küçült
rect(-50, -50, 100, 100);
pop();
```

::right::

<v-clicks>

- Açılar **radyan**: `PI` = 180°, `HALF_PI` = 90°, `QUARTER_PI` = 45°, `TWO_PI` = 360°
- `rotate()` her zaman **orijin** etrafında döner. Önce `translate()`!
- `scale(2)` büyütür, `scale(0.5)` küçültür
- `scale(-1, 1)`: **ayna**! Sağ kol = aynalanmış sol kol
- Sıra önemli: **taşı → döndür → ölçekle → çiz**

</v-clicks>
