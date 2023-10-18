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

<Toc :columns="2"/>



---
image: /imageV.jpg
layout: image-left
---


# Wrap-up (Summary)

Things we learn about P5JS programming language.
- Cartesian Coordinate System (How canvas positioning works)
- Structure (Built-in functions (setup, draw) / inline functions (createWindow, background))
- Drawing simple shapes (circle)



---
layout: image
image: /imageH.jpg
class: text-center py-50
---

# Coordinate System

Top left corner of the the canvas is the starting point of x and y coordinates

-> There will be coordinate system image


---
layout: image
image: /imageH.jpg
class: text-left
---

# Built-in Functions
```js {0|1,4|6,10|3|6|6,10|7|8|9|10|6|7|8|9|10|6|7|8|9|10|6|7|8|9|10} {lines:true, startLine:1} 
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
src: ./pages/break.md
hide: false
---



---
layout: section
class: text-center text-yellow 
---

# *"First, solve the problem.*
# *Then, write the code."*
<div pt-10 text-gray>John Johnson</div>

<img class='bgCover' src='/grad-bg3.jpg'/>


---
src: ./pages/assignment.md
hide: false
---