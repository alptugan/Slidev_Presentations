---
# theme: apple-basic
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
selectable: true
codeCopy: true
favicon: "https://www.alptugan.com/v6/favicon-192.png"
layout: image-to
themeConfig:
  primary: "#ffcc00"
  secondary: "#e2d292"
---

# COD 412 Sound Projects & Media

week 01 - Introduction

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

<Youtube id='0Ssi-9wS1so' width='100%' height='100%' />


---
transition: fade-out
layout: quotes
author: Edgard Varèse
source: French composer (1883-1965)
---

<v-click hide> 

# Music is organized sound

</v-click hide> 

<img v-click="'+0'"  src="/edgard2.jpg" rounded-full w-100 abs-tr mr-10 mt-0/>

---
layout: center
class: text-center
title: Scope
---

# Today

<br>

<v-clicks>

## 🙋 Introduction

## 🛠️ Modern Tools 

## 🖼️ Sound in art

## 💾 Sound in Media Works

</v-clicks>

---
layout: statement
class: px-40 text-justify!
---

# 🦄 Statement

The subject [New Music]{style="color:orange"} is concerned with the [various aesthetic approaches]{style="color:orange"} to composition in the 20th and 21st centuries. What is 'new' about this music is its break with [musical traditions]{style="color:orange"} and established tonality concepts at the end of the 19th century. At this time, new [atonal compositional approaches]{style="color:orange"} were introduced based on the twelve-tone technique of the [Vienna School, the 'noise-sound' theories of Futurism]{style="color:orange"} and the use of recently developed electronic instruments. 

Over the course of time, strong ties have developed with the '~~New~~ [Media]{style="color:orange"}' and ~~new~~ [technologies]{style="color:orange"} used for recording and playback, broadcasting and distribution, and the audio-visual media of film and video, which have frequently been used for [experimentation]{style="color:orange"}.

This  course is intended to [awaken independent creativity]{color="lightblue"} and inspire interested students to create their own compositions and sound experiments. Every individual designer/artist needs to be aware of the music and the sounds of our contemporary world!

---
layout: center
---

# Course Delivery

<v-clicks>

- Online & face-to-face
- Lectures
- Attendance
- Assignments & Readings
- Final Project

</v-clicks>

---
layout: image-right
image: /syl.jpg
class: mt-50
---

# Course Organization
Check LMS for details...

---
layout: image-right
image: "/modern-tools.jpeg"
---

# Modern Sound Production Tools

<v-clicks>

- Digital Audio Workstation (a.k.a DAW)
- MIDI controllers - (USB - universal serial bus)
- Synthesizers & Samplers
- Sensors & Microcontrollers
- Software Systems
- VST and VSTi

</v-clicks>

---
layout: image
image: /daws.png
---

<div mt-20 ml-40 bg-black bg-opacity-70 p-8 rounded-5 max-w-xl>

# Digital Audio Workstations (DAW)

<v-clicks>

- Reaper
- Davinci Resolve
- Protools
- Cubase
- Ableton Live
- Logic Pro
- Garage Band
- Fruity Loops (FL Studio)


</v-clicks>


</div>

---
layout: default
class: mt-10
---

# MIDI controllers

<div class="flex gap-4 h-4/6">
  <img v-click class="flex-1 object-cover" src='/midi.jpg' />
  <img v-click class="flex-1 object-cover" src='/midi2.jpg' />
</div>

---
class: text-center
---
# MIDI controllers & Samplers

<img h-100 m-auto src='/midi3.jpg' />

---

# General MIDI Setup

<img src='/midi-setup.jpg' m-auto/>

---
layout: image-right
image: /sensor.jpeg
---

# Sensors \& Microcontrollers

<v-clicks>

- Arduino
- ESP32 Variants
- Mini Computers
- Sensors
- Hardware Hacking
- Circuit Bending
</v-clicks>


---

# Micro Controllers 

<div class='flex gap-4 h-4/6'>
<img v-click class='flex-1 object-cover' src='/sensors2.jpg' />
<img v-click class='flex-1 object-cover' src='/I2S-ESP32-Tutorial-1-3727081424.jpg' />
</div>

---
layout: section
---

# FOOD for THOUGHTS
How can you utilize sound in art and design?

---
title: New Musical Interfaces (Reactable)
---
<Youtube id='Bg1SPdWEjuo' width='100%' height='100%' />



---
title: Wearable Electronics
---

<Youtube id='ci-yB6EgVW4' width='100%' height='100%' />


---
title: Wearable Electronics
---
<Youtube id='CvyVQqCO8pY' width='100%' height='100%' />

---
layout: image-right
image: /Screenshot 2026-02-11 at 13.35.04.jpg
backgroundSize: cover
---
# MEW
Sound sculptures

[Click](https://vimeo.com/87721828) to watch.


---
title: New Musical Interfaces
---
<Youtube id='wynafHRGk9A' width='100%' height='100%' />

---
title: Wearable Electronics
---

<Youtube id='t1H3lvyEpXY' width='100%' height='100%' />

---
title: Conductive Electronics
---
<Youtube id='surmF2zKvqY' width='100%' height='100%' />


---

# 📖 Assignments
- Reading 10: Pijanowski, B. C., Villanueva-Rivera, L. J., Dumyahn, S. L., Farina, A., Krause, B. L., Napoletano, B. M., Gage, S. H., & Pieretti, N. (2011). Soundscape Ecology: The Science of Sound in the Landscape. BioScience, 61(3), 203–216. https://doi.org/10.1525/bio.2011.61.3.6

- Prepare a question related to Soundscape Ecology for the upcoming class.

- Bring examples related to Geophony, Biophony, and Anthrophony with yourself.

- Overcome your anxiety about participating in class.
