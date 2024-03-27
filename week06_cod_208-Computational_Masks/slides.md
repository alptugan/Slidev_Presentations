---
title: Week 06 -
exportFilename: "week06--"
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
theme: apple-basic
layout: intro-image
image: https://source.unsplash.com/collection/94734566/1920x1080
src: ./pages/header.md
---

---
layout: default
---
# Table of Contents

<Toc :columns="2" />

---
layout: center
---

# Computational Thinking Framework
## The method for Problem-Solving
### 1. Decomposition
### 2. Abstraction
### 3. Pattern Recognition
### 3. Algorithm Design


---
layout: statement
---

# Let's make it more clear 
Start with your known register. Use verbal, visual, written representations.

---
layout: center
title: DTFA Method
---

## 1. Decomposition 📝 📐 
<div v-click mb-5 font-200 text-4.5 text-gray-500>Take notes or draw abstracted shapes using pen and paper. Do not code anything. Analyze the subject.</div>

## 2. Flow 🧩 
<div v-click mb-5 font-200 text-4.5 text-gray-500>Identify the procedural flow to solve the problem. Switch between registers. Use diagrams and arrows or take notes again.</div>

## 3. Translation 📚 🔀 ⚙️ 
<div v-click mb-5 font-200 text-4.5 text-gray-500>Open the code editor. Identify variables and functions from previous step. In this step start coding. Refer to p5Js <a href="https://p5js.org/reference/">reference page.</a> <span text-green-400 op-60>Keep running your code whenwever you add new lines to check if it is ok.</span></div>

## 4. Algorithm 🔁 🔤 🔢 
<div v-click font-200 text-4.5 text-gray-500>Implement the flow design to your code. Utilize conditional statements <code text-green-400 op-60>(if/else)</code>, repetetions <code text-green-400 op-60>for loops</code>, trigonometric funcitons <code text-green-400 op-60>sin()</code>, and probability<code text-green-400 op-60>random()</code>to reveal the creative potetial of your application by experimenting with the code. If your code involves interactivity (mouse, keyboard, sound or camera), test your code for each potetial use case.</div>


---
layout: image-left
image: ./Screenshot 2024-03-19 at 01.22.30.png
---
# Subject / Problem
Note down everything you see on your interface design formally. Note down each element what you see. Every single color and shape matters. 

---
layout: image
image: ./Screenshot 2024-03-19 at 01.28.18.png
---

---
layout: image-right
image: ./6be25eed6d94bbc6891cd7797c8bd88f.jpg
class: text-center m-auto
imageTopRight: ./Screenshot 2024-03-19 at 01.46.35.png
---
# Imagine the abstracted forms 


---
layout: image
class: text-center m-auto
image: ./Screenshot 2024-03-19 at 01.46.35.png
---
# Feature Extraction* 

<div mt-105 text-gray text-4 text-left>* The term Feature Extraction comes from Neurophysiology represents extracting information from imagery objects.</div>

---
layout: default
---
# Express the Panda Using Simple Shapes

<div class='grid grid-cols-3 gap-5'>
  <div v-click> 
    <img src='/Screenshot 2024-03-20 at 13.53.40.png' />
    Original Image
  </div>

  <div v-click>
    <img src='/Screenshot 2024-03-20 at 13.58.24.png' />
    Abstracted via Simple Shapes
  </div>

  <div v-click>
    <img src='/Screenshot 2024-03-20 at 14.01.05.png' />
    Abstracted more via Simle Shapes
  </div>
</div>

---
layout: image-left
image: ./abstraction (1).png
---
# 1. Decomposition 📝 (15 minutes)
* Determine your canvas size.
* Draw the abstracted version of the mask.
* Note down each shape that you see.
* Note down each shape properties
  * color: white, black, yellow, red
  * position: x and y positions.
  * stroke: Is there stroke around the shape?
  * size: width and height

---
class: text-center
---

# Abstracted Shape

<video m-auto width="700" height="100" controls muted poster="/poster.png">
  <source src="/drawing.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>



---
layout: image-left
image: ./abstraction (1).png
---
# 2. Flow 🧩 (15 minutes)
In this step, we set the order of our notes. We determine what to draw first. Is there any hierarcy between the objects you identified in the previous step? What are the specific colors? 
* Determine variables such as color values. R,G,B codes
* Decide the drawing order of your shapes.
* Layer 1️⃣ → Rectangles for the mask base must be in lowest layer.
* Layer 2️⃣ → Triangles can sit onto rectangles.
* Layer 3️⃣ → Eyes, nose, makeup triangles, and teeth can sit on top most.
* Finally, determine the repetitions. What is repeated in this mask?


---
layout: image-left
image: ./abstraction (1).png
---
# 3. Translation 📚 🔀 ⚙️ (15 minutes)
Determine the equivalents of your notes in P5Js language. Create code blocks to reorder them according to the flow.
* Mask shape 1 on top → rect(x,y,w,h) µ≥
* Mask shape 2 at bottom → rect(x,y,w,h)
* Mask shape 1-2 color → fill(r, g, b)
* Mask shape 3 Horn Left → triangle(x1, y1, x2, y2, x3, y3)
* Mask shape 4 Horn Right → triangle(x1, y1, x2, y2, x3, y3)
* Continue to code...

---
layout: image-left
image: ./Screenshot 2024-03-19 at 01.28.18.png
---

# 4. Algorithm 🔁 🔤 🔢 
* Open your editor.
* Declare all required variables such as color(R, G, B)
* 


---
src: ./pages/break.md
hide: false
---

---
layout: image
image: opencall.png
---
<div mt-7 ml--5><a text-red href='https://openprocessing.org/curation/87594'>🔗 Link to submission page</a></div>


---
layout: quote
---

# "First, solve the problem. Then, write the code."
John Johnson

<img class='bgCover' src='/grad-bg3.jpg'/>


---
src: ./pages/assignment.md
hide: false
---