---
layout: section
title: Uygulama 2 · Tekrar, Dönüşüm, Simetri
---

<img class="absolute inset-0 w-full h-full object-cover" src="/page-55.jpeg" />
<div class="absolute inset-0 bg-black/60"></div>

<div class="relative z-10">

# Uygulama 2
[Tekrar · Dönüşüm · Simetri]{style="font-style: italic; color: #ddd"}

</div>

---
layout: two-cols
class: pr-6 mt-30
title: for döngüsü
---

# `for` döngüsü

```js
for (let x = 0; x < width; x += 100) {
  circle(x, 200, 40);
}
```

::right::

<v-clicks>

- `let x = 0`: **başlangıç**
- `x < width`: **koşul**. Doğru olduğu sürece devam et
- `x += 100`: **adım**. Her turda x'i 100 artır
- Dokuyucunun "her 4 atkıda bir tekrarla" kuralı = bir **döngü**
- Su yolu, bordür, etek motifleri… hepsi döngü

</v-clicks>

---
layout: center
class: p-0
title: For loop simülatörü
---

<Embed src="sim/for-loop.html" :w="1180" :h="760" :size="800" />

<!-- Başlangıç, koşul ve adım değerlerini değiştirerek kaç tur döndüğünü birlikte sayın. -->

---
layout: center
class: p-0
title: Nested loops simülatörü
---

<Embed src="sim/nested-loops.html" :w="1180" :h="760" :size="800" />

<!-- İç içe döngü = ızgara. Dış döngü sütunlar (çözgü), iç döngü satırlar (atkı). -->

---
layout: two-cols
class: pr-4
title: 04 · Tekrar
---

# 04 · Tekrar: ızgara

<<< @/public/sketches/04-repetition/sketch.js js {12-16|14|19-22|all}{lines:true,maxHeight:'420px'}

::right::

<div class="flex flex-col items-center mt-6">
<img class="w-[300px] rounded-md border border-white/15" src="/hayat-agaci/hayat-agaci-desen.jpg" />
<a class="text-sm mt-2" href="https://editor.p5js.org/alptugan/sketches/CrtND4FJ-" target="_blank">p5.js kaynak kodu ↗</a>
</div>


---
layout: two-cols
class: pr-4
title: 05 · Dönüşüm
---

# 05 · Dönüşüm + rastlantı

<<< @/public/sketches/05-transformation/sketch.js js {11-16|13|14|all}{lines:true,maxHeight:'420px'}

::right::

<div class="flex flex-col items-center mt-6">
<img class="w-[380px] rounded-md border border-white/15" src="/hayat-agaci/hayat-agaci-donusum.jpg" />
<a class="text-sm mt-2" href="https://editor.p5js.org/alptugan/sketches/QeceQDIvb" target="_blank">p5.js kaynak kodu ↗</a>
</div>

---
layout: two-cols
class: pr-4
title: 06 · Simetri
---

# 06 · Dönme simetrisi

<<< @/public/sketches/06-symmetry/sketch.js js {12|14-21|16|17-18|all}{lines:true,maxHeight:'420px'}

::right::

<div class="flex flex-col items-center mt-6">
<img class="w-[380px] rounded-md border border-white/15" src="/hayat-agaci/hayat-agaci-simetri.jpg" />
<a class="text-sm mt-2" href="https://editor.p5js.org/alptugan/sketches/NpL6aFZsq" target="_blank">p5.js kaynak kodu ↗</a>
</div>
