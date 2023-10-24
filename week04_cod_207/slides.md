---
background: https://source.unsplash.com/collection/94734566/1920x1080
title: Week 04 -
exportFilename: "week04--"
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

<Toc :columns="2"/>


---
layout: center
class: text-center m-auto
---

# Survey 
Please answer the questions shortly.

🧑‍💻📝❓[Open the survey](https://forms.gle/ABZHsRAGpHaR3su58)


---
image: /imageV.jpg
layout: image-left
---

# Wrap-up (Summary)

Things we learn about P5JS programming language.
- 🖼️ Basic drawing and styling
- 📦 External Libraries (p5.Utils)
- 💡 Computational Thinking Framework

---
layout: two-cols
image: /grad-bg2.jpg
class: text-left
---

# Import p5.Utils using OpenProcessing IDE
Detailed instructions are in the following link.

[👉 Download the tutorial pdf](/Tutorial_HowtouseP5.UtilsPixelRuleronOpenProcessingWebApp_PDF_2023-10-18.pdf)

::right::

```js {all} {lines:true, startLine: 1}
// Declare p5.Utils library 
// It must be outside of setup() and draw() functions.
let utils = new p5.Utils();

function setup() {
  createCanvas(600, 600);
  
  // Comment out the following line to Activate Ruler
  // utils.enableRuler();
}

function draw() {
  background(150);
  rect(200, 200, 300, 150);
}
```



---
layout: two-cols
class: text-left 
---

# Computational Thinking

1. Decomposition (Create Chunks; Break down problems into manageable parts)
2. Pattern Recognition (Identify similarities; Find recurring sequence or structure)
3. Abstraction (Summarize; identify useful elements, ignore irrelevant)
4. Algorithm (Realize; Create step by step instructions for the computer)

Test -> Refine -> Polish -> Look at the pieces

::right::

<img src='/ct.png' />

<Arrow v-click color-red-700 x1="30" y1="30" x2="120" y2="90" />
<Arrow v-click color-red-700 x1="400" y1="30" x2="320" y2="60" />
<Arrow v-click color-red-700 x1="30" y1="330" x2="180" y2="200" />
<Arrow v-click color-red-700 x1="400" y1="200" x2="320" y2="170" />

---
layout: center
class: text-center
---

# Computational Thinking Practice

<img class='bgCover' blur-20 src='/imageH.jpg' />

Forward, Downward, Forward, Downward, Forward, Downward...

Write down the next 4 steps using arrows.

---
layout: image
image: /imageH.jpg
class: text-left
---

# Functions
Functions represents action, calculations. They are micro algorithms in your computer programs. E.g. Setting the image size in photoshop.

```js {all} {lines:true, startLine:1} 
// Runs once at the start of the program
function setup() {
  // Creates the application window params: width=600, height=600
  createCanvas(600, 600);
}

// Loops infinitely after setup() runs
function draw() {
  // Set the background color of the window params: Red: 100, Green: 20, Blue: 20
  // R,G,B values must be between 0 - 255
  background(20, 20, 20);
}
```

---
layout: two-cols
image: /imageH.jpg
class: text-left
---

# The line() Function

The <span>`line()`</span> function draws a line between two points and requires four arguments: the `x` and `y` positions for each endpoint.

The width of the line can be set with the <span>`strokeWeight()`</span> function and the color of the line can be set with the <span>`stroke()`</span> function.

<img src='/line.png' />

::right::


```js {all} {lines:true, startLine: 1}
function setup() { 
  createCanvas(480, 120); 
}

function draw() {
  background(10, 0, 0);
  // Uncomment the following line to adjust stroke thickness
  // strokeWeight(4);
  // Uncomment the following line to adjust stroke color
  // stroke(200, 20, 20);
  line(100, height / 2, width - 100, height / 2);
}

```

---
layout: image
image: /imageH.jpg
class: text-left
---

# Opacity and Color Blending

```js {1,3|4|all} {lines:true, startLine: 1, maxHeight:'100%'}
function setup() {
  createCanvas(300, 600);
}

function draw() {
  background(10, 0, 0);
  // Draws a circle with blue fill color and no stroke/outline
  // noStroke();
  fill(0, 0, 255);
  circle(50, 50, 25);

  // Draw another circle collapsing with upper one
  // Add the 4th argument in fill() function and makae transparent color
}
```



---
layout: center
class: text-left effect_Shadow
---

# Variables

<img class='bgCover' blur-0 src='https://source.unsplash.com/a-picture-of-a-phone-with-hearts-flying-out-of-it-mot7ustt-AI' />

<span text-black>A variable stores a value in memory so that it can be used later in a program. A variable can be used many times within a single program, and the value is easily changed while the program is running.</span>


<span text-black v-click>Reuse the Same Values (If you are typing the same number more than once, consider using a variable instead so that your code is more general and easier to update.)</span>

<span text-black v-click>Updating existing values</span>




---
src: ./pages/break.md
hide: false
---



---
layout: section
class: text-center text-yellow 
---

# After Break
<div pt-10 text-gray>John Johnson</div>

<img class='bgCover' src='/grad-bg3.jpg'/>


---
src: ./pages/assignment.md
hide: false
---