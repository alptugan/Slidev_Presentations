---
layout: section
title: Uygulama 1 · Hayat Ağacı
---

# Uygulama 1
[Hayat Ağacı · çizgiden fonksiyona]{style="font-style: italic; color: grey"}

---
layout: two-cols
class: pr-4
title: 01 · Basit ağaç
---

# 01 · Basit ağaç

<<< @/public/sketches/01-basic-tree/sketch.js js {all|11-12|14-16|18-22|24-28|30-32}{lines:true,maxHeight:'420px'}

::right::

<div class="flex flex-col items-center mt-6">
<Embed src="sketches/01-basic-tree/index.html" :size="300" />
<a class="text-sm mt-2" href="https://editor.p5js.org" target="_blank">editor.p5js.org'da yeni sketch aç ↗</a>
</div>

<div v-click class="text-sm mt-4 p-3 rounded bg-white/5">
<b>Dene:</b> yaprakları <code>fill('#8b0000')</code> ile doldur · gövdeyi uzat · bir dal çifti daha ekle
</div>

<!--
Sadece line() ve circle(). Her şey mutlak koordinatlarla yazıldı. Sorun: ağacı taşımak istersek her sayıyı değiştirmemiz gerekir.
-->

---
layout: two-cols
class: pr-4
title: 02 · Parçalara ayır
---

# 02 · Parçalara ayır

<<< @/public/sketches/02-tree-parts/sketch.js js {all|9-15|18-22|24-28|30-32}{lines:true,maxHeight:'420px'}

::right::

<div class="flex flex-col items-center mt-6">
<Embed src="sketches/02-tree-parts/index.html" :size="300" />
</div>

<v-clicks class="text-sm mt-4">

- Motif = **gövde + dallar + yapraklar**
- Her parça kendi **fonksiyonu**: `trunk()`, `branch()`, `leaf()`
- `branch(side, …)`: `side = -1` sol, `side = 1` sağ → **ayna simetrisi tek parametreyle**

</v-clicks>

---
layout: two-cols
class: pr-4
title: 03 · Fonksiyon
---

# 03 · Motif bir fonksiyondur

<<< @/public/sketches/03-tree-function/sketch.js js {all|7|10-13|15-17|36}{lines:true,maxHeight:'420px'}

::right::

<div class="flex flex-col items-center mt-6">
<Embed src="sketches/03-tree-function/index.html" :size="300" />
</div>

<v-clicks class="text-sm mt-4">

- `drawTree(x, y, s)`: **nerede** ve **ne büyüklükte**
- Ağaç artık `(0, 0)` etrafında çiziliyor; `translate()` onu taşıyor
- `push()` / `pop()`: bir ağacın ayarları diğerine taşmaz

</v-clicks>

<div v-click class="text-sm mt-3 p-3 rounded bg-white/5">
<b>Dene:</b> <code>draw()</code> içinde <code>drawTree()</code>'yi 3 kez, farklı <code>x</code> ve <code>s</code> ile çağır
</div>
