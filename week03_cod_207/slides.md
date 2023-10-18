---
background: https://source.unsplash.com/collection/94734566/1920x1080
title: Week 03 -
exportFilename: "week03--"
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

# Table of Contents

<Toc :columns="2"/>



---
image: /bg-01.png
layout: image-left
---


# Wrap-up (Summary)

Things we learn about P5JS programming language.
1. Structure
2. Cartesian Coordinate System (How canvas positioning works)
3. Drawing simple shapes (circle, fill)
4. Rendering 

---
image: /layer_order.png
---

# Next

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
image: /imageH.jpg
class: text-left
---

# Drawing Order
Swap the drawing order of the red circle with the green one.

The order in which shape functions are called is important, as the shape function called last will be rendered on top of prewiously drawn shapes.

```js {all} {lines:true, startLine: 1}
function setup() {
    createCanvas(600,600);
}

function draw() {
    background(10, 30, 15);

    // Uncomment the following line to change color
    fill(200, 10, 20);
    circle(300, 300, 150);

    // Second circle
    fill(0, 200, 20);
    circle(300, 300, 150);
}
```

---
src: ./pages/break.md
---



---
layout: section
class: text-center text-yellow 
---

# *"First, solve the puzzle.*
# *Then, write the code."*
<div pt-10 text-gray>John Johnson</div>

<img class='bgCover' src='/grad-bg3.jpg'/>


---
class: effect_Shadow
---

<img class='bgCover' src='/grad-bg.png'/>

# Case Study (Piet Mondrian)

<span text-black>Era of expressionism known as ‘De Stijl’ (1917-1931)</span>


<img width="250" m-auto src='/mondrian2.png' />


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
---

# Conputational Thinking Framework

<img w-180 m-auto src='/comp.jpg'/>



---
layout: two-cols
image: /grad-bg.png
class: text-left effect_Shadow
---

<img width="310" m-auto src='/mondrian2.png' />

::right:: 

# CT Framework Implementation

1. Analyze: 
    - Determine the color palette
    - Determine the primitive shapes (How many layers of shapes are there in the canvas?)
    - Determine the size and x-y coordinate of each shape.
2. Recall what you leaned from the last week. Which inline-function you need to use?
3. Note down the steps that is required to draw the image.


---
src: ./pages/assignment.md
hide: false
---