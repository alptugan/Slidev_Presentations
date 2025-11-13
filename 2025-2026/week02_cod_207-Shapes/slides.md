---
background: ./cover.png
title: Week 02 - Shapes & Colors
exportFilename: "week02-shapes-and-colors"
class: text-center
highlighter: shiki
lineNumbers: true
info: |
    ## Özyeğin University Course Presentation
    Lecturer Alp Tuğan, PhD<br>
    Access all week contents @[Github/alptugan](https://github.com/alptugan/Slidev_Presentations)
drawings:  
    persist: true
aspect-ratio: 16/9
css: unocss
download: false
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
favicon: 'https://raw.githubusercontent.com/alptugan/alptugan.com-v6/refs/heads/main/v6/favicon-72-precomposed.png?token=GHSAT0AAAAAADJYWS74VCPN2IEKYITFOZ422G2WTWA'
themeConfig:
    primary: "#ffcc00"
transition: fade-out
theme: seriph
src: ./pages/header.md
---


---
title: Table of contents
---

<Toc :columns="2"/>

---
title: How to contact me?
layout: center
---

# How should you contact me?
You can expect a reply within 24-48 hours on following conditions;

<v-clicks>

✅ Weekdays & Before 6 PM

✅ Obey Turkish or English Grammar rules

✅ Provide the name of the course and section (E.g COD-207, Section A)

</v-clicks>

---
title: How should not contact me?
layout: center
---

# How should not contact me?

Do not expect a reply if you contact me under following conditions;

<v-clicks>

❌ Weekends & After 6 PM 

❌ Informal Language (E.g WhatsApp, SMS, Messenger)

❌ Questions without any context (E.g "Can you help me?")

❌ Questions that can be answered by a simple Google search (E.g "What is a function?")

❌ Questions about things that are already explained in the course materials (E.g "How to submit assignment?")

❌ Excuses about missing deadlines (E.g "I was sick", "My computer broke down", 💩)

</v-clicks>

---
layout: image-left
image: terminology-header.png
class: text-center effect_Shadow mt-25 text-10
transition: fade-out
---

# Overview


<div pt-3 text-8 v-click>

📚 Terminology
</div>

<div pt-3 text-8 v-click>

🖼️ P5JS Anatomy
</div>

<div pt-3 text-8 v-click>

<logos-p5js /> Editor 
</div>

---
layout: fact
---

# Artist of the Week

## Mehmet (a.k.a Memo) Akten
[🔗 Personal Page](https://www.memo.tv/)

---
title: Memo Showcase Video
layout: full
---

<Youtube width='100%' height='100%' id='KZXiV2zePV4' />

---
layout: fact
---

# Terminology
Why terminology matters?


---
layout: image-left
image: seneca.jpg
class: text-center mt-20
backgroundSize: 20em 
---

## "Whenever the speech is corrupted so is the mind"


<span text-gray italic>- Lucius Annaeus Seneca</span>

<br>

<v-click >

Speech is made of words, and the words have meaning. These are grouped together to form thoughts or ideas and to move them from one person to another. If you can corrupt the speech, by banning words or concepts, everything else is corrupted as well.
</v-click>

---
image: computer.webp
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
<div text-gray text-3><logos-Javascript /> Javascript, <logos-C /> C , <logos-python /> Python </div>
</div>

<div v-click pt-3>
Graphical Programming Languages <span italic text-gray>(a.k.a Node-based)</span>
<img style="height:40px" src='/scratch.png'/>
</div>

<div v-click pt-3>
Mixed-Programming Languages 
<div text-gray text-3>E.g TouchDesigner, MAX</div>
</div>


---
image: p5js.webp
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
image: p5js2.png
class: text-left 
transition: fade-out
---
# P5JS Development Environment

Features;
- Text Editor
- Online IDE (Integrated Development Environment)
- 🔗 [P5Js Editor](https://openprocessing.org)

 <div absolute bottom-0 right--26 text-3 class='caption'>
 Artist: Ilja Borisovs
 </div>


---
layout: center
---
# Cartesian Coordinate System

- Horizontal Axis X starts from 0
- Vertical Axis Y starts from 0
- To move objects to right ➡️ & left ⬅️, increase-decrease the X value
- To move objects to down ⬇️ & up ⬆️, increase-decrease the Y value


---
title: Coordinate System
image: coordinate.png
layout: image
---


---
title: Shapes - Ellipse
image: ellipse.png
layout: image
---


---
title: Shapes - Rectangle
image: rect.png
layout: image
---

---
title: Shapes - Lines
image: lines.png
layout: image
---

---
title: Shapes - Triangle
image: triangle.png
layout: image
---

---
title: Shapes - Arc
image: arc.png
layout: image
---

---
title: Styling - Fill/noFill
image: p5js-colors-2.jpg
layout: image-left
class: text-left m-auto
backgroundSize: 25em
---

# RGB Values
[fill() Reference](https://p5js.org/reference/p5/fill/)

- Max value 255
- Min value 0
- fill(<span text-red>Red</span>, <span text-green>Green</span>, <span text-blue>Blue</span>)

<br />

# Hexadecimal Codes
- fill(<span text-yellow>#ffcc00</span>)


<br />

# Disable Fill
- noFill();


---
title: Styling - Stroke/noStroke
image: stroke.png
layout: image-left
backgroundSize: 25em
---

# RGB Values
[stroke() Reference](https://p5js.org/reference/p5/stroke/)

- Max value 255
- Min value 0
- stroke(<span text-red>Red</span>, <span text-green>Green</span>, <span text-blue>Blue</span>)

<br />

# Hexadecimal Codes
- stroke(<span text-yellow>#ffcc00</span>)


<br />

# Disable Stroke
- noStroke();


---
title: Combine Everything
layout: image-left
image: Abstracted-Shape.jpg
backgroundSize: 30em
---

# Abstraction 
- Line Art
- Split into grids
- Analyze each grid
- Negative & Positive Space
- Shape Combinations (rect and arc)

---
src: ./pages/break.md
hide: false
---

---
title: Tutorial video for assginment submission
---
<Youtube id="86--ezyDU_M" width="100%" height="100%"/>


---
layout: full
title: Tutorial Coordinate System
---

<Youtube id="-1FKScCEEv0" width="100%" height="100%"/>



---
src: ./pages/assignment.md
hide: false
---
