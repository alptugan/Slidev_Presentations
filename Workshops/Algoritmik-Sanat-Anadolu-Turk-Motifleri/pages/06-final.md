---
layout: section
title: Final · Algoritmik Kilim
---

# Final
[Kendi algoritmik kilimin]{style="font-style: italic; color: grey"}

---
layout: two-cols
class: pr-4
title: 08 · Final kompozisyon
---

# 08 · Final kompozisyon

<<< @/public/sketches/08-final-composition/sketch.js js {all|9-14|16-23|25-30|32-46|48-60|62-70}{lines:true,maxHeight:'430px'}

::right::

<div class="flex flex-col items-center mt-4">
<Embed src="sketches/08-final-composition/index.html" :w="1000" :h="1000" :size="320" />
<a class="text-sm mt-2" href="https://editor.p5js.org" target="_blank">editor.p5js.org ↗</a>
</div>

<v-clicks class="text-sm mt-3">

- **Bordür** + **hayat ağaçları** (dönme) + **eli belinde halkası** + **serpiştirme**
- `randomSeed(seed)`: rastlantı **tekrarlanabilir** olur. Aynı seed, aynı kilim
- Seed'i değiştir → yeni bir varyasyon

</v-clicks>

---
layout: default
title: İlham
---

# İlham: üretken kilimler

<div class="grid grid-cols-4 gap-3 mt-4">
  <img class="rounded aspect-square object-cover" src="/kilim/kilim-102705739.jpg" />
  <img class="rounded aspect-square object-cover" src="/kilim/kilim-697950674.jpg" />
  <img class="rounded aspect-square object-cover" src="/kilim/kilim-758972575.jpg" />
  <img class="rounded aspect-square object-cover" src="/kilim/kilim-883799037.jpg" />
  <img class="rounded aspect-square object-cover" src="/kilim/kilim-922578786.jpg" />
  <img class="rounded aspect-square object-cover" src="/kilim/kilim-930082387.jpg" />
  <img class="rounded aspect-square object-cover" src="/kilim/kilim-94497393.jpg" />
  <img class="rounded aspect-square object-cover object-top" src="/kilim/kilim-314554495.jpg" />
</div>

---
layout: center
title: Serbest çalışma
---

# Serbest çalışma · 20 dk

<div class="grid grid-cols-3 gap-5 mt-8 text-left text-sm">
<div v-click class="p-4 rounded-lg bg-white/5">
<b>Kolay</b>
<ul>
<li>Paleti değiştir</li>
<li><code>seed</code> değerini değiştir</li>
<li>Halkadaki figür sayısını (<code>12</code>) değiştir</li>
</ul>
</div>
<div v-click class="p-4 rounded-lg bg-white/5">
<b>Orta</b>
<ul>
<li>Bir <b>su yolu</b> bordürü ekle (<code>for</code> + <code>triangle</code>)</li>
<li>Hayat ağacının dallarına renkli yapraklar ekle</li>
</ul>
</div>
<div v-click class="p-4 rounded-lg bg-white/5">
<b>Zor</b>
<ul>
<li>Yeni bir motif fonksiyonu yaz: <b>koçboynuzu</b>, <b>yıldız</b> ya da <b>göz</b></li>
<li>Kendi motifini analiz et: parçala → şekillere çevir → fonksiyon yap</li>
</ul>
</div>
</div>

<p v-click class="mt-8 text-center">Bitirince: <b>File → Share</b> ile bağlantını kopyala ve paylaş.</p>
