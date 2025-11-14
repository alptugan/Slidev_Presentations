---
theme: seriph
# background: 'https://source.unsplash.com/1600x900/?nature,water'
background: https://cover.sli.dev
class: text-center
highlighter: shiki
lineNumbers: true
info: |
    ## ## Sanat ve Tasarım İşlerinde Mikro Denetleyiciler ve Yaratıcı Kodlama
    Learn more at [Github](https://www.github.com/alptugan)
drawings:
    persist: true
transition: slide-up
aspect-ratio: 16/9
css: unocss
title: Sanat ve Tasarım İşlerinde Mikro Denetleyiciler ve Yaratıcı Kodlama
download: true
exportFilename: "slidev-exported-workshop_Arduino"
# export options
# use export CLI options in camelCase format
# Learn more: https://sli.dev/guide/exporting.html
export:
    format: pdf
    timeout: 30000
    dark: true
    withClicks: false
    withToc: false
# controls whether texts in slides are selectable
selectable: true
---

<h1 >Sanat ve Tasarım İşlerinde Mikro Denetleyiciler ve Yaratıcı Kodlama</h1>

Alp Tuğan 

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 p-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Giriş <carbon:arrow-right class="inline"/>
  </span>
</div>
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub" class="abs-br m-6 text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
  <carbon-logo-github />
</a>

<style>
h1, p {
  color: #fff !important;
  text-shadow: 2px 2px 10px black;
  opacity: 1 !important;
}
</style>

---

<Toc />

--- 
image: /alp_tugan_noiseparticle.jpg
layout: image-left
---
# αλπ τυγαν

<v-click>

### Algoritmik Sanat
<div class="pt-2">Skeç ve Projeler <carbon:arrow-right class="inline"/> Instagram & alptugan.com</div>
</v-click>
<br/>


<v-click>

### Müzik & Ses
<div class="pt-2">RAW <carbon:arrow-right class="inline"/>A/V Canlı Kodlama </div>
</v-click>
<br/>

<v-click>

### Akademi
<div class="pt-4">Özyeğin Üniversitesi <carbon:arrow-right class="inline"/> İletişim Tasarımı (2015...)</div>
</v-click>
<br/>



<style>
h1 {
  background-color: #ffcc00;
  background-image: linear-gradient(45deg, #ffcc00 10%, #ffee00 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}

h3 {
  color: #666;
}
</style>

<!--Merhabalar herkes. Ben alptugan. Nerden nereye gidiyorum neler yaptım-->

---
class: px-50
layout: center
---

# Skeç, Projeler, Açık Kaynak

<div class="grid grid-cols-2 px-0">
  <div>
    <a href="https://github.com/alptugan" target="_blank" alt="GitHub" class="m-2 text-22 slidev-icon-btn opacity-50 !border-none !hover:text-white">
      <carbon-logo-github />
    </a>
  </div>

  <div>
    <a href="https://instagram.com/alptugan" target="_blank" alt="Instagram" class="m-2 text-22 slidev-icon-btn opacity-50 !border-none !hover:text-white">
      <carbon-logo-instagram />
    </a>
  </div>

  <div>
    <a href="https://p5js.org/libraries/" target="_blank" alt="P5js" class="m-2 text-22 slidev-icon-btn opacity-50 !border-none !hover:text-white">
      <logos-p5js />
    </a>
  </div>

  <div>
    <a href="https://ofxaddons.com/categories/5-sound" target="_blank" alt="openframeworks" class="m-2 text-22 invert slidev-icon-btn opacity-50 !border-none !hover:text-white">
      <logos-openframeworks />
    </a>
  </div>
</div>

<!-- Açık Kaynak

Neden paylaşıyorum?

 -->

---
image: /raw-sonar+D.jpg
layout: image
---
### RAW

<a href="https://open.spotify.com/artist/7f6C7oZyy2nlsZnugwdClw?si=37uTq-X1RFu_uKgcHQnc3w" target="_blank" alt="GitHub" class="m-6 text-50 slidev-icon-btn opacity-50 !border-none !hover:text-white">
  <logos-spotify />
</a>


<!--
<img px-90 pt-60 src="/RAW_Gate_Cover.jpg"/>
Canlı Kodlama Nedir?

2016

Görsel-İşitsel Performanslar yapıyoruz.

Spotify'dan dinleyebilirsiniz. Sosyal Medya Kanallarından bakabilirsiniz.

Bir de Türkiye'de bu işler gelişsin diyerekten Algorave İstanbul Topluluğunu kurduk.

Discord

Bandcamp'ten Albümler

http://rawlivecoding.com/

-->

---
image: /ozu.jpg
layout: image
---
# Özyeğin Üniversitesi: RandomSeed

<!--
2015'ten beri Yaratıcı Kodlama, Ses Tasarımı, Ses Sanatları, Fiziksel Veri İşleme

Daha detaylı bilgiye ilgili sayfadan ulaşabilirsiniz

https://randomseed.cargo.site/-->

---
layout: image-left
image: /imageH2.jpg
class: text-left
---

# Yaratıcı Kodlama?
Yazılım ve teknolojik donanımları deneysel yöntemlerle kullanma pratiklerini içeren disiplinler arası bir alan olarak özetlenebilir. 

<!--
Yeni medya, dijital sanat, Nereden kucağımıza düştü? 

aslında düşmedi. Sadece populer hale geldi ve bu bir hype yarattı. 

Arkasında teknolojik ve sosyolojik bir çok etmen bulunmaktadır.

 Konumuz bu değil. O yüzden uzatmadan biraz geçmişten bahsedelim. 

60lar da Computers & Automation → Bilinen ilk yarışma

Frieder Nake, Vera Molnar, Jorge Nees öncül bilgisayarla çalışan sanatçılar. Jeneratif sanatın öncüleri. 

Nake şöyle diyor;
https://www.youtube.com/watch?v=rE_dGfuFWL4&list=PLvcJjvBzWDXbnxGsrHps1HQOpFeZ6_rDs&index=74&t=30s&ab_channel=drehkreuzvideoproduction

-->

---
layout: image-left
image: /imageH3.jpg
class: text-left
---

# Mikro-Denetleyiciler ve Fiziksel Veri İşleme (Physical Computing)
- Mikro-denetleyiciler; Elektronik projelerde kullanılabilen küçük ancak işlevsel cihazlardır. 
- Fiziksel Veri İşleme; Yazılım ve teknolojik donanımlar vasıtasıyla, analog dünyadaki olgularını sayısal veriye dönüştürme işlemidir.

---
class: text-left
layout: image
image: /7981842641_fd61bc2949_o.jpg
---
# Ivrea Interaction Design Institute, ITALYA

---
class: text-left
layout: image
image: https://source.unsplash.com/fZB51omnY_Y
---
# Neden Arduino?
- Ucuz
- Platformalar Arası
- Basit ve sade programlama arayüzü
- Açık kaynak
- Genişletilebilir ve Esnek

---
class: text-center
layout: section
---
# Nasıl Çalışır?

---
layout: default
transition: slide-up
class: m-0 p-0
---

<div class="container2">
  <div v-click class="box">
  <div class="p-40" >
    <img src="/arduino.png"/>
  </div>
  </div>
</div>

<style>
.box {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  font-family: sans-serif;
  text-align: center;
  line-height: 1;
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;

}

.container2 {
  background-image: url("/gary.jpg"), linear-gradient(rgb(219, 166, 166), rgb(0, 0, 172));
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
}
</style>


---
layout: section
---
# Örnek Arduino Projeleri

---
transition: slide-up
class: p-0 m-0
---

<Youtube width="100%" height="100%" static id="qsoegBtFU_8" />

---
class: p-0
---
<iframe title="vimeo-player" src="https://player.vimeo.com/video/228231006?h=9ebe338f85" width="100%" height="100%" frameborder="0"    allowfullscreen></iframe>

---
class: p-0
---
<iframe title="vimeo-player" src="https://player.vimeo.com/video/285278045?h=1b2514e383"  width="100%" height="100%" frameborder="0"    allowfullscreen></iframe>

---
class: p-0
---
<iframe title="vimeo-player" src="https://player.vimeo.com/video/228219899?h=bce63cdac9" width="100%" height="100%" frameborder="0"    allowfullscreen></iframe>

---
class: p-0
---
<Youtube width="100%" height="100%" static id="XY1ULPE9i2M" />
<!--<video src="OSRO-animation.mp4" controls=""></video>-->


---
class: p-0
---
<Youtube width="100%" height="100%" static id="YkV7pVhnU8Q" />


---
class: p-0
---
<Youtube width="100%" height="100%" static id="Bs6Tv-rLupI" />

---
layout: section
---
# Nasıl Öğrenebilirim?


---
layout: image
image: /arduino2.webp
transition: slide-up
class: p-30
---
# Arduino Way

<v-click>

## ⚒️ Make instead of talking
</v-click>

<v-click>

## 😭 Getting lost 💩
</v-click>

<v-click>

## 🤓 Hacking
</v-click>


---
layout: section
image: /imageV.jpg
transition: slide-up
class: p-30 
---
# DENEY 🧪


---
layout: default
---
# Kaynaklar

<div class="grid grid-cols-3">

<div>
<a href="https://docs.arduino.cc/built-in-examples/" target="_blank" alt="GitHub" class="m-2 text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
<img max-h-37 src="/k2.jpg"/>
<p>Arduino Örnekleri</p>
</a>
</div>

<div>
<a href="https://wokwi.com/projects/359311440483543041" target="_blank" alt="GitHub" class="m-2 text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
<img h-37 src="/uno.png"/>
<p>Arduino Simülatörü</p>
</a>
</div>

<div>
<a href="https://www.youtube.com/watch?v=zJ-LqeX_fLU&ab_channel=freeCodeCamp.org" target="_blank" alt="Youtube" class="m-2 text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
<img h-37 src="/k3.jpg"/>
<p>Youtube</p>
</a>
</div>

<div>
<a href="https://projecthub.arduino.cc/" target="_blank" alt="GitHub" class="m-2 text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
<img h-37 src="/k4.jpg"/>
<p>Arduino Projects</p>
</a>
</div>

<div>
<a href="https://www.instructables.com/Intro-to-Arduino/" target="_blank" alt="Instructables" class="m-2 text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
<img h-37 bg-white src="/instructables-logo-2023.svg"/>
<p>Instructables</p>
</a>
</div>

<div>
<a href="https://www.amazon.com/s?k=MAking+Things+Talk" target="_blank" alt="Instructables" class="m-2 text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
<img h-37 src="/k7.jpg"/>
<p>Books</p>
</a>
</div>

</div>

---
layout: default
---
# Kaynaklar

<div class="grid grid-cols-2 ">

<div>
<a href="https://www.creativeapplications.net/tag/arduino/" target="_blank" alt="Creative Applications" class="m-2 text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
<img max-h-40 src="/k8.jpg"/>
<p>Creative Applications</p>
</a>
</div>

<div>
<a href="https://hackaday.io/search?term=arduino" target="_blank" alt="Hackaday" class="m-2 text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
<img max-h-40 src="/k9.jpg"/>
<p>Hackaday</p>
</a>
</div>

<div>
<a href="https://www.circuitbasics.com/arduino/" target="_blank" alt="Circuit Basics" class="m-2 text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
<img max-h-40 src="/k10.jpg"/>
<p>Circuit Basics</p>
</a>
</div>

<div>
<a href="https://www.circuitbasics.com/arduino/" target="_blank" alt="Fritzing" class="m-2 text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
<img max-h-40 src="/k11.jpg"/>
<p>Fritzing</p>
</a>
</div>

</div>


---
layout: center
---
<h1 class="px-13">Teşekkürler 🖖</h1>

<a href="https://github.com/alptugan" target="_blank" alt="GitHub" class="m-6 text-10 slidev-icon-btn opacity-50 !border-none !hover:text-white">
  <carbon-logo-github />
</a>

<a href="https://www.instagram.com/alptugan/" target="_blank" alt="GitHub" class="m-6 text-10 slidev-icon-btn opacity-50 !border-none !hover:text-white">
  <carbon-logo-instagram />
</a>

<a href="https://www.alptugan.com/" target="_blank" alt="GitHub" class="m-6 text-10 slidev-icon-btn opacity-50 !border-none !hover:text-white">
  <mdi-account-circle />
</a>

