---
layout: section
title: Uygulama 2 · Tekrar, Dönüşüm, Simetri
---

# Uygulama 2
[Tekrar · Dönüşüm · Simetri]{style="font-style: italic; color: grey"}

---
layout: two-cols
class: pr-6
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
<Embed src="sketches/04-repetition/index.html" :size="300" />
</div>

<v-clicks class="text-sm mt-4">

- İç içe iki döngü → **ızgara**
- `drawTree()` hiç değişmedi; sadece **nereye** ve **kaç kez** çağrıldığı değişti
- **Dene:** `+= 190` ve `+= 260` aralıklarını değiştir

</v-clicks>

---
layout: two-cols
class: pr-4
title: 05 · Dönüşüm
---

# 05 · Dönüşüm + rastlantı

<<< @/public/sketches/05-transformation/sketch.js js {11-16|13|14|all}{lines:true,maxHeight:'420px'}

::right::

<div class="flex flex-col items-center mt-6">
<Embed src="sketches/05-transformation/index.html" :size="300" />
</div>

<v-clicks class="text-sm mt-4">

- `random(a, b)`: a ile b arasında rastgele bir sayı
- Her ağaç biraz **eğik**, biraz **farklı boyda** → el dokumasının "kusurlu" canlılığı
- Her çalıştırmada **farklı** sonuç (önizlemeyi yenile!)

</v-clicks>

---
layout: two-cols
class: pr-4
title: 06 · Simetri
---

# 06 · Dönme simetrisi

<<< @/public/sketches/06-symmetry/sketch.js js {12|14-21|16|17-18|all}{lines:true,maxHeight:'420px'}

::right::

<div class="flex flex-col items-center mt-6">
<Embed src="sketches/06-symmetry/index.html" :size="300" />
</div>

<v-clicks class="text-sm mt-4">

- Önce merkeze taşı, sonra **8 kez** `TWO_PI / 8` (45°) döndür
- Yıldız, pıtrak, haç motiflerinin kuralı
- **Dene:** `8` yerine `6` ya da `12` yaz. İki yerde birden değiştirmen gerekiyor; bunu bir değişkene (`let n = 8;`) taşı!

</v-clicks>
