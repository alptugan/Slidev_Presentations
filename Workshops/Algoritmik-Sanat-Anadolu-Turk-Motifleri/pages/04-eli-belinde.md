---
layout: section
title: Vaka Çalışması · Eli Belinde
---

<img class="absolute inset-0 w-full h-full object-cover" src="/page-49.jpg" />
<div class="absolute inset-0 bg-black/50"></div>

<div class="relative z-10">

# Vaka Çalışması
[Eli Belinde · motifi parçalarına ayırmak]{style="font-style: italic; color: #ddd"}

</div>

---
layout: image-right
image: /motifs/eli-belinde.jpg
backgroundSize: contain
class: img-contain
title: Eli belinde nedir?
---

# Eli Belinde

<v-clicks>

- Elleri belinde, stilize bir **kadın figürü**
- Geleneksel yorumlara göre: **dişilik, annelik, doğurganlık, bereket**; ayrıca uğur, kısmet, mutluluk (Yanar; Oyman 2019, s.9–10)
- Yöreye göre adları: *gelin kız, çocuklu kız, aman kız, kahkullu kız, karadöşeme, seleser…* (Özkul, s.5)
- *"Stilizasyonuna rağmen… motif insan formunu korumuştur."* (Oyman 2019, s.11)
- Ayna simetrisiyle çoğaltılınca **eşkenar dörtgen madalyona** dönüşür (Çankırı, Adana, Kayseri, Antalya, Niğde kilimleri)

</v-clicks>

---
layout: center
class: p-0
title: Eli belinde analizi
---

<div class="relative w-[860px] h-[540px] mx-auto">
<img class="absolute inset-0 w-full h-full object-contain rounded-lg" src="/eli-belinde/eli-belinde-01.jpg" />
<img v-click="1" class="absolute inset-0 w-full h-full object-contain rounded-lg" src="/eli-belinde/eli-belinde-02.jpg" />
<img v-click="2" class="absolute inset-0 w-full h-full object-contain rounded-lg" src="/eli-belinde/eli-belinde-03.jpg" />
<img v-click="3" class="absolute inset-0 w-full h-full object-contain rounded-lg" src="/eli-belinde/eli-belinde-04.jpg" />
<img v-click="4" class="absolute inset-0 w-full h-full object-contain rounded-lg" src="/eli-belinde/eli-belinde-05.jpg" />
<img v-click="5" class="absolute inset-0 w-full h-full object-contain rounded-lg" src="/eli-belinde/eli-belinde-06.jpg" />
<img v-click="6" class="absolute inset-0 w-full h-full object-contain rounded-lg" src="/eli-belinde/eli-belinde-07.jpg" />
<img v-click="7" class="absolute inset-0 w-full h-full object-contain rounded-lg" src="/eli-belinde/eli-belinde-08.jpg" />
<img v-click="8" class="absolute inset-0 w-full h-full object-contain rounded-lg" src="/eli-belinde/eli-belinde-09.jpg" />
<img v-click="9" class="absolute inset-0 w-full h-full object-contain rounded-lg" src="/eli-belinde/eli-belinde-10.jpg" />
<img v-click="10" class="absolute inset-0 w-full h-full object-contain rounded-lg" src="/eli-belinde/eli-belinde-11.jpg" />
<img v-click="11" class="absolute inset-0 w-full h-full object-contain rounded-lg" src="/eli-belinde/eli-belinde-12.jpg" />
<img v-click="12" class="absolute inset-0 w-full h-full object-contain rounded-lg" src="/eli-belinde/eli-belinde-13.jpg" />
</div>

<!--
Her tıklamada bir parça daha: 1 kafa, 2 boyun, 3 omuz, 4 gövde, 5-6 sol kol / sol el, 7-8 sağ kol / sağ el, 9 bel, 10 bacaklar (etek), 11-14 etek motifleri.
Katılımcılara sorun: Bu parça hangi temel şekil? Kaç köşesi var? Sağ ve sol aynı mı?
-->


---
layout: two-cols
class: pr-4
title: 07 · Eli belinde kodu
---

# 07 · Eli belinde

<<< @/public/sketches/07-eli-belinde/sketch.js js {14-17|19-24|26-33|35-42|44-45,69-80|47-51|53-57|59-64|all}{lines:true,maxHeight:'430px'}

::right::

<div class="flex flex-col items-center mt-6">
<img class="w-[300px] rounded-md border border-white/15" src="/page-53.jpg" />
<a class="text-sm mt-2" href="https://editor.p5js.org/alptugan/sketches/5rmg7Qs3Z" target="_blank">editor.p5js.org-Temel Şekiller ↗</a>
<a class="text-sm mt-2" href="https://editor.p5js.org/alptugan/sketches/YFXwSp-m0" target="_blank">editor.p5js.org-Trigonometrik↗</a>
</div>

<v-clicks class="text-sm mt-4">

- Motif `(0, 0)` merkezli çizilir; `translate` + `scale` ile yerleşir
- Sağ kol = `scale(-1, 1)` ile **aynalanmış** sol kol
- Etek: aynı üçgen, `i * 85` kadar aşağı kaydırılır

</v-clicks>

<!--
Koordinatlar analiz görselinden (eli-belinde-01) ölçülerek alındı; merkez (821, 570) piksel noktası.
Sırayla: draw → fonksiyon başlığı → kafa → boyun/omuz/gövde → sol kol → sağ kol (ayna) → bel/etek → etek motifleri döngüsü.
-->

---
layout: default
title: Eli belinde · figür ve madalyon
---

# Eli belinde · figürden madalyona

<div class="grid grid-cols-2 gap-10 mt-4">
<div class="flex flex-col items-center">
<img class="w-[320px] rounded-md border border-white/15" src="/eli-belinde/eli-belinde-figur.jpg" />
<a class="text-sm mt-2" href="https://editor.p5js.org/alptugan/sketches/dd6I9ZqBy" target="_blank">p5.js kaynak kodu ↗</a>
</div>
<div class="flex flex-col items-center">
<img class="w-[320px] rounded-md border border-white/15" src="/eli-belinde/eli-belinde-madalyon.jpg" />
<a class="text-sm mt-2" href="https://editor.p5js.org/alptugan/sketches/gDS-uMWxv" target="_blank">p5.js kaynak kodu ↗</a>
</div>
</div>
