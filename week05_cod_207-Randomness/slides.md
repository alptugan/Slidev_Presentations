---
background: https://source.unsplash.com/collection/94734566/1920x1080
title: Week 05 - Randomness
exportFilename: "week05-cod207-Randomness-"
class: text-center
highlighter: shiki
lineNumbers: true
info: |
    ## Özyeğin University Course Presentation
    Lecturer Alp Tuğan

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
    timeout: 60000
    dark: true
    withClicks: false
    withToc: true
# controls whether texts in slides are selectable
selectable: true
codeCopy: true
# favicon, can be a local file path or URL
favicon: "https://www.alptugan.com/v5/favicon-192.png"
themeConfig:
    primary: "#ffcc00"
transition: fade-out
theme: seriph
src: ./pages/header.md
---

---
layout: default
---
# Table of Contents

<Toc :columns="2" />



---
image: /imageV.jpg
layout: image-left
---


# Wrap-up (Summary)

Things we learn about P5JS programming language.
- Variables
- Styling shape properties `stroke()`, `noStroke()`, `fill()`, `noFill()`
- Computational Thinking

---
layout: statement
class: text-left text-8
---

# Computational Thinking Framework


<div v-click>
1️⃣ Decomposition 
</div>

<div v-click>
2️⃣ Pattern Recognition 
</div>

<div v-click>
3️⃣ Abstraction 
</div>

<div v-click>
4️⃣ Algorithm
</div>




---
layout: statement
class: text-center 
---

# Generative Art Paradigms: Randomness

---
class: text-center
title: Video Screening
---


<Youtube id='d2LC6Am9bZI' width='100%' height='100%' />

<!--
Other Videos in the list
Blockchain and Beyond: https://www.youtube.com/watch?v=gRTyDYp7vPQ
GRAILS: https://www.youtube.com/watch?v=pMhxA3ZCJYo
Ringers: https://www.youtube.com/watch?v=uP09qFC2R7E
Vera Molnar: https://www.youtube.com/watch?v=8tNESHtfkr0
Themes and Variations: https://www.youtube.com/watch?v=RY--GUJbMdI
-->



---
layout: two-cols-header
class: text-center
---


<!--<img class='bgCover' blur-30 src='/imageH.jpg' />-->

# Randomness
Randomness can manifest in various ways and is a fundamental concept in fields such as mathematics, statistics, science, and philosophy.


::left::
# 🌦️ Deterministic
Deterministic in principle, random in practice (E.g Weather)

::right::
# 🎲 Stockhastic
True randomness (E.g Rolling dice, toss a coin...)




---
layout: image-left
image: /cybernetic serendipity.jpg
class: text-left
---

# Randomness in Generative Art
Randomness plays a significant role in generative art, where it can be used as a creative tool to introduce variability, unpredictability, and serendipity into the artistic process.

<div v-click pb-2>
🌿 Organic patterns and textures.
</div>


<div v-click pb-2>
🎨 Unique compositions; Altering position, shape, color, or texture instantly.
</div>

<div v-click pb-2>
🔀 Alternative variations
</div>

<div v-click pb-2>
♻️ Combining with iterative actions
</div>


<div v-click>
🎥 Dynamic Content Creation
</div>

---
layout: default
---
# Perlin Noise
<iframe width="100%" height="360" frameborder="0" src="https://www.shadertoy.com/embed/MdX3Rr?gui=true&t=10&paused=true&muted=false" allowfullscreen></iframe>

---
layout: two-cols-header
class: text-left
---

# L-Systems, Iterative Actions
An L-system or Lindenmayer system is a parallel rewriting system and a type of formal grammar. Ordered distrubution of instructions. 
(ref: [🔗Wikipedia](https://en.wikipedia.org/wiki/L-system))

::left::
<img pr-10 src='/lsystem2.png' />

::right::

<img src='/lsystem.png' />

---
layout: default
class: text-center
---

# Alternative Variations
<div class='grid grid-cols-3 gap-4'>
<div>
<img src='/nake1.webp' />
</div>
<div>
<img src='/nake2.webp' />
</div>
<div>
<img src='/nake3.webp' />
</div>
</div>

Frieder Nake, Walk Through Raster, 1966

---
layout: default
class: text-center
---
# Alternative Variations

<img h-100 m-auto pb-4 src='/peter_beyls.png' />
Peter Beyls, Untitled, 1981

---
layout: default
class: text-center
---

# Iterative Actions

<img src='/longloop.png' />

Paul Brown, Long Loop, 2000

---
layout: default
class: text-center
---
# Iterative Actions

<img h-100 m-auto pb-10 src='/1968_KomuraYamanaka_ReturntoaSquareb.jpg' />
Masao Komura and Kunio Yamanaka, Return to a Square, 1968

---
layout: two-cols-header
class: text-center 
title: Reference
---

<div text-30 text-yellow-400 text-center><b>Familiar?</b></div>

::left::
<v-click>
<img src='/bander1.jpg' />

</v-click>

::right::

<v-click>
<img src='/bander2.jpg' />

</v-click>

---
layout: default
class: text-center
---

# Dynamic Content Generation

<iframe src="https://openprocessing.org/sketch/1744738/embed/" width="100%" height="400"></iframe>


---
layout: default
class: text-center
---
<Youtube id='gWF05AA9OLY' width='100%' height='100%' />


---
layout: default
class: text-center
title: Selected Student Works Page
---

<a href="https://sites.google.com/ozyegin.edu.tr/cod-207-selected-projects/2021-2022"><img h-115 m-auto src='/cod207_selected.png' /></a>

---
layout: default
class: text-center
title: RandomSeed Web Page
---
<a href="https://randomseed.cargo.site/"><img h-115 m-auto src='/randomseed-w.png' /></a>

---
src: ./pages/break.md
hide: false
---


---
layout: section
class: text-center text-yellow 
---

# Random Function In P5JS

<img class='bgCover' src='/grad-bg3.jpg'/>

---
layout: default
class: text-left
---

# Challenge
1. Goto p5js documentation web site → [random()](https://p5js.org/reference/#/p5/random)
2. Create a new sketch on your openProcessing account.
3. Set the canvas size to 600 x 400 px
4. Write a program that draws a circle in the center of the page.
5. Set the circle's parameters using variables. Do not type numbers inside the paranthesis.
6. Set circle's radius using `random()` function. The minimum value is 10 and maximum value is 300.


---
src: ./pages/assignment.md
hide: false
---