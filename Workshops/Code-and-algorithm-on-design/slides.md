---
background: https://cover.sli.dev
title: Code and Algorithm on Design
exportFilename: "code-and-algorithm"
class: text-center
highlighter: shiki
lineNumbers: true
info: |
    ## Özyeğin University Course Presentation
    Lecturer Alp Tuğan, PhD

    Access all week contents @[Github/alptugan](https://github.com/alptugan/Slidev_Presentations)
drawings:
    persist: true
aspect-ratio: 16/9
css: unocss
download: true
# export options
# use export CLI options in camelCase format
# Learn more: https://sli.dev/guide/exporting.html
export:
    format: pdf
    timeout: 30000
    dark: true
    withClicks: false
    withToc: true
# controls whether texts in slides are selectable
selectable: true
codeCopy: true
# favicon, can be a local file path or URL
themeConfig:
    primary: "#ffcc00"
transition: fade-out
theme: seriph
---

# Coding as Creativity

Influences of software tools on contemporary design & visual culture

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    COD 208 - Week 03 Class <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->


---
layout: default
---
# Table of Contents
<Toc :columns="2" />


---
transition: slide-up
image: /bg1.png
layout: image-right
title: Questions
---
🎨 HOW HAS SOFTWARE AFFECTED THE VISUAL ARTS & DESIGN?

<br>

🤹 WHAT IS THE POTENTIAL FOR SOFTWARE WITHIN THE VISUAL ARTS?

<br>

🧑‍💻 AS A DESIGNER OR ARTIST, WHY WOULD I WANT OR NEED TO WRITE SOFTWARE?


---
transition: slide-left
layout: center 
class: text-center
preload: false
---
# Coding As Medium

<div v-motion
  :initial="{ opacity: 0 }"
  :enter="{ opacity: 1 }"
  :delay="200">
Numerous prominent architects, designers, video game developers, and animators use software to bring their ideas to life. Custom programs are often commissioned to perfect their visions.
</div>

<!--Artists such as Gilbert and George, Jeff Koons, and Takashi Murakami have embraced the use of software in their creative processes. Architects, designers, video game developers, and Hollywood animators all utilize software to bring their ideas to life. Custom programs are often commissioned to perfect their visions.-->

<!-- prettier-ignore-start -->

---
transition: slide-left
image: /2001-Koons-Easyfun-Lips-1024x727.jpg
layout: image-right 
preload: false
---
<!-- prettier-ignore-end -->

# Jeff Koons

<div v-click>
  Koons' use of digital technology is in his "Easyfun-Ethereal" series, which features digitally rendered images of food and other consumer goods. Koons uses 3D modeling software to create the images, which are then printed onto canvas or other materials using a digital printing process.
</div>
<br>
<div v-click>
  Overall, while Jeff Koons is not a digital artist per se, he has embraced digital technology as a tool in the creation of some of his works, blurring the lines between traditional and digital art forms.
</div>

<!-- prettier-ignore-start -->

---
transition: slide-left
image: /Takashi-Murakami.-Photo-by-Okazumi-Chika.jpg
layout: image-right 
preload: false
---
<!-- prettier-ignore-end -->

# Takashi Murakami

<div v-click>
Murakami is not typically considered a software artist, he has collaborated with software developers and designers to create interactive and digital artworks.
</div>
<br>
<div v-click>
Murakami's use of software in his art is his collaboration with the Japanese video game company, Capcom. In 2012, Murakami worked with Capcom to design a video game called "Asura's Wrath," for which he created the game's final boss character and an ending sequence featuring his signature flower motifs.
</div>

<!-- prettier-ignore-start -->

---
transition: slide-left
image: /asura_large_red.0.jpg
layout: image
preload: false
---
<!-- prettier-ignore-end -->

# Asura's Wrath

Final boss at the Capcom's game.

<!-- prettier-ignore-start -->

---
transition: slide-up
layout: two-cols
---
<!-- prettier-ignore-end -->

# Superflat Monogram for Luis Vitton

<div style="margin-right:40px">
One example of Takashi Murakami's digital artwork is "Superflat Monogram," which is a collaboration with Louis Vuitton. "Superflat Monogram" is a series of animated short films that feature Murakami's signature anime-inspired characters and motifs, alongside the iconic Louis Vuitton monogram pattern. The films were created using a combination of hand-drawn and computer animation techniques, and were originally shown as part of a larger installation at the Museum of Contemporary Art in Los Angeles in 2007.
</div>

::right::
<Youtube id="mHueKA5Ha_A" width="100%" height="100%"/>

<!-- prettier-ignore-start -->

---
transition: slide-up
layout: two-cols
---
<!-- prettier-ignore-end -->

# Design, Art, Architecture

The form defined as visual and spatial structures.

::right::

# Code

The code is defined by computer programs.

-   P5JS
-   openFrameWorks
-   Touchdesigner
-   MAX
-   Sonic Pi

<!-- prettier-ignore-start -->

---
transition: slide-up
layout: image-right
image: /code.jpg
---
<!-- prettier-ignore-end -->

# What is Code?

Codes typically serve three primary purposes. Namely; communication, clarification, or obfuscation.

<v-clicks>

-   Morse Code <carbon-arrow-right class="text-xl text-orange-300"/> "-- -.--"
-   DNA Code <carbon-arrow-right class="text-xl text-orange-300"/> "AAAGTCTGAC" <br>(A: Adenine, G: Guanine, T: Thymine, C: Cysotine)
-   Book ISBN <carbon-arrow-right class="text-xl text-orange-300"/> "988-29392" points to specific qualities of the printed material
-   National Languages <carbon-arrow-right class="text-xl text-orange-300"/> "English, Turkish, German..."

</v-clicks>

<v-click>

In computer programming "coding" is a series of instructions written by the developer using a specific syntax of a programming language.

</v-click>

<!-- prettier-ignore-start -->

---
transition: slide-left
image: /wqcfycq156871.webp
layout: image
---
<!-- prettier-ignore-end -->

# Algorithms

Determines how to do sequences of coded instructions.

<v-click>

🪡 How does knitting work?

</v-click>

<div v-click>

🤔 Is knitting an algorithm?

</div>

<!-- <img border="rounded" src="/thumbnails-garter-checkerboard-2021-1200x1200.jpg.webp">-->

<style>
h1,p {
  color: #fff !important;
  text-shadow: 2px 2px 10px black;
}

</style>

<!-- prettier-ignore-start -->

---
transition: slide-left
layout: center
---
<!-- prettier-ignore-end -->

<img border="rounded" width="500" src="/thumbnails-garter.jpg">

<!-- prettier-ignore-start -->

---
transition: slide-up
layout: two-cols
---
<!-- prettier-ignore-end -->

<img border="rounded" width="500" src="/code1.jpg">
::right::
<img border="rounded" width="500" src="/code2.jpg">

<style>
img {
  scale: 0.85;
}
</style>


---
transition: slide-up
layout: center
---
# Qualities of an Algorithm

<v-clicks>

1. 🗺️ [MULTIPLENESS] There is not just single way to create an algorithm.
2. 🤔 [ASSUMPTIONS] There must be determined conditions.
3. 👉 [DECISIONS] An algorithm includes decisions.
4. 🃏 [MODULAR] Algorithms should be broken down into modular pieces.

</v-clicks>

<!-- prettier-ignore-start -->

---
transition: slide-up
layout: quote
---
<!-- prettier-ignore-end -->

# Computers & Code

Writing in a human language allows the author to utilize the ambiguity of words and to have great flexibility in constructing phrases. These techniques allow multiple interpretations of a single text and give each author a unique voice. Each computer program also reveals the style of its author, but there is far less room for ambiguity.[^1]

[^1]: Casey Reas and Ben Fry, Processing: A Programming Handbook for Visual Designers and Artists (Cambridge, MA: MIT Press, 2007), 17.

<!-- prettier-ignore-start -->

---
transition: slide-up
layout: center
---
<!-- prettier-ignore-end -->

human-readable format <carbon-arrow-right class="text-xl text-orange-300"/> machine code (binaries, executables) <carbon-arrow-right class="text-xl text-orange-300"/> SOFTWARE

<v-click>

<img border="rounded"  src="/code3.jpg">

</v-click>

<v-click>

0s and 1s is the lowest level. Each **bit** (1, 0) is grouped into **bytes**

</v-click>
