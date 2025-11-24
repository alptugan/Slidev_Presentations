---
background: ./cover.png
exportFilename: "week03-Variables-Computational Thinking"
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
image: /recall.png
layout: image-left
---


# Wrap-up (Summary)

Things we learn about P5JS programming language.
- Cartesian Coordinate System (How canvas positioning works)
- Drawing simple shapes (`rect, ellipse, circle, triangle, arc...`)
- Styling shapes (`fill, noFill, stroke, noStroke...`)
- Drawing Order


---
image: /layer_order.png
---

# Drawing Order

Drawing Order: Set the layer order of the shapes.

<img src='/layer_order.png' />


---
layout: image-left
image: /pro1.png
class: text-left
---

# Structure

Inline functions

```js {1,3|5,10|2,6,8,9|all} {lines:true, startLine: 1}
function setup() {
    createCanvas(400, 600);
}

function draw() {
    background(100, 100, 100);

    fill(200, 0, 0);
    circle(300, 300, 100);
}
```

---
layout: center
---

# Coordinate System

Top left corner of the the canvas is the starting point of x and y coordinates.

The p5.js canvas uses a coordinate system to describe space. The origin, (0, 0), of the canvas is the top-left corner of the canvas.

---
layout: image
image: /pro-2.png
title: Coordinate System Image
---



---
layout: image-left
image: /pro-3.png
class: text-left
---

# Color (fill function)
A color value can be represented in various ways with p5.js. It can be given as:
- Gray value as one numeric value between 0 and 255.
- RGB (<span text-red>Red</span>, <span text-green>Green</span>, <span text-blue>Blue</span>) walue as three numeric values between 0 and 255.

```js {all} {lines:true, startLine: 1}
function setup() {
    createCanvas(400,600);
}

function draw() {
    //        (Red, Green, Blue)
    background(71,   92,    122);

    // Uncomment the following line to change color
    //fill(200, 10, 20);
    circle(252,187,100);
}
```

---
layout: image
image: /bg-01.png
class: text-center px-50
---

# Rendering

Rendering in P5JS involves generating images from input data such as vector graphics such as circle, rectangle, triangle, etc... 

The resulting image, also called a <span text-green>render</span> or <span text-green-100>frame</span>, is displayed on the user's screen multiple times per second, typically ranging from 24 to 60 frames.

<div v-click>
    The graphics is rendered 60 times per second on your canvas by default in P5JS. Click on image to get more info.
    <a href='https://www.animotica.com/blog/fps-in-video-editing/' target='_blank'><img src='/f0f29dc622f960078f96d5e351b4b794.png' /></a>
</div>




---
layout: center
image: /grad-bg2.jpg
class: text-left
---

# Rendering, Built-in & Inline Functions
```js {0|1,4|6,10|3|6|6,10|7|8|9|10|6|7|8|9|10|6|7|8|9|10|6|7|8|9|10} {startLine:1} 
function setup() {
  // Creates the application window params: width=600, height=600
  createCanvas(600, 600);
}

function draw() {
  // Set the background color of the window params: Red: 100, Green: 20, Blue: 20
  // R,G,B values must be between 0 - 255
  background(100,20,20);
}
```



---
layout: two-cols
class: p-3
---

# Variables

A variable stores a value in memory so that it can be used later in a program. A variable can be used many times within a single program, and the value is easily changed while the program is running.

> 
> Declare a variable, if you type the same number more than twice. 
>

::right::

<v-click>

## 💩 BAD
```javascript
    // position the elements in the middle
    circle(200, 220, 300);
    circle(200, 220, 250);
    circle(200, 220, 200);
    circle(200, 220, 150);
    circle(200, 220, 100);
    circle(200, 220, 50);
```
</v-click>

<br>

<v-click>

## 🥰 GOOD
```javascript
    // define position values for x and y axis
    var xpos = 200;
    var ypos = 220;

    // position the elements in the middle
    circle(xpos, ypos, 300);
    circle(xpos, ypos, 250);
    circle(xpos, ypos, 200);
    circle(xpos, ypos, 150);
    circle(xpos, ypos, 100);
    circle(xpos, ypos, 50);
```
</v-click>

---
layout: center
title: Question about variable
---

# Reuse variables for relational purposes.
You can add values to the variables.
E.g. Type the following into the `draw()` function.

```javascript
function draw() {
    var foo = 10;
    print(foo + 20);
    // output: 30
}
```

<br>

<v-click>

### How to declare a variable for the 3rd parameter?
```javascript
    // define position values for x and y axis
    var xpos = 200;
    var ypos = 220;

    // position the elements in the middle
    circle(xpos, ypos, 300);
    circle(xpos, ypos, 250);
    circle(xpos, ypos, 200);
    circle(xpos, ypos, 150);
    circle(xpos, ypos, 100);
    circle(xpos, ypos, 50);
```
</v-click>


---
title: Combine Everything
layout: image-left
image: ./Abstracted-Shape.jpg
---

# Abstraction 
- Line Art
- Split into grids
- Analyze each grid
- Negative & Positive Space
- Shape Combinations (rect and arc)


---
layout: image
class: text-left
---

# Computational Thinking Framework
Computational thinking is a problem-solving process that includes;
Decomposing, Abstraction, Pattern Recognition, Algorithms
- Formulating Problems & Analyze
- Represent data through Abstraction
- Algorithmic Thinking: Automate solutions
- Identifying, analyzing, and implementing possible solutions with the goal of achieving the most efficient and effective combination of steps and resources
- Generalizing and transferring this problem-solving process to a wide variety of problems



---
layout: center
title: Computational Thinking Framework image
---

<img w-180 m-auto src='/comp.jpg'/>




---
layout: section
---

# Conditionals
## if/else statements


---
layout: image
image: /grad-bg2.jpg
class: text-left
---

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
layout: image-left
image: /ct.png
hide: true
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
# Replace the <span text-white>`print("...")`</span> function with a shape
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
