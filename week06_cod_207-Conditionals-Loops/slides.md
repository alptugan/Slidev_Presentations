---
background: https://source.unsplash.com/collection/94734566/1920x1080
exportFilename: "week06-Intelligence Through Conditionals_Loops-"
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

---
title: Table of Contents
---
# Table of Contents

<Toc :columns="2"/>



---
image: /imageV.jpg
layout: image-left
---


# Wrap-up (Summary)

Things we learn about P5JS programming language.
- Cartesian Coordinate System (How canvas positioning works)
- Variables
- Drawing simple shapes
- Computational Thinking Method as problem solving



---
layout: image-left
image: /ct.png
---

# Computational Thinking Framework


<div v-click>
1️⃣ Decomposition 
</div>

<div pt-2 v-click>
2️⃣ Pattern Recognition 
</div>

<div pt-2 v-click>
3️⃣ Abstraction 
</div>

<div pt-2 v-click>
4️⃣ Algorithm
</div>

---
layout:default
---
# Computer Science Basics
1️⃣ Sequences, 2️⃣ Selection, and 3️⃣ Loops

<Youtube id='eSYeHlwDCNA' width='100%' height='100%' />

---
layout: image
image: /grad-bg2.jpg
class: text-left
---

# Conditionals

<img h-100 m-auto src='/statements_1.png' />

---
layout: image
image: /grad-bg2.jpg
class: text-center
---

# Set a Condition in p5JS


<img h-100 m-auto src='/statements_2.png' />

---
layout: image
image: /grad-bg2.jpg
class: text-center
---

# If condition == false


<img h-100 m-auto src='/statements_3.png' />

---
layout: image
image: /grad-bg2.jpg
class: text-center
---

# Practice
Write the appropriate if conditions in place of `...` line in your code.

<img h-100 m-auto src='/assignment_2_statements.png' />


---
layout: section
class: text-center text-yellow 
---

<img class='bgCover' src='/grad-bg3.jpg'/>

# *"First, solve the problem.*
# *Then, write the code."*
<div pt-10 text-gray>John Johnson</div>

---
src: ./pages/break.md
hide: false
---

---
layout: center
background: /grad-bg2.jpg
class: text-left
---

# What are loops in coding?
 <Youtube id='wxds6MAtUQ0' width='100%' height='320' />

---
layout: center
background: /grad-bg2.jpg
class: text-left px-40
---
# <i text-white>for</i> loops
Repeats a section of code or code-block a limited number of times. Three steps of creating for loops;

<div text-left>
  <div v-click>

  1️⃣ Create a counter variable.
  </div>


  <div v-click>

  2️⃣ Set the repetition count.
  </div>


  <div v-click>

  3️⃣ Set the counter behaviour. Is it gonna increase one by one, two by two, etc...
  </div>
</div>

---
layout: image
image: /grad-bg2.jpg
class: text-center
---

# <i text-white>for</i> loops in p5JS


<img h-100 m-auto src='/loops1.png' />

---
layout: statement
---
# Replace the <span text-white>`println("...")`</span> function with a shape
Do you see a single shape? Where are the other shapes?

---
layout: image
image: /grad-bg2.jpg
class: text-center
---
# Open the black box

<img h-100 m-auto src='/loops2.png' />

---
layout: image
image: /grad-bg2.jpg
class: text-center
---
# Open the black box

<img h-100 m-auto src='/loops3.png' />


---
layout: image
image: /grad-bg2.jpg
class: text-center
---
# Access the counter variable to modify the repeating code
Use the counter variable `i` as a dynamic value. 

<img h-100 m-auto src='/loops4.png' />

---
layout: image
image: /grad-bg2.jpg
class: text-center
---
# Tutorial

<iframe src="https://openprocessing.org/sketch/1707047/embed/" width="100%" height="400"></iframe>

[link to openProcessing 🔗 ](https://openprocessing.org/sketch/1707047)


---
src: ./pages/assignment.md
hide: false
---

---
layout: image
image: /grad-bg2.jpg
class: text-center
---

# Assignment Reference Image
You can choose your own colors, and other shape properties.

<img m-auto h-100 src='/5x5 Grid For Loops.jpg' />
