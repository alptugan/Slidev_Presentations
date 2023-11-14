---
background: https://source.unsplash.com/collection/94734566/1920x1080
title: Week 07 -
exportFilename: "week07-COD207-Interactivity"
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
layout: default
---
# Table of Contents

<Toc :columns="2" />




---
image: /imageV.jpg
layout: image-left
---


# Wrap-up (Summary)

Things we learn about P5JS programming language.
- Varibales
- Conditionals (If/else)
- Loops (for)


---
layout: center
class: text-center py-50
---

# Generative Art: Tiling to Tesselation
Tiling is repeating a pattern in horizontal, vertical or both directions repeatedly covering any kind of surface.

Regular Tesselation 
<img src='/t-regular.png' />

---
layout: center
class: text-center py-50
---

# Generative Art: Semi-Regular Tesselation

Semi-Regular Tesselation
<img h-100 m-auto pt-5 src='/s-regular.png' />


---
layout: center
class: text-center py-50
---

# Generative Art: Demi-Regular Tesselation

Demi-Regular Tesselation
<div bg-white>
<img h-100 m-auto pt-5 src='/DemiregularTessellations_601.svg' />
</div>

---
layout: center
class: text-center py-50
---

# Tiling-Tesselation Repository

<img h-100 m-auto pt-5 src='/tiling_repo.png' />

[🔗 Goto Repository](https://www.pinterest.com/alptugan/algorithmic-art-01-tiling/more_ideas/?request_params=%7B%221%22:%2039,%20%227%22:%20%22253794213013526600%22,%20%228%22:%20%22575686833557435365%22,%20%2232%22:%2020,%20%2237%22:%20%22Ideas%20for%20your%20board%22%7D&full_feed_title=Ideas%20for%20your%20board&view_parameter_type=3173&pins_display=3&ideas_referrer=25)

---
layout: default
class: text-left
---

# Built-in Functions: Keyboard
```js {all} {lines:true, startLine:1} 
function setup() {
  // Creates the application window params: width=600, height=600
  createCanvas(600, 600);
  noLoop();
}

function draw() {
  // Set the background color of the window params: Red: 100, Green: 20, Blue: 20
  // R,G,B values must be between 0 - 255
  background(100,20,20);
}

// key is built-in variable. You don't need to declare on top of your code.
function keyPressed() {
  if(key == 'r') {
    // set the background to a random color
  }
}
```

---
layout: default
class: text-left
---

# Built-in Functions: Mouse
```js {all} {lines:true, startLine:1} 
function setup() {
  // Creates the application window params: width=600, height=600
  createCanvas(600, 600);
  noLoop();
}

function draw() {
  // Set the background color of the window params: Red: 100, Green: 20, Blue: 20
  // R,G,B values must be between 0 - 255
  background(100,20,20);
  circle(width/2,height/2,300);
}

// this function will be triggered whenever the user clicks on mouse or touchpad
function mousePressed() {
  // Increase the size of the circle whenever the user clicks on mouse or touchpad
}
```


---
src: ./pages/break.md
hide: false
---


---
layout: center
class: text-center py-50
---

# Download The CheatSheet

<img h-100 m-auto src='/cheatsheet.png' />

[Download The CheatSheet 🔗](Learn p5.js_ Interaction Cheatsheet _ Codecademy.pdf)


---
src: ./pages/assignment.md
hide: false
---