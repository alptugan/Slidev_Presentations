---
background: https://source.unsplash.com/collection/94734566/1920x1080
title: Week 08 -
exportFilename: "week08-Custom_Shapes-"
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
    timeout: 60000
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
layout: default
---
# Table of Contents

<Toc :columns="2" />




---
layout: center
---


# Wrap-up (Summary)

Things we learn about P5JS programming language.
- Cartesian Coordinate System (How canvas positioning works)
- Structure (Built-in functions (setup, draw) / inline functions (createWindow, background))
- Variables
- Built-in Variables (width, height, mouseX, mouseY, key)
- Drawing simple shapes (circle, rect, line)
- Styling (stroke, strokeWeight, fill, noFill, etc...)
- Conditionals (If / else, else if)
- Loops & Nested Loops (for)
- Interactivity (mousePressed, keyPressed)



---
layout: two-cols-header
class: text-center 
---

# Custom Shapes

How to draw the following shape?

::left::
<img v-click h-100 src='/c1.png' />

::right::

<img v-click h-100 src='/c3.png' />



---
layout: center
class: center
---

# Connect The Dots

<img h-100 m-auto src='/connect.jpg' />


---
layout: two-cols 
class: px-5
---

# beginShape() - endShape() - vertex()

```js {1-4|6-25|17|24|18|19|20|21|22|all} 
function setup() {
  // Creates the application window params: width=600, height=600
  createCanvas(600, 600);
}

function draw() {
  background(100,20,20); // R,G,B values must be between 0 - 255

	strokeWeight(20);      // stroke weight
	strokeJoin(ROUND);     // make corner joints rounded
	stroke(245, 208, 120); // stroke color
	fill(150, 10, 10);     // fill color 

	beginShape();          // Start Shape Container	 
    vertex(100, 100);                 // 1st point
    vertex(width / 2, height - 100);  // 2nd point
    vertex(width - 100, 100);         // 3rd
    vertex(width / 2, 200);           // 5th
    vertex(100, 100);                 // Last point
  endShape();            // End Shape Container
}
```

::right::

<br><br>

[source 🔗](https://openprocessing.org/sketch/2097274)

<img src='/canim.gif' />




---
src: ./pages/break.md
hide: false
---



---
layout: section
class: text-center 
---

# Translate, Rotate, Scale
Move, scale and rotate object on canvas

<Youtube id='maTfm84mLbo' width='100%' height='500' />



---
layout: section
class: text-center 
---

# Tutorial: Tiling 
Move, scale and rotate object on canvas

<Youtube id='ig0q6vfpD38' width='100%' height='100%' />


---
src: ./pages/assignment.md
hide: false
---