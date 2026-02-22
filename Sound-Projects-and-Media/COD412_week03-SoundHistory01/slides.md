---
css: unocss
image: /cover.jpg
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
download: true
colorSchema: dark
glowSeed: 4
lineNumbers: true
selectable: true
codeCopy: true
routerMode: history
favicon: "https://www.alptugan.com/v6/favicon-192.png"
layout: image-to
themeConfig:
  primary: "#ffcc00"
  secondary: "#e2d292"
---

# COD 412 Sound Projects & Media

week 03 - Sound History 01

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
transition: fade-out
layout: quotes
author: John Cage
source: Interview
---

<v-click hide> 

# Every something is an echo of nothing

</v-click hide> 

<img v-click="'+0'"  src="/cage.jpg" rounded-full w-80 abs-tr mr-50 mt-0/>



---
layout: center
title: Kraftwerk, 1970
class: p-60
---

<a href="https://www.youtube.com/watch?v=hWUiLJnEYJI" target="_blank"><img src='/krafwerk-1970.jpg' /></a>

<div class='text-3'>
📺 Click image to play the video on YouTube.
</div>


---
layout: center
---

# Mask/Block "Sound Wall"

<v-click>

According to Krause (1993, 158), the spreading urban areas could "block" or "mask" spectral niches, which could lead to species extinctions.
</v-click>

<v-click>

As a result of the lo-fi soundscape, meaningful sounds (along with their associated acoustic colouration) can be masked to the point where a person's "aural space" is reduced. If an individual cannot hear the reflected sounds of his/her own movement or speech, aural space has effectively shrunk to enclose him/her, isolating him/her from the environment. In such situations, sonic information mutates into anti-information called “noise.”
</v-click>

<v-click>

Since the sound level and cycles of the sonic entities are in harmony, hi-fi soundscape maintains an identifiable experience for the listener. However, the lo-fi environments the identities cannot be separated from each easily because of the non-harmonious traits of sonic entities. Schafer says that lo-fi soundscapes creates a “Sound Wall” that isolates the individual from the environment.
</v-click>

---

# Why awareness of sound is required for the homo-urbanus?

<v-click>

Slapper (1996) reports that the number of complaints increase day by day and people are killed because of disputes between neighbours noises.
</v-click>

<v-click>

According to Schafer, environmental noise levels are increasing by 0.5 to 1 decibel per year as a result of the battle between sonic expression and control.
</v-click>

<v-click>

According to Wrightson, In the hi-fi environment, anyone who is trying to avoid their feelings (consciously or unconsciously) will experience a profound psychological fear.
</v-click>

<style>
h1, p {
  /*text-shadow: 2px 2px 10px black;*/
  /*opacity: 0 !important;*/
}
</style>


---
layout: default
---

# Sounds of the natural world, big data and AI

Dr. Bryan Pijanowski is on a mission to record the Earth! To date, he's collected over 8 million recordings in 28 ecosystems amassing over 1.2 PB of data. Hear how AI is being used to study nature and how database technologies are being used to make our enormous soundscape archive publicly available online at [www.centerforglobalsoundscapes.org](www.centerforglobalsoundscapes.org)

<Youtube id='finPhz6grgg' width='100%' height='65%' />

---
layout: image
image: /hist.jpg
title: Sound Art History 
class: text-color-black! 
---

<br mt-5>  

<span v-mark.circle.orange>[Click Here](https://media-host.alptugan.workers.dev/Documents/COD_412_Sound-Art-History-Timeline.pdf)</span> to download **Sound Art History Timeline** document. ⬇️

---
layout: center
class: text-left
---

# History of Sound

#### The "**Acoustic**" era, 1877 --- 1925

<br>

#### The "**Electrical**" era, 1925 --- 1945 (including sound on film)

<br>

####  The "**Magnetic**" era, 1945 --- 1975

<br>

####  The "**Digital**" Era, 1975 --- the present day.

---
layout: image-right
image: '/intonarumori.jpg'
backgroundSize: 25em
class: mt-0
---

# Art of Noises (1916)
A Futurist manifesto about emerging soundscape of humanity.

by Luigi Russolo (Futurist Painter, Sound Artist)



---
layout: image
image: /russolo.jpeg
class: effect_Shadow
---

# Intonarumori 

Noisy Instruments based on the Art of Noises Manifesto

[Click to play video](https://www.youtube.com/watch?v=BYPXAo1cOA4){style="color:#ffcc00"}


---
layout: image-right
image: '/data.jpg'
backgroundSize: 100%
class: mt-30
---

# Dada Manifesto (1916)
Hugo Ball created the Dada Manifesto.

While showing his Karawane spoken poetry performance.
Ball wrote his poem "Karawane", a poem consisting of nonsensical words.

---
layout: center
---

# Hugo Ball Karawane Performance


<div class='grid grid-cols-2 gap-4'>
<div>
<Youtube id='BYPXAo1cOA4' width='100%' height='120%' />
</div>

<div>
<Youtube id='z_8Wg40F3yo' width='100%' height='120%' />
</div>
</div>

---
layout: image-right
image: '/duchamp.jpg'
backgroundSize: 100%
class: mt-0
---

# Marcel Duchamp (1887 - 1968)
French artist whose work is most often associated with the Dada movement and Surrealist movements. 
He famously presented ready-made found objects as art objects in galleries. Fountain—1917

---
layout: image-right
image: '/varese.jpg'
backgroundSize: 100%
class: mt-0
---

# Organized Sounds 
Edgard Varèse, French composer (1883 - 1965) 

- Varèse's music emphasizes timbre and rhythm.
- He coined the term "organized sound" in reference to his own musical aesthetic. 
- Varèse's conception of music reflected his vision of "sound as living matter" and of "musical space as open rather than bounded".He conceived the elements of his music in terms of "sound-masses", likening their organization to the natural phenomenon of crystallization. 



---
layout: image-right
image: '/schaeffer.jpg'
backgroundSize: 100%
class: mt-36
---

## Why should a civilization which so misuses its power have, or deserve, a normal music?
-- Pierre Schaeffer


---
layout: section
---

# Assignment Reviews

---
layout: section
---

# BREAK
15 min.


---
layout: section
---

# Sound Art Showcase

---
layout: center
class: text-center
---

# Student Projects

<img src='/student-work.jpg' h-90/>

[🔗 YouTube](https://www.youtube.com/playlist?list=PLvcJjvBzWDXajuij3LYytZuwcNjfvKwh-)

---
layout: image-right
image: '/notch.jpg'
backgroundSize: 100%
class: mt-0
---

# Interactive Sound Installation (Drambo app + Notch)

- [YouTube](https://www.youtube.com/watch?v=pjCwz2Wq1K8) 

Wired - Interactive percussive installation using #drambo app with a couple of its physical modeling modules. Each of the four piezo mics is triggering another sound while the visuals correspond to the impact (amplitude) of the generated sounds, resulting in ever-changing interweaving of sounds and particles. Visuals #madewithnotch.


---
layout: center
title: Zimoun
---

<img src='/Zimoun.jpg' />


🔗 [Click to view works](https://www.zimoun.net/)



---
layout: image
image: /salzman-2013.jpg
title: Salzman, 2013
--- 

<span v-mark.circle.black> [Click to play video](https://vimeo.com/51300708) </span>



---
layout: image
image: /schulke-2011.jpg
title: Schülke, 2011
class: text-black!
--- 

# Björn Schülke 
Idiophon, 2011

<span v-mark.circle.black> [**_Click_**](http://schuelke.org/idiophon-4.html){style="color:#333"} </span> to view sound sculptures and installations.

---
layout: image
image: /Theoriz.jpg
class: pr-50% effect_Shadow
--- 

# THÉORIZ
Noisy Skeleton, 2015

To an artificial mind, all reality is virtual.

Noisy skeleton is an immersive and interactive installation that explores the link between sound, space and artificial intelligence.

From complete control to accidental reaction, the spectactor is completly surrounded by abstracts visuals and digital soundscape echoed back by the machine. 


[Click to play the video](https://vimeo.com/103438556)


---
layout: image-right
image: '/tapeloop.jpg'
backgroundSize: 100%
class: mt-36
---

# Amulets
Tape Loop Orchestra

[Click to play the video on YouTube](https://www.youtube.com/watch?v=OgmvJOZ-zk8)


---
layout: image-right
image: '/cage2.jpg'
backgroundSize: 80%
class: mt-0 text-3.2
---

# JOHN CAGE'S RULES FOR STUDENTS

<v-clicks>

- Find a place you trust and then try trusting it for a while.
- Pull everything out of your teacher.
- Pull everything out of your fellow students.
- Pull everything out of your students.
- Consider everything an experiment.
- Be self-disciplined.
- Nothing is a mistake. There's no win and no fail; there's only make.
- The only rule is work. If you work, it will lead to something.
- Don't try to create and analyze at the same time. They're different processes.
- Be happy whenever you can manage it. Enjoy yourself. It's lighter than you think.
- Always be around. Come or go to everything. Always go to classes. Read anything you can get your hands on. Save everything. It may come in handy later.
</v-clicks>

---
layout: image-right
image: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzR1YjFpcDZlYnEwZWdlYWltazJybnBha2JtdTRnbzYyMnNpb3VvbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LFy7vR0fkChZWZ6lvT/giphy.gif'
backgroundSize: 100%
class: mt-0
---

# Assignment

1. **Reading:** Alvin Lucier, 2012, ‘Tape Recorders’ in Music 109: Notes on Experiemental Music, Middletown: Wesleyan University Press, pp. 103-106

2. **Reading:** Nilson, C. (2007). Live coding practice. Proceedings of the 7th International Conference on New Interfaces for Musical Expression - NIME ’07,112. https://doi.org/10.1145/1279740.1279760

3. **Watch:** Strudel Live Coding [Tutorial](https://www.youtube.com/watch?v=sefJz9biLCY). 