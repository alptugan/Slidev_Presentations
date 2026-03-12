---
theme: apple-basic
css: unocss
image: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: COD 412 Sound Projects & Media
info: |
  ## COD 412 Sound Projects & Media
  Author: Alp Tuğan, PhD

  Learn more at [alptugan.com](https://alptugan.com)
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: fade-out
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
# duration of the presentation
duration: 35min
colorSchema: dark
glowSeed: 4
lineNumbers: true
routerMode: hash
selectable: true
codeCopy: true
favicon: "https://www.alptugan.com/v6/favicon-192.png"
layout: image-to
themeConfig:
  primary: "#ffcc00"
  secondary: "#e2d292"
---

# COD 412 Sound Projects & Media

week 05 - Sound Art

<div @click="$slidev.nav.next" class="mt-12 py-1" hover:bg="white op-10">
  Press Space for next page <carbon:arrow-right />
</div>

<div class="abs-br m-6 text-xl">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="slidev-icon-btn">
    <carbon:edit />
  </button>
  <a href="https://github.com/alptugan" target="_blank" class="slidev-icon-btn">
    <carbon:logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
This is a [red text]{style="color:red"}
-->

---

<Toc columns="2" />

---
image: /s1.jpg
layout: image
title: Goethe
---

--- 
layout: quote
class: text-shadow-md
preload: true
title: Seven Tears
---


# "Sound is materially invisible but very visceral and emotive. It can define a space at the same time as it triggers a memory."

<div italic text-right mt-10 mx-15 text-shadow-md>
  <div
    v-motion
    :initial="{ opacity: 0, x: -20 }"
    :enter="{ opacity: 1, x: 0, color:$slidev.themeConfigs.primary}"
    :duration="1000"
    :delay="400">
    ~ Susan Philipsz
  </div>
</div>

<div>
  <img class="bgCover" src='/s2.webp'/>
  <div class="caption">"Seven Tears", Sound Installation, Hannover, 2016</div>
</div>

<!--https://www.artsy.net/artwork/susan-philipsz-seven-tears-->

---
image: /thom-kubli-black-hole-horizon-front-2.jpg
layout: image
class: text-shadow-md
---

# What is Sound Art?

<v-clicks>

- Sound art is an artistic medium that uses sound as its primary medium.
- It is an interdisciplinary practice that combines elements of music, sculpture, performance, and installation art.
- Sound artists use various tools and techniques to manipulate sound and create unique auditory experiences for the audience.
</v-clicks>

<div class='caption'>
Thom Kubli, "Black Hole Horizon", Sound Installation, Ars Electronica Festival, 2016
</div>

---
class: text-shadow-md h-full w-full
title: Black Hole
---

<iframe title="vimeo-player" src="https://player.vimeo.com/video/121111319?h=eaa18de342" width="100%" height="100%" frameborder="0"    allowfullscreen></iframe>

<!--https://ars.electronica.art/aeblog/en/2016/08/23/black-hole-horizon/-->

---
layout: center
---

# The History of Sound Art

<v-clicks>

- Sound art has a rich history that dates back to the early 20th century.
- Early sound artists, such as Luigi Russolo and John Cage, used sound as a means of challenging traditional forms of music and art.
- In the 1960s and 1970s, sound art became a more established art form, with the emergence of artists such as Max Neuhaus and La Monte Young.
</v-clicks>

---
layout: center
---

# Techniques and Tools Used in Sound Art

<v-clicks>

- Sound artists use a variety of techniques and tools to manipulate sound and create unique auditory experiences.
- Some common techniques include sampling, field recording, and live performance.
- Tools used by sound artists include software programs, synthesizers, and various types of recording equipment.
</v-clicks>

---
layout: center
---

# Applications of Sound Art

<v-clicks>

- Sound art can be used in a variety of contexts, including installations, performances, and film.
- It can be used to create immersive experiences that engage the audience in new and exciting ways.
- Sound art can also be used as a tool for social and political commentary.
</v-clicks>

---
layout: center
---

# The Impact of Sound Art on Society

<v-clicks>

- Sound art has the ability to transcend cultural boundaries and connect people through shared experiences.
- Sound art installations in public spaces can create a sense of community and encourage social interaction.
- Sound art has been used to raise awareness about important social and political issues, such as climate change and human rights.
</v-clicks>

---
src: /pages/break.md
---


---
layout: fact
transition: fade
title: Notable Artists
---

<h1 text-shadow-md style="color:white!important">Notable Artist Working with Sound</h1>

<img class="bgCover" src='https://source.unsplash.com/fMXyMuOxuYU'/>


---
layout: statement
transition: fade
title: John Cage
---

<h1 text-shadow-md style="color:white!important">John Cage</h1>
<img class="bgCover" src='/john-cage.webp'/>

<div
text-shadow-xl
px-40
v-motion
:initial='{ opacity: 0, y: -20 }'
:enter='{ opacity: 1, y: 0 }'
:duration='1000'
:delay='400'>
 - known for his experimental music and use of chance operations in musical compositions.
</div>

<div class='caption'>
John Cage during his 1966 concert at the opening of the National Arts Foundation in Washington, D.C.
</div>

---
title: John Cage - Variations VII
---

<Youtube id='JxeFhRZwU84' width='100%' height='450'/>

---
layout: statement
transition: fade
title: Brian Eno
---
<h1 text-shadow-md style="color:white!important">Brian Eno</h1>
<img class="bgCover" src='/Eno-Brian-1974-01_2.jpg'/>

<div
text-shadow-xl
px-40
v-motion
:initial='{ opacity: 0, y: -20 }'
:enter='{ opacity: 1, y: 0 }'
:duration='1000'
:delay='400'>
  - musician and producer who popularized ambient music and pioneered generative music.
</div>

---
title: Brian Eno Video
---

<Youtube id='OlaTeXX3uH8' width='100%' height='450'/>

---
layout: statement
transition: fade
title: Pauline Oliveros
---
<h1 text-shadow-md style="color:white!important">Pauline Oliveros</h1>
<img class="bgCover" src='/pauline.png'/>

<div
v-motion
text-shadow-xl
px-40
:initial='{ opacity: 0, y: -20 }'
:enter='{ opacity: 1, y: 0 }'
:duration='1000'
:delay='400'>
  - composer and accordionist who developed the concept of "deep listening" and explored the use of technology in performance.
</div>

<div class='caption'>
COURTESY OF THE CENTER FOR CONTEMPORARY MUSIC ARCHIVE, MILLS COLLEGE, AND SISTERS WITH TRANSISTORS
</div>

---
title: Pauline Oliveros - Bye Bye Butterfly
---

<Youtube id='DMCTxkFwLHw' width='100%' height='450'/>


---
layout: statement
transition: fade
title: Max Neuhaus
---

<h1 text-shadow-md style="color:white!important">Max Neuhaus</h1>
<img class="bgCover" src='/art_1985_maxneuhaus-montparnassebykleinefenn_015full_00.jpg'/>

<div
v-motion
text-shadow-xl
px-40
:initial='{ opacity: 0, y: -20 }'
:enter='{ opacity: 1, y: 0 }'
:duration='1000'
:delay='400'>
  - sound artist who created site-specific sound installations and experimented with the use of sound in public spaces.
</div>

<div class='caption'>
Max Neuhaus at Metro Montparnasse station, Paris, 1985. Ph. Florian Kleinefenn.
</div>




<!--https://en.doppiozero.com/materiali/max-neuhaus/neuhaus-time-->


---
title: Max Neuhaus - Time Square
---
<Youtube id='kA-fihBFWBI' width='100%' height='450'/>

<!--There is a mysterious sound tucked into the middle of New York’s Times Square. Among the honking horns, shuffling tourists, and screeching bus tires, it resonates below the surface. 
New York Out Loud is produced by Jocelyn Frank. Production: Nathan Fitch, Fivel Rothberg, and Patrick Southern-->

---
layout: statement
transition: fade
title: Alvin Lucier
---

<h1 text-shadow-md style="color:white!important">Alvin Lucier</h1>
<img class="bgCover" src='/lucier.webp'/>

<div
v-motion
text-shadow-xl
px-40
:initial='{ opacity: 0, y: -20 }'
:enter='{ opacity: 1, y: 0 }'
:duration='1000'
:delay='400'>
  - composer and performer who explored the physical properties of sound and the relationship between sound and space.
</div>

<div class='caption'>
Alvin Lucier rehearsing "Music for Solo Performer" (1965) at Brandeis University, Waltham, MA, March 6, 1967
</div>

---
title: Alvin Lucier - Music for Solo Performer
---

<Youtube id='bIPU2ynqy2Y' width='100%' height='450'/>

---
layout: statement
transition: fade
title: Ryoji Ikeda
---

<h1 text-shadow-md style="color:white!important">Ryoji Ikeda</h1>
<img class="bgCover" src='/Data+Verse+-+1+courtesy+of+Audemars+Piquet+image+3.png'/>

<div
text-shadow-xl
px-40
v-motion
:initial='{ opacity: 0, y: -20 }'
:enter='{ opacity: 1, y: 0 }'
:duration='1000'
:delay='400'>
  - artist who works with sound and digital media, creating installations and performances that explore the limits of human perception.
</div>

<div class='caption'>
‘data-verse 1’ (2019). Image Courtesy of Audemars Piquet. 
</div>

---
title: Ryoji Ikeda - Data Verse
---

<Youtube id='S-vSFDZGfF4' width='100%' height='450'/>

---
layout: statement
transition: fade
title: Janet Cardiff & George Bures Miller
---

<h1 text-shadow-md style="color:white!important">Janet Cardiff & George Bures Miller</h1>
<img class="bgCover" src='/cardiff-miller-darkpool-f.jpg'/>

<div
text-shadow-xl
px-40
v-motion
:initial='{ opacity: 0, y: -20 }'
:enter='{ opacity: 1, y: 0 }'
:duration='1000'
:delay='400'>
  - collaborative artists who create immersive sound installations that blend reality and fiction.
</div>

<div class='caption'>
Janet Cardiff & George Bures Miller Dark Pool 1995 Installation view / photo Cardiff & Miller

</div>
<!--https://canadianart.ca/interviews/cardiff-miller-lost-in-the-memory-place/-->

---
title: Janet Cardiff & George Bures Miller - The Killing Machine
---

<Youtube id='dJ2ew9-Hn3A' width='100%' height='450'/>



---
layout: statement
transition: fade
title: Christina Kubisch
---

<h1 text-shadow-md style="color:white!important">Christina Kubisch</h1>
<img class="bgCover" src='/christina-kubisch-hero_WaVKg6X_display_horizontal.jpg'/>

<div
text-shadow-xl
px-40
v-motion
:initial='{ opacity: 0, y: -20 }'
:enter='{ opacity: 1, y: 0 }'
:duration='1000'
:delay='400'>
  - sound artist who works with electromagnetic fields, creating installations and performances that reveal the hidden sounds of everyday objects and spaces.
</div>

<!--https://tapeop.com/interviews/124/christina-kubisch/-->

---
title: Christina Kubisch - Electrical Walks
---

<Youtube id='5tCphr8pbFk' width='100%' height='450'/>


---
title: Christina Kubisch - Cloud
---

<img class='bgCover' src='/2019_09_27-skuc-oblak-04-700x466.jpg'/>
<div class='caption'>
Topographies of Sound, Christina Kubisch, Cloud (2011/2017)
</div>

<!--Cloud (2011/2017) is a sound sculpture made on site using a several hundred meters of red electrical cable. It is a multi-channel composition that visitors listen to by wearing customized magnetic headphones to explore the hidden acoustic world of sonic cable structures. Each channel has a different composition of electromagnetic waves, and listeners can mix them in their own way: these devices, developed by the artist, contain magnetic coils that receive magnetic fields circulating in cable loops and make them audible. As visitors move around the installation, around this chaotic electrical wiring, which is literally a cloud hanging in the gallery, they trigger the sounds of cables and mix them into an unlimited number of new combinations.-->


---
layout: default
transition: fade
title: Bernhard Leitner
---

<h1 text-shadow-md style="color:white!important">Bernhard Leitner</h1>
<img class="bgCover" src='/1266702034.jpg'/>

<style>
.bgCover{
    right: 0!important;
    left: 50%;
    width: auto;
    height: 100%;
}
</style>

<div
text-shadow-xl
px-0
w-80
v-motion
:initial='{ opacity: 0, y: -20 }'
:enter='{ opacity: 1, y: 0 }'
:duration='1000'
:delay='400'>
- sound artist who creates immersive installations that explore the relationship between sound and architecture.
</div>

<div class='caption'>
© Atelier Leitner - Wing Space 1996
</div>

<!--https://www.archdaily.com/168979/bernhard-leitner-sound-spaces-->

---
title: Bernhard Leitner Sound Columns
---

<img class='bgCover' src='/1252954005.jpeg'/>

<style>
.bgCover{
    right: 25%;
    left: 23%;
    width: auto;
    height: 100%;
}
</style>

<div class='caption'>
© Atelier Leitner - Sound Columns 1999
</div>

---
title: Bernhard Leitner - RESONATE
---

<Youtube id='uPbq9aixozo' width='100%' height='450'/>

---
layout: statement
class: px-80
---

# Conclusion
Including examples of these artists' work can help you understand the breadth and depth of the field of sound art, and inspire you to incorporate sound into your own design/art practices.

---
src: /pages/assignment.md
---