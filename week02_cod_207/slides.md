---
background: https://source.unsplash.com/collection/94734566/1920x1080
title: Week 02 -
exportFilename: "week02--"
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
    timeout: 30000
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

<Toc :columns="2" />


---
layout: image-left
image: /terminology-header.png
class: text-center effect_Shadow mt-25 text-10
transition: fade-out 
---

# Overview

<!--<img w-100 m-auto src='/terminology-header.png'/>-->

<div pt-3 v-click>

📚 Terminology
</div>

<div pt-3 v-click>

🖼️ P5JS sketch
</div>

<div pt-3 v-click>

🖥️ openProcessing
</div>




---
layout: fact
---

# Terminology
Why terminology matters?


---
layout: quote
---

# "Whenever the speech is corrupted so is the mind"

<span text-gray italic>- Lucius Annaeus Seneca</span>

<v-click>

Speech is made of words, and the words have meaning. These are grouped together to form thoughts or ideas and to move them from one person to another. If you can corrupt the speech, by banning words or concepts, everything else is corrupted as well.
</v-click>

---
image: /computer.webp
layout: image
transition: fade-out
class: text-right text-8
---

# Computers

Runs instructions by humans

<div text-10 pt-4>

Power supply
<br><br>
Processor 
<br><br>
Memory (RAM)
<br><br>
Hard drive (Harddisk)
<br><br>
Video Card (GPU)
<br><br>
Preipherals (IO, Keyboard, mouse)
</div>

---
layout: center

---

# Programming
\> _ <
<v-click>

Programming is the process of creating a set of <span text-yellow>instructions</span> that tell a computer how to perform a task.
</v-click>


<v-click>

<span text-yellow>Instructions</span> are made up of written <span text-green>codes</span>.
</v-click>


<div v-click>
<span text-green>Codes </span> are written according to a specific <span text-blue>Programming Language</span>.
</div>

<!--<v-click>

The purpose of programming is solving a given <kbd>problem</kbd>.
</v-click>-->


---
layout: center
---

# Programming Language

<div v-click>
A system of notation (syntax) used communicate with computers and tell them what to do.
</div>

<!-- A programming language may consists of specific words, functions, and operators. -->


---
layout: center
---

# Types of Programming Language

<div v-click>
Textual Programming Languages 
<div text-gray text-3>E.g. Javascript, C++, Python...</div>
</div>

<div v-click pt-3>
Graphical Programming Languages <span italic text-gray>(a.k.a Node-based)</span>
<div text-gray text-3>E.g Scratch</div>
</div>

<div v-click pt-3>
Mixed-Programming Languages 
<div text-gray text-3>E.g TouchDesigner, MAX</div>
</div>


---
image: /p5js.webp
layout: image-left
transition: fade-out
---


# P5JS Overview

A dedicated creative coding framework/library for artists & designers.

Main Elements;
- 🧪 Javascript
- 🖼️ Canvas 
- ⚙️ Functions
- 📦 Libraries
- 🔗 [P5JS Website](https://p5js.org)

---
layout: image-right
image: /p5js2.png
class: text-left 
transition: fade-out
---
# OpenProcessing

P5JS Programming interface

Features;
- Text Editor
- Online IDE (Integrated Development Environment)
- 🔗 [OpenProcessing Editor](https://openprocessing.org)


 <div absolute bottom-0 right--26 text-3 class='caption'>
 Artist: Ilja Borisovs
 </div>

---
layout: image
image: ./week02_ss1.png
preload: false
---

<div
  v-motion
  :initial="{ y: -40, x: -35, opacity: 0 }"
  :enter="{ 
    x: -40, 
    y:-35, 
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      ease: 'easeOut',
      delay:1000,
    }
  }">
  <Arrow x1="700" y1="230" x2="850" y2="25" color="green" width="4" />
</div>

---
src: ./pages/break.md
hide: false
---

---
layout: image
image: ./week02_ss2.png
preload: false
---

<div
  v-motion
  :initial="{ y: -40, x: -35, opacity: 0 }"
  :enter="{ 
    x: -40, 
    y:-35, 
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      ease: 'easeOut',
      delay:1000,
    }
  }">
  <Arrow x1="700" y1="230" x2="856" y2="25" color="green" width="4" />
</div>


---
layout: image
image: ./week02_ss3.png
preload: false
---

<div v-click
  v-motion
  :initial="{ y: -40, x: -35, opacity: 0 }"
  :enter="{ 
    x: -40, 
    y:-35, 
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      ease: 'easeOut',
      delay:1000,
    }
  }">
  <Arrow x1="700" y1="230" x2="856" y2="25" color="green" width="4" />
</div>

---
layout: image
image: ./week02_ss4.png
preload: false
---

<div v-click
  v-motion
  :initial="{ y: -40, x: -35, opacity: 0 }"
  :enter="{ 
    x: 0, 
    y:0, 
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      ease: 'easeIn',
      delay:1000,
    }
  }">
  <Arrow x1="700" y1="230" x2="510" y2="10" color="#ffcc00" width="4" />
  <div absolute top-60 right-5 text-yellow-500 text-10 >View the code</div>
</div>

---
layout: image
image: ./week02_ss5.png
preload: false
---

<div v-click
  v-motion
  :initial="{ x: 0, y: -35, opacity: 0 }"
  :enter="{ 
    x: 0, 
    y:30, 
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      ease: 'easeIn',
      delay:1000,
    }
  }">
  <Arrow x1="840" y1="230" x2="840" y2="18" color="#ff0000" width="4" />
  <div absolute top-30 right-15 text-red-500 text-10 >Change Layout</div>
</div>

---
layout: image
image: ./week02_ss6.png
preload: false
---

<div v-click
  v-motion
  :initial="{ x: 0, y: -65, opacity: 0 }"
  :enter="{ 
    x: 0, 
    y:20, 
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      ease: 'easeIn',
      delay:1000,
    }
  }">
  <Arrow x1="825" y1="230" x2="825" y2="10" color="#ff0000" width="4" />
  <div absolute top-30 right-15 text-red-300 text-10 >Share Your Sketch</div>
</div>

---
layout: image
image: ./week02_ss7.png
preload: false
---

<div v-click
  v-motion
  :initial="{ y: 0, x: -35, opacity: 0 }"
  :enter="{ 
    x: 0, 
    y:0, 
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      ease: 'easeIn',
      delay:1000,
    }
  }">
  <Arrow x1="230" y1="48" x2="795" y2="48" color="#ff0000" width="4" />
  <div absolute top-15 right-58 text-red-500 text-10 >Download Your Sketch</div>
</div>

---
layout: image
image: ./week02_ss8.png
preload: false
class: pt-150
---

<div v-click
  v-motion
  :initial="{ y: -40, x: 0, opacity: 0 }"
  :enter="{ 
    x: 0, 
    y:0, 
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      ease: 'easeIn',
      delay:1000,
    }
  }">
  <Arrow mt--150 x1="400" y1="240" x2="400" y2="40" color="#ff0000" width="4" />
  <div absolute top--90 right-70 text-red-600 text-10 bg-white p-5>Copy the sketch link</div>
</div>


---
layout: center
image: /imageH.jpg
class: text-center
transition: fade-out
---
# Submit the Link & your sketch to LMS

<a href="https://lms.ozyegin.edu.tr/my/" target="_blank"><img pt-5 m-auto src='/lms.png'/></a>

---
layout: center
image: /imageH.jpg
class: text-center 
transition: fade-out
---
# Diagrams in Programming

<br><br>

```mermaid {theme: 'neutral', scale: 0.8}
flowchart LR
A([Start]) -->
A0[Declare Variable X] -->
B[/X = 10/] --> 
C{Is X greater\nthan 10}
C -->|True| D[Set Green Color]
C -->|False| E[Set Red Color] 
D & E --> G([Stop])
```
<!-- http://mermaid.js.org/syntax/flowchart.html -->

---
layout: center
---
# Cartesian Coordinate System

- Horizontal Axis X starts from 0
- Vertical Axis Y starts from 0
- To move objects to right ➡️ & left ⬅️, increase-decrease the X value
- To move objects to down ⬇️ & up ⬆️, increase-decrease the Y value


---
layout: full
---

<Youtube id="85O_4DmYB9g?si=iRABiv6BcQ-VlFDY&t=152" width="100%" height="100%"/>




---
layout: two-cols
class: p-5
---

<Tweet id="1663656442065309698" />

::right::

<Tweet id="1577636022128558081" />

---
layout: two-cols
class: text-left
hide: true
---

# Exhibtion & Events

[Grand Pera - Eskizden Piksele](https://www.instagram.com/p/CxxsIiIo-dn/)

[David Szauder](https://www.instagram.com/alptugan/saved/creative-coding/17989090882163487/?img_index=1)

---
layout: two-cols
class: text-left
hide: true
---

# Learn More

[P5JS Video Tutorial Series](https://thecodingtrain.com/tracks/code-programming-with-p5-js/code/0-trailer/trailer)

<img pr-10  src='/coding_train.png'/>

<Tweet id="1686015782277251074" />

::right::
<Tweet  id="1427649830491496448" />

[Neil Mendoza](https://www.instagram.com/p/CGF0b-zFGAX/)

---
layout: center
class: text-center
hide: true
---

# Sources

[Other Presentations](https://github.com/alptugan/Slidev_Presentations) · [alptugan](https://www.alptugan.com) · [RandomSeed](https://randomseed.cargo.site)


---
src: ./pages/assignment.md
hide: false
---