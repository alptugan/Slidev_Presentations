---
layout: section
title: Vaka Çalışması · Eli Belinde
---

# Vaka Çalışması
[Eli Belinde · motifi parçalarına ayırmak]{style="font-style: italic; color: grey"}

---
layout: image-right
image: /motifs/eli-belinde.jpg
backgroundSize: contain
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
layout: default
title: Parçadan koda
---

# Parçadan koda

| # | Parça | Geometri | p5.js |
|---|---|---|---|
| 1 | Kafa | beşgen | `beginShape()` + 5 × `vertex()` |
| 2 | Boyun | dikdörtgen | `rect()` |
| 3 | Omuz | ince dikdörtgen | `rect()` |
| 4 | Gövde | ters yamuk | `quad()` |
| 5–6 | Sol kol + el | 7 köşeli çokgen | `beginShape()` → fonksiyon `kol()` |
| 7–8 | Sağ kol + el | sol kolun **aynası** | `scale(-1, 1)` + `kol()` |
| 9 | Bel | dikdörtgen | `rect()` |
| 10 | Bacaklar / etek | yamuk | `quad()` |
| 11–14 | Etek motifleri | **aynı üçgen × 4**, aşağı kayarak | `for` + `triangle()` |

<p v-click class="mt-4 text-center">14 parça → <b>8 farklı fikir</b>: tekrar eden her şey bir <b>döngü</b> ya da <b>fonksiyon</b> olur.</p>

<style>
table { font-size: 0.85rem; }
td, th { padding: 0.25rem 0.6rem !important; }
</style>

---
layout: two-cols
class: pr-4
title: 07 · Eli belinde kodu
---

# 07 · Eli belinde

<<< @/public/sketches/07-eli-belinde/sketch.js js {14-17|19-24|26-33|35-42|44-45,69-80|47-51|53-57|59-64|all}{lines:true,maxHeight:'430px'}

::right::

<div class="flex flex-col items-center mt-6">
<Embed src="sketches/07-eli-belinde/index.html" :size="300" />
<a class="text-sm mt-2" href="https://editor.p5js.org" target="_blank">editor.p5js.org ↗</a>
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
layout: center
title: Eli belinde · deneyler
---

# Şimdi sıra sende

<div class="grid grid-cols-2 gap-6 mt-6 text-left">
<div v-click class="p-4 rounded-lg bg-white/5">
<b>1 · Renk</b><br/>
<span class="text-sm opacity-80">Etek motiflerini farklı bir renkle doldur. Kafayı ayrı bir renkte çiz.</span>
</div>
<div v-click class="p-4 rounded-lg bg-white/5">
<b>2 · Döngü</b><br/>
<span class="text-sm opacity-80">Etekteki üçgen sayısını <code>4</code>'ten <code>3</code>'e indir. Aralığı (<code>85</code>) değiştir.</span>
</div>
<div v-click class="p-4 rounded-lg bg-white/5">
<b>3 · Çoğalt</b><br/>
<span class="text-sm opacity-80"><code>eliBelinde()</code>'yi yan yana 3 kez çağır: <code>(200, 400, 0.4)</code>, <code>(400, …)</code>, <code>(600, …)</code></span>
</div>
<div v-click class="p-4 rounded-lg bg-white/5">
<b>4 · Ayna</b><br/>
<span class="text-sm opacity-80">Figürü baş aşağı çevirip ilkinin altına koy. Madalyon çıkıyor mu?</span>
<pre class="text-xs mt-1">eliBelinde(400, 220, 0.4, kirmizi);
push();
translate(400, 400);
scale(1, -1);   // dikey ayna
eliBelinde(0, -180, 0.4, kirmizi);
pop();</pre>
</div>
</div>
